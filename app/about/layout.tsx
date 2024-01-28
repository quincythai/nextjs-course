import React from "react";
import styles from "./styles.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About page",
  description: "The about page",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav>About navbar</nav>
      <main className={styles.main}>{children}</main>
    </>
  );
}
