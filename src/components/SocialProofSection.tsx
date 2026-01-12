import { Github, Star, GitBranch, TrendingUp } from 'lucide-react';

const SocialProofSection = () => {
  return (
    <section className="relative py-16 bg-muted/30">
      <div className="container relative z-10 mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {/* GitHub Stats Card */}
          <div className="hover-lift rounded-2xl bg-card p-6 shadow-card text-center">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mx-auto">
              <Github size={24} />
            </div>
            <h3 className="mb-2 text-lg font-semibold">Open Source</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Actively contributing to projects and building solutions
            </p>
            <a
              href="https://github.com/Daena-Crosby"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline text-sm font-medium"
            >
              View GitHub Profile →
            </a>
          </div>

          {/* Leadership Card */}
          <div className="hover-lift rounded-2xl bg-card p-6 shadow-card text-center">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary mx-auto">
              <TrendingUp size={24} />
            </div>
            <h3 className="mb-2 text-lg font-semibold">Leadership</h3>
            <p className="text-sm text-muted-foreground mb-4">
              President of UWI Mona Computing Society, fostering community growth
            </p>
          </div>

          {/* Experience Card */}
          <div className="hover-lift rounded-2xl bg-card p-6 shadow-card text-center">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent mx-auto">
              <Star size={24} />
            </div>
            <h3 className="mb-2 text-lg font-semibold">Professional Growth</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Frontend Developer Intern at Intellibus, building real-world applications
            </p>
            <div className="text-xs text-muted-foreground">
              React · Next.js · TypeScript
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;

