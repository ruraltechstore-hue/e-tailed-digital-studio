import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/etailed/Nav";
import { Footer } from "@/components/etailed/Footer";
import React from "react";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [{ title: "Privacy Policy — E-TAILED DIGITAL INDIA" }],
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
              Privacy Policy
            </h1>
            <p className="text-white/90 md:text-lg font-medium max-w-lg mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
          </div>

          <div className="flex flex-col">
            
            <SectionBox title="Introduction">
              <p>
                Etailed Digital Services Pvt. Ltd. ("Etailed Digital India", "we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our multi-service digital platform, website, mobile application, and related services (collectively, the "Services").
              </p>
              <p>
                By accessing or using our Services, you agree to the terms of this Privacy Policy. If you do not agree with the terms, please do not access or use the Services.
              </p>
            </SectionBox>

            <SectionBox title="Information We Collect">
              <div className="space-y-6">
                <div>
                  <h3 className="text-white font-semibold mb-2">1. Personal Information</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong className="text-white/90">Identity Information:</strong> Name, date of birth, gender, photograph</li>
                    <li><strong className="text-white/90">Contact Information:</strong> Email address, phone number, residential and business address</li>
                    <li><strong className="text-white/90">KYC Documents:</strong> Aadhaar card, PAN card, voter ID, driving license, bank account details</li>
                    <li><strong className="text-white/90">Business Information:</strong> Business name, GST number, trade license, shop establishment certificate</li>
                    <li><strong className="text-white/90">Financial Information:</strong> Bank account details, wallet transactions, commission earnings</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">2. Technical Information</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Device information (model, operating system, unique device identifiers)</li>
                    <li>IP address, browser type, and version</li>
                    <li>Location data (with your permission)</li>
                    <li>Usage data (pages visited, time spent, features used)</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">3. Transaction Information</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Service transaction details (type, amount, date, time, status)</li>
                    <li>Customer information for services (with consent)</li>
                    <li>Payment information (processed securely by payment gateways)</li>
                    <li>Commission and payout records</li>
                  </ul>
                </div>
              </div>
            </SectionBox>

            <SectionBox title="How We Use Your Information">
              <ul className="list-decimal pl-5 space-y-3">
                <li><strong className="text-white/90">Service Delivery:</strong> To process transactions, provide services, manage your account, and fulfill your requests</li>
                <li><strong className="text-white/90">KYC & Compliance:</strong> To verify your identity, comply with legal requirements, prevent fraud and money laundering</li>
                <li><strong className="text-white/90">Commission Management:</strong> To calculate, credit, and track commissions and payouts</li>
                <li><strong className="text-white/90">Communication:</strong> To send transaction confirmations, account updates, support responses, and service announcements</li>
                <li><strong className="text-white/90">Platform Improvement:</strong> To analyze usage patterns, improve features, develop new services</li>
                <li><strong className="text-white/90">Marketing:</strong> To send promotional offers, updates about new services (with opt-out option)</li>
                <li><strong className="text-white/90">Security:</strong> To detect, prevent, and address technical issues, fraud, and security threats</li>
                <li><strong className="text-white/90">Legal Compliance:</strong> To comply with RBI, NPCI, tax authorities, and other regulatory requirements</li>
              </ul>
            </SectionBox>

            <SectionBox title="Data Security">
              <p>We implement industry-standard security measures to protect your information:</p>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li><strong className="text-white/90">Encryption:</strong> 256-bit SSL/TLS encryption for data transmission</li>
                <li><strong className="text-white/90">Secure Storage:</strong> Encrypted database storage with regular backups</li>
                <li><strong className="text-white/90">Access Control:</strong> Role-based access with two-factor authentication</li>
                <li><strong className="text-white/90">Regular Audits:</strong> Security assessments and vulnerability testing</li>
                <li><strong className="text-white/90">Compliance:</strong> Adherence to PCI-DSS, ISO 27001 standards</li>
                <li><strong className="text-white/90">Monitoring:</strong> 24/7 system monitoring for suspicious activities</li>
              </ul>
              <div className="mt-6 p-4 bg-background/50 rounded-lg border border-white/5">
                <p className="italic text-white/60 text-sm">
                  Note: While we implement robust security measures, no method of transmission over the internet is 100% secure. Please keep your login credentials confidential.
                </p>
              </div>
            </SectionBox>

            <SectionBox title="Information Sharing">
              <p>We may share your information with:</p>
              <ul className="space-y-3 mt-4">
                <li><strong className="text-white/90">1. Service Providers:</strong> Payment gateways (Razorpay), SMS/email services, KYC verification partners, cloud hosting providers</li>
                <li><strong className="text-white/90">2. Banking Partners:</strong> NPCI, BBPS, banks for transaction processing (only necessary information)</li>
                <li><strong className="text-white/90">3. Your Network:</strong> Your distributor/super distributor for commission calculation and management</li>
                <li><strong className="text-white/90">4. Legal Authorities:</strong> When required by law, court order, or government request</li>
                <li><strong className="text-white/90">5. Business Transfers:</strong> In case of merger, acquisition, or sale of assets (with prior notice)</li>
              </ul>
              <p className="mt-6 font-semibold text-white">
                We DO NOT sell your personal information to third parties for marketing purposes.
              </p>
            </SectionBox>

            <SectionBox title="Your Rights">
              <p>Under Indian data protection laws, you have the following rights:</p>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li><strong className="text-white/90">Access:</strong> Request a copy of your personal information we hold</li>
                <li><strong className="text-white/90">Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong className="text-white/90">Deletion:</strong> Request deletion of your data (subject to legal retention requirements)</li>
                <li><strong className="text-white/90">Opt-Out:</strong> Unsubscribe from marketing communications</li>
                <li><strong className="text-white/90">Portability:</strong> Request your data in a machine-readable format</li>
                <li><strong className="text-white/90">Withdraw Consent:</strong> Withdraw consent for data processing (may limit service access)</li>
              </ul>
              <p className="mt-6">
                To exercise these rights, contact us at: <a href="mailto:support@e-tailedindia.com" className="text-primary hover:underline">support@e-tailedindia.com</a> or call <a href="tel:+919392898733" className="text-primary hover:underline">+91 93928 98733</a> / <a href="tel:+919390168733" className="text-primary hover:underline">+91 9390168733</a>
              </p>
            </SectionBox>

            <SectionBox title="Data Retention">
              <p>We retain your information for as long as:</p>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li>Your account is active and you use our Services</li>
                <li>Required for legal, tax, or regulatory compliance (typically 7-10 years for financial records)</li>
                <li>Necessary to resolve disputes and enforce agreements</li>
              </ul>
              <p className="mt-4">
                After the retention period, we securely delete or anonymize your information.
              </p>
            </SectionBox>

            <SectionBox title="Cookies and Tracking">
              <p>We use cookies and similar technologies to:</p>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li>Keep you logged in and remember your preferences</li>
                <li>Analyze platform usage and improve user experience</li>
                <li>Provide personalized content and recommendations</li>
              </ul>
              <p className="mt-4">
                You can control cookies through your browser settings. However, disabling cookies may limit platform functionality.
              </p>
            </SectionBox>

            <SectionBox title="Children's Privacy">
              <p>
                Our Services are not intended for individuals under 18 years of age. We do not knowingly collect information from minors. If you believe a child has provided us with personal information, please contact us immediately.
              </p>
            </SectionBox>

            <SectionBox title="Changes to Privacy Policy">
              <p>
                We may update this Privacy Policy periodically. We will notify you of material changes via email or platform notification. The "Last Updated" date at the top indicates when the policy was last revised. Continued use of Services after changes constitutes acceptance of the updated policy.
              </p>
            </SectionBox>

            <SectionBox title="Contact Us">
              <p className="mb-4">For questions, concerns, or requests regarding this Privacy Policy or your personal data:</p>
              <div className="space-y-3 bg-background/30 p-6 rounded-xl border border-white/5">
                <p><strong className="text-white/90">Company:</strong> Etailed Digital Services Pvt. Ltd.</p>
                <p><strong className="text-white/90">Address:</strong> Sai Silicon Heights, 3-118, Megha Hills Rd, Ayyappa Society, Mega Hills, Madhapur, Hyderabad, Telangana 500081, India</p>
                <p><strong className="text-white/90">Email:</strong> <a href="mailto:support@e-tailedindia.com" className="text-primary hover:underline">support@e-tailedindia.com</a></p>
                <p><strong className="text-white/90">Phone:</strong> <a href="tel:+919392898733" className="text-primary hover:underline">+91 93928 98733</a>, <a href="tel:+919390168733" className="text-primary hover:underline">+91 9390168733</a></p>
                <p><strong className="text-white/90">WhatsApp:</strong> <a href="https://wa.me/919392898733" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">+91 93928 98733</a>, <a href="https://wa.me/919390168733" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">+91 9390168733</a></p>
              </div>
            </SectionBox>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
