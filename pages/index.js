import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { BsArrowRightCircle } from "react-icons/bs";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Batch ATX</title>
        <meta name="description" content="Coming Soon" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className={styles.main}>
        <div>
          <Image
            priority
            className={styles.img}
            src="/bg.png"
            alt="bg image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>

        <Image priority src="/logo.png" width={211} height={196} />
        <h1 className={styles.heading}>Austin, here we come!</h1>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className={styles.form}
        >
          <input
            id="email"
            type="email"
            required
            className={styles.email}
            placeholder="Leave your email, you’ll be the first to hear from us..."
          ></input>
          {/* <button className={styles.btn} type="submit">
            <BsArrowRightCircle className={styles.icon} />
          </button> */}
        </form>
      </main>
    </div>
  );
}
