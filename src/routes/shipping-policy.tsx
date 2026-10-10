import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/etailed/Nav";
import { Footer } from "@/components/etailed/Footer";
import React from "react";

export const Route = createFileRoute("/shipping-policy")({
  head: () => ({
    meta: [{ title: "Shipping & Delivery Policy — E-TAILED DIGITAL INDIA" }],
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
              Shipping & Delivery Policy
            </h1>
            <p className="text-white/90 md:text-lg font-medium max-w-lg mx-auto">
              Digital Services Delivery Information
            </p>
          </div>

          <div className="flex flex-col">
            
            <SectionBox title="Introduction">
              <p>
                We provide only digital & online services, so "delivery" refers to granting access or completion of digital tasks. No physical shipping is involved.
              </p>
            </SectionBox>

            <SectionBox title="A. Course Access Delivery Timeline">
              <ul className="list-disc pl-5 space-y-2">
                <li>Instant access or within 24–72 hours after payment</li>
                <li>Internship offer letters are sent within 7 days</li>
              </ul>
            </SectionBox>

            <SectionBox title="B. Digital Product Delivery">
              <div className="space-y-6">
                <div>
                  <p className="font-semibold text-white mb-2">Includes:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Gift cards</li>
                    <li>Login credentials</li>
                    <li>Software access</li>
                    <li>E-commerce store setup</li>
                    <li>API access (if applicable)</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-semibold text-white mb-4">Delivery Timelines:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-background/30 p-4 rounded-xl border border-white/5">
                      <p className="text-white/90 font-medium mb-1">Gift Cards</p>
                      <p className="text-sm">0–24 hours (depending on brand availability)</p>
                    </div>
                    <div className="bg-background/30 p-4 rounded-xl border border-white/5">
                      <p className="text-white/90 font-medium mb-1">Store Setup</p>
                      <p className="text-sm">1–7 working days</p>
                    </div>
                    <div className="bg-background/30 p-4 rounded-xl border border-white/5">
                      <p className="text-white/90 font-medium mb-1">Login Credentials</p>
                      <p className="text-sm">1–24 hours</p>
                    </div>
                    <div className="bg-background/30 p-4 rounded-xl border border-white/5">
                      <p className="text-white/90 font-medium mb-1">Software Access</p>
                      <p className="text-sm">Instant or max 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </SectionBox>

            <SectionBox title="C. Physical Shipping">
              <p>
                Currently no physical shipments are done by the company. All services and products are delivered digitally.
              </p>
            </SectionBox>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
