import Link from "next/link";
import { Festival, HomepageTranslations } from "@/types";
import { fetchWrapper } from "@/helpers/cmsrequest";
import { apiUrl } from "@/helpers/functions";
import styles from "./page.module.css";
import FestivalItem from "@/components/FestivalItem/FestivalItem";

const languages_code = "pt-PT";

async function getCopy() {
  const data = await fetchWrapper("/items/homepage_translations");

  return data.find(
    (d: HomepageTranslations) => d.languages_code === languages_code
  );
}

async function getFestivals() {
  const response = await fetch(apiUrl + "/api/festivals?filter");
  const { data } = await response.json();
  return data;
}

export default async function Home() {
  const copy = await getCopy();
  const festivals: Festival[] = await getFestivals();

  return (
    <main className={styles.main}>
      <h1>{copy.title}</h1>
      <h2>{copy.subtitle}</h2>
      <section>
        {festivals.map((festival: Festival) => (
          <FestivalItem key={festival.id} {...festival} />
        ))}
      </section>
      <ul>
        <li>
          <Link href="/user/create">registo</Link>
        </li>
        <li>
          <Link href="/user/details">detalhes</Link>
        </li>
        <li>
          <Link href="/user/login">login</Link>
        </li>
      </ul>
    </main>
  );
}
