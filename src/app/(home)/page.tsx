"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const { data } = useSession();

  return (
    <Image
      src="/banner-home-01.png"
      height={0}
      width={0}
      className="h-auto w-full"
      sizes="100vw"
      alt="Até 55% de desconto esse mês!"
    />
  );
}
