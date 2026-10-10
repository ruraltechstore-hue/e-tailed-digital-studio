import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/etailed/Nav";
import { Footer } from "@/components/etailed/Footer";
import React from "react";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [{ title: "Disclaimer Policy — E-TAILED DIGITAL INDIA" }],
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
              Disclaimer Policy
            </h1>
            <p className="text-white/90 md:text-lg font-medium max-w-lg mx-auto">
              Important information about our services and limitations
            </p>
          </div>

          <div className="flex flex-col">
            
            <SectionBox title="A. General Disclaimer">
              <p>
                All information, tools, training content, and resources provided by E-Tailed Digital India / Skillecom / IIECMF are for educational and business purposes only.
              </p>
              <p className="font-semibold text-white mt-4 mb-2">We do not guarantee:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Job placement unless specifically enrolled in a Job Guarantee Program</li>
                <li>Income or earnings</li>
                <li>Business success</li>
                <li>Marketplace approvals</li>
                <li>Government approvals</li>
              </ul>
            </SectionBox>

            <SectionBox title="B. Accuracy of Information">
              <p>
                We try to ensure that all information on the website is accurate. However, errors may occur.
              </p>
              <p>
                We reserve the right to update or correct any information without prior notice.
              </p>
            </SectionBox>

            <SectionBox title="C. External Links">
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites.
              </p>
            </SectionBox>

            <SectionBox title="D. Use of Digital Services">
              <p className="mb-2">
                Users must use the services lawfully. The company is not responsible for:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>User mistakes</li>
                <li>Wrong business decisions</li>
                <li>Financial losses</li>
                <li>Marketplace account suspensions</li>
              </ul>
            </SectionBox>

            <SectionBox title="Important Notice">
              <div className="bg-background/50 p-6 rounded-xl border border-white/10">
                <p className="italic text-white/90">
                  By using our platform, you acknowledge that you have read, understood, and agree to this disclaimer. All services are provided on an "as is" basis, and users assume full responsibility for their use of the platform and any outcomes resulting from their decisions.
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
