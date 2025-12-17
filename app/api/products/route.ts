// app/api/products/route.ts (Serverless Runtime)
export const runtime = 'nodejs'; // Serverless runtime

export async function GET() {
  // Fetching data from the external API with cache: 'no-store' to avoid caching
  const res = await fetch("https://dummyjson.com/products?limit=30", {
    cache: 'no-store', // Disable caching for fresh data
  });

  // If the response is not successful, return a 500 error
  if (!res.ok) {
    return new Response("Failed to fetch products", { status: 500 });
  }

  const data = await res.json(); // Parse the response

  // Return the products data as JSON
  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
