export async function GET() {
    return Response.json({ text: "Hello from the backend!", time: new Date().toISOString() });
}