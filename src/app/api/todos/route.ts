import { constants } from "@lib/constants";

const { API_URL } = constants;

export async function GET() {
  const res = await fetch(`${API_URL}/todos`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  return Response.json({ data });
}
