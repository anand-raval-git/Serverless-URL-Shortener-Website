import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as LinkIcon, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import ShortLinkResult from "./ShortLinkResult";

const URLShortener = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleShorten = async () => {
    if (!longUrl.trim()) {
      toast({
        title: "Error",
        description: "Please enter a valid URL",
        variant: "destructive",
      });
      return;
    }

    // Basic URL validation
    try {
      new URL(longUrl);
    } catch {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid URL starting with http:// or https://",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 800));

    // Generate random short code
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let shortCode = '';
    for (let i = 0; i < 6; i++) {
      shortCode += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    setShortUrl(`https://linkify.dev/${shortCode}`);
    setIsLoading(false);
    
    toast({
      title: "Success!",
      description: "Your link has been shortened",
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !isLoading) {
      handleShorten();
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-2xl shadow-large p-8 sm:p-12 border border-border"
        >
          <div className="flex flex-col gap-6">
            <div className="space-y-2">
              <label
                htmlFor="url-input"
                className="text-sm font-medium text-foreground flex items-center gap-2"
              >
                <LinkIcon className="w-4 h-4 text-primary" />
                Enter your long URL
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  id="url-input"
                  type="url"
                  placeholder="Paste your long URL here…"
                  value={longUrl}
                  onChange={(e) => setLongUrl(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1 h-14 text-lg px-6 bg-background border-2 border-input focus:border-primary transition-colors"
                  disabled={isLoading}
                />
                <Button
                  onClick={handleShorten}
                  disabled={isLoading}
                  className="h-14 px-8 text-base font-semibold bg-gradient-hero hover:opacity-90 transition-opacity shadow-medium"
                  size="lg"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Shortening...
                    </>
                  ) : (
                    "Shorten Link"
                  )}
                </Button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {shortUrl && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ShortLinkResult shortUrl={shortUrl} onReset={() => setShortUrl("")} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 grid grid-cols-3 gap-8 text-center"
        >
          {[
            { value: "10+", label: "Links Created" },
            { value: "99.9%", label: "Uptime" },
            { value: "<50ms", label: "Response Time" },
          ].map((stat, index) => (
            <div key={index}>
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default URLShortener;
