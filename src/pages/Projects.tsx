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
  const [loadedVideos, setLoadedVideos] = useState<Record<number, boolean>>({});

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
      id: 2,
      title: "Design System Builder",
      description: "Modular UI framework for rapid prototyping and theming.",
      tech: ["TypeScript", "Tailwind", "Framer Motion"],
      image: "/assets/henry.png",
      video: "/assets/project2.mp4",
      year: "2024",
    },
    {
      id: 3,
      title: "Procedural World Engine",
      description: "GPU-driven terrain generation and dynamic weather simulation.",
      tech: ["WebGPU", "Noise", "Physics"],
      image: "/assets/henry.png",
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

      <motion.div layout className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          const videoRef = useRef<HTMLVideoElement | null>(null);
          const isHovered = hoveredProject === project.id;
          const videoLoaded = loadedVideos[project.id];

          const x = useMotionValue(0);
          const y = useMotionValue(0);
          const rotateX = useTransform(y, [-50, 50], [10, -10]);
          const rotateY = useTransform(x, [-50, 50], [-10, 10]);

          // Pause video when not hovered
          useEffect(() => {
            if (!isHovered && videoRef.current) {
              videoRef.current.pause();
              videoRef.current.currentTime = 0;
            }
          }, [isHovered]);

          return (
            <motion.div
              key={project.id}
              onMouseEnter={() => {
                setHoveredProject(project.id);
                if (!videoLoaded && project.video) {
                  setLoadedVideos((prev) => ({ ...prev, [project.id]: true }));
                }
              }}
              onMouseLeave={() => setHoveredProject(null)}
              onTouchStart={() => {
                setHoveredProject((prev) => (prev === project.id ? null : project.id));
                if (!videoLoaded && project.video) {
                  setLoadedVideos((prev) => ({ ...prev, [project.id]: true }));
                }
              }}
              style={{ rotateX, rotateY }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const offsetX = e.clientX - rect.left - rect.width / 2;
                const offsetY = e.clientY - rect.top - rect.height / 2;
                x.set(offsetX);
                y.set(offsetY);
              }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-emerald-200/30 dark:border-teal-800/30 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md cursor-pointer group transition-all duration-500 hover:shadow-emerald-400/50 dark:hover:shadow-teal-700/50"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative aspect-video overflow-hidden rounded-3xl">
                {/* Video */}
                {project.video && videoLoaded && (
                  <video
                    ref={videoRef}
                    src={project.video}
                    muted
                    loop
                    playsInline
                    autoPlay={isHovered}
                    controls={false}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                      isHovered ? "opacity-100 scale-105" : "opacity-0 scale-100"
                    }`}
                  />
                )}

                {/* Fallback Image */}
                <LazyImage
                  src={project.image}
                  alt={project.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                    isHovered ? "opacity-0 scale-110" : "opacity-100 scale-100"
                  }`}
                />

                {/* Gradient overlay */}
                <motion.div
                  initial={{ opacity: 0.6 }}
                  animate={{ opacity: isHovered ? 0.3 : 0.6 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent transition-all duration-700"
                />
              </div>

              {/* Card content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-teal-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.1, backgroundColor: "#10B981", color: "#fff" }}
                      className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 transition-colors"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">{project.year}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Projects;
