"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import githubLogoWhite from "public/github-mark/github-mark-white.svg";
import githubLogo from "public/github-mark/github-mark.svg";
import { useEffect, useState } from "react";

export default function Footer() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <footer className="w-full">
      <div className="flex justify-end px-3 py-2">
        <Link
          href="https://github.com/JonRennan"
          target="_blank"
          className="flex"
        >
          <Image
            src={theme == "dark" ? githubLogoWhite : githubLogo}
            alt="Github logo"
            width={24}
            height={24}
          />
        </Link>
      </div>
    </footer>
  );
}
