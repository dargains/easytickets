export const itemStatus = {
  draft: "draft",
  published: "published",
  archived: "archived",
};

export type Status = "draft" | "published" | "archived";

export type User = {
  id?: string;
  first_name?: string;
  last_name?: string;
  email: string;
  password: string;
  avatar?: string;
  role?: "b110cd8b-96ad-40c9-a828-76a31c97772b";
};

export type Festival = {
  id: number;
  status: Status;
  sort: null;
  date_created: string;
  date_updated: string;
  name: string;
  date: string;
  location: string;
  image: {
    id: string;
  };
  goers: Goer[];
};

export type Goer = {
  id: number;
  festivals_id: number;
  directus_users_id: string;
};

export type HomepageTranslations = {
  id: number;
  homepage_id: number;
  languages_code: string;
  title: string;
  subtitle: string;
};
