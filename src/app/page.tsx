import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <article className="z-20 mx-auto mt-20 flex w-full max-w-[550px] flex-col px-4 sm:w-1/2 sm:px-0">
      <div className="flex w-full items-start justify-between">
        <h1 className="text-3xl font-bold tracking-widest text-white">
          T O D O
        </h1>
        <button>
          <Image
            src="/icon-sun.svg"
            alt="Switch to Light mode"
            width={20}
            height={20}
          />
        </button>
      </div>
      <div>

      </div>
    </article>
  );
}
