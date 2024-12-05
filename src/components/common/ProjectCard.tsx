import { Card, CardContent } from '@/components/ui/card';
import type { Grant } from '@/context/GrantsContext';
import Image from 'next/image';
import OPLogo from '../../../public/op.svg';
import ClaimButton from '../ClaimButton';

interface ProjectCardProps {
  title?: string;
  projectCount?: number;
  totalAwarded?: number;
  remainingAmount?: number;
  grantIds?: string[];
}

const ProjectCard = ({ grant }: { grant: Grant }) => {
  return (
    <Card className="w-[424px] border-black shadow-none bg-transparent">
      <CardContent className="py-8 px-10 space-y-6">
        <div className="flex items-center justify-between">
          <p>Your project</p>
          <p className="text-lg font-semibold">{grant.title}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
