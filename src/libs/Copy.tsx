import { apiUrl } from "@/helpers/functions";
import { HomepageTranslations } from "@/types";

const languages_code = "pt-PT";

const getCopy = async (page: string) => {
  const response = await fetch(`${apiUrl}/api/copy/${page}`, { cache: "no-cache" });
  const { data } = await response.json();

  const result = data.find(
    (d: HomepageTranslations) => d.languages_code === languages_code
  );

  return result
}

export { getCopy };