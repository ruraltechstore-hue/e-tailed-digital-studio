import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/etailed/Nav";
import { Footer } from "@/components/etailed/Footer";
import React from "react";

export const Route = createFileRoute("/cookie-policy")({
  head: () => ({
    meta: [{ title: "Cookie Policy — E-TAILED DIGITAL INDIA" }],
  }),
  component: Page,
});

function SectionBox({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="bg-[#1B1D38] border border-white/5 rounded-2xl p-6 md:p-8 mb-6 shadow-sm">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-4">{title}</h2>
      <div className="text-white/70 space-y-4 text-sm md:text-base leading-relaxed">
        {children}
      </div>
    </div>
  );
}

function Page() {
  return (
    <>
      <Nav />
      <main className="bg-background min-h-screen pt-32 pb-24 px-5 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Header Box */}
          <div className="bg-gradient-to-r from-[#1B1D38] to-[#080699]/40 border border-white/10 rounded-3xl p-8 md:p-12 mb-10 text-center shadow-lg">
            <h1 className="text-4xl md:text-5xl font-serif italic text-primary mb-4">
              Cookie Policy
            </h1>
            <p className="text-white/90 md:text-lg font-medium max-w-lg mx-auto">
              Understanding how we use cookies on our website
            </p>
          </div>

          <div className="flex flex-col">
            
            <SectionBox title="A. What Are Cookies?">
              <p>
                Cookies are small text files stored on your device to improve your browsing experience. They help us understand how you use our website and remember your preferences.
              </p>
            </SectionBox>

            <SectionBox title="B. How We Use Cookies">
              <p className="mb-4">We use cookies to:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Analyse website traffic",
                  "Improve website performance",
                  "Personalize user experience",
                  "Track marketing performance",
                  "Secure your login sessions"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 bg-background/30 p-4 rounded-xl border border-white/5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary font-bold">
                      {index + 1}
                    </div>
                    <p className="text-white/90">{item}</p>
                  </div>
                ))}
              </div>
            </SectionBox>

            <SectionBox title="C. Third-Party Cookies">
              <p className="mb-4">We use cookies from:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-background/30 p-5 rounded-xl border border-white/5 border-l-4 border-l-blue-500">
                  <p className="text-white font-bold mb-1">Google Analytics</p>
                  <p className="text-sm">For traffic analysis and insights</p>
                </div>
                <div className="bg-background/30 p-5 rounded-xl border border-white/5 border-l-4 border-l-blue-700">
                  <p className="text-white font-bold mb-1">Facebook Pixel</p>
                  <p className="text-sm">For marketing and ad targeting</p>
                </div>
                <div className="bg-background/30 p-5 rounded-xl border border-white/5 border-l-4 border-l-green-500">
                  <p className="text-white font-bold mb-1">WhatsApp API</p>
                  <p className="text-sm">For customer communication</p>
                </div>
                <div className="bg-background/30 p-5 rounded-xl border border-white/5 border-l-4 border-l-indigo-500">
                  <p className="text-white font-bold mb-1">Razorpay</p>
                  <p className="text-sm">For secure payment processing</p>
                </div>
              </div>
            </SectionBox>

            <SectionBox title="D. Managing Cookies">
              <p>
                You can disable cookies in your browser settings, but some website features may not work properly.
              </p>
              <div className="mt-4 p-4 bg-background/50 rounded-lg border border-white/5">
                <p className="italic text-white/60 text-sm">
                  Note: Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. However, this may prevent you from taking full advantage of the website.
                </p>
              </div>
            </SectionBox>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
