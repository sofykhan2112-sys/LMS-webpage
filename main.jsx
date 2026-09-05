
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
  ink: "#080808",
  inkDeep: "#050505",
  navy: "#5c0000",
  navyMid: "#720000",
  navyDeep: "#850000",
  navyDark: "#560000",
  cyber: "#e00000",
  cyberHover: "#ff1515",
  cyberMid: "#d00000",
  cyberDarker: "#c40000",
  cyberSoft: "#c00000",
  cyberLabel: "#b00000",
  azure: "#e00000",
  mint: "#fff1f2",
  frost: "#f2f2f0",
  white: "#ffffff",
  offWhite: "#f5f5f5",
  slate50: "#f8fafc",
  slate100: "#f1f5f9",
  slate200: "#e2e8f0",
  slate300: "#cbd5e1",
  slate500: "#64748b",
  slate600: "#475569",
  slate700: "#334155",
  slate900: "#0f172a",
  slate950: "#020617",
  textDim: "#999",
  textMuted: "#888",
  textSoft: "#777",
  textFaint: "#666",
  textXfaint: "#555",
  borderFaint: "#444",
  borderLine: "#222",
  red50: "#fef2f2",
  red100: "#fee2e2",
  red200: "#fecaca",
  red300: "#fca5a5",
  red400: "#f87171",
  red700: "#b91c1c",
  rose50: "#fff1f2",
  rose100: "#ffe4e6"
};

const shadowGlow = "0 20px 60px rgba(0, 0, 0, 0.25)";
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
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, Helvetica, sans-serif';
    document.body.style.color = colors.white;
    document.body.style.background = colors.inkDeep;
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
        border: "1px solid rgba(255, 255, 255, 0.08)",
        background: "rgba(8, 8, 8, 0.7)",
        padding: "1rem",
        boxShadow: shadowGlow,
        backdropFilter: "blur(8px)"
      }}
    >
      <div
        style={{
          borderRadius: "0.375rem",
          background: colors.inkDeep,
          padding: "1.25rem",
          color: colors.white,
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
            <p style={{ fontSize: "0.875rem", lineHeight: "1.25rem", color: colors.textMuted, margin: 0 }}>
              Human Risk Dashboard
            </p>
            <p style={{ fontSize: "1.5rem", lineHeight: "2rem", fontWeight: 700, margin: 0 }}>
              Training Impact
            </p>
          </div>
          <div
            style={{
              borderRadius: "0.375rem",
              background: "rgba(224, 0, 0, 0.12)",
              padding: "0.5rem 0.75rem",
              fontSize: "0.875rem",
              lineHeight: "1.25rem",
              fontWeight: 600,
              color: colors.cyber
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
                border: "1px solid rgba(224, 0, 0, 0.2)",
                background: "rgba(224, 0, 0, 0.06)",
                padding: "1rem"
              }}
            >
              <p style={{ fontSize: "1.5rem", lineHeight: "2rem", fontWeight: 700, margin: 0 }}>{value}</p>
              <p style={{ marginTop: "0.25rem", fontSize: "0.875rem", lineHeight: "1.25rem", color: colors.textDim }}>
                {label}
              </p>
              <div style={{ marginTop: "1rem", height: "0.5rem", borderRadius: "9999px", background: "rgba(255,255,255,0.1)" }}>
                <div
                  style={{
                    height: "0.5rem",
                    borderRadius: "9999px",
                    background: barColor,
                    width: value === "312" ? "72%" : value,
                    boxShadow: `0 0 10px ${barColor}`
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
            border: "1px solid rgba(255, 255, 255, 0.08)",
            background: colors.ink,
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
                borderBottom: index === arr.length - 1 ? "none" : `1px solid rgba(255,255,255,0.08)`
              }}
            >
              <span style={{ fontSize: "0.875rem", lineHeight: "1.25rem", color: colors.textDim }}>{item}</span>
              <span style={{ fontSize: "0.875rem", lineHeight: "1.25rem", fontWeight: 600, color: colors.cyber }}>
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
    gap: "12px",
    padding: "11px 20px",
    color: colors.white,
    textDecoration: "none",
    border: `1px solid rgba(255, 255, 255, 0.2)`,
    borderRadius: "30px",
    fontSize: "12px",
    letterSpacing: "1px",
    transition: "0.3s",
    background: "transparent"
  };

  const getDemoBase = {
    display: "inline-flex",
    alignItems: "center",
    gap: "20px",
    padding: "15px 22px",
    background: colors.cyber,
    color: colors.white,
    textDecoration: "none",
    fontSize: "13px",
    fontWeight: 600,
    transition: "0.3s",
    border: "none"
  };

  const seeHowBase = {
    color: colors.textXfaint,
    textDecoration: "none",
    fontSize: "13px",
    borderBottom: `1px solid ${colors.borderFaint}`,
    paddingBottom: "5px",
    transition: "0.3s",
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    background: "transparent"
  };

  const exploreBase = {
    marginTop: "1.75rem",
    display: "inline-flex",
    alignItems: "center",
    gap: "20px",
    padding: "15px 22px",
    background: colors.ink,
    color: colors.white,
    textDecoration: "none",
    fontSize: "12px",
    fontWeight: 600,
    letterSpacing: "1px",
    transition: "0.3s",
    border: "none"
  };

  const requestDemoBottomBase = {
    marginTop: "2rem",
    display: "inline-flex",
    alignItems: "center",
    gap: "20px",
    padding: "15px 22px",
    background: colors.cyber,
    color: colors.white,
    textDecoration: "none",
    fontSize: "12px",
    fontWeight: 600,
    letterSpacing: "1px",
    transition: "0.3s",
    border: "none"
  };

  return (
    <main style={{ minHeight: "100vh", background: colors.inkDeep, color: colors.white }}>
      {/* ---------------- Hero ---------------- */}
      <section
        style={{
          minHeight: "100vh",
          position: "relative",
          overflow: "hidden",
          padding: "0 7%",
          background:
            "radial-gradient(circle at 75% 50%, rgba(190, 0, 0, 0.12), transparent 30%), " +
            colors.inkDeep,
          color: colors.white
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.3,
            backgroundImage:
              "linear-gradient(rgba(224, 0, 0, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(224, 0, 0, 0.06) 1px, transparent 1px)",
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
            background: "rgba(224, 0, 0, 0.15)",
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
            background: "rgba(224, 0, 0, 0.1)",
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
            height: "90px",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            padding: bp.lg ? "0 2rem" : "0 1.5rem"
          }}
        >
          <div />
          <nav
            style={{
              display: bp.md ? "flex" : "none",
              alignItems: "center",
              gap: "40px",
              marginLeft: "100px",
              fontSize: "13px",
              letterSpacing: "1px",
              color: colors.textMuted
            }}
          >
            {[
              ["Why LMS", "#why"],
              ["How It Works", "#training"],
              ["Features", "#features"],
              ["FAQ", "#faq"]
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                style={{ textDecoration: "none", color: "inherit", transition: "0.3s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = colors.white)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "inherit")}
              >
                {label}
              </a>
            ))}
          </nav>
          <a href="#demo" {...withHover(ctaBase, { background: colors.cyber, borderColor: colors.cyber })}>
            Request Demo
            <span style={{ color: colors.cyber, fontSize: "17px" }}>→</span>
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
            gap: "60px",
            minHeight: "calc(100vh - 90px)",
            padding: bp.lg
              ? "0"
              : "3rem 1.5rem 5rem 1.5rem",
            gridTemplateColumns: bp.lg ? "1fr 1fr" : "1fr"
          }}
        >
          <div className="hero-text" style={{ maxWidth: "700px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "25px",
                color: colors.textDim,
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "3px"
              }}
            >
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  background: colors.cyber,
                  borderRadius: "50%",
                  boxShadow: "0 0 15px rgba(224, 0, 0, 0.8)"
                }}
              />
              NEW GENERATION PLATFORM
            </div>
            <h1
              style={{
                maxWidth: "48rem",
                fontSize: bp.md ? "clamp(55px, 6vw, 105px)" : "2.25rem",
                lineHeight: bp.md ? "0.9" : "2.5rem",
                fontWeight: 800,
                letterSpacing: bp.md ? "-5px" : "0em",
                margin: "0 0 30px 0"
              }}
            >
              Security compliance <span style={{ color: colors.cyber }}>learning</span> for a stronger workforce.
            </h1>
            <p
              style={{
                maxWidth: "510px",
                color: colors.textMuted,
                fontSize: "16px",
                lineHeight: 1.7,
                marginBottom: "35px"
              }}
            >
              Empower your workforce with engaging, role-based cybersecurity training through a centralized learning platform designed to strengthen security awareness, improve compliance readiness, and reduce human risk.
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "25px",
                flexDirection: bp.sm ? "row" : "column",
                alignItems: bp.sm ? "center" : "flex-start"
              }}
            >
              <a href="#demo" {...withHover(getDemoBase, { background: colors.cyberHover, transform: "translateY(-3px)" })}>
                Get a Demo
                <span style={{ fontSize: "18px" }}>→</span>
              </a>
              <a
                href="#training"
                {...withHover(seeHowBase, { color: colors.white, borderColor: colors.cyber })}
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
                  style={{ borderLeft: `1px solid rgba(224,0,0,0.4)`, paddingLeft: "1rem" }}
                >
                  <p style={{ fontSize: "1.5rem", lineHeight: "2rem", fontWeight: 700, color: colors.white, margin: 0 }}>
                    {value}
                  </p>
                  <p style={{ fontSize: "0.875rem", lineHeight: "1.25rem", color: colors.textSoft, margin: 0 }}>
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
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(8,8,8,0.6)",
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
      <section id="why" style={{ background: colors.frost, color: colors.ink }}>
        <div style={{ margin: "0 auto", maxWidth: "80rem", padding: bp.lg ? "4rem 2rem" : "4rem 1.5rem" }}>
          <div style={{ maxWidth: "48rem" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "18px",
                color: colors.cyberLabel,
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "4px"
              }}
            >
              <span style={{ width: "25px", height: "1px", background: colors.cyberMid }} />
              WHY LMS?
            </div>
            <h2
              style={{
                marginTop: "0.75rem",
                fontSize: bp.md ? "clamp(48px, 5vw, 78px)" : "1.875rem",
                lineHeight: bp.md ? "0.92" : "2.25rem",
                fontWeight: 800,
                letterSpacing: bp.md ? "-4px" : "0em",
                margin: 0
              }}
            >
              <strong style={{ display: "block", color: colors.ink }}>Centralize training,</strong>
              <span style={{ display: "block", color: colors.cyberDarker }}>compliance records, and cyber awareness.</span>
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
                  border: "1px solid rgba(0,0,0,0.1)",
                  background: colors.white,
                  padding: "1.5rem",
                  boxShadow: shadowSm
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "25px",
                    right: "30px",
                    fontSize: "11px",
                    letterSpacing: "2px",
                    opacity: 0.4,
                    color: colors.textXfaint
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    height: "2.5rem",
                    width: "2.5rem",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "0.375rem",
                    background: "rgba(224,0,0,0.1)",
                    fontWeight: 700,
                    color: colors.cyber
                  }}
                >
                  {index + 1}
                </div>
                <p style={{ marginTop: "1.25rem", lineHeight: "1.75rem", color: colors.textFaint }}>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- How LMS is used ---------------- */}
      <section id="training" style={{ background: colors.offWhite, padding: "4rem 0", color: colors.ink }}>
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
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "18px",
                color: colors.cyberLabel,
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "4px"
              }}
            >
              <span style={{ width: "25px", height: "1px", background: colors.cyberMid }} />
              HOW LMS IS USED
            </div>
            <h2
              style={{
                marginTop: "0.75rem",
                fontSize: bp.md ? "clamp(48px, 5vw, 78px)" : "1.875rem",
                lineHeight: bp.md ? "0.92" : "2.25rem",
                fontWeight: 800,
                letterSpacing: bp.md ? "-4px" : "0em",
                margin: 0
              }}
            >
              <strong style={{ display: "block", color: colors.ink }}>A simple operating flow</strong>
              <span style={{ display: "block", color: colors.cyberDarker }}>for admins, employees, managers, and compliance teams.</span>
            </h2>
            <p style={{ marginTop: "1.25rem", lineHeight: "2rem", color: colors.textFaint }}>
              SC-LMS keeps training assignments, reminders, completions, scores, dashboards, and reports in one controlled workflow.
            </p>
            <a href="#features" {...withHover(exploreBase, { background: colors.cyberSoft, transform: "translateY(-3px)" })}>
              Explore features
              <span style={{ color: colors.cyber, fontSize: "17px" }}>→</span>
            </a>
          </div>
          <div
            style={{
              borderRadius: "0.5rem",
              border: "1px solid rgba(0,0,0,0.08)",
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
                    background: "rgba(224,0,0,0.1)",
                    fontWeight: 700,
                    color: colors.cyber
                  }}
                >
                  {index + 1}
                </div>
                <p style={{ lineHeight: "1.75rem", color: colors.textSoft, margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Employee benefits ---------------- */}
      <section style={{ background: colors.frost, padding: "4rem 0", color: colors.ink }}>
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
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "18px",
                color: colors.cyberLabel,
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "4px"
              }}
            >
              <span style={{ width: "25px", height: "1px", background: colors.cyberMid }} />
              EMPLOYEE BENEFITS
            </div>
            <h2
              style={{
                marginTop: "0.75rem",
                fontSize: bp.md ? "clamp(48px, 5vw, 78px)" : "1.875rem",
                lineHeight: bp.md ? "0.92" : "2.25rem",
                fontWeight: 800,
                letterSpacing: bp.md ? "-4px" : "0em",
                margin: 0
              }}
            >
              <strong style={{ display: "block", color: colors.ink }}>Training that feels</strong>
              <span style={{ display: "block", color: colors.cyberDarker }}>relevant, practical, and easy to complete.</span>
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
                  border: "1px solid rgba(0,0,0,0.08)",
                  background: "rgba(255,255,255,0.8)",
                  padding: "1rem"
                }}
              >
                <CheckCircle2 style={{ marginTop: "0.25rem", height: "1.25rem", width: "1.25rem", flexShrink: 0, color: colors.cyber }} />
                <p style={{ lineHeight: "1.75rem", color: colors.textSoft, margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Features ---------------- */}
      <section id="features" style={{ background: colors.offWhite, padding: "4rem 0", color: colors.ink }}>
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "18px",
                  color: colors.cyberLabel,
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "4px"
                }}
              >
                <span style={{ width: "25px", height: "1px", background: colors.cyberMid }} />
                KEY FEATURES
              </div>
              <h2
                style={{
                  marginTop: "0.75rem",
                  fontSize: bp.md ? "clamp(48px, 5vw, 78px)" : "1.875rem",
                  lineHeight: bp.md ? "0.92" : "2.25rem",
                  fontWeight: 800,
                  letterSpacing: bp.md ? "-4px" : "0em",
                  margin: 0
                }}
              >
                <strong style={{ display: "block", color: colors.ink }}>Every part of a cybersecurity</strong>
                <span style={{ display: "block", color: colors.cyberDarker }}>training program in one platform.</span>
              </h2>
            </div>
            <p style={{ maxWidth: "28rem", lineHeight: "1.75rem", color: colors.textFaint }}>
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
                  border: "1px solid rgba(0,0,0,0.08)",
                  background: colors.white,
                  padding: "1.25rem",
                  boxShadow: shadowSm,
                  transition: "transform 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-0.25rem)";
                  e.currentTarget.style.borderColor = "rgba(224,0,0,0.5)";
                  e.currentTarget.style.boxShadow = shadowMd;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)";
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
                    background: "rgba(224,0,0,0.1)",
                    color: colors.cyber
                  }}
                >
                  <Icon style={{ height: "1.25rem", width: "1.25rem" }} />
                </div>
                <h3 style={{ marginTop: "1rem", fontSize: "1.125rem", lineHeight: "1.75rem", fontWeight: 600, color: colors.ink }}>
                  {title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- SC-LMS benefits ---------------- */}
      <section
        id="reporting"
        style={{
          minHeight: "100vh",
          position: "relative",
          overflow: "hidden",
          padding: "4rem 0",
          background:
            "radial-gradient(ellipse 55% 70% at 92% 5%, rgba(255,255,255,0.22) 60%, rgba(255,255,255,0.10) 22%, rgba(255,255,255,0.035) 42%, transparent 72%), " +
            "radial-gradient(ellipse 55% 85% at -8% 45%, rgba(0,0,0,0.72) 60%, rgba(0,0,0,0.42) 30%, rgba(0,0,0,0.15) 52%, transparent 75%), " +
            "radial-gradient(ellipse 50% 55% at 45% 105%, rgba(0,0,0,0.48) 50%, rgba(0,0,0,0.20) 28%, transparent 72%), " +
            "radial-gradient(ellipse 45% 60% at 100% 55%, rgba(255,255,255,0.09) 50%, rgba(255,255,255,0.035) 32%, transparent 70%), " +
            "radial-gradient(ellipse 70% 100% at 50% 50%, rgba(150,5,5,0.55) 0%, rgba(115,0,0,0.30) 50%, transparent 78%), " +
            `linear-gradient(120deg, ${colors.navy} 0%, ${colors.navyMid} 30%, ${colors.navyDeep} 52%, ${colors.navyMid} 72%, ${colors.navyDark} 100%)`,
          color: colors.white
        }}
      >
        <div style={{ margin: "0 auto", maxWidth: "80rem", padding: bp.lg ? "0 2rem" : "0 1.5rem" }}>
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 80px" }}>
            <p
              style={{
                display: "inline-block",
                marginBottom: "18px",
                fontSize: "10px",
                letterSpacing: "4px",
                fontWeight: 700,
                color: "rgba(255,255,255,0.65)"
              }}
            >
              SC-LMS BENEFITS
            </p>
            <h2
              style={{
                fontSize: bp.md ? "clamp(42px, 5vw, 75px)" : "1.875rem",
                lineHeight: bp.md ? "0.95" : "2.25rem",
                letterSpacing: bp.md ? "-3px" : "0em",
                fontWeight: 800,
                margin: 0
              }}
            >
              <strong style={{ color: colors.inkDeep }}>Move the metrics that matter:</strong>{" "}
              <span className="white-word" style={{ color: colors.white }}>awareness, compliance, risk, and engagement.</span>
            </h2>
            <p
              style={{
                maxWidth: "480px",
                margin: "25px auto 0",
                color: "rgba(255,255,255,0.65)",
                fontSize: "14px",
                lineHeight: 1.7
              }}
            >
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
      <section id="faq" style={{ background: colors.frost, padding: "4rem 0", color: colors.ink }}>
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
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "18px",
                color: colors.cyberLabel,
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "4px"
              }}
            >
              <span style={{ width: "25px", height: "1px", background: colors.cyberMid }} />
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h2
              style={{
                marginTop: "0.75rem",
                fontSize: bp.md ? "clamp(48px, 5vw, 78px)" : "1.875rem",
                lineHeight: bp.md ? "0.92" : "2.25rem",
                fontWeight: 800,
                letterSpacing: bp.md ? "-4px" : "0em",
                margin: 0
              }}
            >
              <strong style={{ display: "block", color: colors.ink }}>Common SC-LMS</strong>
              <span style={{ display: "block", color: colors.cyberDarker }}>questions.</span>
            </h2>
          </div>
          <div style={{ display: "grid", gap: "1rem" }}>
            {faqs.map(([question, answer]) => (
              <article
                key={question}
                style={{
                  borderRadius: "0.5rem",
                  border: "1px solid rgba(0,0,0,0.08)",
                  background: colors.white,
                  padding: "1.25rem",
                  boxShadow: shadowSm
                }}
              >
                <h3 style={{ fontWeight: 600, color: colors.ink, margin: 0 }}>{question}</h3>
                <p style={{ marginTop: "0.75rem", lineHeight: "1.75rem", color: colors.textFaint }}>{answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Demo CTA ---------------- */}
      <section id="demo" style={{ background: colors.offWhite, padding: "4rem 0", color: colors.ink }}>
        <div style={{ margin: "0 auto", maxWidth: "80rem", padding: bp.lg ? "0 2rem" : "0 1.5rem" }}>
          <div
            style={{
              display: "grid",
              alignItems: "center",
              gap: "2rem",
              borderRadius: "0.5rem",
              background: colors.inkDeep,
              padding: bp.md ? "2.5rem" : "2.5rem 1.5rem",
              color: colors.white,
              gridTemplateColumns: bp.lg ? "0.85fr 1.15fr" : "1fr",
              border: "1px solid rgba(255,255,255,0.08)"
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
                  fontSize: bp.md ? "clamp(42px, 5vw, 75px)" : "1.875rem",
                  lineHeight: bp.md ? "0.95" : "2.25rem",
                  letterSpacing: bp.md ? "-3px" : "0em",
                  fontWeight: 800,
                  margin: 0
                }}
              >
                <span style={{ color: colors.cyber }}>Launch</span> a branded LMS for cybersecurity awareness.
              </h2>
              <p style={{ marginTop: "1rem", maxWidth: "42rem", lineHeight: "2rem", color: colors.textMuted }}>
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
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", lineHeight: "1.25rem", color: colors.textDim }}>
                    <CheckCircle2 style={{ height: "1rem", width: "1rem", flexShrink: 0, color: colors.cyber }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <a
                href="mailto:support@risqorasecure.com"
                {...withHover(requestDemoBottomBase, { background: colors.cyberHover, transform: "translateY(-3px)" })}
              >
                Request a Demo
                <span style={{ color: colors.white, fontSize: "17px" }}>→</span>
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
