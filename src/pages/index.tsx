import { useState } from 'react';
import { Github, Linkedin, Mail, Send, Menu, X, Code, Eye } from 'lucide-react';
// NEW: Import TypeAnimation for the Hero section
import { TypeAnimation } from 'react-type-animation';

// --- Header Component ---
// This component shows the navigation at the top of the page.
// It uses `useState` to toggle the mobile menu.
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        {/* Logo/Name */}
        <a href="#" className="text-2xl font-bold text-gray-900">
          latticeGhost
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden space-x-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-700 transition-colors hover:text-blue-600"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`fixed inset-x-0 top-16 z-40 bg-white shadow-xl transition-transform duration-300 md:hidden ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col space-y-4 p-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

// --- Hero Component ---
// This component is the first thing people see.
const Hero = () => {
  return (
    <section 
      id="home" 
      className="container mx-auto flex h-[calc(100vh-4rem)] max-w-5xl items-center px-4 bg-gray-50/50 
                 [background-image:radial-gradient(ellipse_at_center,_var(--tw-color-white)_0%,_var(--tw-color-gray-50)_50%,_var(--tw-color-gray-100)_100%),_repeating-linear-gradient(to_right,_var(--tw-color-gray-200)_1px,_transparent_1px),_repeating-linear-gradient(to_bottom,_var(--tw-color-gray-200)_1px,_transparent_1px)] 
                 [background-size:10px_10px,100%_100%] [background-position:0_0,0_0,0_0]"
    >
      <div className="flex flex-col items-start gap-4">
        <p className="text-xl font-medium text-blue-600">Hi, I am</p>
        <h1 className="text-6xl font-extrabold tracking-tight text-gray-900 sm:text-7xl">
          Dib
        </h1>
        
        {/* NEW: Typing Animation */}
        <h2 className="min-h-[6rem] text-4xl font-extrabold tracking-tight text-gray-700 sm:text-5xl md:min-h-[4rem]">
          <TypeAnimation
            sequence={[
              'I build full-stack web applications.',
              2000, // Wait 2 seconds
              'I craft solutions with Next.js & TS.',
              2000,
              'I design clean user experiences.',
              2000,
            ]}
            wrapper="span"
            speed={50} // Typing speed
            repeat={Infinity}
          />
        </h2>

        <p className="max-w-xl text-lg text-gray-500">
          I'm a full-stack developer focused on creating smooth, scalable, and user-friendly digital experiences.
        </p>
        <a
          href="#projects"
          className="mt-6 flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-lg font-medium text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
        >
          View My Work
          <Send size={20} />
        </a>
      </div>
    </section>
  );
};

// --- Project Data ---
// This is the data source for all your projects.
const myProjects = [
  {
    title: 'Code Snippet Manager',
    description:
      'A comprehensive platform built with Next.js to manage, categorize, and display code snippets, supporting multiple languages and syntax highlighting.',
    imgUrl: 'https://i.postimg.cc/HsgR6ZVV/csm.png',
    liveUrl: 'https://code-snippet-manager-nu.vercel.app/',
    codeUrl: 'https://github.com/latticeghost/code-snippet-manager',
  },
  {
    title: 'toolsTree',
    description:
      'Discover smart, high-performance utilities for developers, finance, content creation, and more.',
    imgUrl: 'https://i.postimg.cc/Ss3dN2wZ/t-T-img-Url.png',
    liveUrl: 'https://toolstree.vercel.app/',
    codeUrl: 'https://github.com/latticeghost/toolsTree',
  },
  {
    title: 'A Cybersecurity Odyssey',
    description: 'Another portfolio website to showcase my journey in cybersecurity.',
    imgUrl: 'https://i.postimg.cc/s2M336PC/aso.png',
    liveUrl: 'https://sites.google.com/view/a-cyber-odyssey/home'
  },
  {
    title: 'This Portfolio Website',
    description:
      'This very portfolio, built with Next.js, React, and Tailwind CSS to showcase my skills and projects.',
    imgUrl: 'https://i.postimg.cc/Qt3xL0MK/portfolio-img-Url.png',
    liveUrl: 'https://my-portfolio-sigma-ten-44awg46as2.vercel.app/',
    codeUrl: 'https://github.com/latticeghost/my-portfolio',
  },
  {
    title: 'Landing Page',
    description:
      'Describe your third project here. What did you build? What technologies did you use?',
    imgUrl: 'https://i.postimg.cc/Y9MkD0XT/landing-page-img-Url.png',
    liveUrl: 'https://latticeghost.github.io/landing-page/',
    codeUrl: 'https://github.com/latticeghost/landing-page',
  },
];

// --- Project Card Component ---
// This component displays a single project.
// UPDATED: codeUrl is now optional with '?'
type ProjectCardProps = {
  title: string;
  description: string;
  imgUrl: string;
  liveUrl: string;
  codeUrl?: string; 
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imgUrl,
  liveUrl,
  codeUrl,
}) => {
  return (
    // UPDATED: Added 'group' for image hover and transition/scale effects for card
    <div className="group flex flex-col h-full rounded-xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl">
      {/* Image */}
      <div className="relative mb-4 h-48 overflow-hidden rounded-lg">
        <img
          src={imgUrl}
          alt={`Screenshot of ${title}`}
          // UPDATED: Added group-hover:scale-105 for subtle zoom on card hover
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>

      {/* Project Links */}
      <div className="mt-auto flex items-center gap-4">
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700"
        >
          <Eye size={18} />
          View Live
        </a>
        
        {/* CONDITIONAL RENDER: Only show View Code if codeUrl exists */}
        {codeUrl && (
          <a
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-800 shadow-sm transition-colors hover:bg-gray-300"
          >
            <Code size={18} />
            View Code
          </a>
        )}
      </div>
    </div>
  );
};

// --- Projects Component ---
// This component displays all the projects in a grid.
const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="mb-12 text-center text-4xl font-extrabold tracking-tight text-gray-900">
          My Projects
        </h2>
        
        {/* Project Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {myProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imgUrl={project.imgUrl}
              liveUrl={project.liveUrl}
              codeUrl={project.codeUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Contact Component ---
// This component provides a way for visitors to contact you.
// --- Contact Component ---
// This component provides a way for visitors to contact you using FormSubmit.io.
const Contact = () => {
  return (
    <section id="contact" className="bg-gray-50 py-20">
      <div className="container mx-auto max-w-xl px-4 text-center">
        
        {/* NEW: Direct Call-to-Action */}
        <h3 className="mb-2 text-xl font-semibold text-blue-600">
          Considering hiring me?
        </h3>
        
        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900">
          Let's Build Something Great
        </h2>
        <p className="mx-auto mb-8 text-lg text-gray-600">
          Whether you have a question, an opportunity, or just want to say hi, fill out the form below!
        </p>

        {/* FORM IMPLEMENTATION */}
        <form 
          action="YOUR_FORMSUBMIT_ENDPOINT" 
          method="POST" 
          className="mx-auto flex flex-col items-center gap-4"
        >
          {/* Hidden field to redirect back to your portfolio after submission */}
          <input 
            type="hidden" 
            name="_next" 
            value="https://dib-portfolio.vercel.app/" 
          />
          {/* Hidden field to disable CAPTCHA (optional, check FormSubmit docs) */}
          <input 
            type="hidden" 
            name="_captcha" 
            value="false" 
          />

          {/* Name Field */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500/50"
          />

          {/* Email Field */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500/50"
          />

          {/* Message Field */}
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            required
            className="w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500/50"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-8 py-3 text-lg font-medium text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
          >
            Send Message
            <Send size={20} />
          </button>
        </form>
      </div>
    </section>
  );
};

// --- Footer Component ---
// This component is at the bottom of the page.
const Footer = () => {
  return (
    <footer className="bg-gray-900 py-6">
      <div className="container mx-auto flex max-w-5xl flex-col items-center justify-between px-4 text-gray-400 md:flex-row">
        {/* Copyright */}
        <p className="text-sm">
          Built by Dibya Ranjan Sethi | &copy; {new Date().getFullYear()}
        </p>

        {/* Social Links */}
        <div className="mt-4 flex space-x-6 md:mt-0">
          <a
            href="https://github.com/latticeghost"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/dibya-ranjan-sethi-6b23a9247" 
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:chirpyelm@tutamail.com"
            className="transition-colors hover:text-white"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

// --- Main Home Page ---
// This is the main component that Next.js will render.
// It assembles all the other components we built.
export default function Home() {
  return (
    // We use a "Fragment" (<>) to wrap everything.
    <>
      {/* This is our main layout.
        We're using the Inter font family defined in tailwind.config.js (via font-sans)
        and setting the text color.
      */}
      <div className="flex min-h-screen flex-col bg-white font-sans text-gray-900">
        <Header />
        <main className="grow">
          <Hero />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}