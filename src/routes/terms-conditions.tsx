import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/etailed/Nav";
import { Footer } from "@/components/etailed/Footer";
import React from "react";

export const Route = createFileRoute("/terms-conditions")({
  head: () => ({
    meta: [{ title: "Terms & Conditions — E-TAILED DIGITAL INDIA" }],
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
              Terms and Conditions
            </h1>
            <p className="text-white/90 md:text-lg font-medium max-w-lg mx-auto">
              Please read these terms carefully before using our Services
            </p>
          </div>

          <div className="flex flex-col">
            
            <SectionBox title="1. Acceptance of Terms">
              <p>
                By accessing and using the Etailed Digital India platform and services provided by Etailed Digital Services Pvt. Ltd., you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, you must not use our Services.
              </p>
              <p>
                These terms constitute a legal agreement between you ("User", "Partner", "Retailer") and Etailed Digital Services Pvt. Ltd. ("Company", "we", "us", "our").
              </p>
            </SectionBox>

            <SectionBox title="2. Definitions">
              <ul className="list-disc pl-5 space-y-2">
                <li><strong className="text-white/90">"Platform"</strong> means the Etailed Digital India website, mobile application, and related services</li>
                <li><strong className="text-white/90">"Services"</strong> means all financial, digital, and e-commerce services offered through the Platform</li>
                <li><strong className="text-white/90">"Partner"</strong> means any individual or entity registered as Retailer, Distributor, Super Distributor, or White Label Partner</li>
                <li><strong className="text-white/90">"Transaction"</strong> means any service operation performed through the Platform</li>
                <li><strong className="text-white/90">"Commission"</strong> means the fee payable to Partners for successful transactions</li>
                <li><strong className="text-white/90">"Wallet"</strong> means the digital account for storing and managing funds</li>
              </ul>
            </SectionBox>

            <SectionBox title="3. Eligibility">
              <p>To use our Services, you must:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Be at least 18 years of age</li>
                <li>Be a resident of India</li>
                <li>Have a valid Aadhaar card and PAN card</li>
                <li>Have a valid bank account in India</li>
                <li>Not be listed in any financial fraud database</li>
                <li>Not have been previously suspended or banned from our Platform</li>
                <li>Provide accurate and truthful information during registration</li>
              </ul>
              <p className="mt-4 font-semibold text-white/90">
                We reserve the right to verify your eligibility and reject applications that do not meet our criteria.
              </p>
            </SectionBox>

            <SectionBox title="4. Registration and Account">
              <div className="space-y-6">
                <div>
                  <h3 className="text-white font-semibold mb-2">4.1 Registration Process</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Pay the applicable one-time registration fee</li>
                    <li>Complete KYC verification with Aadhaar and PAN</li>
                    <li>Provide bank account details for payouts</li>
                    <li>Accept these Terms and Conditions</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">4.2 Account Security</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>You are responsible for maintaining the confidentiality of your login credentials</li>
                    <li>You must not share your account with others</li>
                    <li>Notify us immediately of any unauthorized access</li>
                    <li>We are not liable for losses due to unauthorized use of your account</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">4.3 Account Verification</h3>
                  <p>
                    We may request additional documentation at any time to verify your identity and compliance. Failure to provide requested documents may result in account suspension.
                  </p>
                </div>
              </div>
            </SectionBox>

            <SectionBox title="5. Services and Usage">
              <div className="space-y-6">
                <div>
                  <h3 className="text-white font-semibold mb-2">5.1 Service Availability</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Services are provided on an "as is" and "as available" basis</li>
                    <li>We do not guarantee uninterrupted or error-free service</li>
                    <li>Maintenance and updates may cause temporary service disruptions</li>
                    <li>Some services may have transaction limits set by regulatory authorities</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">5.2 Permitted Use</h3>
                  <p className="mb-2">You agree to use the Platform only for:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Legitimate business purposes</li>
                    <li>Providing services to genuine customers</li>
                    <li>Compliance with all applicable laws and regulations</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">5.3 Prohibited Activities</h3>
                  <p className="mb-2">You must NOT:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Engage in fraudulent transactions or money laundering</li>
                    <li>Use fake or forged documents for KYC</li>
                    <li>Create multiple accounts for the same person</li>
                    <li>Manipulate commission structures or transaction records</li>
                    <li>Reverse engineer or attempt to access source code</li>
                    <li>Use automated tools or bots for transactions</li>
                    <li>Violate any laws, rules, or regulations</li>
                    <li>Harass, threaten, or impersonate others</li>
                  </ul>
                </div>
              </div>
            </SectionBox>

            <SectionBox title="6. Fees and Commissions">
              <div className="space-y-6">
                <div>
                  <h3 className="text-white font-semibold mb-2">6.1 Registration Fees</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>One-time, non-refundable registration fee as per selected package</li>
                    <li>No monthly or renewal fees</li>
                    <li>Upgrade fees may apply when moving to higher tiers</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">6.2 Service Charges</h3>
                  <p>
                    Each service has its own pricing structure. Service charges are deducted from wallet balance before transaction processing. Commission is calculated after deducting all applicable charges.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">6.3 Commission Payment</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Commissions are credited to your wallet in real-time upon successful transactions</li>
                    <li>Commission rates may vary by service, volume, and partner tier</li>
                    <li>We reserve the right to modify commission rates with 30 days notice</li>
                    <li>Wrong or fraudulent transactions do not earn commission</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">6.4 Wallet and Payouts</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Minimum withdrawal amount: ₹100</li>
                    <li>Payout processing time: 24-48 hours</li>
                    <li>Bank charges, if any, are borne by the partner</li>
                    <li>We reserve the right to withhold payouts for suspicious accounts</li>
                  </ul>
                </div>
              </div>
            </SectionBox>

            <SectionBox title="7. Transaction Limits">
              <p>Transaction limits are set as per regulatory guidelines:</p>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li><strong className="text-white/90">AEPS:</strong> ₹10,000 per transaction, no daily limit</li>
                <li><strong className="text-white/90">DMT:</strong> ₹25,000 per transaction, ₹2,00,000 per month per sender</li>
                <li><strong className="text-white/90">Recharge/Bills:</strong> As per operator limits</li>
                <li><strong className="text-white/90">Wallet Top-up:</strong> ₹50,000 per transaction</li>
              </ul>
              <p className="mt-4">
                Limits may be increased based on transaction history and enhanced KYC completion.
              </p>
            </SectionBox>

            <SectionBox title="8. Intellectual Property">
              <p>
                All content, features, and functionality of the Platform, including but not limited to text, graphics, logos, icons, images, software, and source code, are owned by Etailed Digital Services Pvt. Ltd. and protected by intellectual property laws.
              </p>
              <p className="mt-4">You are granted a limited, non-exclusive, non-transferable license to:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Access and use the Platform for business purposes</li>
                <li>Use provided marketing materials (for White Label partners)</li>
              </ul>
              <p className="mt-4">You may NOT:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Copy, modify, or create derivative works</li>
                <li>Reverse engineer the Platform</li>
                <li>Use our brand, logos, or trademarks without written permission</li>
              </ul>
            </SectionBox>

            <SectionBox title="9. Liability and Disclaimers">
              <div className="space-y-6">
                <div>
                  <h3 className="text-white font-semibold mb-2">9.1 Platform Availability</h3>
                  <p>
                    We strive for maximum uptime but do not guarantee uninterrupted service. We are not liable for losses due to service disruptions, maintenance, or technical issues.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">9.2 Third-Party Services</h3>
                  <p>
                    Our Platform integrates with third-party service providers (banks, NPCI, BBPS, etc.). We are not responsible for their service failures, delays, or errors.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">9.3 Limitation of Liability</h3>
                  <p>
                    Our liability is limited to the registration fee paid by you. We are not liable for indirect, incidental, special, consequential, or punitive damages, including lost profits.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">9.4 Indemnification</h3>
                  <p>
                    You agree to indemnify and hold us harmless from any claims, damages, or expenses arising from your violation of these Terms or misuse of the Platform.
                  </p>
                </div>
              </div>
            </SectionBox>

            <SectionBox title="10. Account Termination">
              <div className="space-y-6">
                <div>
                  <h3 className="text-white font-semibold mb-2">10.1 Termination by User</h3>
                  <p>
                    You may request account closure by contacting support. Pending transactions must be completed, and wallet balance (above minimum) will be paid out.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">10.2 Termination by Company</h3>
                  <p className="mb-2">We may suspend or terminate your account if:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>You violate these Terms</li>
                    <li>Fraudulent activity is detected</li>
                    <li>You provide false information</li>
                    <li>Account is inactive for 12 consecutive months</li>
                    <li>Required by law or regulatory authority</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">10.3 Effect of Termination</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Access to Platform will be revoked</li>
                    <li>Pending commissions will be paid (if not fraudulent)</li>
                    <li>No refund of registration fees</li>
                    <li>You must return any Company property</li>
                  </ul>
                </div>
              </div>
            </SectionBox>

            <SectionBox title="11. Dispute Resolution">
              <p>In case of disputes:</p>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li>Contact our support team: <a href="mailto:support@e-tailedindia.com" className="text-primary hover:underline">support@e-tailedindia.com</a> or <a href="tel:+919392898733" className="text-primary hover:underline">+91 93928 98733</a> or <a href="tel:+919390168733" className="text-primary hover:underline">+91 9390168733</a></li>
                <li>We will attempt to resolve within 15 working days</li>
                <li>If unresolved, disputes will be subject to arbitration in Hyderabad, Telangana</li>
                <li>Courts in Hyderabad have exclusive jurisdiction</li>
              </ul>
            </SectionBox>

            <SectionBox title="12. Governing Law">
              <p>
                These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Hyderabad, Telangana.
              </p>
            </SectionBox>

            <SectionBox title="13. Modifications">
              <p>
                We reserve the right to modify these Terms at any time. Material changes will be notified via email or platform notification. Continued use after modifications constitutes acceptance of the revised Terms.
              </p>
            </SectionBox>

            <SectionBox title="Contact Information">
              <p className="mb-4">For questions or concerns regarding these Terms:</p>
              <div className="space-y-3 bg-background/30 p-6 rounded-xl border border-white/5">
                <p><strong className="text-white/90">Company:</strong> Etailed Digital Services Pvt. Ltd.</p>
                <p><strong className="text-white/90">Address:</strong> Sai Silicon Heights, 3-118, Megha Hills Rd, Ayyappa Society, Mega Hills, Madhapur, Hyderabad, Telangana 500081, India</p>
                <p><strong className="text-white/90">Email:</strong> <a href="mailto:support@e-tailedindia.com" className="text-primary hover:underline">support@e-tailedindia.com</a></p>
                <p><strong className="text-white/90">Phone:</strong> <a href="tel:+919392898733" className="text-primary hover:underline">+91 93928 98733</a> or <a href="tel:+919390168733" className="text-primary hover:underline">+91 9390168733</a></p>
              </div>
            </SectionBox>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
