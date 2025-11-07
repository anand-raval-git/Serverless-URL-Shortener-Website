import { motion } from "framer-motion";
import { Heart, Github, Linkedin, BookOpen } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-subtle border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Built with love */}
          <div className="flex items-center justify-center gap-2 mb-6 text-muted-foreground">
            <span className="text-sm">Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span className="text-sm">using</span>
            <span className="font-semibold text-primary">AWS Serverless Stack</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <a
              href="https://github.com/anand-raval-git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/anand-raval-70751725a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://anandraval.hashnode.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <BookOpen className="w-6 h-6" />
            </a>
          </div>

          {/* Copyright */}
          <div className="border-t border-border pt-6">
            <p className="text-muted-foreground text-sm">
              © 2025 Linkify. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
