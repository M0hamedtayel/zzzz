import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl space-y-8"
      >
        <h1 className="text-3xl font-bold">About Me</h1>
        <Card>
          <CardContent className="p-6 space-y-4">
            <p>
              I am a dedicated Web Penetration Tester with extensive experience in
              identifying and exploiting security vulnerabilities in web applications.
              My passion lies in helping organizations strengthen their security
              posture through thorough testing and practical recommendations.
            </p>
            <p>
              With a strong foundation in web technologies and security principles,
              I specialize in:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Web Application Security Assessments</li>
              <li>Vulnerability Research and Exploitation</li>
              <li>Security Architecture Review</li>
              <li>Secure Code Review</li>
              <li>Security Awareness Training</li>
            </ul>
            <p>
              I hold various industry certifications and regularly contribute to the
              security community through research, blog posts, and speaking
              engagements.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
