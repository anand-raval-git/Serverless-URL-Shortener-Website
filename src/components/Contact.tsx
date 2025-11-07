import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground">
            Have questions? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-gradient-card p-8 rounded-2xl shadow-soft border border-border hover:shadow-medium transition-all duration-300"
          >
            <div className="w-14 h-14 bg-gradient-hero rounded-xl flex items-center justify-center mb-6 shadow-glow">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Email</h3>
            <a
              href="mailto:anandraval.work@gmail.com"
              className="text-primary hover:underline"
            >
              anandraval.work@gmail.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-gradient-card p-8 rounded-2xl shadow-soft border border-border hover:shadow-medium transition-all duration-300"
          >
            <div className="w-14 h-14 bg-gradient-hero rounded-xl flex items-center justify-center mb-6 shadow-glow">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Phone</h3>
            <a href="tel:7874065192" className="text-primary hover:underline">
              +91 78740 65192
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
