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
        <h1 className="text-[60px] text-[#5a3d2b] font-extrabold z-10 ">
          Austin, here we come!
        </h1>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="z-10 w-full max-w-2xl"
        >
          <input
            id="email"
            name="email"
            type="email"
            required
            className="z-10 bg-white w-full px-10 py-5 rounded-lg outline-none"
            placeholder="Leave your email, you’ll be the first to hear from us..."
          />
          {/* <input className={styles.btn} type="submit" /> */}
          {/* <BsArrowRightCircle className={styles.icon} /> */}
        </form>
      </main>
    </div>
  );
}
