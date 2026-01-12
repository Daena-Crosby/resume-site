import { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase, isSupabaseConfigured } from '@/integrations/supabase/client';

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatusMessage('Invalid email address. Please enter a valid email address.');
      toast({
        title: "Invalid email address",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }
    
    setStatusMessage('Sending your message...');

    try {
      // Check if Supabase is configured
      if (!isSupabaseConfigured() || !supabase) {
        // Fallback to mailto
        const mailtoLink = `mailto:daenacrosby1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
        window.location.href = mailtoLink;
        
        setStatusMessage('Opening email client. If it did not open, please email directly at daenacrosby1@gmail.com');
        toast({
          title: "Opening email client",
          description: "If your email client didn't open, please email me directly at daenacrosby1@gmail.com",
        });
        
        (e.target as HTMLFormElement).reset();
        setIsSubmitting(false);
        setTimeout(() => setStatusMessage(''), 5000);
        return;
      }

      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: { name, email, subject, message },
      });

      if (error) throw error;

      setStatusMessage('Message sent successfully! Thank you for reaching out. I will get back to you soon.');
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatusMessage(''), 5000);
    } catch (error: any) {
      if (import.meta.env.DEV) {
        console.error('Contact form error:', error);
      }
      
      // Fallback to mailto on error
      const mailtoLink = `mailto:daenacrosby1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
      
      setStatusMessage('Form submission failed. Unable to send via form. Please contact directly at daenacrosby1@gmail.com');
      toast({
        title: "Form submission failed",
        description: "Unable to send via form. Please contact me directly at daenacrosby1@gmail.com or click the email link below.",
        variant: "destructive",
      });
      
      // Also open mailto as fallback
      setTimeout(() => {
        window.location.href = mailtoLink;
        setTimeout(() => setStatusMessage(''), 5000);
      }, 1000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
              Get In Touch
            </span>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="mx-auto max-w-xl text-muted-foreground">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and design.
            </p>
          </div>

          <div className="grid gap-8 sm:gap-12 lg:grid-cols-5">
            {/* Contact Info */}
            <div className="space-y-6 lg:col-span-2">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3 text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a 
                    href="mailto:daenacrosby1@gmail.com" 
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    daenacrosby1@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-secondary/10 p-3 text-secondary">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a 
                    href="tel:876-223-5992" 
                    className="text-sm text-muted-foreground transition-colors hover:text-secondary"
                  >
                    876-223-5992
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-accent/10 p-3 text-accent">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-sm text-muted-foreground">
                    Kingston, Jamaica
                  </p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6 lg:col-span-3">
              {/* ARIA Live Region for form status */}
              <div
                role="status"
                aria-live="polite"
                aria-atomic="true"
                className="sr-only"
              >
                {statusMessage}
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="sr-only">Your Name</label>
                  <Input 
                    id="name"
                    type="text" 
                    name="name"
                    placeholder="Your Name" 
                    required
                    className="border-2 bg-card transition-colors focus:border-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Your Email</label>
                  <Input 
                    id="email"
                    type="email" 
                    name="email"
                    placeholder="Your Email" 
                    required
                    className="border-2 bg-card transition-colors focus:border-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    aria-required="true"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="sr-only">Subject</label>
                <Input 
                  id="subject"
                  type="text" 
                  name="subject"
                  placeholder="Subject"
                  required
                  className="border-2 bg-card transition-colors focus:border-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  aria-required="true"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="sr-only">Your Message</label>
                <Textarea 
                  id="message"
                  name="message"
                  placeholder="Your Message" 
                  rows={5}
                  required
                  className="border-2 bg-card transition-colors focus:border-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  aria-required="true"
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-gradient-primary text-primary-foreground shadow-soft transition-all hover:shadow-elevated sm:w-auto"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
