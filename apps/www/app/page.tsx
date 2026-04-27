import { CodeBlock } from "@creantly/ui/shared/code-block";
import { PageHeader, PageHeaderHeading } from "@creantly/ui/shared/page-header";

export default async function Page() {
  const code = `"dependencies": {
  "@creantly/auth": "1.18.6",
  "@creantly/video": "1.18.6",
  "@creantly/calendar": "1.18.6",
  "@creantly/mail": "1.18.6",
  "@creantly/sms": "1.18.6",
  "@creantly/payments": "1.18.6"
},`;

  return (
    <main className="container mb-16 w-full flex-1 lg:mb-20">
      <PageHeader>
        <PageHeaderHeading>
          the{" "}
          <span className="relative z-4 before:pointer-events-none before:absolute before:-inset-x-1 before:inset-y-0 before:z-4 before:-rotate-1 before:bg-linear-to-r before:from-blue-500 before:via-purple-500 before:to-orange-500 before:opacity-16 before:mix-blend-hard-light">
            AI systems
          </span>{" "}
          for companies.
        </PageHeaderHeading>
      </PageHeader>

      <div className="mx-auto max-w-2xl text-muted-foreground [&_a:not([data-slot='button'])]:text-foreground [&_strong]:text-foreground">
        <p className="not-first:mt-6 leading-relaxed">dear friend,</p>

        <p className="not-first:mt-6 leading-relaxed">
          most companies are trying to “use AI”. we build companies that operate
          on AI.
        </p>

        <p className="not-first:mt-6 leading-relaxed">
          <strong className="font-medium">creantly</strong> is a holding company
          focused on building, operating and scaling AI-driven businesses.
        </p>

        <p className="not-first:mt-6 leading-relaxed">
          through our ecosystem, we provide a combination of services,
          proprietary infrastructure, and SaaS products designed to automate
          operations, improve decision-making, and unlock new revenue streams.
        </p>

        <p className="not-first:mt-6 leading-relaxed">
          our model is simple: we don’t just deliver projects — we design
          systems, deploy them in production, and continuously operate and
          optimize them.
        </p>

        <p className="not-first:mt-6 leading-relaxed">
          this includes:
          <br />— AI automation for internal workflows
          <br />— customer acquisition and engagement systems
          <br />— integrations across payments, communications and scheduling
          <br />— SaaS solutions built to solve specific operational bottlenecks
        </p>

        <p className="not-first:mt-6 leading-relaxed">
          <a
            className="font-medium underline underline-offset-4"
            href="https://creantly.com"
          >
            creantly.com
          </a>{" "}
          acts as the central platform where all these components connect into a
          single operating layer.
        </p>

        <p className="not-first:mt-6 leading-relaxed">
          for developers and teams, we provide the creantly stack — a unified
          environment to integrate AI, infrastructure and business workflows
          without fragmentation.
        </p>

        <p className="not-first:mt-6 leading-relaxed">
          everything runs on a single environment key:
        </p>

        <p className="not-first:mt-6 leading-relaxed">
          <code className="relative z-10 px-[0.3rem] py-[0.2rem] font-mono text-primary-foreground text-sm outline-none before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:-rotate-1 before:rounded-xs before:bg-primary">
            CREANTLY_KEY=ITSTIMETOBUILD
          </code>
        </p>

        <CodeBlock
          code={code}
          copyButton={false}
          language="json"
          showLineNumbers={false}
          title="package.json"
        />

        <p className="not-first:mt-6 leading-relaxed">
          creantly is not a single product — it is a structured ecosystem of
          companies, tools and systems designed to operate together.
        </p>

        <p className="not-first:mt-6 leading-relaxed">
          we handle infrastructure, orchestration and execution so teams can
          focus on growth and outcomes.
        </p>

        <p className="not-first:mt-6 leading-relaxed">
          practical automation. measurable impact. scalable systems.
        </p>

        <p className="not-first:mt-6 leading-relaxed">
          if you are looking to integrate AI into your business operations, join
          the early access{" "}
          <a
            className="font-medium underline underline-offset-4"
            href="https://i.hookra.com/forms/0129f2a8-7b15-4850-b3fb-07944dfacb3c"
          >
            waitlist
          </a>{" "}
          or explore opportunities to work with us{" "}
          <a
            className="font-medium underline underline-offset-4"
            href="https://hookra.com/jobs"
          >
            here
          </a>
          .
        </p>

        <p className="not-first:mt-6 leading-relaxed">best,</p>
        <p className="not-first:mt-6 leading-relaxed">Nessin Alvarado</p>
      </div>
    </main>
  );
}
