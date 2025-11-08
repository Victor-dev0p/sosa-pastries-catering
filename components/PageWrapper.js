"use client";

export default function PageWrapper({ children }) {
  return (
    <div className="relative min-h-screen bg-white text-[#3A2E2E] overflow-x-hidden scroll-smooth">
      {children}
    </div>
  );
}
