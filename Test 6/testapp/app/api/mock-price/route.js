export async function GET()  {
    return Response.json({
        symbol: "BTC",
        usd: 64123.45,
        ts: new Date().toISOString(),
    });
}