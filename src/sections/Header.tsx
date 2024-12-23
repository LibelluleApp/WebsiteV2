"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Linkedin, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  {
    href: "/",
    label: "Découvrir Libellule",
    color: "text-blue-700",
    indicatorColor: "bg-blue-700",
  },
  {
    href: "/don",
    label: "Nous soutenir",
    color: "text-blue-900",
    indicatorColor: "bg-blue-900",
  },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/libelluleapp/",
    Icon: Instagram,
  },
  {
    href: "https://www.linkedin.com/company/libelluleapp/",
    Icon: Linkedin,
  },
  {
    href: "https://www.youtube.com/@LibelluleApp",
    Icon: Youtube,
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLUListElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
    color: "bg-blue-700",
    opacity: 0,
  });

  const isMainPage = navLinks.some((link) => link.href === pathname);

  useEffect(() => {
    const updateIndicator = () => {
      const navElement = navRef.current;
      if (!navElement) return;

      if (!isMainPage) {
        setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
        return;
      }

      const activeLink = navElement.querySelector(`a[href="${pathname}"]`);
      if (activeLink) {
        const { offsetLeft, offsetWidth } = activeLink as HTMLElement;
        const activeNavLink = navLinks.find((link) => link.href === pathname);

        setIndicatorStyle({
          left: offsetLeft,
          width: offsetWidth,
          color: activeNavLink?.indicatorColor || "bg-blue-700",
          opacity: 1,
        });
      }
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);

    return () => {
      window.removeEventListener("resize", updateIndicator);
    };
  }, [pathname, isMainPage]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-30">
      {/* Version desktop */}
      <div className="hidden md:flex justify-between items-center px-8 bg-white shadow">
        <motion.div whileTap={{ scale: 0.8 }}>
          <Link href="/" className="flex items-center gap-[9px]">
            <Image src="/logo.svg" alt="Logo" width={20} height={30} />
            <h1 className="text-2xl font-black font-ubuntu text-blue-700 tracking-tight-custom">
              Libellule
            </h1>
          </Link>
        </motion.div>
        <nav className="relative">
          {/* Indicateur animé */}
          <motion.div
            className={`absolute bottom-0 h-0.5 ${indicatorStyle.color}`}
            animate={{
              left: indicatorStyle.left,
              width: indicatorStyle.width,
              opacity: indicatorStyle.opacity,
            }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
          {/* Liens de navigation desktop */}
          <ul ref={navRef} className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.href} className="py-4">
                <Link
                  href={link.href}
                  className={`relative font-medium ${link.color} ${
                    pathname === link.href ? "active" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-4">
          {socialLinks.map(({ href, Icon }) => (
            <motion.div key={href} whileTap={{ scale: 0.8 }}>
              <Link href={href} target="_blank">
                <Icon strokeWidth={1.75} className="text-blue-700" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Version mobile */}
      <div className="md:hidden relative">
        <div className="flex justify-between items-center px-8 py-4 z-50">
          <Link href="/" className="flex items-center gap-[9px] z-50">
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
                {socialLinks.map(({ href, Icon }) => (
                  <motion.div
                    key={href}
                    whileTap={{ scale: 0.8 }}
                    exit={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 0.3 }}
                  >
                    <Link href={href} target="_blank" onClick={toggleMenu}>
                      <Icon strokeWidth={1.75} className="text-blue-700" />
                    </Link>
                  </motion.div>
                ))}
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
