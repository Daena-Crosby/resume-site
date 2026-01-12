import { GraduationCap, Briefcase, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24">
      <div className="container relative z-10 mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            About Me
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Bridging <span className="gradient-text">Technology</span> & Design
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            I'm a Computer Science student at the University of the West Indies, Mona, with a deep 
            passion for frontend development and creating intuitive user experiences.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Internship Card - Featured */}
          <div className="hover-lift lg:col-span-2 rounded-2xl bg-gradient-to-br from-primary/5 via-card to-secondary/5 p-8 shadow-card border border-primary/10">
            <div className="flex flex-col sm:flex-row sm:items-start gap-6">
              <div className="flex-shrink-0">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Briefcase size={28} />
                </div>
              </div>
              <div className="flex-1">
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-semibold">Intellibus</h3>
                  <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
                    2025 - Present
                  </span>
                </div>
                <p className="mb-3 font-medium text-primary">Frontend Developer Intern</p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Working on frontend development projects, collaborating with cross-functional teams, 
                  and contributing to web application development using modern frameworks like React and Next.js.
                </p>
              </div>
            </div>
          </div>

          {/* Education Card */}
          <div className="hover-lift rounded-2xl bg-card p-6 shadow-card">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
              <GraduationCap size={24} />
            </div>
            <h3 className="mb-2 text-lg font-semibold">Education</h3>
            <p className="mb-1 font-medium text-sm">University of the West Indies, Mona</p>
            <p className="text-sm text-muted-foreground">
              BSc Computer Science (In Progress)
            </p>
          </div>

          {/* Leadership Card */}
          <div className="hover-lift rounded-2xl bg-card p-6 shadow-card">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Users size={24} />
            </div>
            <h3 className="mb-2 text-lg font-semibold">Leadership</h3>
            <p className="mb-1 font-medium text-sm">UWI Mona Computing Society</p>
            <p className="text-sm text-muted-foreground">
              President (2025-2026) · Former Secretary
            </p>
          </div>

          {/* Bio Card */}
          <div className="hover-lift lg:col-span-2 rounded-2xl bg-card p-6 shadow-card">
            <h3 className="mb-4 text-lg font-semibold">My Journey</h3>
            <p className="leading-relaxed text-muted-foreground">
              Beyond coding, I'm passionate about leadership and community building. I work to create spaces 
              where fellow students can learn, collaborate, and grow together. My focus is on crafting beautiful, 
              functional web experiences while developing strong project management and database skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
