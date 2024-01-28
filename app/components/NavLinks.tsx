"use client";
import Link from "@/node_modules/next/link";
import { useState } from "react";

export default function NavLinks() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const navLinks = [
    {
      title: "صفحه اصلی",
      path: `./`,
    },
    {
      title: "درباره من",
      path: `./about`,
    },
    {
      title: "ویدئو های آموزشی",
      path: `./videos`,
    },
    {
      title: "خدمات",
      path: `./services`,
    },
    {
      title: "تماس با من",
      path: `./contact`,
    },
  ];

  return (
    <div>
      <div className="mobile-menu block md:hidden">
        {!navbarOpen ? (
          <button onClick={() => setNavbarOpen(true)}>open</button>
        ) : (
          <button onClick={() => setNavbarOpen(false)}>close</button>
        )}
      </div>
      <div className="md:flex md:flex-row">
        <ul className="hidden md:flex flex-row">
          {navLinks.map((link, index) => (
            <li key={index} className="md:text-center p-3 font-vazir">
              <Link href={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      {navbarOpen ? (
        <div className="md:hidden mx-24">
          <ul className="flex flex-col text-center">
            {navLinks.map((link, index) => (
              <li
                key={index}
                onClick={() => setNavbarOpen(false)}
                className="py-4 font-vazir"
              >
                <Link href={link.path}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
