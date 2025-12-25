import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ExternalLink, Github, Code2 } from "lucide-react";
import { useState } from "react";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = [
    // ===== FULL-STACK PROJECTS =====
    {
      id: 1,
      title: "FEKRA Educational Platform (Final Year Project)",
      category: "fullstack",
      description:
        "A comprehensive educational platform developed for FEKRA, an NGO supporting Lebanese students. Features include events calendar, scholarship opportunities, educational resources, student success stories, and an AI chatbot. Designed with a strong focus on responsive UI/UX and accessibility.",
      image: "/logo_fekra.jpeg",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Vercel"],
      liveUrl: "https://fyp-frontend-blond.vercel.app/",
      githubUrl: "https://github.com/wassimhassan/FypFrontend.git",
    },
    {
      id: 2,
      title: "Path2Uni – University Guidance Platform",
      category: "fullstack",
      description:
        "A full-stack web platform built from scratch to help Lebanese students navigate university applications, scholarships, and academic planning. Includes secure authentication with JWT, email verification, dynamic forms, and persistent user checklists.",
      image: "/logoo.jpg",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      liveUrl: "https://path2uni.onrender.com",
      githubUrl: "https://github.com/asmaachreih1/Path2Uni.git",
    },
    {
      id: 3,
      title: "Social Media Platform for Tech Enthusiasts",
      category: "fullstack",
      description:
        "A social media website designed for tech enthusiasts to connect and share content. Features include secure user authentication, friend connections, customizable privacy settings, and real-time interactions for sharing posts, photos, and videos.",
      image:
        "https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?w=600&h=400&fit=crop",
      technologies: ["Node.js", "Express.js", "Angular", "TypeScript"],
      liveUrl: "#",
      githubUrl: "https://github.com/GProgrammer1/SocialMediaApp.git",
    },

    // ===== OTHER PROJECTS (ONLY IN ALL) =====
    {
      id: 4,
      title: "Maze Game",
      category: "other",
      description:
        "A maze-based game where the player navigates through a maze to find the shortest path. Focused on game logic, algorithms, and problem-solving.",
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop",
      technologies: ["Java", "Algorithms"],
      liveUrl: "#",
      githubUrl: "https://github.com/asmaachreih1/maze-generator.git",
    },
    {
      id: 5,
      title: "EEG Alzheimer’s Detection (Machine Learning)",
      category: "other",
      description:
        "Machine learning project focused on detecting Alzheimer’s disease using EEG signals. Included data cleaning, feature extraction, and training models such as Logistic Regression, SVM, and Random Forest.",
      image:
        "https://www.bitbrain.com/_next/image?url=https%3A%2F%2Fcms.bitbrain.com%2Fassets%2Fba794f52-cbe8-47fe-b949-da3243cc0f6e&w=1920&q=85",
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn"],
      liveUrl:
        "https://colab.research.google.com/drive/1s3gViNlxa0i4-VB7ms_RphA0Su6CBv20",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "MRI Brain Tumor Segmentation (Deep Learning)",
      category: "other",
      description:
        "Deep learning project using a UNet architecture for brain tumor segmentation from MRI images. Evaluated using Dice coefficient and visual comparisons.",
      image:
        "https://developer-blogs.nvidia.com/wp-content/uploads/2018/11/Screen-Shot-2018-11-26-at-8.36.35-PM.png",
      technologies: ["Python", "TensorFlow", "UNet"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full-Stack Projects" },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === "fullstack");

  return (
    <>
      <Header />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              My Portfolio
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              A curated collection of full-stack, academic, and machine learning
              projects showcasing my technical growth and problem-solving skills.
            </p>
          </div>
        </section>

        {/* Filter */}
        <section className="py-12 bg-white border-b">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-6 py-2 rounded-lg font-medium transition-all
                    focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2
                    ${selectedCategory === cat.id
                      ? "bg-primary text-white shadow-sm"
                      : "bg-primary/10 hover:bg-primary/20 hover:shadow-sm"
                    }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="border rounded-2xl overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover"
                  loading="lazy"
                />

                <div className="p-6 flex flex-col">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* UPDATED BUTTONS */}
                  <div className="flex gap-3">
                    {project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2
                        px-4 py-2.5 rounded-lg text-sm font-semibold text-white
                        bg-gradient-to-r from-primary to-secondary
                        shadow-sm
                        hover:shadow-lg hover:scale-[1.03]
                        active:scale-[0.97]
                        transition-all
                        focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live
                      </a>
                    )}

                    {project.githubUrl !== "#" && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2
                        px-4 py-2.5 rounded-lg text-sm font-semibold
                        text-primary border border-primary/30 bg-white
                        shadow-sm
                        hover:bg-primary/5 hover:shadow-md hover:scale-[1.03]
                        active:scale-[0.97]
                        transition-all
                        focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center mt-12">
              <Code2 className="mx-auto mb-4 opacity-50" />
              <p className="text-muted-foreground">No projects found.</p>
            </div>
          )}
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-primary to-secondary text-center">
          <h2 className="text-4xl text-white font-bold mb-4">Let’s Work Together</h2>
          <p className="text-white/90 mb-8">
            Open to internships, junior roles, and exciting collaborations.
          </p>
          <a
            href="mailto:asmaachreih@gmail.com"
            className="inline-flex items-center justify-center
            bg-white text-primary px-8 py-4 rounded-lg font-semibold
            shadow-sm hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]
            transition-all
            focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-primary"
          >
            Contact Me
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}
