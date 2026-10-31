import { useEffect } from "react";
import { Header, Footer } from "./components/layout";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import NotFoundPage from "./pages/NotFoundPage";
import { projects } from "./data";
import { usePath, useScrollOnNavigate } from "./lib/router";
import { applyRouteMeta } from "./lib/seo";

function App() {
  const path = usePath();
  const project = projects.find((item) => path === `/projects/${item.id}`);

  useScrollOnNavigate(path);
  useEffect(() => applyRouteMeta(path), [path]);

  const page =
    path === "/" ? (
      <HomePage />
    ) : path === "/projects" ? (
      <ProjectsPage />
    ) : path === "/about" ? (
      <AboutPage />
    ) : project ? (
      <ProjectPage project={project} />
    ) : (
      <NotFoundPage />
    );

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
        {page}
      </main>
      <Footer />
    </div>
  );
}

export default App;
