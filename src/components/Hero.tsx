import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import URLShortener from "@/components/URLShortener";

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Main Quote */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Simplify Your Links.
            <br />
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Amplify Your Reach.
            </span>
          </h1>
          

          <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Create smart, secure, and serverless short URLs powered by AWS.
          </p>

          {/* URL Shortener */}
          <div className="mb-6">
            <URLShortener />
          </div>

          <p className="text-sm text-muted-foreground mb-8">
            Free. Fast. Serverless.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-hero text-white hover:opacity-90 transition-opacity shadow-glow"
              onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
            >
              Shorten Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
              asChild
            >
              <a href="https://github.com/anand-raval-git" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View on GitHub
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
