"use client";

import { useAtomValue } from "jotai";
import { viewAtom } from "../atoms";

type Props = {};
export default function DynamicBanner({}: Props) {
  const view = useAtomValue(viewAtom);

  return (
    <>
      {view === "add" && (
        <div className="fixed top-0 w-full z-10">
          <div className="w-full max-w-xl rounded-t-3xl px-3 mx-auto bg-background/30 backdrop-blur-xl py-7">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eum facilis cumque nesciunt ducimus corporis soluta quos inventore in, esse dolorem explicabo voluptate ratione pariatur totam? Tenetur aliquam delectus porro voluptatibus, soluta dolores reprehenderit, eligendi tempora quam molestiae velit iste fugit saepe maiores ea libero fugiat quia, quo id unde dignissimos cum! Itaque quaerat est sunt. Saepe, quas. Quo nulla cumque aliquid ratione at architecto, tempora explicabo error, corrupti debitis iusto veritatis culpa nisi molestias, blanditiis sed reiciendis eaque animi velit voluptatem temporibus laudantium aspernatur itaque dolore! Harum, modi quo odio aut culpa natus asperiores ipsum accusantium minima architecto, rerum, totam placeat nostrum corporis amet provident qui aperiam eos quaerat id? Itaque quaerat possimus omnis praesentium, officiis labore magnam quo sapiente quasi culpa animi blanditiis adipisci mollitia iure illum voluptas repellat temporibus at? Eos eaque odio ad itaque, modi est beatae consequatur nihil dolore impedit nemo praesentium, non distinctio iure aliquid error officiis eveniet labore maiores eligendi tenetur. Accusantium minima, veritatis tempora ut, vel nemo cupiditate omnis dolorem officiis dignissimos, perspiciatis ipsum nihil. Explicabo, consectetur ducimus iste quae, iusto cumque provident veniam ab commodi impedit eligendi repellendus praesentium quod mollitia laboriosam aut nemo. Facilis totam minus iure dolor, aspernatur optio.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
