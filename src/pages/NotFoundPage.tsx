import { PillLink } from "../components/ui";

const NotFoundPage = () => (
  <section className="container-page py-24 md:py-36">
    <p className="text-[11px] tracking-[0.15em] text-muted uppercase">404</p>
    <h1 className="display mt-4 text-5xl font-medium md:text-7xl">Page not found</h1>
    <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted">
      That address is not on this site. The home page, project list and about page are.
    </p>
    <div className="mt-8 flex flex-wrap gap-3">
      <PillLink href="/">Back home</PillLink>
      <PillLink href="/projects" variant="light">
        All projects
      </PillLink>
    </div>
  </section>
);

export default NotFoundPage;
