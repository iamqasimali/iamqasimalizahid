import { useEffect } from "react";
import { Header, Footer } from "./components/layout";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import { usePath, useScrollOnNavigate } from "./lib/router";
import { profile } from "./data";

const pages: Record<string, { title: string; Component: () => React.ReactElement }> = {
  "/": { title: `${profile.name} | Senior Full Stack Engineer`, Component: HomePage },
  "/projects": { title: `Projects | ${profile.name}`, Component: ProjectsPage },
  "/about": { title: `About | ${profile.name}`, Component: AboutPage },
};

function App() {
  const path = usePath();
  const page = pages[path] ?? pages["/"];

  useScrollOnNavigate(path);
  useEffect(() => {
    document.title = page.title;
  }, [page]);

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" key={path}>
        <page.Component />
      </main>
      <Footer />
    </div>
  );
}

export default App;
