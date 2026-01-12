import { Code2, Palette, Database, Users } from 'lucide-react';

const skillCategories = [
  {
    icon: Code2,
    title: 'Languages & Frameworks',
    color: 'primary',
    skills: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'Python', 'SQL', 'React', 'Vue', 'Next.js', 'Nest.js'],
  },
  {
    icon: Palette,
    title: 'Tools & Technologies',
    color: 'secondary',
    skills: ['Git', 'VS Code', 'Figma', 'Microsoft Office', 'Canva', 'Node.js'],
  },
  {
    icon: Database,
    title: 'Database & Data',
    color: 'accent',
    skills: ['PostgreSQL', 'MongoDB', 'SQL', 'Data Analysis'],
  },
  {
    icon: Users,
    title: 'Professional',
    color: 'primary',
    skills: ['Project Management', 'Public Speaking', 'Research', 'Project Collaboration', 'Agile Adaptability', 'Leadership'],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary">
            My Expertise
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            A blend of technical proficiency and creative problem-solving, continuously expanding through hands-on projects and learning.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="hover-lift group relative rounded-2xl bg-card p-6 shadow-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div 
                className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${
                  category.color === 'primary' 
                    ? 'bg-primary/10 text-primary' 
                    : category.color === 'secondary'
                    ? 'bg-secondary/10 text-secondary'
                    : 'bg-accent/10 text-accent'
                }`}
              >
                <category.icon size={24} />
              </div>
              
              <h3 className="mb-4 text-lg font-semibold">{category.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              {/* Decorative corner */}
              <div 
                className={`absolute right-4 top-4 h-8 w-8 rounded-full opacity-20 ${
                  category.color === 'primary' 
                    ? 'bg-primary' 
                    : category.color === 'secondary'
                    ? 'bg-secondary'
                    : 'bg-accent'
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
