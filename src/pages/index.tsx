import { useState } from 'react';
// import Head from 'next/head'; // Removed as it's not used in the main component
import { Github, Linkedin, Mail, Send, Menu, X, Code, Eye } from 'lucide-react';

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
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <div className="absolute w-full flex-col items-center space-y-4 bg-white p-4 shadow-md md:hidden">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)} // Close menu on click
              className="block w-full rounded-md p-2 text-center text-gray-700 transition-colors hover:bg-gray-100"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

// --- Hero Component ---
// This is the main intro section.
const Hero = () => {
  return (
    <section
      id="home"
      className="container mx-auto flex max-w-5xl flex-col items-center px-4 py-20 text-center sm:py-32"
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
        Hi, I'm <span className="text-blue-600">Dib</span>
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">
        I build modern, responsive, and fast web applications.
        <br />
        Let's create something amazing together.
      </p>
      {/* Social Links */}
      <div className="mt-10 flex items-center gap-6">
        <a
          href="https://github.com/latticeghost"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 transition-colors hover:text-gray-900"
          aria-label="GitHub"
        >
          <Github size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/dibya-ranjan-sethi-6b23a9247"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 transition-colors hover:text-blue-700"
          aria-label="LinkedIn"
        >
          <Linkedin size={28} />
        </a>
        <a
          href="#contact"
          className="text-gray-500 transition-colors hover:text-blue-600"
          aria-label="Contact"
        >
          <Mail size={28} />
        </a>
      </div>
      {/* Call to Action Button */}
      <a
        href="#contact"
        className="mt-10 rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-sm transition-transform hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Get In Touch
      </a>
    </section>
  );
};

// --- Project Card Component ---
// This is a reusable card for a single project.

// Define a type for the component's props
type ProjectCardProps = {
  title: string;
  description: string;
  imgUrl: string;
  liveUrl: string;
  codeUrl: string;
};

const ProjectCard = ({
  title,
  description,
  imgUrl,
  liveUrl,
  codeUrl,
}: ProjectCardProps) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-[1.02]">
      {/* Placeholder Image */}
      <img
        src={imgUrl}
        alt={title}
        className="h-56 w-full object-cover"
        // Fallback in case the image fails to load
        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
          e.currentTarget.src =
            'https://placehold.co/600x400/e2e8f0/64748b?text=Project+Image';
        }}
      />
      <div className="flex flex-1 flex-col justify-between bg-white p-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
          <p className="mt-3 text-base text-gray-600">{description}</p>
        </div>
        {/* Project Links */}
        <div className="mt-6 flex items-center gap-4">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
          >
            <Eye size={18} />
            View Live
          </a>
          <a
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-300"
          >
            <Code size={18} />
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

// --- Projects Section Component ---
// This section will hold all the project cards.
const Projects = () => {

  const myProjects = [
    {
      title: 'toolsTree',
      description:
        'Discover smart, high-performance utilities for developers, finance, content creation, and more.',
      imgUrl: 'https://i.postimg.cc/Ss3dN2wZ/t-T-img-Url.png',
      liveUrl: 'https://toolstree.vercel.app/',
      codeUrl: 'https://github.com/latticeghost/toolsTree',
    },
    {
      title: 'This Portfolio Website',
      description:
        'This very portfolio, built with Next.js, React, and Tailwind CSS to showcase my skills and projects.',
      imgUrl: 'https://i.postimg.cc/Qt3xL0MK/portfolio-img-Url.png',
      liveUrl: '#',
      codeUrl: '#',
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

  return (
    <section id="projects" className="bg-gray-50 py-20 sm:py-32">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
          My Recent Projects
        </h2>
        <p className="mt-4 text-center text-lg text-gray-600">
          Here are a few projects I've worked on.
        </p>

        {/* Project Grid */}
        <div className="mt-16 grid gap-12 md:grid-cols-2">
          {myProjects.map((project) => (
            <ProjectCard
              key={project.title}
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

// --- Contact Form Component ---
const ContactForm = () => {
  // This is now a standard HTML form that will be handled by FormSubmit.co.

  return (
    <section id="contact" className="py-20 sm:py-32">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Get In Touch
        </h2>
        <p className="mt-4 text-center text-lg text-gray-600">
          Have a project in mind? I'd love to hear from you.
        </p>

        {/* This form now points to FormSubmit.co*/}
        <form
          action="https://formsubmit.co/d68e652cd1bbfd3303e400693ad92f7f" 
          method="POST"
          className="mx-auto mt-16 max-w-lg"
        >
          {/* This hidden input tells FormSubmit where to go after success.
              We're just sending the user back to this page. */}
          <input
            type="hidden"
            name="_next"
            value="https://latticeghost.github.io/landing-page/"
          />
          {/* This disables the CAPTCHA. You can remove this line later if you want. */}
          <input type="hidden" name="_captcha" value="false" />

          <div className="grid grid-cols-1 gap-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="block w-full rounded-md border-gray-300 px-4 py-3 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="block w-full rounded-md border-gray-300 px-4 py-3 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Your Email"
              />
            </div>
            {/* Message Field */}
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                className="block w-full rounded-md border-gray-300 px-4 py-3 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Your Message"
              />
            </div>
          </div>
          {/* Submit Button */}
          <div className="mt-6 text-center">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-8 py-3 text-lg font-semibold text-white shadow-sm transition-transform hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Send Message
              <Send size={20} />
            </button>
          </div>
          {/* Removed the {status} message as FormSubmit handles the response */}
        </form>
      </div>
    </section>
  );
};

// --- Footer Component ---
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto flex max-w-5xl flex-col items-center justify-between px-4 py-8 sm:flex-row">
        <p>
          &copy; {new Date().getFullYear()} latticeGhost. All rights reserved.
        </p>
        {/* Social Links in Footer */}
        <div className="mt-4 flex items-center gap-6 sm:mt-0">
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
          <ContactForm />
        </main>
        <Footer />
      </div>
    </>
  );
}

