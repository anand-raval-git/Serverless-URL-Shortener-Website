import { motion } from "framer-motion";
import { Check, Copy, ExternalLink, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface ShortLinkResultProps {
  shortUrl: string;
  onReset: () => void;
}

const ShortLinkResult = ({ shortUrl, onReset }: ShortLinkResultProps) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      setCopied(true);
      toast({
        title: "Copied!",
        description: "Short link copied to clipboard",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to copy link",
        variant: "destructive",
      });
    }
  };

  const handleOpen = () => {
    window.open(shortUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="relative mt-6 p-6 bg-gradient-subtle rounded-xl border-2 border-primary/20 shadow-medium"
    >
      {/* Success Checkmark Animation */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
        className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary rounded-full p-2 shadow-large"
      >
        <Check className="w-5 h-5 text-primary-foreground" />
      </motion.div>

      {/* Close Button */}
      <button
        onClick={onReset}
        className="absolute -top-3 -right-3 bg-card rounded-full p-1.5 shadow-medium hover:shadow-large transition-shadow border border-border"
        aria-label="Close"
      >
        <X className="w-4 h-4 text-muted-foreground" />
      </button>

      <div className="pt-2">
        <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
          Your shortened link is ready! 🎉
        </h3>

        <div className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border mb-4">
          <div className="flex-1 overflow-hidden">
            <p className="text-sm text-muted-foreground mb-1">Short URL</p>
            <p className="text-primary font-semibold text-lg truncate">
              {shortUrl}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            onClick={handleCopy}
            variant="default"
            className="flex-1 bg-gradient-hero hover:opacity-90 transition-opacity"
            size="lg"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 mr-2" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 mr-2" />
                Copy Link
              </>
            )}
          </Button>
          <Button
            onClick={handleOpen}
            variant="outline"
            className="flex-1 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            size="lg"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Open Link
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ShortLinkResult;
