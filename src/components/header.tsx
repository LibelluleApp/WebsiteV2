"use client";
import Link from "next/link"; // Pour les liens de navigation
import { useState } from "react";
import { Menu, X, Linkedin, Instagram } from "lucide-react"; // Pour les icônes de menu
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const pathname = usePathname();

  return (
    <header className="relative">
      {/* Version desktop */}
      <div className="hidden md:flex justify-between items-center px-8 bg-white shadow">
        <Link href="/" className="flex items-center gap-[9px]">
          <Image src="/logo.svg" alt="Logo" width={20} height={30} />
          <h1 className="text-2xl font-black font-ubuntu text-blue-700 tracking-tight-custom">
            Libellule
          </h1>
        </Link>
        <nav className="md:flex justify-between items-center">
          {/* Liens de navigation desktop */}
          <ul className="flex gap-8">
            <Link href="/" className="relative text-blue-700 font-medium">
              <li className="py-4">
                Découvrir Libellule
                {pathname === "/" ? (
                  <motion.div
                    className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-700"
                    layoutId="underline"
                  />
                ) : null}
              </li>
            </Link>
            <Link href="/don" className="relative text-blue-900 font-medium">
              <li className="py-4">
                Nous soutenir
                {pathname === "/don" ? (
                  <motion.div
                    className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-900"
                    layoutId="underline"
                  />
                ) : null}
              </li>
            </Link>
          </ul>
        </nav>
        <div className="flex gap-4">
          <Link href="https://www.instagram.com/libellule/">
            <Instagram className="text-blue-700" />
          </Link>
          <Link href="https://www.linkedin.com/company/libelluleapp/">
            <Linkedin className="text-blue-700" />
          </Link>
        </div>
      </div>

      {/* Version mobile */}
      <div className="md:hidden relative">
        <div className="flex justify-between items-center px-8 py-4 z-50">
          <Link
            href="/"
            className="flex items-center gap-[9px] z-50"
            onClick={toggleMenu}
          >
            <Image src="/logo.svg" alt="Logo" width={16} height={21} />
            <h1 className="text-xl font-black font-ubuntu text-blue-700 tracking-tight-custom">
              Libellule
            </h1>
          </Link>
          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={toggleMenu}
            className="z-50"
          >
            {isMenuOpen ? (
              <X className="text-blue-700" width={26} height={26} />
            ) : (
              <Menu className="text-blue-700" width={26} height={26} />
            )}
          </motion.button>
        </div>

        {/* Menu mobile (overlay) */}
        <AnimatePresence>
          {isMenuOpen ? (
            <div className="fixed flex items-end justify-between z-50 w-full px-8 py-1">
              <nav className="flex flex-col items-start justify-center gap-4">
                <motion.div
                  exit={{ opacity: 0, y: -10 }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ease: "easeOut", duration: 0.2, delay: 0.1 }}
                >
                  <Link
                    href="/"
                    className="text-blue-700 font-medium"
                    onClick={toggleMenu}
                  >
                    Découvrir Libellule
                  </Link>
                </motion.div>
                <motion.div
                  exit={{ opacity: 0, y: -10 }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ease: "easeOut", duration: 0.2, delay: 0.2 }}
                >
                  <Link
                    href="/don"
                    className="text-blue-900 font-medium"
                    onClick={toggleMenu}
                  >
                    Nous soutenir
                  </Link>
                </motion.div>
              </nav>
              <div className="flex gap-4">
                <motion.div
                  exit={{ opacity: 0 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ ease: "easeOut", duration: 0.3 }}
                >
                  <Link
                    href="https://www.instagram.com/libellule/"
                    onClick={toggleMenu}
                  >
                    <Instagram className="text-blue-700" />
                  </Link>
                </motion.div>
                <motion.div
                  exit={{ opacity: 0 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ ease: "easeOut", duration: 0.3 }}
                >
                  <Link
                    href="https://www.linkedin.com/company/libelluleapp/"
                    onClick={toggleMenu}
                  >
                    <Linkedin className="text-blue-700" />
                  </Link>
                </motion.div>
              </div>
            </div>
          ) : null}
        </AnimatePresence>

        <motion.div
          initial={{ height: "55px" }}
          animate={{ height: isMenuOpen ? "155px" : "55px" }}
          transition={{ type: "spring", bounce: 0.35 }}
          className="absolute top-0 right-0 bg-white shadow w-full z-40"
        ></motion.div>
      </div>
    </header>
  );
}
