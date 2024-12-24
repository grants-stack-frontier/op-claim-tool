export const requireEnvVar = (
  name: string,
  value: string | undefined,
): string => {
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
};
