import { motion } from "framer-motion";
import { Link2, Zap, Database } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Link2,
      title: "Enter Your URL",
      description: "Paste any link to shorten",
    },
    {
      icon: Zap,
      title: "Serverless Architecture",
      description: "Built fully on AWS for reliability and performance,Data Handling Serverlessly",
    },
    {
      icon: Database,
      title: "S3 Redirects",
      description: "A zero-byte file redirects users instantly.",
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-gradient-card p-8 rounded-2xl shadow-soft border border-border hover:shadow-medium transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-hero rounded-xl flex items-center justify-center mb-6 shadow-glow">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
