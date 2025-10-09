import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
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
      description: "Real-time neural data visualization with WebGL acceleration.",
      tech: ["React", "Three.js", "D3.js"],
      image: "/assets/henry.png",
      video: "/assets/coin.mp4",
      year: "2025",
    },
        {
      id: 1,
      title: "Neural Interface Dashboard",
      description: "Real-time neural data visualization with WebGL acceleration.",
      tech: ["React", "Three.js", "D3.js"],
      image: "/assets/henry.png",
      video: "/assets/coin.mp4",
      year: "2025",
    },
    {
      id: 2,
      title: "Design System Builder",
      description: "Modular UI framework for rapid prototyping and theming.",
      tech: ["TypeScript", "Tailwind", "Framer Motion"],
      image: "/assets/project2.jpg",
      video: "/assets/project2.mp4",
      year: "2024",
    },
    {
      id: 3,
      title: "Procedural World Engine",
      description: "GPU-driven terrain generation and dynamic weather simulation.",
      tech: ["WebGPU", "Noise", "Physics"],
      image: "/assets/project3.jpg",
      video: "/assets/project3.mp4",
      year: "2025",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-emerald-50 via-white to-teal-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 py-20 px-6 md:px-12 lg:px-24">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-center mb-16 text-gray-900 dark:text-white"
      >
        Featured Projects
      </motion.h1>

      <motion.div
        layout
        className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => {
          const videoRef = useRef<HTMLVideoElement | null>(null);
          const isHovered = hoveredProject === project.id;

          // Pause and reset video on hover out
          useEffect(() => {
            if (!isHovered && videoRef.current) {
              videoRef.current.pause();
              videoRef.current.currentTime = 0;
            }
          }, [isHovered]);

          return (
            <motion.div
              key={project.id}
              onHoverStart={() => {
                setHoveredProject(project.id);
                if (videoRef.current) videoRef.current.play();
              }}
              onHoverEnd={() => {
                setHoveredProject(null);
                if (videoRef.current) {
                  videoRef.current.pause();
                  videoRef.current.currentTime = 0;
                }
              }}
              className="relative rounded-3xl overflow-hidden shadow-lg border border-emerald-200/40 dark:border-teal-800/40 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md cursor-default group transition-all duration-500 hover:shadow-emerald-300/40 dark:hover:shadow-teal-700/40"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative aspect-video overflow-hidden">
                {/* Hover video */}
                {project.video && (
                  <video
                    ref={videoRef}
                    src={project.video}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    controls={false}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                      isHovered ? "opacity-100 scale-105" : "opacity-0 scale-100"
                    }`}
                  />
                )}

                {/* Fallback image */}
                <LazyImage
                  src={project.image}
                  alt={project.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                    isHovered ? "opacity-0 scale-110" : "opacity-100 scale-100"
                  }`}
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-700" />

                {/* Icon (non-clickable, purely visual) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-emerald-500/50"
                  >
                    {isHovered ? <Pause size={24} /> : <Play size={24} />}
                  </motion.div>
                </div>
              </div>

              {/* Card content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {project.year}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Projects;
