import { apiUrl } from "@/helpers/functions";

const getFestivals = async () => {
  const response = await fetch(`${apiUrl}/api/festivals`, { cache: "no-cache" });
  const { data } = await response.json();
  return data;
}

const getFestivalDetails = async (festivalId: string) => {
  const response = await fetch(`${apiUrl}/api/festivals/${festivalId}`, { cache: "no-cache" });
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const { data } = await response.json();

  return data;
};

export { getFestivals, getFestivalDetails }