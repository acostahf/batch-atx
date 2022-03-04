import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { BsArrowRightCircle } from "react-icons/bs";

export default function Home() {
  return (
    <div className="bg-nmr-bg bg-cover bg-no-repeat bg-center ">
      <Head>
        <title>BachATX</title>
        <meta name="description" content="Coming Soon" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className="min-h-screen flex flex-col px-5 md:px-16 justify-start pt-20  align-middle">
        <div className="text-center">
          <Image priority src="/logo.png" width={211} height={196} alt="logo" />
        </div>
        <h1 className="text-center text-2xl md:text-[60px] text-[#5a3d2b] font-extrabold z-10 pb-4 md:pb-10 ">
          Austin, here we come!
        </h1>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          action="/success"
          className="z-10 w-full text-center"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="flex justify-center">
            <div className=" max-w-xl md:max-w-2xl w-full flex justify-center align-middle gap-2 rounded-lg ">
              <input
                name="email"
                type="email"
                required
                className="z-10 bg-white max-w-xl md:max-w-2xl w-full text-ellipsis py-6 px-6 md:px-10 md:py-10 sm:text-lg placeholder:text-[#5a3d2b] rounded-lg outline-none text-xs focus:ring-1 focus:ring-[#62B1C2]"
                placeholder="Leave your email, we'll reach out soon!"
              ></input>
              <button type="submit" className={styles.btn}>
                <BsArrowRightCircle className="w-[24px] h-[24px] md:w-[35px] md:h-[35px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
