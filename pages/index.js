import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { BsArrowRightCircle } from "react-icons/bs";

export default function Home() {
  return (
    <div className="bg-nmr-bg bg-cover bg-no-repeat bg-center ">
      <Head>
        <title>Batch ATX</title>
        <meta name="description" content="Coming Soon" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className="min-h-screen flex flex-col px-5 md:px-16 justify-start pt-20  align-middle">
        {/* <Image
          priority
          className={styles.img}
          src="/bg.png"
          alt="bg image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        /> */}
        <div className="text-center">
          <Image priority src="/logo.png" width={211} height={196} />
        </div>
        <h1 className="text-center text-2xl md:text-[60px] text-[#5a3d2b] font-extrabold z-10 pb-4 md:pb-10 ">
          Austin, here we come!
        </h1>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="z-10 w-full text-center"
        >
          <div className="flex justify-center">
            <div className=" max-w-xl md:max-w-2xl w-full flex justify-center align-middle gap-2 bg-white rounded-lg px-6 sm:px-10 ">
              <input
                id="email"
                name="email"
                type="email"
                required
                className="z-10 bg-white max-w-xl md:max-w-2xl w-full py-10 text-ellipsis md:py-10 md:text-lg placeholder:text-[#5a3d2b] rounded-lg outline-none text-sm"
                placeholder="Leave your email, you’ll be the first to hear from us..."
              ></input>

              <button type="submit" className={styles.btn}>
                <BsArrowRightCircle className={styles.icon} />
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
