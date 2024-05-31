import { apiUrl } from "@/helpers/functions";

const getGoerDetails = async (goerId: string) => {
  const response = await fetch(`${apiUrl}/api/users/${goerId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const { data } = await response.json();
  return data;
}

export { getGoerDetails };