export const dynamic = 'force-dynamic';

export type GrantRow = {
  uuid: string;
  title: string;
  description: string;
};

export async function GET() {
  const apiKey = process.env.GOOGLE_SHEETS_API_KEY;
  const sheetId = process.env.GOOGLE_SHEETS_ID;

  if (!apiKey) {
    return Response.json({
      success: false,
      message: 'API key is not set',
    });
  }
  if (!sheetId) {
    return Response.json({
      success: false,
      message: 'Sheet ID is not set',
    });
  }

  // Fetch sheet names
  const sheetNamesResponse = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}?&fields=sheets.properties`,
    {
      headers: {
        'X-goog-api-key': apiKey,
      },
    },
  );
  const sheetNames = await sheetNamesResponse.json();
  const title: string = sheetNames?.sheets[0]?.properties?.title;

  if (!title) {
    return Response.json({
      success: false,
      message: 'Sheet title is not set',
    });
  }

  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${title}`,
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
        uuid: grant.uuid,
        title: grant.title,
        description: grant.description || '<placeholder description>',
      };
    });
  return Response.json({
    data: grants,
    success: true,
    message: 'Grants fetched successfully',
  });
}
