import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, BookOpen, Briefcase, Code } from "lucide-react";

export default function About() {
  const experience = [
    {
      role: "Backend Developer Intern",
      company: "Tawasoul",
      period: "Dec 2025 – Present",
      description:
        "Working as part of a backend team to build the platform from scratch. Responsible for designing and implementing backend APIs, server-side logic, and collaborating closely with frontend and product teams to ensure smooth system integration.",
      icon: Briefcase,
    },
    {
      role: "Backend & Frontend Intern",
      company: "EBeauty",
      period: "Dec 2024 – Present",
      description:
        "Contributed to building a salon management application by developing backend APIs for user management and bookings, and supporting frontend features to ensure a smooth user experience.",
      icon: Briefcase,
    },
    {
      role: "Data Management Team Lead Intern",
      company: "FEKRA Project",
      period: "Summer 2024 (6 months)",
      description:
        "Led the data management team, ensured accurate handling of project data, and collaborated with team members to improve data organization and workflow efficiency.",
      icon: Briefcase,
    },
    {
      role: "Java Instructor",
      company: "FEKRA Project",
      period: "Aug 2023 – Nov 2023",
      description:
        "Designed and delivered a beginner-friendly Java programming course, providing hands-on guidance and supporting students in applying core programming concepts.",
      icon: Code,
    },
    {
      role: "Coordinator & Tutor",
      company: "FEKRA Project",
      period: "2021 – Present",
      description:
        "Assisted students with university applications, financial aid, and scholarships. Taught Math, SAT preparation, and Java programming, and contributed to planning future technical courses.",
      icon: Briefcase,
    },
    {
      role: "Data Entry Volunteer",
      company: "Jafet Library, American University of Beirut",
      period: "Jan 2023 – Feb 2023",
      description:
        "Entered data into the library database system with high accuracy and collaborated with library staff to ensure smooth and efficient data entry operations.",
      icon: Briefcase,
    },
    {
      role: "Internship Peer Educator",
      company: "Beit Atfal Assumoud, Tyre",
      period: "Jun 2024 – Aug 2024",
      description:
        "Taught school subjects and led interactive activities for students aged 8–16, focusing on confidence building through presentations and educational sessions on positive habits and anti-bullying.",
      icon: Briefcase,
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "American University of Beirut (AUB)",
      period: "Beirut, Lebanon",
      icon: BookOpen,
    },
  ];

  const skills = {
    languages: ["Java", "C", "C++", "Python", "JavaScript"],
    frontend: ["HTML", "CSS", "React", "Angular", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "RESTful APIs"],
    databases: ["MongoDB", "SQL"],
    tools: ["Git", "GitHub", "GitLab"],
    dataScience: ["Pandas", "NumPy", "Scikit-learn", "Machine Learning"],
  };

  const certifications = [
    "Certificate of Participation – Youth Empowered by AI (Issued Jul 2025)",
    "Training of Trainers (TOT) – Presentation & Training Skills in Educational Technology (Issued Aug 2024)",
    "Java Programming Certification",
    "Python Programming Course",
    "Cybersecurity Certificate",
    "LebNet Tech Fellows Program",
    "Leadership & Time Management Training",
  ];

  return (
    <>
      <Header />

      <main className="flex-1">
        {/* Header */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 py-20">
          {/* subtle animated blobs */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-10 -left-20 w-96 h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-full blur-3xl animate-pulse" />
          </div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
              About Me
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Computer Science graduate from AUB with a strong interest in UI/UX
              design and full-stack web development.
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Who I Am
                </h2>

                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  I’m Asmaa Shreih, a Computer Science graduate from the American
                  University of Beirut (AUB) with a strong interest in full-stack
                  development and UI/UX design. I enjoy building user-focused web
                  applications that combine clean design with solid functionality.
                </p>

                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Throughout my studies, I worked on several academic and personal
                  projects that strengthened my skills in frontend development,
                  backend APIs, and databases. I especially enjoy turning real
                  problems into structured, practical solutions through code.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Beyond development, I’ve been actively involved in education and
                  community initiatives through FEKRA, where I’ve taught
                  programming and coordinated student support programs. I’m eager
                  to grow in a professional environment where I can contribute
                  meaningfully and continue learning.
                </p>
              </div>

              {/* Stats card (more alive) */}
              <div
                className="rounded-2xl p-8 border border-primary/20
                bg-gradient-to-br from-primary/10 to-secondary/10
                shadow-sm hover:shadow-xl hover:-translate-y-1
                transition-all duration-300"
              >
                <div className="space-y-6">
                  <div className="p-4 rounded-xl bg-white/70 border border-primary/10">
                    <div className="text-4xl font-bold text-primary mb-1">
                      10+
                    </div>
                    <p className="text-muted-foreground">
                      Academic & personal projects
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/70 border border-primary/10">
                    <div className="text-4xl font-bold text-primary mb-1">
                      6+
                    </div>
                    <p className="text-muted-foreground">
                      Years of volunteering & teaching
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/70 border border-primary/10">
                    <div className="text-4xl font-bold text-primary mb-1">
                      5+
                    </div>
                    <p className="text-muted-foreground">
                      Certifications & trainings
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/70 border border-primary/10">
                    <div className="text-2xl font-bold text-primary mb-1">
                      Full-Stack
                    </div>
                    <p className="text-muted-foreground">
                      React + Node/Express + MongoDB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground mb-12">
              Experience
            </h2>

            <div className="space-y-8">
              {experience.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="group flex gap-6 p-8 bg-white rounded-2xl
                    border border-primary/10
                    transition-all duration-300
                    hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl
                    hover:ring-1 hover:ring-primary/10"
                  >
                    <div className="flex-shrink-0">
                      <div
                        className="flex items-center justify-center h-12 w-12 rounded-lg
                        bg-primary/10 border border-primary/10
                        group-hover:bg-primary/15 transition"
                      >
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {item.role}
                      </h3>
                      <p className="text-primary font-semibold mb-1">
                        {item.company}
                      </p>
                      <p className="text-sm text-muted-foreground mb-3">
                        {item.period}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground mb-12">
              Education
            </h2>

            <div className="space-y-8">
              {education.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="group flex gap-6 p-8 rounded-2xl
                    bg-gradient-to-br from-blue-50 to-cyan-50
                    border border-primary/10
                    transition-all duration-300
                    hover:-translate-y-1 hover:shadow-lg hover:border-primary/30"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 border border-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {item.degree}
                      </h3>
                      <p className="text-primary font-semibold mb-1">
                        {item.school}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item.period}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground mb-12">
              Technical Skills
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {Object.entries(skills).map(([category, items]) => (
                <div
                  key={category}
                  className="rounded-2xl p-6 bg-white border border-primary/10
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-lg hover:border-primary/30"
                >
                  <h3 className="text-lg font-bold text-foreground mb-4 capitalize">
                    {category.replace(/([A-Z])/g, " $1")}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-2 rounded-lg text-sm font-medium
                        bg-primary/5 text-foreground border border-primary/10
                        hover:bg-primary/10 transition"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground mb-12">
              Certifications & Training
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 p-6 rounded-2xl
                  bg-gradient-to-br from-primary/5 to-secondary/5
                  border border-primary/10
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-lg hover:border-primary/30"
                >
                  <div className="p-3 rounded-xl bg-white border border-primary/10">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <span className="font-semibold text-foreground leading-relaxed">
                    {cert}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Let’s Work Together
            </h2>
            <p className="text-xl text-white/90 mb-8">
              I’m open to internships and entry-level opportunities in software
              development. Feel free to reach out!
            </p>
            <a
              href="mailto:asmaachreih@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4
              bg-white text-primary rounded-lg font-semibold
              shadow-sm hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]
              transition-all
              focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-primary"
            >
              Contact Me
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
