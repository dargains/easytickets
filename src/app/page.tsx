import styles from "./page.module.css";
import Link from "next/link";
import { Festival, HomepageTranslations } from "@/types";
import { fetchWrapper } from "@/helpers/fetch";

const languages_code = "pt-PT";

async function getCopy() {
  const data = await fetchWrapper("/items/homepage_translations");

  return data.find((d: HomepageTranslations) => d.languages_code === languages_code);
}

async function getFestivals() {
  return await fetchWrapper('/items/festivals');
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
            <Link href="/festival-details">Detalhes do Festival</Link>
          </div>
        ))}
      </section>
    </main>
  );
}
