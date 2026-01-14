import { Github, BookOpen, ExternalLink, Mail, Notebook, ScanFace } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Storybook Planner WebApp',
    description: 'A comprehensive web application for planning and organizing storybook projects. Focuses on creating a seamless user experience for writers and content creators.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    problemsSolved: ['Streamlined story planning workflow', 'Centralized character and plot management', 'Improved project organization'],
    myContributions: ['Designed and implemented the entire frontend architecture', 'Created reusable UI components', 'Developed responsive layouts for all screen sizes'],
    icon: BookOpen,
    color: 'primary',
    githubLink: 'https://github.com/Daena-Crosby/Storybook-Planner',
    liveLink: 'https://storybook-planner.vercel.app/',
    thumbnail: '/project-thumbnails/storybook-planner.svg',
  },
  {
    title: 'Facial Detection & Recognition System',
    description: 'A Python-based system using OpenCV and face recognition libraries to identify and verify individuals in real-time. Currently detects faces in video streams and draws bounding boxes around detected faces.',
    technologies: ['Python', 'OpenCV', 'face_recognition library', 'NumPy'],
    problemsSolved: ['Real-time face detection in video streams', 'Foundation for future recognition capabilities', 'Public safety applications'],
    myContributions: ['Implemented face detection algorithms', 'Integrated OpenCV for video processing', 'Designed system architecture for scalability'],
    icon: ScanFace,
    color: 'accent',
    githubLink: 'https://github.com/Daena-Crosby/Face-Detection',
    liveLink: null,
    thumbnail: '/project-thumbnails/facial-detection.svg',
  },
  {
    title: 'Email Notification System',
    description: 'An automated email notification system built with Python\'s smtplib for academic club settings. Sends automated emails and alerts to notify members of meetings and events with clean, responsive email templates.',
    technologies: ['Python', 'smtplib', 'Email Templates', 'HTML/CSS'],
    problemsSolved: ['Automated member communication', 'Reduced manual email sending time', 'Improved event attendance through timely notifications'],
    myContributions: ['Designed email template system', 'Implemented SMTP integration', 'Created automated scheduling functionality'],
    icon: Mail,
    color: 'accent',
    githubLink: 'https://github.com/Daena-Crosby/EmailSystem',
    liveLink: null,
    thumbnail: '/project-thumbnails/email-system.svg',
  },
  {
    title: 'Interactive Diary App',
    description: 'A narrative-driven diary web application with expressive transitions, mood tagging, and timeline views. Focuses on minimalist, story-first UX that makes entries feel personal and visual.',
    technologies: ['React', 'TypeScript', 'CSS Animations', 'Local Storage'],
    problemsSolved: ['Enhanced journaling experience', 'Visual timeline for entries', 'Mood-based organization'],
    myContributions: ['Designed user interface and interactions', 'Implemented animation system', 'Built data persistence layer'],
    icon: Notebook,
    color: 'accent',
    githubLink: 'https://github.com/Daena-Crosby/Interactive-Diary',
    liveLink: 'https://interactive-diary-app.vercel.app/',
    thumbnail: '/project-thumbnails/interactive-diary.svg',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-24">
      <div className="container relative z-10 mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Featured Work
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Projects & <span className="gradient-text">Case Studies</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Building solutions that matter — from web applications to design systems, each project reflects my passion for creating beautiful, functional experiences.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="hover-lift group relative flex flex-col overflow-hidden rounded-2xl bg-card shadow-card"
            >
              {/* Header with thumbnail or icon */}
              <div className={`relative h-48 overflow-hidden ${
                project.color === 'primary' 
                  ? 'bg-gradient-to-br from-primary/20 to-primary/5' 
                  : project.color === 'secondary'
                  ? 'bg-gradient-to-br from-secondary/20 to-secondary/5'
                  : 'bg-gradient-to-br from-accent/20 to-accent/5'
              }`}>
                {/* Thumbnail image or fallback icon */}
                {project.thumbnail ? (
                  <img
                    src={project.thumbnail}
                    alt={`${project.title} project thumbnail`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    width="800"
                    height="400"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.parentElement?.querySelector('.thumbnail-fallback');
                      if (fallback) {
                        (fallback as HTMLElement).style.display = 'flex';
                      }
                    }}
                  />
                ) : null}
                <div className="thumbnail-fallback absolute inset-0 flex items-center justify-center" style={{ display: project.thumbnail ? 'none' : 'flex' }}>
                  <project.icon 
                    size={64} 
                    className={`opacity-30 transition-transform group-hover:scale-110 ${
                      project.color === 'primary' 
                        ? 'text-primary' 
                        : project.color === 'secondary'
                        ? 'text-secondary'
                        : 'text-accent'
                    }`}
                  />
                </div>
                
                {/* Decorative shape */}
                <div className={`absolute -bottom-6 -right-6 h-24 w-24 rounded-full opacity-30 ${
                  project.color === 'primary' 
                    ? 'bg-primary' 
                    : project.color === 'secondary'
                    ? 'bg-secondary'
                    : 'bg-accent'
                }`} />
              </div>
              
              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-3 text-xl font-semibold">{project.title}</h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="mb-3">
                  <p className="mb-2 text-xs font-semibold text-foreground">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                
                
                {/* Actions */}
                <div className="flex gap-2">
                  {project.githubLink && (
                    <Button 
                      asChild
                      variant="ghost" 
                      className="flex-1 justify-center gap-2 transition-colors hover:bg-primary/10 hover:text-primary"
                    >
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.liveLink && (
                    <Button 
                      asChild
                      variant="ghost" 
                      className="flex-1 justify-center gap-2 transition-colors hover:bg-primary/10 hover:text-primary"
                    >
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
