import { motion } from "framer-motion";
import { Github, Linkedin, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            About the Project
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            This serverless URL shortener is built using <span className="font-semibold text-primary">AWS Lambda</span>, <span className="font-semibold text-primary">API Gateway</span>, <span className="font-semibold text-primary">DynamoDB</span>, and <span className="font-semibold text-primary">S3</span> — making it secure, scalable, and maintenance-free.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-gradient-card p-8 rounded-2xl shadow-soft border border-border"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
            Why Serverless?
          </h3>
          <p className="text-muted-foreground leading-relaxed text-center mb-8">
            No servers. No downtime. Fully managed by AWS — built for scalability and low cost.
          </p>

          <div className="border-t border-border pt-8">
            <h4 className="text-xl font-semibold text-foreground mb-6 text-center">
              Connect with Me
            </h4>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 w-full sm:w-auto"
                asChild
              >
                <a href="https://github.com/anand-raval-git" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 w-full sm:w-auto"
                asChild
              >
                <a href="https://www.linkedin.com/in/anand-raval-70751725a/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 w-full sm:w-auto"
                asChild
              >
                <a href="https://anandraval.hashnode.dev/" target="_blank" rel="noopener noreferrer">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Blog
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
