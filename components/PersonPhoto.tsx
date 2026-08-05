"use client";

import Image from "next/image";
import { useState } from "react";

interface Props {
  src: string;
  name: string;
  size?: number;
}

export default function PersonPhoto({ src, name, size = 120 }: Props) {
  const [errored, setErrored] = useState(false);

  return (
    <div
      className="relative bg-[#E8E8E6] overflow-hidden"
      style={{ width: size, height: size, flexShrink: 0 }}
    >
      {!errored ? (
        <Image
          src={src}
          alt={name}
          fill
          sizes={`${size}px`}
          style={{ objectFit: "cover", objectPosition: "center top" }}
          onError={() => setErrored(true)}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <span className="font-display font-600 text-[#AAAAAA] text-[13px] tracking-[0.04em]">
            {name.split(" ").map(w => w[0]).join("").slice(0, 2)}
          </span>
        </div>
      )}
    </div>
  );
}
