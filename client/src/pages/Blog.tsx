import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "Understanding Modern XSS Attack Vectors",
    excerpt: "An in-depth look at contemporary Cross-Site Scripting attack vectors and prevention strategies.",
    date: "2024-03-15",
    readTime: "8 min read",
  },
  {
    title: "SQL Injection in Modern Web Applications",
    excerpt: "Exploring SQL injection vulnerabilities in modern frameworks and ORMs.",
    date: "2024-03-01",
    readTime: "10 min read",
  },
  {
    title: "Secure Authentication Best Practices",
    excerpt: "A comprehensive guide to implementing secure authentication in web applications.",
    date: "2024-02-15",
    readTime: "12 min read",
  },
];

export default function Blog() {
  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <h1 className="text-3xl font-bold">Blog</h1>
        <div className="grid gap-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                    <div className="text-sm text-muted-foreground">
                      {post.readTime}
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {post.date}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{post.excerpt}</p>
                  <Button variant="outline" className="group">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
