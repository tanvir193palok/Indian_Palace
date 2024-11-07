"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialData } from "@/data";
import Link from "next/link";
import { useState } from "react";

const Socials = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="flex gap-x-[14px] lg:gap-x-[10px]">
      {socialData.map((item, idx) => {
        const isHovered = hovered === idx;
        return (
          <Link
            className="border border-white  rounded-full w-[45px] h-[45px] flex justify-center items-center text-sm transition-all"
            href={item.href}
            key={idx}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            style={{
              borderColor: isHovered ? item.color : "rgba(255, 255, 255, 0.5)",
              background: isHovered && "white",
            }}
          >
            <FontAwesomeIcon
              icon={item.icon}
              size="2x"
              style={{ color: isHovered ? item.color : "inherit" }}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
