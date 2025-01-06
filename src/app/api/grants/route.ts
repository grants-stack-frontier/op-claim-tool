import { parseCsvContent } from '@/lib/parseCsvContent';
import { getFile, listFiles } from '@/lib/storage';

export type GrantClaimRow = {
  claimUid: string;
  grantTitle: string;
  grantDescription: string;
};

async function getGrantsFromAllCsvs() {
  console.log('Getting grants from all CSVs');
  const csvFiles = await listFiles();
  const csvContents = await Promise.all(
    csvFiles
      .map((file) => file.name)
      .filter((fileName): fileName is string => !!fileName)
      .map((fileName) => getFile(fileName)),
  );

  console.log('Parsing CSVs');
  const results: GrantClaimRow[] = [];
  for (const csvContent of csvContents) {
    const rows = parseCsvContent(csvContent);
    console.log('Parsed', rows.length, 'rows');
    console.log('Rows:', JSON.stringify(rows));

    results.push(
      ...rows.map((row, index) => {
        return {
          claimUid: row.UUID || '<placeholder>',
          grantTitle: row.Title || '<placeholder>',
          grantDescription: '<placeholder>',
        };
      }),
    );
  }
  return results;
}

export async function GET() {
  const grants = await getGrantsFromAllCsvs();
  return Response.json({
    data: grants,
    success: true,
    message: 'Grants fetched successfully',
  });
}
