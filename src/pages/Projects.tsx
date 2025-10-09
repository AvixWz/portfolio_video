import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  ListFilter as Filter,
  Search,
  Play,
  Pause,
} from "lucide-react";
import LazyImage from "../components/LazyImage";
import { debounce } from "../utils/performance";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  video?: string;
  link: string;
  featured: boolean;
  year: string;
}

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  // ✅ Helper: resolve path (works for /public and remote)
  const resolveAsset = (path: string) => {
    if (path.startsWith("http")) return path;
    return `${import.meta.env.BASE_URL || ""}${path.replace(/^\/+/, "")}`;
  };

  const projects: Project[] = useMemo(
    () => [
      {
        id: 1,
        title: "Brand Identity Design",
        description:
          "Complete brand identity package for a tech startup including logo, color palette, and brand guidelines.",
        category: "Branding",
        tags: ["Logo Design", "Brand Identity", "Visual Design"],
        image:
          "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
        video:
          "public/assets/coin.mp4",
        link: "https://example.com/project1",
        featured: true,
        year: "2024",
      },
      {
        id: 2,
        title: "E-commerce Website UI",
        description:
          "Modern and intuitive user interface design for an online fashion retailer with focus on conversion optimization.",
        category: "Web Design",
        tags: ["UI/UX", "E-commerce", "Responsive Design"],
        image:
          "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
        // ✅ local video file
        video: "/assets/coin.mp4",
        link: "https://example.com/ecommerce-ui",
        featured: true,
        year: "2024",
      },
      {
        id: 3,
        title: "Mobile App Interface",
        description:
          "Sleek mobile application design for a fitness tracking app with emphasis on user engagement.",
        category: "Mobile Design",
        tags: ["Mobile UI", "App Design", "User Experience"],
        image:
          "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800",
        link: "https://example.com/project3",
        featured: false,
        year: "2023",
      },
      {
        id: 4,
        title: "Print Campaign Design",
        description:
          "Eye-catching print advertisement campaign for a luxury watch brand targeting high-end consumers.",
        category: "Print Design",
        tags: ["Print Design", "Advertisement", "Luxury Branding"],
        image:
          "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
        link: "https://example.com/project4",
        featured: false,
        year: "2023",
      },
      {
        id: 5,
        title: "Social Media Graphics",
        description:
          "Consistent visual content creation for social media platforms including Instagram, Facebook, and Twitter.",
        category: "Social Media",
        tags: ["Social Media", "Content Creation", "Visual Design"],
        image:
          "https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg?auto=compress&cs=tinysrgb&w=800",
        link: "https://example.com/project5",
        featured: true,
        year: "2024",
      },
      {
        id: 6,
        title: "Corporate Website Redesign",
        description:
          "Complete website redesign for a consulting firm focusing on professional appearance and user experience.",
        category: "Web Design",
        tags: ["Web Design", "Corporate", "Redesign"],
        image:
          "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
        link: "https://example.com/project6",
        featured: false,
        year: "2023",
      },
    ],
    []
  );

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    [projects]
  );

  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  const debouncedFilter = useMemo(
    () =>
      debounce((term: string, category: string) => {
        setIsLoading(true);
        setTimeout(() => {
          let filtered = projects;

          if (category !== "All") {
            filtered = filtered.filter((p) => p.category === category);
          }

          if (term.trim() !== "") {
            const lowerTerm = term.toLowerCase();
            filtered = filtered.filter(
              (p) =>
                p.title.toLowerCase().includes(lowerTerm) ||
                p.description.toLowerCase().includes(lowerTerm) ||
                p.tags.some((tag) => tag.toLowerCase().includes(lowerTerm))
            );
          }

          setFilteredProjects(filtered);
          setIsLoading(false);
        }, 200);
      }, 300),
    [projects]
  );

  useEffect(() => {
    debouncedFilter(searchTerm, selectedCategory);
  }, [searchTerm, selectedCategory, debouncedFilter]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-block px-6 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-sm font-bold rounded-full shadow-lg mb-4"
          >
            Portfolio
          </motion.span>
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of my best work spanning various disciplines and
            industries
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex flex-wrap gap-3 items-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-full"
              >
                <Filter
                  className="text-emerald-600 dark:text-teal-400"
                  size={18}
                />
                <span className="text-sm font-semibold text-emerald-600 dark:text-teal-400">
                  Filter:
                </span>
              </motion.div>

              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-500/50"
                      : "bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-slate-700 border-2 border-emerald-200/50 dark:border-teal-700/50"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-600 dark:text-teal-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-3 bg-white dark:bg-slate-800 border-2 border-emerald-200/50 dark:border-teal-700/50 rounded-full text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none w-72 shadow-lg"
              />
              {isLoading && (
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <div className="w-4 h-4 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" />
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -15, scale: 1.02 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group bg-gradient-to-br from-white via-slate-50 to-stone-100 dark:from-slate-800 dark:via-neutral-800 dark:to-zinc-800 rounded-3xl shadow-2xl overflow-hidden border-2 border-emerald-100/50 dark:border-teal-800/50 hover:border-emerald-300/70 dark:hover:border-teal-600/70 hover:shadow-emerald-300/30 dark:hover:shadow-teal-900/40 transition-all duration-500"
              >
                <div className="relative aspect-video overflow-hidden">
                  {project.video && hoveredProject === project.id ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        console.warn("Video failed to load:", project.video);
                        (e.currentTarget.style.display = "none");
                      }}
                    >
                      <source
                        src={resolveAsset(project.video)}
                        type="video/mp4"
                      />
                    </video>
                  ) : (
                    <LazyImage
                      src={resolveAsset(project.image)}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center text-white hover:shadow-2xl hover:shadow-emerald-500/50 transition-all"
                    >
                      {project.video && hoveredProject === project.id ? (
                        <Pause size={24} />
                      ) : (
                        <ExternalLink size={24} />
                      )}
                    </motion.a>
                  </div>

                  {/* Featured Tag */}
                  {project.featured && (
                    <motion.div
                      initial={{ x: -100 }}
                      animate={{ x: 0 }}
                      className="absolute top-4 left-4"
                    >
                      <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center space-x-1">
                        <span>⭐</span>
                        <span>Featured</span>
                      </span>
                    </motion.div>
                  )}

                  {/* Year Tag */}
                  <motion.div
                    initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    className="absolute top-4 right-4"
                  >
                    <span className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl text-emerald-600 dark:text-teal-400 text-xs font-bold px-3 py-1.5 rounded-full border-2 border-emerald-200/50 dark:border-teal-700/50">
                      {project.year}
                    </span>
                  </motion.div>

                  {/* Video Label */}
                  {project.video && (
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      className="absolute bottom-4 right-4"
                    >
                      <span className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center space-x-1">
                        <Play size={12} />
                        <span>Video</span>
                      </span>
                    </motion.div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 text-emerald-600 dark:text-teal-400 text-xs font-bold rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 text-xs font-medium rounded-full hover:bg-emerald-100 dark:hover:bg-teal-900/30 hover:text-emerald-600 dark:hover:text-teal-400 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && !isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-8xl mb-6">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              No projects found
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Try adjusting your search terms or filters
            </p>
          </motion.div>
        )}

        {/* Loading Spinner */}
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="w-16 h-16 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-300 text-lg font-medium">
              Loading projects...
            </p>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-24 p-12 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-900/20 dark:via-teal-900/20 dark:to-cyan-900/20 rounded-[60px] border-2 border-emerald-200/50 dark:border-teal-700/50"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Let's collaborate and bring your creative vision to life
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-500"
          >
            Get In Touch
            <ExternalLink className="ml-3" size={22} />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
