'use client';

type Props = {};
export default function DynamicBanner({}: Props) {
  return (
    <div className="fixed -top-5 w-full z-10">
      <div className="w-full max-w-xl rounded-t-3xl px-3 mx-auto bg-background/30 backdrop-blur-xl py-7">
        Banner
      </div>
    </div>
  );
}
