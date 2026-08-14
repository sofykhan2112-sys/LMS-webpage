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

const whyLms = [
  "Centralizes all training content, records, and progress in one place instead of scattered spreadsheets, emails, and folders.",
  "Makes cybersecurity awareness consistent across the entire organization, regardless of location or department.",
  "Turns compliance from a once-a-year scramble into an always-ready, audit-documented process.",
  "Gives leadership visibility into organizational risk instead of relying on guesswork or anecdotal awareness.",
  "Scales training effortlessly as headcount grows, without adding administrative overhead.",
  "Creates accountability with completion, scores, and engagement that are tracked and attributable."
];

const usageSteps = [
  "Admins create and assign training modules based on role, department, or risk level.",
  "Employees log in from desktop, tablet, or mobile to complete courses, quizzes, and certifications at their own pace.",
  "The system sends automated reminders and deadline notifications to keep learners on track.",
  "Managers and compliance teams monitor completion rates and scores through live dashboards.",
  "Reports are generated on demand for audits, leadership reviews, or regulatory submissions.",
  "Content and assignments are refreshed periodically based on new threats, role changes, or performance gaps."
];

const employeeBenefits = [
  "Learning fits their schedule with anywhere, anytime access instead of rigid classroom sessions.",
  "Training feels relevant, not generic, because it is tailored to actual role and risk exposure.",
  "Quizzes and assessments give immediate feedback, reinforcing what employees have retained.",
  "Clear reminders help employees avoid missed deadlines or lost assignments.",
  "Builds practical confidence in spotting and responding to threats.",
  "Progress and achievements are visible, making growth feel tangible."
];

const features = [
  {
    title: "Centralized Learning Platform",
   
    icon: BookOpenCheck
  },
  {
    title: "Role-Based Training",
    
    icon: BrainCircuit
  },
  {
    title: "Real-Time Progress Tracking",
    
    icon: BarChart3
  },
  {
    title: "Assessments & Quizzes",
    icon: ClipboardCheck
  },
  {
    title: "Compliance Management",
    
    icon: FileText
  },
  {
    title: "Automated Notifications",
   
    icon: Zap
  },
  {
    title: "Anywhere, Anytime Learning",
   
    icon: UsersRound
  },
  {
    title: "Analytics & Reporting",
    
    icon: Languages
  }
];

const platformBenefits = [
  ["Improve Security Awareness"],
  ["Strengthen Compliance"],
  ["Reduce Human Risk"],
  ["Increase Engagement"],
  ["Save Administrative Time"],
  ["Measure Effectiveness"]
];



const faqs = [
  ["What is SC-LMS?", "SC-LMS is a Security Compliance Learning Management System that helps organizations deliver, manage, and track cybersecurity awareness and compliance training."],
  ["Can SC-LMS support compliance requirements?", "Yes. The platform maintains training records and generates reports that support compliance and audit requirements."],
  ["Is SC-LMS suitable for remote employees?", "Yes. Employees can access training securely from anywhere using internet-connected devices."],
  ["Can training be customized?", "Absolutely. Organizations can assign role-based learning paths and customize training content based on specific needs."],
  ["How does SC-LMS help reduce cyber risk?", "By providing continuous cybersecurity education, assessments, and awareness programs, SC-LMS helps employees recognize threats and adopt secure behaviors."]
];

const whyChoose = [
  "Easy-to-use learning platform",
  "Automated training management",
  "Compliance-ready reporting",
  "Scalable for organizations of all sizes",
  "Centralized administration",
  "Real-time analytics and insights",
  "Supports continuous learning culture"
];

function DashboardCard() {
  return (
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
  );
}

function App() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-rose-50 to-red-100 text-ink">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-red-200/70 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-rose-100 blur-3xl" />

        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <div /> 
          <nav className="hidden items-center gap-8 text-sm text-slate-700 md:flex">
            <a href="#why">Why LMS</a>
            <a href="#training">How It Works</a>
            <a href="#features">Features</a>
            <a href="#faq">FAQ</a>
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
            
            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-normal md:text-6xl">
              Security compliance learning for a stronger workforce.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              Empower your workforce with engaging, role-based cybersecurity training through a centralized learning platform designed to strengthen security awareness, improve compliance readiness, and reduce human risk.
            </p>
            <div className="fmt-8 flex flex-col gap-3 sm:flex-row">
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
                ["Role", "based learning"],
                ["Audit", "ready records"],
                ["Any", "device access"]
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
              <img
                src="/cyber-lock.png"
                alt="Cybersecurity lock"
                className="h-full max-h-[430px] min-h-[340px] w-full rounded-md object-cover shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-azure">Why LMS?</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Centralize training, compliance records, and cyber awareness.</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {whyLms.map((item, index) => (
              <article key={item} className="rounded-lg border border-red-100 bg-slate-50 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-red-50 font-bold text-azure">
                  {index + 1}
                </div>
                <p className="mt-5 leading-7 text-slate-700">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="training" className="bg-frost py-16">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-azure">How LMS is used</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">A simple operating flow for admins, employees, managers, and compliance teams.</h2>
            <p className="mt-5 leading-8 text-slate-600">
              SC-LMS keeps training assignments, reminders, completions, scores, dashboards, and reports in one controlled workflow.
            </p>
            <a
              href="#features"
              className="mt-7 inline-flex items-center gap-2 rounded-md bg-navy px-5 py-3 font-semibold text-white transition hover:bg-azure"
            >
              Explore features
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="rounded-lg border border-red-100 bg-white p-6 shadow-sm">
            {usageSteps.map((item, index) => (
              <div key={item} className="flex gap-4 border-b border-slate-100 py-5 first:pt-0 last:border-0 last:pb-0">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-cyber/15 font-bold text-azure">
                  {index + 1}
                </div>
                <p className="leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-azure">Employee benefits</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Training that feels relevant, practical, and easy to complete.</h2>
          </div>
          <div className="grid gap-4">
            {employeeBenefits.map((item) => (
              <div key={item} className="flex gap-3 rounded-lg border border-red-100 bg-red-50/40 p-4">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-azure" />
                <p className="leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-azure">Key features</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Every part of a cybersecurity training program in one platform.</h2>
            </div>
            <p className="max-w-md leading-7 text-slate-600">
              SC-LMS brings content, tracking, assessment, notifications, analytics, and reporting into a centralized learning platform.
            </p>
          </div>
          <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {features.map(({ title, body, icon: Icon }) => (
              <article key={title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-cyber/60 hover:shadow-md">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-navy text-cyber">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="reporting" className="bg-navy py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyber">SC-LMS benefits</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-bold md:text-4xl">Move the metrics that matter: awareness, compliance, risk, and engagement.</h2>
            <p className="mt-5 max-w-3xl leading-8 text-slate-300">
              Beyond delivering training, SC-LMS is built to improve security behavior while saving administrative time.
            </p>
          </div>
       <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
  {platformBenefits.map(([title, body]) => (
    <div key={title} className="rounded-lg border border-white/10 bg-white/[0.06] p-4">
      <CheckCircle2 className="h-5 w-5 text-mint" />
      <h3 className="mt-3 font-semibold">{title}</h3>
    </div>
  ))}
</div>    
        </div>
      </section>

      

      <section id="faq" className="bg-frost py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-azure">Frequently asked questions</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Common SC-LMS questions.</h2>
          </div>
          <div className="grid gap-4">
            {faqs.map(([question, answer]) => (
              <article key={question} className="rounded-lg border border-red-100 bg-white p-5 shadow-sm">
                <h3 className="font-semibold text-slate-950">{question}</h3>
                <p className="mt-3 leading-7 text-slate-600">{answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="demo" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-8 rounded-lg bg-ink px-6 py-10 text-white md:px-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="text-center lg:text-left">
              <GraduationCap className="mx-auto h-12 w-12 text-cyber lg:mx-0" />
              <h2 className="mt-5 max-w-2xl text-3xl font-bold md:text-4xl">Launch a branded LMS for cybersecurity awareness.</h2>
              <p className="mt-4 max-w-2xl leading-8 text-slate-300">
                Train people, reduce human risk and keep compliance evidence ready from one Risqora Secure experience.
              </p>
              <div className="mt-6 grid gap-2 text-left sm:grid-cols-2">
                {whyChoose.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-slate-200">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-cyber" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <a
                href="mailto:support@risqorasecure.com"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-cyber px-6 py-3 font-semibold text-white transition hover:bg-red-700"
              >
                Request a Demo
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
            <DashboardCard />
          </div>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);