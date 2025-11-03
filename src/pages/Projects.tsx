import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import LazyImage from "../components/LazyImage";

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  video?: string;
  year: string;
}

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Neural Interface Dashboard",
      description:
        "Real-time neural data visualization with WebGL acceleration.",
      tech: ["Video", "Motion Graphics", "After Effects"],
      image: "/assets/henry.png",
      video: "/assets/coin.mp4",
      year: "2025",
    },
    {
      id: 2,
      title: "Design System Builder",
      description: "Modular UI framework for rapid prototyping and theming.",
      tech: ["Video", "Motion Graphics", "After Effects"],
      image: "/assets/henry.png",
      video: "/assets/coin.mp4",
      year: "2024",
    },
    {
      id: 3,
      title: "Procedural World Engine",
      description: "GPU-driven terrain generation and dynamic weather simulation.",
      tech: ["Video", "Motion Graphics", "After Effects"],
      image: "/assets/henry.png",
      video: "/assets/coin.mp4",
      year: "2025",
    },
    {
      id: 4,
      title: "Brand Identity Design",
      description:
        "Minimalist visual identity and logo design for a SaaS brand.",
      tech: ["Image", "Motion Graphics", "After Effects"],
      image: "/assets/henry.png",
      year: "2023",
    },
  ];

  const videoProjects = projects.filter((p) => p.video);
  const imageProjects = projects.filter((p) => !p.video);

  const renderCard = (project: Project, index: number) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const isHovered = hoveredProject === project.id;

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-50, 50], [10, -10]);
    const rotateY = useTransform(x, [-50, 50], [-10, 10]);

    useEffect(() => {
      if (videoRef.current) {
        if (isHovered && project.video) {
          videoRef.current.currentTime = 0;
          videoRef.current.play().catch(() => {});
        } else {
          videoRef.current.pause();
        }
      }
    }, [isHovered]);

    return (
      <motion.div
        key={project.id}
        onMouseEnter={() => setHoveredProject(project.id)}
        onMouseLeave={() => setHoveredProject(null)}
        style={{ rotateX, rotateY }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const offsetX = e.clientX - rect.left - rect.width / 2;
          const offsetY = e.clientY - rect.top - rect.height / 2;
          x.set(offsetX);
          y.set(offsetY);
        }}
        className="relative group rounded-3xl overflow-hidden border border-emerald-200/40 dark:border-teal-800/40 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl shadow-lg hover:shadow-emerald-400/40 dark:hover:shadow-teal-700/40 transition-all duration-500 hover:scale-[1.04]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        {/* Media Section */}
        <div className="relative aspect-video overflow-hidden rounded-t-3xl">
          {/* Fallback Image */}
          <LazyImage
            src={project.image}
            alt={project.title}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              isHovered && project.video ? "opacity-0 scale-110" : "opacity-100 scale-100"
            }`}
          />

          {/* Video for video projects */}
          {project.video && (
            <video
              ref={videoRef}
              src={project.video}
              muted
              loop
              playsInline
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                isHovered ? "opacity-100 scale-105" : "opacity-0 scale-100"
              }`}
            />
          )}

          {/* Elegant overlay */}
          <motion.div
            initial={{ opacity: 0.5 }}
            animate={{
              opacity: isHovered ? 0.25 : 0.5,
              background:
                "linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.2), transparent)",
            }}
            className="absolute inset-0 transition-all duration-700"
          />
        </div>

        {/* Info Section */}
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-teal-400 transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tag) => (
              <motion.span
                key={tag}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#10B981",
                  color: "#fff",
                }}
                className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 transition-colors"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
            <span>{project.year}</span>
            {project.video ? (
              <span className="opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                Hover to Preview
              </span>
            ) : (
              <span className="opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                Hover to View
              </span>
            )}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="min-h-screen w-full bg-gradient-to-b from-emerald-50 via-white to-teal-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 py-20 px-6 md:px-12 lg:px-24">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-center mb-16 text-gray-900 dark:text-white tracking-tight"
      >
        Featured Projects
      </motion.h1>

      {/* Unified Grid (videos + images together) */}
      <motion.div
        layout
        className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      >
        {[...videoProjects, ...imageProjects].map((project, i) =>
          renderCard(project, i)
        )}
      </motion.div>
    </section>
  );
};

export default Projects;
