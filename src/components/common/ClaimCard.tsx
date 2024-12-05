import type { Grant } from '@/context/GrantsContext';
import useContractClaimAndDelegate from '@/hooks/useContractClaimAndDelegate';
import { useGetClaim } from '@/hooks/useGetClaim';
import { useToast } from '@/hooks/useToast';
import { zodResolver } from '@hookform/resolvers/zod';
import { RiArrowRightUpLine } from '@remixicon/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  ContractFunctionExecutionError,
  ContractFunctionRevertedError,
} from 'viem';
import { z } from 'zod';
import { Button } from '../ui/button';
import { Card, CardContent, CardFooter } from '../ui/card';
import { DialogClose } from '../ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Switch } from '../ui/switch';
import SuccessCheckmark from './images/SuccessCheckmark';

const FormSchema = z
  .object({
    delegateAddress: z.string().optional(),
    enableDelegate: z.boolean(),
  })
  .superRefine(({ enableDelegate, delegateAddress }, refinementCtx) => {
    console.log('Running super refine', { enableDelegate, delegateAddress });
    if (enableDelegate && !/^0x[a-fA-F0-9]{40}$/.test(delegateAddress || '')) {
      return refinementCtx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Invalid Ethereum address',
        path: ['delegateAddress'],
      });
    }
  });

export default function ClaimCard({ grant }: { grant: Grant }) {
  const [step, setStep] = useState(1);
  const router = useRouter();
  const { toast } = useToast();
  const { claim } = useGetClaim({
    uuid: grant.id,
  });
  const { mutateAsync: claimAndDelegate, isPending } =
    useContractClaimAndDelegate();

  // TODO: Enable ENS
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      delegateAddress: '',
      enableDelegate: true,
    },
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    if (!claim) {
      toast({
        title: 'Error',
        description: 'Claim not found',
        variant: 'destructive',
      });
      return;
    }
    try {
      await claimAndDelegate({
        delegateeAddress: data.enableDelegate
          ? (data.delegateAddress as `0x${string}`)
          : undefined,
        claim,
      });
      toast({
        title: 'Success',
        description: 'Rewards claimed successfully',
      });
      setStep(3);
    } catch (error) {
      // @ts-expect-error this error is spreadable
      console.error('Error claiming rewards:', { ...error });
      if (error instanceof ContractFunctionExecutionError) {
        if (error.cause instanceof ContractFunctionRevertedError) {
          toast({
            title: 'Contract error',
            description: error.cause.reason,
            variant: 'destructive',
          });
        }
      } else {
        toast({
          title: 'Contract error',
          description: 'An error occurred while claiming rewards',
          variant: 'destructive',
        });
      }
    }
  }

  function handleClose() {
    console.log('Closing the claim process');
    router.push('/grants');
  }

  const enableDelegate = form.watch('enableDelegate');

  return (
    <Card className="bg-transparent border border-neutral-300 shadow-none p-10 w-[634px]">
      {step === 1 ? (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-6">
              <div className="flex justify-between">
                <p className="text-lg font-semibold">
                  Opt-in to delegate the awarded token
                </p>
                <Switch
                  checked={enableDelegate}
                  onCheckedChange={(newEnableDelegate) => {
                    form.setValue('enableDelegate', newEnableDelegate);
                    form.trigger('enableDelegate');
                  }}
                  color="red"
                />
              </div>
              {enableDelegate ? (
                <>
                  <div className="grid w-full max-w-sm items-center gap-3">
                    <FormField
                      control={form.control}
                      name="delegateAddress"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg font-normal">
                            Enter the delegate's address
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="bg-transparent border-neutral-300"
                              placeholder="0x..."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <p className="text-sm">
                    You can visit{' '}
                    <a
                      className="font-semibold text-black"
                      href="https://vote.optimism.io/delegates"
                      target="_blank"
                      rel="noreferrer"
                    >
                      this page
                    </a>{' '}
                    to find the delegate who should represent for you, or
                    delegate the token to yourself.
                  </p>
                </>
              ) : (
                <></>
              )}
            </CardContent>
            <CardFooter className="py-0">
              <Button
                type="submit"
                variant="destructive"
                disabled={!form.formState.isValid}
              >
                {enableDelegate ? 'Delegate' : 'Claim'}
              </Button>
            </CardFooter>
          </form>
        </Form>
      ) : (
        <>
          <CardContent className="p-0 space-y-6 flex flex-col items-center">
            <p className="text-lg">All done!</p>
            <SuccessCheckmark />
            <DialogClose asChild>
              <Button onClick={handleClose} variant="outline">
                Close
              </Button>
            </DialogClose>
          </CardContent>
        </>
      )}
    </Card>
  );
}
