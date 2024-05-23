
export type Festival = {
  id: number;
  status: "draft" | "published" | "archived";
  sort: null;
  date_created: string;
  date_updated: string;
  name: string;
  date: string;
  location: string;
  image: string;
};

export type HomepageTranslations = {
  id: number;
  homepage_id: number;
  languages_code: string;
  title: string;
  subtitle: string;
}