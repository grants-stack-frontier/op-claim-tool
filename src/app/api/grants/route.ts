import { FEATURES } from '../../../../config/features';

export const dynamic = 'force-dynamic';

export type GrantClaimRow = {
  claimUid: string;
  grantTitle: string;
  grantDescription: string;
};

export async function GET() {
  const apiKey = process.env.GOOGLE_SHEETS_API_KEY;
  if (!apiKey) {
    return Response.json({
      success: false,
      message: 'API key is not set',
    });
  }
  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${FEATURES.GOOGLE_SHEETS_ID}/values/Sheet1`,
    {
      headers: {
        'X-goog-api-key': apiKey,
      },
    },
  );
  const result = await response.json();
  const [header, ...rows] = result.values as string[][];
  const grants = rows
    .map((row) => {
      return row.reduce(
        (acc, curr, index) => {
          acc[header[index].toLowerCase()] = curr;
          return acc;
        },
        {} as Record<string, string>,
      );
    })
    .filter((grant) => grant.uuid)
    .map((grant) => {
      return {
        claimUid: grant.uuid,
        grantTitle: grant.title || '<placeholder title>',
        grantDescription: grant.description || '<placeholder description>',
      };
    });
  return Response.json({
    data: grants,
    success: true,
    message: 'Grants fetched successfully',
  });
}
