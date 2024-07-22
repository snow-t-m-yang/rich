'use client';

import { usePathname } from "next/navigation";

type Props = {};
export default function DynamicBanner({}: Props) {
  const pathname = usePathname();

  return (
    <div className="fixed -top-5 w-full z-10">
      <div className="w-full max-w-xl rounded-t-3xl px-3 mx-auto bg-background/30 backdrop-blur-xl py-7">
        <h1>{pathname === "/" ? "Home" : pathname}</h1>
      </div>
    </div>
  );
}
