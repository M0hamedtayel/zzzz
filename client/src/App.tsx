import React from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Skills from "@/pages/Skills";
import Projects from "@/pages/Projects";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

// Use hash-based routing for GitHub Pages
const useHashLocation = () => {
  const [hash, setHash] = React.useState(window.location.hash.slice(1) || "/");

  React.useEffect(() => {
    console.log("Current hash:", hash); // Debug log
    const handleHashChange = () => {
      const newHash = window.location.hash.slice(1) || "/";
      console.log("Hash changed to:", newHash); // Debug log
      setHash(newHash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const setHashPath = (to: string) => {
    console.log("Setting hash to:", to); // Debug log
    window.location.hash = to;
    return undefined;
  };

  return [hash, setHashPath] as [string, (path: string, ...args: any[]) => any];
};

function Router() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <WouterRouter hook={useHashLocation}>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/skills" component={Skills} />
            <Route path="/projects" component={Projects} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </WouterRouter>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;