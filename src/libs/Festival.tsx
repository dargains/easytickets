import { apiUrl } from "@/helpers/functions";
import { notFound } from "next/navigation";

const getFestivals = async () => {
  const response = await fetch(`${apiUrl}/api/festivals`, {
    cache: "no-cache",
  });
  const { data } = await response.json();
  return data;
};

const getFestivalDetails = async (festivalId: string) => {
  const response = await fetch(`${apiUrl}/api/festivals/${festivalId}`, {
    cache: "no-cache",
  });
  if (!response.ok) {
    notFound();
  }
  const { data } = await response.json();

  return data;
};

export { getFestivals, getFestivalDetails };
