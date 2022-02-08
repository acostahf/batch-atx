import React from "react";
import Image from "next/image";
import Head from "next/head";

const success = () => {
  return (
    <div className="bg-nmr-bg bg-cover bg-no-repeat bg-center ">
      <Head>
        <title>Batch ATX</title>
        <meta name="description" content="Coming Soon" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className="min-h-screen flex flex-col px-5 md:px-16 justify-start pt-20  align-middle">
        <div className="text-center">
          <Image priority src="/logo.png" width={211} height={196} alt="logo" />
        </div>
        <h1 className="text-center text-2xl md:text-[60px] text-[#5a3d2b] font-extrabold z-10 pb-4 md:pb-10 ">
          Successfull!
        </h1>
      </main>
    </div>
  );
};

export default success;
