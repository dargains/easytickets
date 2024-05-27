import Link from "next/link";
import { Festival, HomepageTranslations } from "@/types";
import { fetchWrapper } from "@/helpers/cmsrequest";
import { apiUrl } from "@/helpers/functions";
import styles from "./page.module.css";

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
          <div key={festival.id} className={styles.festivalItem}>
            <h3>{festival.name}</h3>
            <p>{festival.date}</p>
            <Link href={`/festival-details/${festival.id}`}>
              Detalhes do Festival
            </Link>
            <button>Eu bou, crl!</button>
          </div>
        ))}
      </section>
      <div>
        <Link href="/user/create">registo</Link>
        <Link href="/user/details">detalhes</Link>
        <Link href="/user/login">login</Link>
      </div>
    </main>
  );
}
