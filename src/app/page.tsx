"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaAws, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiTerraform } from "react-icons/si";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import GitHubCalendar from "react-github-calendar";

// Blog Data
const blogs = [
  { title: "Cloud Automation", desc: "Best practices for cloud automation.", link: "/blog/cloud-automation" },
  { title: "DevOps Best Practices", desc: "How to scale DevOps effectively.", link: "/blog/devops-best-practices" },
  { title: "Kubernetes Security", desc: "Security challenges in Kubernetes.", link: "/blog/kubernetes-security" },
];

export default function Home() {
  const [loading, setLoading] = useState(true);
  const blogControls = useAnimation();

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  useEffect(() => {
    async function animateBlogs() {
      let index = 0;
      while (true) {
        await blogControls.start({ x: `-${index * 33.3}%`, transition: { duration: 1 } });
        await new Promise((resolve) => setTimeout(resolve, 2500));

        index = (index + 1) % blogs.length; // Loop through indexes correctly in a rightward direction
      }
    }
    animateBlogs();
  }, [blogControls]);

  if (loading) {
    return (
      <motion.div
        className="h-screen flex items-center justify-center bg-black text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.h1
          className="text-5xl font-bold"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          Loading...
        </motion.h1>
      </motion.div>
    );
  }

  return (
    <>
      <Head>
        <title>Souvik | DevOps Engineer</title>
      </Head>

      {/* Navbar */}
      <nav className="w-full fixed top-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4 flex justify-center space-x-6 z-50">
        <Link href="/" className="hover:text-blue-400">Home</Link>
        <Link href="/about" className="hover:text-blue-400">About</Link>
        <Link href="/resume" className="hover:text-blue-400">Resume</Link>
      </nav>

      {/* Hero Section */}
      {/* <div className="relative min-h-screen bg-gradient-to-b from-blue-500 to-white flex flex-col md:flex-row items-center justify-center text-white p-10 gap-10">
        <motion.div
          className="text-center md:text-left md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl font-extrabold mb-4">Souvik</h1>
          <p className="text-xl">DevOps Engineer | 3 Years Experience</p>
          <div className="flex space-x-4 mt-4 justify-center md:justify-start">
            <FaAws className="text-yellow-500 text-5xl animate-pulse" />
            <SiTerraform className="text-purple-500 text-5xl animate-bounce" />
          </div>
        </motion.div>
        <motion.div
          className="w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-lg"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <Image src="/souvik.png" alt="Souvik" width={320} height={320} />
        </motion.div>
      </div> */}



<div className="relative min-h-screen bg-gradient-to-b from-blue-500 to-white flex flex-col md:flex-row items-center justify-center text-white p-10 gap-10">
  {/* Text Section */}
  <motion.div
    className="text-center md:text-left md:w-1/2"
    initial={{ opacity: 0, x: -30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 2, ease: "easeOut" }}
  >
    <motion.h1
      className="text-6xl font-extrabold mb-4 relative inline-block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3.2, ease: "easeOut" }}
    >
      {Array.from("Souvik").map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.h1>

    {/* Expanding Line Animation */}
    <motion.div
      className="absolute left-0 top-full h-1 bg-gradient-to-r from-white via-white to-blue-500"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 3.5, ease: "easeOut" }}
      style={{ height: "4px" }}
    />

    <p className="text-xl text-gray-100 mt-2">DevOps Engineer | 3 Years Experience</p>

    {/* Animated Icons (Restored Original Animations) */}
    <div className="flex space-x-4 mt-4 justify-center md:justify-start">
      {/* AWS Logo (Restored Glow) */}
      <FaAws className="text-yellow-500 text-5xl animate-pulse" />

      {/* Terraform Logo (Restored Bounce) */}
      <SiTerraform className="text-purple-500 text-5xl animate-bounce" />
    </div>
  </motion.div>

  {/* Image Section with Surrounding Line */}
  <motion.div
    className="relative w-80 h-80 rounded-xl overflow-hidden border-4 border-violet shadow-lg"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
    whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(255, 255, 255, 0.3)" }}
  >
    <Image src="/souvik.png" alt="Souvik" width={320} height={320} className="object-cover" />

    {/* Wrapping Line Effect */}
    <motion.div
      className="absolute top-0 left-0 w-0 h-0 border-t-4 border-l-4 border-violet rounded-tl-lg"
      initial={{ width: 0, height: 0 }}
      animate={{ width: "100%", height: "100%" }}
      transition={{ duration: 3.5, ease: "easeOut" }}
    />
    <motion.div
      className="absolute bottom-0 right-0 w-0 h-0 border-b-4 border-r-4 border-blue-500 rounded-br-lg"
      initial={{ width: 0, height: 0 }}
      animate={{ width: "100%", height: "100%" }}
      transition={{ duration: 3.5, ease: "easeOut", delay: 1 }}
    />
  </motion.div>
</div>







      {/* GitHub Contributions Section */}
      <div className="p-10 text-center bg-gray-900 text-white">
        <h2 className="text-4xl font-bold mb-6">GitHub Contributions</h2>
        <div className="flex justify-center">
          <GitHubCalendar username="slancerk" colorScheme="dark" />
        </div>
      </div>

      {/* Updated Project Section with different colors */}
      <div className="p-10 bg-gray-800 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {["Project A", "Project B", "Project C"].map((title, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 border border-gray-700 ${
                index % 2 === 0 ? "bg-blue-900" : "bg-green-900"
              }`}
              whileHover={{ scale: 1.1 }}
            >
              <h3 className="text-xl font-bold text-yellow-300">{title}</h3>
              <p className="mt-2 text-gray-300">Detailed project description...</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Blog Section - Corrected Swiping Logic */}
      <div className="relative bg-black text-white py-20 px-10 overflow-hidden">
        <h2 className="text-4xl font-bold text-center mb-6">Latest Blog</h2>
        <motion.div
          className="flex space-x-6"
          animate={blogControls}
          style={{ display: "flex", width: `${blogs.length * 100}%` }}
        >
          {blogs.map((blog, index) => (
            <div key={index} className="w-1/3 flex-shrink-0 p-6">
              <div className="bg-gray-800 text-white rounded-lg shadow-lg p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-blue-400">{blog.title}</h3>
                <p className="mt-2 text-gray-300">{blog.desc}</p>
                <Link href={blog.link} className="text-blue-500 hover:underline mt-4 inline-block">
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white p-6 flex justify-center space-x-6">
        {[
          { icon: <FaGithub size={30} />, link: "https://github.com/slancerk" },
          { icon: <FaLinkedin size={30} />, link: "https://linkedin.com/in/yourlinkedin" },
          { icon: <FaTwitter size={30} />, link: "https://twitter.com/yourtwitter" },
        ].map((item, index) => (
          <Link key={index} href={item.link} target="_blank" className="hover:text-blue-400">
            {item.icon}
          </Link>
        ))}
      </footer>
    </>
  );
}
