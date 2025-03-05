import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const skills = [
  {
    category: "Web Security",
    items: [
      { name: "SQL Injection", level: 95 },
      { name: "Cross-Site Scripting (XSS)", level: 90 },
      { name: "CSRF", level: 85 },
      { name: "Authentication Bypass", level: 88 },
    ],
  },
  {
    category: "Tools & Technologies",
    items: [
      { name: "Burp Suite", level: 92 },
      { name: "OWASP ZAP", level: 85 },
      { name: "Metasploit", level: 80 },
      { name: "Nmap", level: 88 },
    ],
  },
  {
    category: "Programming",
    items: [
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "Bash Scripting", level: 75 },
      { name: "PHP", level: 70 },
    ],
  },
];

export default function Skills() {
  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <h1 className="text-3xl font-bold">Skills & Expertise</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{category.category}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.items.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress value={skill.level} />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
