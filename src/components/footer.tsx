"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <footer className="flex w-full justify-center py-2">
      <div className="flex w-full justify-end px-3 md:max-w-xl">
        <Link
          href="https://github.com/JonRennan"
          target="_blank"
          className="flex"
        >
          <Image
            src={
              theme == "dark"
                ? "/github-mark/github-mark-white.svg"
                : "/github-mark/github-mark.svg"
            }
            alt="Github logo"
            width={24}
            height={24}
          />
        </Link>
      </div>
    </footer>
  );
}
