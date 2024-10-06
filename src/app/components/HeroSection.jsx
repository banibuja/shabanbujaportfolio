"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0 }} // No delay for the first element
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#86efac] to-[#0f766e]">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Web",
                1000,
                "Web Developer",
                1000,
                "Web Developer",
                1000,
                "Web Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-md">
            &quot;I am Shaban Buja, a web developer with over two years of experience
            in the technology industry. My passion for visual art and technology
            has helped me create successful projects that are both engaging and
            functional. I aim to develop creative solutions that assist brands in
            communicating their messages effectively. Feel free to explore my
            portfolio and contact me for collaboration opportunities!&quot;
          </p>
          <div className="flex flex-wrap items-center justify-center sm:justify-start space-x-0 sm:space-x-4">
  <Link
    href="/#contact"
    className="relative inline-block px-6 py-3 w-full sm:w-fit rounded-full border border-[#86efac] text-white font-semibold uppercase tracking-wider text-sm overflow-hidden bg-transparent transition-all duration-200 ease-in hover:bg-[#86efac] hover:shadow-[0_0_30px_5px_rgba(0,142,236,0.815)] mb-4 sm:mb-0"
  >
    Hire Me
    <span className="absolute inset-0 flex items-center justify-center opacity-0 bg-white box-shadow-[0_0_50px_30px_#fff] skew-x-[-20deg] transition-all duration-500 ease-linear" />
  </Link>

  <Link
    href="/CV.pdf"
    className="relative inline-block px-5 py-2 bg-gradient-to-br from-[#86efac] to-[#0f766e] rounded-full text-white font-semibold transition duration-300 ease-in-out hover:bg-slate-800 group w-full sm:w-fit"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="button" data-tooltip="Size:352kb">
      <div className="button-wrapper relative">
        <div className="text transition-transform duration-300 group-hover:opacity-0 group-hover:translate-y-2">
          Download CV
        </div>

        {/* Icon */}
        <span className="icon absolute inset-0 flex items-center justify-center top-full group-hover:top-0 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
            className="w-6 h-6 text-white"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
            ></path>
          </svg>
        </span>
      </div>
    </div>

    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-20 bg-white text-gray-800 text-sm py-1 px-2 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition duration-300">
      Size:352kb
    </div>
  </Link>
</div>

        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }} 
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
         <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <img
              src="images/download.jfif"
              alt="Hero image"
              className="absolute w-[120%] h-[100%] sm:w-[120%] sm:h-[70%] md:w-[70%] md:h-[60%] lg:w-[140%] lg:h-[100%] right-0 m-auto rounded-full object-cover"
              fill
              sizes="(max-width: 768px) 60vw, (min-width: 769px) 40vw"
            />
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
