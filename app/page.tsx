import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>hello world</h1>
      <Link href="/about">Link to about</Link>
    </main>
  );
}
