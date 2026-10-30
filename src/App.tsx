import { useEffect } from "react";
import { Header, Footer } from "./components/layout";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import { usePath, useScrollOnNavigate } from "./lib/router";
import { applyRouteMeta } from "./lib/seo";

const pages: Record<string, () => React.ReactElement> = {
  "/": HomePage,
  "/projects": ProjectsPage,
  "/about": AboutPage,
};

function App() {
  const path = usePath();
  const Page = pages[path] ?? HomePage;

  useScrollOnNavigate(path);
  useEffect(() => applyRouteMeta(path), [path]);

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
        <Page />
      </main>
      <Footer />
    </div>
  );
}

export default App;
