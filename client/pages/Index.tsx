import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Code2, Database, Globe, Zap } from "lucide-react";

export default function Index() {
  const projects = [
    {
      id: 1,
      title: "FEKRA Educational Platform",
      description:
        "A full-stack educational platform for FEKRA with role-based dashboards for students, teachers, and admins. Includes course management, events calendar, scholarships section, and structured educational resources.",
      tags: ["React", "Node.js", "MongoDB", "Vercel"],
      image: "/logo_fekra.jpeg",
      link: "/portfolio",
    },

    {
      id: 2,
      title: "Path2Uni – University Guidance Platform",
      description:
        "A full-stack web platform built from scratch to help Lebanese students navigate university applications, scholarships, and academic planning. Includes secure authentication with JWT, email verification, dynamic forms, and persistent user checklists.",
      tags: ["HTML", "CSS", "javascript", "Render"],
      image:
        "/logoo.jpg",
      link: "/portfolio",
    },
    {
      id: 3,
      title: "Social Media Platform for Tech Enthusiasts",
      description:
        "A social media website designed for tech enthusiasts to connect and share content. Features include secure user authentication, friend connections, customizable privacy settings, and real-time interactions for sharing posts, photos, and videos.",
      tags: ["Angular", "Node.js", "TypeScript", "express.js"],
      image:
      "https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?w=600&h=400&fit=crop",
      link: "/portfolio",
    },
  ];

    const skills = [
    {
      category: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "React", "Angular", "AJAX"],
      icon: Globe,
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "RESTful APIs", "JWT Auth", "Email Verification"],
      icon: Database,
    },
    {
      category: "Databases & Tools",
      items: ["MongoDB", "SQL", "Git", "GitHub", "GitLab", "Postman"],
      icon: Code2,
    },
  ];

    
  

  return (
    <>
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-40 right-20 w-96 h-96 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <div className="mb-8 inline-block">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  Full-Stack Developer
                </span>
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Asmaa Shreih
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              I build clean, modern, and scalable web applications. I’m a
              Computer Science graduate from AUB with a strong interest in
              UI/UX design and full-stack development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:asmaachreih@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4
                bg-gradient-to-r from-primary to-secondary text-white rounded-lg
                hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]
                transition-all font-semibold
                focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </a>

              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4
                border-2 border-primary text-primary rounded-lg
                hover:bg-primary/5 hover:shadow-sm active:scale-[0.98]
                transition-all font-semibold
                focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2"
              >
                View My Work
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Featured Projects
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A selection of projects showcasing my experience in web
                development.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {projects.map((project) => (
                <Link
                  key={project.id}
                  to={project.link}
                  className="group flex flex-col h-full rounded-2xl overflow-hidden
                  bg-white border border-primary/10
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-xl hover:border-primary/30
                  hover:ring-1 hover:ring-primary/20
                  focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2"
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden bg-primary/5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Project Content */}
                  <div className="flex-1 p-6 flex flex-col">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-4
                bg-gradient-to-r from-primary to-secondary text-white rounded-lg
                hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]
                transition-all font-semibold
                focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2"
              >
                View All Projects
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Expertise
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A toolkit of technologies I use to build reliable and
                user-focused software.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skills.map((skillGroup) => {
                const Icon = skillGroup.icon;
                return (
                  <div
                    key={skillGroup.category}
                    className="p-8 bg-white rounded-2xl border border-primary/10
                    transition-all duration-300
                    hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg
                    hover:ring-1 hover:ring-primary/10"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">
                        {skillGroup.category}
                      </h3>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {skillGroup.items.map((skill) => (
                        <div
                          key={skill}
                          className="px-4 py-2 bg-primary/5 rounded-lg text-sm font-medium text-foreground
                          hover:bg-primary/10 transition-colors"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              I'm always interested in internships and opportunities. Let’s
              connect.
            </p>
            <a
              href="mailto:asmaachreih@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4
              bg-white text-primary rounded-lg
              hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]
              transition-all font-semibold
              focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-primary"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
