import Image from "next/image"
import styles from "./page.module.css"

export default function Home() {
  return (
    <div className={styles.page}>
      <a
        className={styles.primary}
        href="/page1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className={styles.logo}
          src="https://nextjs.org/icons/vercel.svg"
          alt="Vercel logomark"
          width={20}
          height={20}
        />
        Go to search page
      </a>
    </div>
  )
}
