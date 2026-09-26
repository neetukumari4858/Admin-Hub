import type { ApiUsers } from "./records";

export async function getUsers(): Promise<ApiUsers> {
  const response = await fetch("https://dummyjson.com/users?limit=30");
  if (!response.ok) {
    throw new Error("Could not load users. Check your connection and try again.");
  }
  return response.json();
}
