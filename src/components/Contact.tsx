import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-accent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Contact us today and let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8 animate-fade-in-up">
            <div className="glass-effect p-6 rounded-2xl shadow-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email Us</h3>
                  <p className="text-muted-foreground">info@afsonagroup.com</p>
                </div>
              </div>
            </div>

            <div className="glass-effect p-6 rounded-2xl shadow-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Call Us</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            <div className="glass-effect p-6 rounded-2xl shadow-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Visit Us</h3>
                  <p className="text-muted-foreground">123 Business Street, Tech City, TC 12345</p>
                </div>
              </div>
            </div>
          </div>

          <form className="glass-effect p-8 rounded-2xl shadow-card space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div>
              <Input placeholder="Your Name" className="bg-background/50" />
            </div>
            <div>
              <Input type="email" placeholder="Your Email" className="bg-background/50" />
            </div>
            <div>
              <Textarea placeholder="Your Message" rows={6} className="bg-background/50 resize-none" />
            </div>
            <Button className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
