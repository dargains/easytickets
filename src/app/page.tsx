import Link from "next/link";
import { getFestivals } from "./libs/Festival";
import { Festival, HomepageTranslations } from "@/types";
import FestivalItem from "@/components/FestivalItem/FestivalItem";
import { fetchWrapper } from "@/helpers/cmsrequest";
import styles from "./page.module.css";

const languages_code = "pt-PT";

async function getCopy() {
  const data = await fetchWrapper("/items/homepage_translations");

  return data.find(
    (d: HomepageTranslations) => d.languages_code === languages_code
  );
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
