import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Linkedin, Send, Loader2 } from "lucide-react";
import { isValidEmail, isValidName, isValidPhone } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

// Declare Forminit global type
declare global {
  interface Window {
    Forminit: new () => {
      submit: (formId: string, formData: FormData) => Promise<{
        data?: { hashId: string; date: string; blocks: Record<string, unknown> };
        redirectUrl?: string;
        error?: { message: string; code: number };
      }>;
    };
  }
}

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: false, email: false });
  const [loading, setLoading] = useState<'idle' | 'pending'>('idle');
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nameValid = isValidName(form.name);
    const emailValid = isValidEmail(form.email);

    setErrors({
      name: !nameValid,
      email: !emailValid,
    });

    if (nameValid && emailValid) {
      setLoading('pending');

      try {
        const forminit = new window.Forminit();
        const formData = new FormData(e.currentTarget);
        
        const { data, error } = await forminit.submit('upm6vy375xh', formData);

        if (error) {
          toast({
            title: "Error",
            description: error.message || 'Failed to send message. Please try again.',
            variant: "destructive",
          });
          setLoading('idle');
          return;
        }

        toast({
          title: "Success!",
          description: "Message sent successfully! I'll get back to you soon.",
        });
        setForm({ name: "", email: "", message: "" });
      } catch (err) {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        });
      } finally {
        setLoading('idle');
      }
    }
  };

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container max-w-xl">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Contact</p>
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground text-sm">Have a React project that needs help? Reach out and let's talk.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Your name"
              name="fi-sender-fullName"
              required
              value={form.name}
              onChange={(e) => {
                setForm({ ...form, name: e.target.value });
                if (errors.name) setErrors({ ...errors, name: false });
              }}
              className={`w-full rounded-lg border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-input focus:ring-ring'} bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2`}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">Please enter a valid name</p>
            )}
          </div>
          <div>
            <input
              type="email"
              placeholder="Your email"
              name="fi-sender-email"
              required
              value={form.email}
              onChange={(e) => {
                setForm({ ...form, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: false });
              }}
              className={`w-full rounded-lg border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-input focus:ring-ring'} bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">Please enter a valid email address</p>
            )}
          </div>
          <textarea
            placeholder="Tell me about your project..."
            name="fi-text-message"
            required
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
          />
          <Button type="submit" className="w-full" size="lg" disabled={loading === 'pending'}>
            {loading === 'pending' ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Send className="w-4 h-4" />
            )}
            {loading === 'pending' ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
        <div className="mt-8 text-center">
          <a
            href="https://linkedin.com/in/carlospsvieira"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
