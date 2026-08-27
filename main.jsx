
import React, { useEffect, useState } from "react";
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

/* -------------------------------------------------------------------- */
/* Design tokens (from tailwind.config.js + styles.css)                  */
/* -------------------------------------------------------------------- */
const colors = {
  ink: "#190707",
  navy: "#7f1d1d",
  cyber: "#dc2626",
  cyberHover: "#b91c1c", // hover:bg-red-700
  azure: "#ef4444",
  mint: "#fff1f2",
  frost: "#fff7f7",
  white: "#ffffff",
  slate50: "#f8fafc",
  slate100: "#f1f5f9",
  slate200: "#e2e8f0",
  slate300: "#cbd5e1",
  slate500: "#64748b",
  slate600: "#475569",
  slate700: "#334155",
  slate900: "#0f172a",
  slate950: "#020617",
  red50: "#fef2f2",
  red100: "#fee2e2",
  red200: "#fecaca",
  red300: "#fca5a5",
  red400: "#f87171",
  red700: "#b91c1c",
  rose50: "#fff1f2",
  rose100: "#ffe4e6"
};

const shadowGlow = "0 24px 80px rgba(220, 38, 38, 0.2)";
const shadowSm = "0 1px 2px 0 rgb(0 0 0 / 0.05)";
const shadowMd = "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)";

/* -------------------------------------------------------------------- */
/* Responsive helper (replaces Tailwind's sm:/md:/lg: prefixes)          */
/* -------------------------------------------------------------------- */
function useBreakpoint() {
  const [size, setSize] = useState(() => ({
    sm: typeof window !== "undefined" ? window.innerWidth >= 640 : false,
    md: typeof window !== "undefined" ? window.innerWidth >= 768 : false,
    lg: typeof window !== "undefined" ? window.innerWidth >= 1024 : false
  }));

  useEffect(() => {
    function onResize() {
      setSize({
        sm: window.innerWidth >= 640,
        md: window.innerWidth >= 768,
        lg: window.innerWidth >= 1024
      });
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return size;
}

/* -------------------------------------------------------------------- */
/* Global (formerly :root / html / body / a) reset — applied via effect  */
/* since those selectors target elements outside the React tree.        */
/* -------------------------------------------------------------------- */
function useGlobalBaseStyles() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.style.margin = "0";
    document.body.style.fontFamily =
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
    document.body.style.color = colors.slate900;
    document.body.style.background = colors.slate50;
  }, []);
}

/* -------------------------------------------------------------------- */
/* Data                                                                  */
/* -------------------------------------------------------------------- */
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
  { title: "Centralized Learning Platform", icon: BookOpenCheck },
  { title: "Role-Based Training", icon: BrainCircuit },
  { title: "Real-Time Progress Tracking", icon: BarChart3 },
  { title: "Assessments & Quizzes", icon: ClipboardCheck },
  { title: "Compliance Management", icon: FileText },
  { title: "Automated Notifications", icon: Zap },
  { title: "Anywhere, Anytime Learning", icon: UsersRound },
  { title: "Analytics & Reporting", icon: Languages }
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

/* -------------------------------------------------------------------- */
/* Shared link/button hover helper                                       */
/* -------------------------------------------------------------------- */
function withHover(baseStyle, hoverStyle) {
  return {
    style: baseStyle,
    onMouseEnter: (e) => Object.assign(e.currentTarget.style, hoverStyle),
    onMouseLeave: (e) => Object.assign(e.currentTarget.style, baseStyle)
  };
}

/* -------------------------------------------------------------------- */
/* Dashboard card                                                        */
/* -------------------------------------------------------------------- */
function DashboardCard({ bp }) {
  return (
    <div
      style={{
        borderRadius: "0.5rem",
        border: `1px solid ${colors.red100}`,
        background: "rgba(255,255,255,0.7)",
        padding: "1rem",
        boxShadow: shadowGlow,
        backdropFilter: "blur(8px)"
      }}
    >
      <div
        style={{
          borderRadius: "0.375rem",
          background: colors.white,
          padding: "1.25rem",
          color: colors.slate900,
          boxShadow: shadowSm
        }}
      >
        <div
          style={{
            marginBottom: "1.25rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <div>
            <p style={{ fontSize: "0.875rem", lineHeight: "1.25rem", color: colors.slate500, margin: 0 }}>
              Human Risk Dashboard
            </p>
            <p style={{ fontSize: "1.5rem", lineHeight: "2rem", fontWeight: 700, margin: 0 }}>
              Training Impact
            </p>
          </div>
          <div
            style={{
              borderRadius: "0.375rem",
              background: colors.red50,
              padding: "0.5rem 0.75rem",
              fontSize: "0.875rem",
              lineHeight: "1.25rem",
              fontWeight: 600,
              color: colors.red700
            }}
          >
            Live
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: bp.sm ? "repeat(3, minmax(0, 1fr))" : "repeat(1, minmax(0, 1fr))",
            gap: "1rem"
          }}
        >
          {[
            ["86%", "Completion", colors.cyber],
            ["42%", "Risk drop", colors.red400],
            ["312", "Certificates", colors.red300]
          ].map(([value, label, barColor]) => (
            <div
              key={label}
              style={{
                borderRadius: "0.375rem",
                border: `1px solid ${colors.red100}`,
                background: "rgba(254,242,242,0.6)",
                padding: "1rem"
              }}
            >
              <p style={{ fontSize: "1.5rem", lineHeight: "2rem", fontWeight: 700, margin: 0 }}>{value}</p>
              <p style={{ marginTop: "0.25rem", fontSize: "0.875rem", lineHeight: "1.25rem", color: colors.slate500 }}>
                {label}
              </p>
              <div style={{ marginTop: "1rem", height: "0.5rem", borderRadius: "9999px", background: colors.red100 }}>
                <div
                  style={{
                    height: "0.5rem",
                    borderRadius: "9999px",
                    background: barColor,
                    width: value === "312" ? "72%" : value
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            marginTop: "1.25rem",
            borderRadius: "0.375rem",
            border: `1px solid ${colors.red100}`,
            background: colors.white,
            padding: "1rem"
          }}
        >
          <div style={{ marginBottom: "1rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <p style={{ fontWeight: 600, margin: 0 }}>Active learning paths</p>
            <BarChart3 style={{ height: "1.25rem", width: "1.25rem", color: colors.cyber }} />
          </div>
          {["Phishing Defense", "Password Hygiene", "Data Protection", "Incident Reporting"].map((item, index, arr) => (
            <div
              key={item}
              style={{
                marginBottom: index === arr.length - 1 ? 0 : "0.75rem",
                display: "grid",
                gridTemplateColumns: "1fr auto",
                alignItems: "center",
                gap: "1rem",
                paddingTop: "0.75rem",
                paddingBottom: index === arr.length - 1 ? 0 : "0.75rem",
                borderBottom: index === arr.length - 1 ? "none" : `1px solid ${colors.slate100}`
              }}
            >
              <span style={{ fontSize: "0.875rem", lineHeight: "1.25rem", color: colors.slate700 }}>{item}</span>
              <span style={{ fontSize: "0.875rem", lineHeight: "1.25rem", fontWeight: 600, color: colors.red700 }}>
                {[91, 78, 84, 69][index]}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------- */
/* App                                                                    */
/* -------------------------------------------------------------------- */
function App() {
  const bp = useBreakpoint();
  useGlobalBaseStyles();

  const ctaBase = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    borderRadius: "0.375rem",
    background: colors.cyber,
    padding: "0.5rem 1rem",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    fontWeight: 600,
    color: colors.white,
    boxShadow: shadowSm,
    textDecoration: "none",
    transition: "background-color 0.15s ease"
  };

  const getDemoBase = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    borderRadius: "0.375rem",
    background: colors.cyber,
    padding: "0.75rem 1.5rem",
    fontWeight: 600,
    color: colors.white,
    boxShadow: shadowSm,
    textDecoration: "none",
    transition: "background-color 0.15s ease"
  };

  const seeHowBase = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    borderRadius: "0.375rem",
    border: `1px solid ${colors.red200}`,
    background: "rgba(255,255,255,0.7)",
    padding: "0.75rem 1.5rem",
    fontWeight: 600,
    color: colors.red700 === colors.red700 ? "#991b1b" : "#991b1b", // text-red-800
    boxShadow: shadowSm,
    textDecoration: "none",
    transition: "background-color 0.15s ease, border-color 0.15s ease"
  };

  const exploreBase = {
    marginTop: "1.75rem",
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    borderRadius: "0.375rem",
    background: colors.navy,
    padding: "0.75rem 1.25rem",
    fontWeight: 600,
    color: colors.white,
    textDecoration: "none",
    transition: "background-color 0.15s ease"
  };

  const requestDemoBottomBase = {
    marginTop: "2rem",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    borderRadius: "0.375rem",
    background: colors.cyber,
    padding: "0.75rem 1.5rem",
    fontWeight: 600,
    color: colors.white,
    textDecoration: "none",
    transition: "background-color 0.15s ease"
  };

  return (
    <main style={{ minHeight: "100vh", background: colors.slate50, color: colors.slate900 }}>
      {/* ---------------- Hero ---------------- */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          background: `linear-gradient(to bottom right, ${colors.white}, ${colors.rose50}, ${colors.red100})`,
          color: colors.ink
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.5,
            backgroundImage:
              "linear-gradient(rgba(220, 38, 38, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(220, 38, 38, 0.08) 1px, transparent 1px)",
            backgroundSize: "44px 44px"
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "-8rem",
            top: "2.5rem",
            height: "24rem",
            width: "24rem",
            borderRadius: "9999px",
            background: "rgba(254,202,202,0.7)",
            filter: "blur(64px)"
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "-6rem",
            bottom: 0,
            height: "20rem",
            width: "20rem",
            borderRadius: "9999px",
            background: colors.rose100,
            filter: "blur(64px)"
          }}
        />

        <header
          style={{
            position: "relative",
            zIndex: 10,
            margin: "0 auto",
            display: "flex",
            maxWidth: "80rem",
            alignItems: "center",
            justifyContent: "space-between",
            padding: bp.lg ? "1.25rem 2rem" : "1.25rem 1.5rem"
          }}
        >
          <div />
          <nav
            style={{
              display: bp.md ? "flex" : "none",
              alignItems: "center",
              gap: "2rem",
              fontSize: "0.875rem",
              lineHeight: "1.25rem",
              color: colors.slate700
            }}
          >
            <a href="#why" style={{ textDecoration: "none", color: "inherit" }}>Why LMS</a>
            <a href="#training" style={{ textDecoration: "none", color: "inherit" }}>How It Works</a>
            <a href="#features" style={{ textDecoration: "none", color: "inherit" }}>Features</a>
            <a href="#faq" style={{ textDecoration: "none", color: "inherit" }}>FAQ</a>
          </nav>
          <a href="#demo" {...withHover(ctaBase, { background: colors.cyberHover })}>
            Request Demo
            <ArrowRight style={{ height: "1rem", width: "1rem" }} />
          </a>
        </header>

        <div
          style={{
            position: "relative",
            zIndex: 10,
            margin: "0 auto",
            display: "grid",
            maxWidth: "80rem",
            alignItems: "center",
            gap: "3rem",
            padding: bp.lg
              ? "3rem 2rem 6rem 2rem"
              : "3rem 1.5rem 5rem 1.5rem",
            gridTemplateColumns: bp.lg ? "1.02fr 0.98fr" : "1fr"
          }}
        >
          <div>
            <h1
              style={{
                maxWidth: "48rem",
                fontSize: bp.md ? "3.75rem" : "2.25rem",
                lineHeight: bp.md ? "1" : "2.5rem",
                fontWeight: 700,
                letterSpacing: "0em",
                margin: 0
              }}
            >
              Security compliance learning for a stronger workforce.
            </h1>
            <p
              style={{
                marginTop: "1.5rem",
                maxWidth: "42rem",
                fontSize: "1.125rem",
                lineHeight: "2rem",
                color: colors.slate700
              }}
            >
              Empower your workforce with engaging, role-based cybersecurity training through a centralized learning platform designed to strengthen security awareness, improve compliance readiness, and reduce human risk.
            </p>
            <div
              style={{
                marginTop: "2rem",
                display: "flex",
                flexDirection: bp.sm ? "row" : "column",
                gap: "0.75rem"
              }}
            >
              <a href="#demo" {...withHover(getDemoBase, { background: colors.cyberHover })}>
                Get a Demo
                <ArrowRight style={{ height: "1.25rem", width: "1.25rem" }} />
              </a>
              <a
                href="#training"
                {...withHover(seeHowBase, { borderColor: colors.red300, background: colors.white })}
              >
                <PlayCircle style={{ height: "1.25rem", width: "1.25rem" }} />
                See how it works
              </a>
            </div>
            <div
              style={{
                marginTop: "2.5rem",
                display: "grid",
                maxWidth: "36rem",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: "1rem"
              }}
            >
              {[
                ["Role", "based learning"],
                ["Audit", "ready records"],
                ["Any", "device access"]
              ].map(([value, label]) => (
                <div
                  key={value}
                  style={{ borderLeft: `1px solid rgba(220,38,38,0.4)`, paddingLeft: "1rem" }}
                >
                  <p style={{ fontSize: "1.5rem", lineHeight: "2rem", fontWeight: 700, color: colors.ink, margin: 0 }}>
                    {value}
                  </p>
                  <p style={{ fontSize: "0.875rem", lineHeight: "1.25rem", color: colors.slate600, margin: 0 }}>
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ position: "relative" }}>
            <div
              style={{
                borderRadius: "0.5rem",
                border: `1px solid ${colors.red100}`,
                background: "rgba(255,255,255,0.7)",
                padding: "1rem",
                boxShadow: shadowGlow,
                backdropFilter: "blur(8px)"
              }}
            >
              <img
                src="/cyber-lock.png"
                alt="Cybersecurity lock"
                style={{
                  height: "100%",
                  maxHeight: "430px",
                  minHeight: "340px",
                  width: "100%",
                  borderRadius: "0.375rem",
                  objectFit: "cover",
                  boxShadow: shadowSm
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Why LMS ---------------- */}
      <section id="why" style={{ background: colors.white }}>
        <div style={{ margin: "0 auto", maxWidth: "80rem", padding: bp.lg ? "4rem 2rem" : "4rem 1.5rem" }}>
          <div style={{ maxWidth: "48rem" }}>
            <p
              style={{
                fontSize: "0.875rem",
                lineHeight: "1.25rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: colors.azure,
                margin: 0
              }}
            >
              Why LMS?
            </p>
            <h2
              style={{
                marginTop: "0.75rem",
                fontSize: bp.md ? "2.25rem" : "1.875rem",
                lineHeight: bp.md ? "2.5rem" : "2.25rem",
                fontWeight: 700
              }}
            >
              Centralize training, compliance records, and cyber awareness.
            </h2>
          </div>
          <div
            style={{
              marginTop: "2.5rem",
              display: "grid",
              gridTemplateColumns: bp.lg
                ? "repeat(3, minmax(0, 1fr))"
                : bp.md
                ? "repeat(2, minmax(0, 1fr))"
                : "repeat(1, minmax(0, 1fr))",
              gap: "1.25rem"
            }}
          >
            {whyLms.map((item, index) => (
              <article
                key={item}
                style={{
                  borderRadius: "0.5rem",
                  border: `1px solid ${colors.red100}`,
                  background: colors.slate50,
                  padding: "1.5rem"
                }}
              >
                <div
                  style={{
                    display: "flex",
                    height: "2.5rem",
                    width: "2.5rem",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "0.375rem",
                    background: colors.red50,
                    fontWeight: 700,
                    color: colors.azure
                  }}
                >
                  {index + 1}
                </div>
                <p style={{ marginTop: "1.25rem", lineHeight: "1.75rem", color: colors.slate700 }}>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- How LMS is used ---------------- */}
      <section id="training" style={{ background: colors.frost, padding: "4rem 0" }}>
        <div
          style={{
            margin: "0 auto",
            display: "grid",
            maxWidth: "80rem",
            alignItems: "start",
            gap: "2.5rem",
            padding: bp.lg ? "0 2rem" : "0 1.5rem",
            gridTemplateColumns: bp.lg ? "0.9fr 1.1fr" : "1fr"
          }}
        >
          <div>
            <p
              style={{
                fontSize: "0.875rem",
                lineHeight: "1.25rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: colors.azure,
                margin: 0
              }}
            >
              How LMS is used
            </p>
            <h2
              style={{
                marginTop: "0.75rem",
                fontSize: bp.md ? "2.25rem" : "1.875rem",
                lineHeight: bp.md ? "2.5rem" : "2.25rem",
                fontWeight: 700
              }}
            >
              A simple operating flow for admins, employees, managers, and compliance teams.
            </h2>
            <p style={{ marginTop: "1.25rem", lineHeight: "2rem", color: colors.slate600 }}>
              SC-LMS keeps training assignments, reminders, completions, scores, dashboards, and reports in one controlled workflow.
            </p>
            <a href="#features" {...withHover(exploreBase, { background: colors.azure })}>
              Explore features
              <ArrowRight style={{ height: "1rem", width: "1rem" }} />
            </a>
          </div>
          <div
            style={{
              borderRadius: "0.5rem",
              border: `1px solid ${colors.red100}`,
              background: colors.white,
              padding: "1.5rem",
              boxShadow: shadowSm
            }}
          >
            {usageSteps.map((item, index, arr) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  gap: "1rem",
                  borderBottom: index === arr.length - 1 ? "none" : `1px solid ${colors.slate100}`,
                  padding: "1.25rem 0",
                  paddingTop: index === 0 ? 0 : "1.25rem",
                  paddingBottom: index === arr.length - 1 ? 0 : "1.25rem"
                }}
              >
                <div
                  style={{
                    display: "flex",
                    height: "2.5rem",
                    width: "2.5rem",
                    flexShrink: 0,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "0.375rem",
                    background: "rgba(220,38,38,0.15)",
                    fontWeight: 700,
                    color: colors.azure
                  }}
                >
                  {index + 1}
                </div>
                <p style={{ lineHeight: "1.75rem", color: colors.slate700, margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Employee benefits ---------------- */}
      <section style={{ background: colors.white, padding: "4rem 0" }}>
        <div
          style={{
            margin: "0 auto",
            display: "grid",
            maxWidth: "80rem",
            gap: "2.5rem",
            padding: bp.lg ? "0 2rem" : "0 1.5rem",
            gridTemplateColumns: bp.lg ? "1fr 1fr" : "1fr"
          }}
        >
          <div>
            <p
              style={{
                fontSize: "0.875rem",
                lineHeight: "1.25rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: colors.azure,
                margin: 0
              }}
            >
              Employee benefits
            </p>
            <h2
              style={{
                marginTop: "0.75rem",
                fontSize: bp.md ? "2.25rem" : "1.875rem",
                lineHeight: bp.md ? "2.5rem" : "2.25rem",
                fontWeight: 700
              }}
            >
              Training that feels relevant, practical, and easy to complete.
            </h2>
          </div>
          <div style={{ display: "grid", gap: "1rem" }}>
            {employeeBenefits.map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  borderRadius: "0.5rem",
                  border: `1px solid ${colors.red100}`,
                  background: "rgba(254,242,242,0.4)",
                  padding: "1rem"
                }}
              >
                <CheckCircle2 style={{ marginTop: "0.25rem", height: "1.25rem", width: "1.25rem", flexShrink: 0, color: colors.azure }} />
                <p style={{ lineHeight: "1.75rem", color: colors.slate700, margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Features ---------------- */}
      <section id="features" style={{ background: colors.white, padding: "4rem 0" }}>
        <div style={{ margin: "0 auto", maxWidth: "80rem", padding: bp.lg ? "0 2rem" : "0 1.5rem" }}>
          <div
            style={{
              display: "flex",
              flexDirection: bp.md ? "row" : "column",
              justifyContent: "space-between",
              gap: "1.25rem",
              alignItems: bp.md ? "flex-end" : "stretch"
            }}
          >
            <div style={{ maxWidth: "42rem" }}>
              <p
                style={{
                  fontSize: "0.875rem",
                  lineHeight: "1.25rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  color: colors.azure,
                  margin: 0
                }}
              >
                Key features
              </p>
              <h2
                style={{
                  marginTop: "0.75rem",
                  fontSize: bp.md ? "2.25rem" : "1.875rem",
                  lineHeight: bp.md ? "2.5rem" : "2.25rem",
                  fontWeight: 700
                }}
              >
                Every part of a cybersecurity training program in one platform.
              </h2>
            </div>
            <p style={{ maxWidth: "28rem", lineHeight: "1.75rem", color: colors.slate600 }}>
              SC-LMS brings content, tracking, assessment, notifications, analytics, and reporting into a centralized learning platform.
            </p>
          </div>
          <div
            style={{
              marginTop: "2.5rem",
              display: "grid",
              gridTemplateColumns: bp.lg
                ? "repeat(3, minmax(0, 1fr))"
                : bp.md
                ? "repeat(2, minmax(0, 1fr))"
                : "repeat(1, minmax(0, 1fr))",
              gap: "0.75rem"
            }}
          >
            {features.map(({ title, icon: Icon }) => (
              <article
                key={title}
                style={{
                  borderRadius: "0.5rem",
                  border: `1px solid ${colors.slate200}`,
                  background: colors.white,
                  padding: "1.25rem",
                  boxShadow: shadowSm,
                  transition: "transform 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-0.25rem)";
                  e.currentTarget.style.borderColor = "rgba(220,38,38,0.6)";
                  e.currentTarget.style.boxShadow = shadowMd;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = colors.slate200;
                  e.currentTarget.style.boxShadow = shadowSm;
                }}
              >
                <div
                  style={{
                    display: "flex",
                    height: "2.25rem",
                    width: "2.25rem",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "0.375rem",
                    background: colors.navy,
                    color: colors.cyber
                  }}
                >
                  <Icon style={{ height: "1.25rem", width: "1.25rem" }} />
                </div>
                <h3 style={{ marginTop: "1rem", fontSize: "1.125rem", lineHeight: "1.75rem", fontWeight: 600 }}>
                  {title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- SC-LMS benefits ---------------- */}
      <section id="reporting" style={{ background: colors.navy, padding: "4rem 0", color: colors.white }}>
        <div style={{ margin: "0 auto", maxWidth: "80rem", padding: bp.lg ? "0 2rem" : "0 1.5rem" }}>
          <div>
            <p
              style={{
                fontSize: "0.875rem",
                lineHeight: "1.25rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: colors.cyber,
                margin: 0
              }}
            >
              SC-LMS benefits
            </p>
            <h2
              style={{
                marginTop: "0.75rem",
                maxWidth: "48rem",
                fontSize: bp.md ? "2.25rem" : "1.875rem",
                lineHeight: bp.md ? "2.5rem" : "2.25rem",
                fontWeight: 700
              }}
            >
              Move the metrics that matter: awareness, compliance, risk, and engagement.
            </h2>
            <p style={{ marginTop: "1.25rem", maxWidth: "48rem", lineHeight: "2rem", color: colors.slate300 }}>
              Beyond delivering training, SC-LMS is built to improve security behavior while saving administrative time.
            </p>
          </div>
          <div
            style={{
              marginTop: "2.5rem",
              display: "grid",
              gridTemplateColumns: bp.lg
                ? "repeat(3, minmax(0, 1fr))"
                : bp.md
                ? "repeat(2, minmax(0, 1fr))"
                : "repeat(1, minmax(0, 1fr))",
              gap: "0.75rem"
            }}
          >
            {platformBenefits.map(([title]) => (
              <div
                key={title}
                style={{
                  borderRadius: "0.5rem",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.06)",
                  padding: "1rem"
                }}
              >
                <CheckCircle2 style={{ height: "1.25rem", width: "1.25rem", color: colors.mint }} />
                <h3 style={{ marginTop: "0.75rem", fontWeight: 600, margin: "0.75rem 0 0 0" }}>{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section id="faq" style={{ background: colors.frost, padding: "4rem 0" }}>
        <div
          style={{
            margin: "0 auto",
            display: "grid",
            maxWidth: "80rem",
            gap: "2.5rem",
            padding: bp.lg ? "0 2rem" : "0 1.5rem",
            gridTemplateColumns: bp.lg ? "0.8fr 1.2fr" : "1fr"
          }}
        >
          <div>
            <p
              style={{
                fontSize: "0.875rem",
                lineHeight: "1.25rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: colors.azure,
                margin: 0
              }}
            >
              Frequently asked questions
            </p>
            <h2
              style={{
                marginTop: "0.75rem",
                fontSize: bp.md ? "2.25rem" : "1.875rem",
                lineHeight: bp.md ? "2.5rem" : "2.25rem",
                fontWeight: 700
              }}
            >
              Common SC-LMS questions.
            </h2>
          </div>
          <div style={{ display: "grid", gap: "1rem" }}>
            {faqs.map(([question, answer]) => (
              <article
                key={question}
                style={{
                  borderRadius: "0.5rem",
                  border: `1px solid ${colors.red100}`,
                  background: colors.white,
                  padding: "1.25rem",
                  boxShadow: shadowSm
                }}
              >
                <h3 style={{ fontWeight: 600, color: colors.slate950, margin: 0 }}>{question}</h3>
                <p style={{ marginTop: "0.75rem", lineHeight: "1.75rem", color: colors.slate600 }}>{answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Demo CTA ---------------- */}
      <section id="demo" style={{ background: colors.white, padding: "4rem 0" }}>
        <div style={{ margin: "0 auto", maxWidth: "80rem", padding: bp.lg ? "0 2rem" : "0 1.5rem" }}>
          <div
            style={{
              display: "grid",
              alignItems: "center",
              gap: "2rem",
              borderRadius: "0.5rem",
              background: colors.ink,
              padding: bp.md ? "2.5rem" : "2.5rem 1.5rem",
              color: colors.white,
              gridTemplateColumns: bp.lg ? "0.85fr 1.15fr" : "1fr"
            }}
          >
            <div style={{ textAlign: bp.lg ? "left" : "center" }}>
              <GraduationCap
                style={{
                  margin: bp.lg ? "0" : "0 auto",
                  height: "3rem",
                  width: "3rem",
                  color: colors.cyber
                }}
              />
              <h2
                style={{
                  marginTop: "1.25rem",
                  maxWidth: "42rem",
                  fontSize: bp.md ? "2.25rem" : "1.875rem",
                  lineHeight: bp.md ? "2.5rem" : "2.25rem",
                  fontWeight: 700
                }}
              >
                Launch a branded LMS for cybersecurity awareness.
              </h2>
              <p style={{ marginTop: "1rem", maxWidth: "42rem", lineHeight: "2rem", color: colors.slate300 }}>
                Train people, reduce human risk and keep compliance evidence ready from one Risqora Secure experience.
              </p>
              <div
                style={{
                  marginTop: "1.5rem",
                  display: "grid",
                  gap: "0.5rem",
                  textAlign: "left",
                  gridTemplateColumns: bp.sm ? "repeat(2, minmax(0, 1fr))" : "1fr"
                }}
              >
                {whyChoose.map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", lineHeight: "1.25rem", color: colors.slate200 }}>
                    <CheckCircle2 style={{ height: "1rem", width: "1rem", flexShrink: 0, color: colors.cyber }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <a
                href="mailto:support@risqorasecure.com"
                {...withHover(requestDemoBottomBase, { background: colors.cyberHover })}
              >
                Request a Demo
                <ArrowRight style={{ height: "1.25rem", width: "1.25rem" }} />
              </a>
            </div>
            <DashboardCard bp={bp} />
          </div>
        </div>
      </section>
    </main>
  );
}
export default App;
createRoot(document.getElementById("root")).render(<App />);