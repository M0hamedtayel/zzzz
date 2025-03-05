import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="container flex min-h-[calc(100vh-4rem)] items-center py-12">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center space-y-4"
        >
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Web Penetration Tester
          </h1>
          <p className="text-xl text-muted-foreground">
            Hi, I'm Mohamed Tayel. I help organizations secure their web applications
            through comprehensive penetration testing and security assessments.
          </p>
          <div className="flex gap-4">
            <Link href="/contact">
              <Button size="lg">
                Get in touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="outline" size="lg">
                View Projects
              </Button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <div className="relative aspect-square w-full max-w-md rounded-full bg-gradient-to-tr from-primary/20 to-primary/0 p-8">
            <div className="absolute inset-0 rounded-full border border-primary/20" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
