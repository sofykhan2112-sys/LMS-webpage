import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BarChart3,
  BookOpenCheck,
  BrainCircuit,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  FileText,
  GraduationCap,
  Languages,
  LockKeyhole,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Zap
} from "lucide-react";
import "./styles.css";

const painPoints = [
  {
    title: "Generic training loses attention",
    body: "Every employee gets the same modules, so real knowledge gaps stay hidden.",
    icon: UsersRound
  },
  {
    title: "Manual follow-ups waste admin time",
    body: "Enrollment, reminders, completion checks and spreadsheets slow security teams down.",
    icon: Clock3
  },
  {
    title: "Compliance proof is scattered",
    body: "Leaders need clean audit trails, campaign history and measurable risk movement.",
    icon: ClipboardCheck
  }
];

const workflow = [
  "Assess each user across cyber-risk areas",
  "Assign bite-sized modules by weakness",
  "Send reminders and escalations automatically",
  "Report readiness, completion and risk reduction"
];

const features = [
  {
    title: "Role-based learning paths",
    body: "Training adapts by team, role, seniority and user behavior.",
    icon: BrainCircuit
  },
  {
    title: "Custom course library",
    body: "Add internal policies, videos and quizzes in a branded LMS portal.",
    icon: BookOpenCheck
  },
  {
    title: "Phishing-linked coaching",
    body: "Trigger corrective lessons when risky clicks or reporting gaps appear.",
    icon: ShieldCheck
  },
  {
    title: "Audit-ready reporting",
    body: "Track completion, scores, certificates and evidence from one dashboard.",
    icon: FileText
  },
  {
    title: "Multi-language delivery",
    body: "Serve teams in their preferred language with clear completion tracking.",
    icon: Languages
  },
  {
    title: "Automated nudges",
    body: "Keep learners moving with scheduled reminders and manager visibility.",
    icon: Zap
  }
];

function App() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-rose-50 to-red-100 text-ink">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-red-200/70 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-rose-100 blur-3xl" />

        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-md border border-red-200 bg-white shadow-sm">
              <LockKeyhole className="h-5 w-5 text-cyber" />
            </div>
            <div>
              <p className="text-lg font-semibold tracking-wide">RISQORA</p>
              <p className="text-xs uppercase tracking-[0.24em] text-red-700/70">Secure LMS</p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-slate-700 md:flex">
            <a href="#training">Training</a>
            <a href="#features">Features</a>
            <a href="#reporting">Reporting</a>
          </nav>
          <a
            href="#demo"
            className="inline-flex items-center gap-2 rounded-md bg-cyber px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700"
          >
            Request Demo
            <ArrowRight className="h-4 w-4" />
          </a>
        </header>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-12 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-24 lg:pt-20">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-200 bg-white/80 px-4 py-2 text-sm text-red-800 shadow-sm">
              <Sparkles className="h-4 w-4 text-cyber" />
              SC-MSAP Learning Management System
            </div>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-normal md:text-6xl">
              Security awareness training that runs with your risk program.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              Deliver adaptive cyber learning, automate reminders and prove compliance with a branded LMS built for modern security teams.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-cyber px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-red-700"
              >
                Get a Demo
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#training"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-red-200 bg-white/70 px-6 py-3 font-semibold text-red-800 shadow-sm transition hover:border-red-300 hover:bg-white"
              >
                <PlayCircle className="h-5 w-5" />
                See how it works
              </a>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
              {[
                ["20 min", "launch time"],
                ["90 days", "ROI visibility"],
                ["24/7", "risk tracking"]
              ].map(([value, label]) => (
                <div key={value} className="border-l border-cyber/40 pl-4">
                  <p className="text-2xl font-bold text-ink">{value}</p>
                  <p className="text-sm text-slate-600">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-lg border border-red-100 bg-white/70 p-4 shadow-glow backdrop-blur">
              <div className="rounded-md bg-white p-5 text-slate-900 shadow-sm">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">Human Risk Dashboard</p>
                    <p className="text-2xl font-bold">Training Impact</p>
                  </div>
                  <div className="rounded-md bg-red-50 px-3 py-2 text-sm font-semibold text-red-700">Live</div>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    ["86%", "Completion", "bg-cyber"],
                    ["42%", "Risk drop", "bg-red-400"],
                    ["312", "Certificates", "bg-red-300"]
                  ].map(([value, label, color]) => (
                    <div key={label} className="rounded-md border border-red-100 bg-red-50/60 p-4">
                      <p className="text-2xl font-bold">{value}</p>
                      <p className="mt-1 text-sm text-slate-500">{label}</p>
                      <div className="mt-4 h-2 rounded-full bg-red-100">
                        <div className={`h-2 rounded-full ${color}`} style={{ width: value === "312" ? "72%" : value }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-md border border-red-100 bg-white p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="font-semibold">Active learning paths</p>
                    <BarChart3 className="h-5 w-5 text-cyber" />
                  </div>
                  {["Phishing Defense", "Password Hygiene", "Data Protection", "Incident Reporting"].map((item, index) => (
                    <div key={item} className="mb-3 grid grid-cols-[1fr_auto] items-center gap-4 last:mb-0">
                      <span className="text-sm text-slate-700">{item}</span>
                      <span className="text-sm font-semibold text-red-700">{[91, 78, 84, 69][index]}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-azure">Why teams need it</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Same training cannot solve different risks.</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {painPoints.map(({ title, body, icon: Icon }) => (
              <article key={title} className="rounded-lg border border-slate-200 bg-slate-50 p-6">
                <Icon className="h-7 w-7 text-azure" />
                <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="training" className="bg-frost py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-azure">Adaptive LMS</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Turn assessment gaps into automatic learning journeys.</h2>
            <p className="mt-5 leading-8 text-slate-600">
              Risqora LMS helps employees learn in short focused modules, while admins get automated enrollment, reminders, reporting and compliance evidence.
            </p>
            <a
              href="#features"
              className="mt-7 inline-flex items-center gap-2 rounded-md bg-navy px-5 py-3 font-semibold text-white transition hover:bg-azure"
            >
              Explore features
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            {workflow.map((item, index) => (
              <div key={item} className="flex gap-4 border-b border-slate-100 py-5 first:pt-0 last:border-0 last:pb-0">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-cyber/15 font-bold text-azure">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold">{item}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Keep delivery simple for admins and relevant for every learner.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-azure">Platform capabilities</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Everything needed to run awareness training properly.</h2>
            </div>
            <p className="max-w-md leading-7 text-slate-600">
              Built for security teams that need adoption, reporting and measurable behavior change without heavy admin work.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map(({ title, body, icon: Icon }) => (
              <article key={title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-cyber/60 hover:shadow-md">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-navy text-cyber">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="reporting" className="bg-navy py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyber">Compliance proof</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Clear evidence for audits, leadership and client reviews.</h2>
            <p className="mt-5 leading-8 text-slate-300">
              Monitor user progress, overdue modules, quiz performance and certificate status from a dashboard designed for fast decisions.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Completion reports",
              "Risk score trends",
              "Learner certificates",
              "Manager summaries"
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.06] p-5">
                <CheckCircle2 className="h-5 w-5 text-mint" />
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="demo" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-lg bg-ink px-6 py-12 text-center text-white md:px-12">
            <GraduationCap className="mx-auto h-12 w-12 text-cyber" />
            <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-bold md:text-4xl">Launch a branded LMS for cybersecurity awareness.</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-300">
              Train people, reduce human risk and keep compliance evidence ready from one Risqora Secure experience.
            </p>
            <a
              href="mailto:support@risqorasecure.com"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-cyber px-6 py-3 font-semibold text-white transition hover:bg-red-700"
            >
              Request a Demo
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
