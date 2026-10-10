import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/etailed/Nav";
import { Footer } from "@/components/etailed/Footer";
import React from "react";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [{ title: "Refund Policy — E-TAILED DIGITAL INDIA" }],
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
              Refund & Cancellation Policy
            </h1>
            <p className="text-white/90 md:text-lg font-medium max-w-lg mx-auto">
              Complete transparency regarding refunds and cancellations
            </p>
          </div>

          <div className="flex flex-col">
            
            <SectionBox title="Introduction">
              <p>
                At E-Tailed Digital India / Skillecom / International Institute of E-Commerce & Management Foundation, we aim to provide complete transparency regarding refunds and cancellations. By enrolling in our programs or using our services, you agree to the following terms:
              </p>
            </SectionBox>

            <SectionBox title="A. Course Fees – No Refund Policy">
              <p className="text-white font-semibold mb-2">Strictly Non-Refundable</p>
              <p>
                All course, mentorship, internship, training, or subscription fees once paid are strictly non-refundable under any circumstances.
              </p>
              <p className="mt-4 mb-2">This includes:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Change of mind</li>
                <li>Personal issues or emergencies</li>
                <li>Non-attendance</li>
                <li>Delay from student's side</li>
                <li>Technical issues from the user's end</li>
              </ul>
            </SectionBox>

            <SectionBox title="B. Course Access">
              <p className="mb-2">Once payment is completed:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Course access is immediately granted or scheduled within 24–72 hours</li>
                <li>Students must ensure correct email and mobile details while enrollment</li>
              </ul>
            </SectionBox>

            <SectionBox title="C. Internship & Certification Programs">
              <ul className="list-disc pl-5 space-y-2">
                <li>Internship fees are non-refundable, as students receive offer letters, joining letters, and training access within 7 days</li>
                <li>Certificates are issued only upon proper completion of assigned tasks</li>
              </ul>
            </SectionBox>

            <SectionBox title="D. Service Refunds">
              <p className="mb-2">For any service purchased (store setup, website creation, e-commerce services, marketplace support):</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>No refund is provided once work has started</li>
                <li>If the customer fails to provide required documents/content, the delay is not the responsibility of the company</li>
              </ul>
            </SectionBox>

            <SectionBox title="E. Cancellations">
              <p>
                Cancellations are not allowed once payment is processed because all programs are digital and instantly accessible.
              </p>
            </SectionBox>

            <SectionBox title="F. Duplicate Payments">
              <p>
                In case of duplicate/extra payments, refund will be processed within 7–14 working days after verification.
              </p>
            </SectionBox>

            <SectionBox title="G. Contact for Refund Queries">
              <div className="space-y-3 bg-background/30 p-6 rounded-xl border border-white/5">
                <p><strong className="text-white/90">Email:</strong> <a href="mailto:etaileddigitalservicespvtltd@gmail.com" className="text-primary hover:underline">etaileddigitalservicespvtltd@gmail.com</a></p>
                <p><strong className="text-white/90">Phone:</strong> <a href="tel:+919392898733" className="text-primary hover:underline">+91 93928 98733</a> / <a href="tel:+919390168733" className="text-primary hover:underline">+91 9390168733</a></p>
              </div>
            </SectionBox>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
