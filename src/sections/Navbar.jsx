import React, { useEffect, useRef, useState } from "react";
import { socials } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-scroll";

const Navbar = () => {
  const navRef = useRef(null);
  const linksRef = useRef([]);
  const contactRef = useRef(null);
  const tl = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(true);

  useGSAP(() => {
    gsap.set(navRef.current, { xPercent: 100 });
    gsap.set([linksRef.current, contactRef.current], {
      autoAlpha: 0,
      x: -20,
    });

    tl.current = gsap
      .timeline({ paused: true })
      .to(navRef.current, {
        xPercent: 0,
        duration: 1,
        ease: "power3.out",
      })
      .to(
        linksRef.current,
        {
          autoAlpha: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
        },
        "<"
      )
      .to(
        contactRef.current,
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "<+0.2"
      );
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowLogo(currentScrollY <= lastScrollY || currentScrollY < 10);
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    if (isOpen) {
      tl.current.reverse();
    } else {
      tl.current.play();
    }
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Overlay Navbar */}
      <nav
        ref={navRef}
        className="fixed z-50 flex flex-col justify-between w-full h-full px-10 uppercase bg-black text-white/80 py-28 gap-y-10 md:w-1/2 md:left-1/2"
      >
        <div className="flex flex-col text-5xl gap-y-2 md:text-6xl lg:text-8xl">
          {["home", "services", "about", "work", "contact"].map(
            (section, index) => (
              <div key={index} ref={(el) => (linksRef.current[index] = el)}>
                <Link
                  className="transition-all duration-300 cursor-pointer hover:text-white"
                  to={`${section}`}
                  smooth
                  offset={0}
                  duration={2000}
                >
                  {section}
                </Link>
              </div>
            )
          )}
        </div>

        {/* Contact + Socials */}
        <div
          ref={contactRef}
          className="flex flex-col flex-wrap justify-between gap-8 md:flex-row"
        >
          <div className="font-light">
            <p className="tracking-wider text-white/50">E-mail</p>
            <p className="text-xl tracking-widest lowercase text-pretty">
              avmariselvambiz@gmailcom
            </p>
          </div>

          <div className="font-light">
            <p className="tracking-wider text-white/50">Social Media</p>
            <div className="flex flex-col flex-wrap md:flex-row gap-x-2">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-white/60 hover:text-white transition-all duration-300"
                >
                  <span className="text-2xl md:text-3xl group-hover:scale-110 transition-transform duration-300">
                    <social.icon />
                  </span>
                  <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-sm tracking-widest uppercase">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Logo button (instead of burger) */}
      <div
        className={`fixed z-50 flex items-center justify-center transition-all duration-500 top-4 right-10 cursor-pointer ${
          showLogo ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      >
        <img
          src="/logo/favicon.svg"
          alt="Logo"
          className={`w-12 h-12 md:w-16 md:h-16 transition-transform duration-500 ${
            isOpen ? "scale-110 rotate-12" : "hover:scale-110"
          }`}
        />
      </div>
    </>
  );
};

export default Navbar;
