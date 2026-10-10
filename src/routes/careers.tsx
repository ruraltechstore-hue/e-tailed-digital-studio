import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/etailed/Nav";
import { Footer } from "@/components/etailed/Footer";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import careersImage from "@/assets/careers-hero.jpg";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — E-TAILED DIGITAL INDIA" },
      { name: "description", content: "Join the team at E-TAILED DIGITAL INDIA." },
    ],
  }),
  component: Page,
});

function JobBox({
  title,
  meta,
  description,
  onApply,
}: {
  title: string;
  meta: string;
  description: string;
  onApply: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-muted/20 border border-border/80 rounded-2xl p-6 md:p-8 transition-colors hover:border-primary/50 relative overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div>
          <h3 className="text-xl md:text-2xl font-bold mb-2">{title}</h3>
          <p className="text-sm font-semibold uppercase tracking-[0.1em] text-muted-foreground">
            {meta}
          </p>
        </div>
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary hover:text-primary/80 transition-colors shrink-0 md:mt-1"
        >
          View Description {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: "auto", opacity: 1, marginTop: 24 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="h-[1px] w-full bg-border/50 mb-6" />
            <p className="text-muted-foreground leading-relaxed text-base">
              {description}
            </p>
            <div className="mt-8">
              <button onClick={onApply} className="inline-flex items-center justify-center border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-colors">
                Apply Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Page() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleApplicationSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "5c828f7d-5e23-44e1-8c1e-14cc57e9c183");
    formData.append("subject", `Job Application - ${selectedJob}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Accept": "application/json"
        },
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setSubmitStatus("success");
        form.reset();
        setTimeout(() => {
          setSelectedJob(null);
          setSubmitStatus("idle");
        }, 2000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const jobs = [
    {
      title: "Business Development Executive",
      meta: "Hyderabad / Remote · Full-time · Competitive",
      description: "Connect with potential clients, understand their requirements, introduce our services and build strong business relationships."
    },
    {
      title: "Business Development Associate",
      meta: "Hyderabad / Remote · Full-time · Competitive",
      description: "Support lead generation, client communication, follow-ups and sales activities while helping the team identify new business opportunities."
    }
  ];

  return (
    <>
      <Nav />
      <main className="bg-background min-h-screen pb-24">
        
        {/* Header with Background Image */}
        <section className="relative w-full min-h-[45vh] pt-32 pb-16 px-4 md:px-8 flex flex-col justify-center items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={careersImage}
              alt="Careers background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent pointer-events-none" />
          </div>
          
          <div className="relative z-10 mx-auto w-full max-w-screen-xl px-5 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-4">
              Want to Be a 
              <br />
              <em className="font-serif font-normal italic text-primary">Part of Us?</em>
            </h1>
          </div>
        </section>

        {/* Job Listings */}
        <section className="mx-auto max-w-screen-md px-5 sm:px-8 lg:px-12 mt-8 md:mt-12">
          <div className="flex flex-col gap-6">
            {jobs.map((job, index) => (
              <JobBox key={index} {...job} onApply={() => setSelectedJob(job.title)} />
            ))}
          </div>
        </section>

      </main>
      <Footer />

      {/* Dynamic Application Modal */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#111329]/80 backdrop-blur-sm overflow-y-auto"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-transparent backdrop-blur-2xl border border-white/20 p-6 md:p-8 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.5)] w-full max-w-lg relative text-white my-auto"
            >
              <button 
                onClick={() => setSelectedJob(null)}
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="mb-8 pr-8">
                <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">
                  Apply for
                </p>
                <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                  {selectedJob}
                </h2>
              </div>

              <form onSubmit={handleApplicationSubmit} className="flex flex-col gap-5 w-full mt-4">
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-semibold text-white/70 ml-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Jane Doe"
                    className="bg-transparent border border-white/20 rounded-xl px-5 py-3.5 text-white text-sm outline-none focus:border-white focus:bg-white/5 transition-all shadow-inner placeholder:text-white/20"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-xs font-semibold text-white/70 ml-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="+1 (555) 000-0000"
                      className="bg-transparent border border-white/20 rounded-xl px-5 py-3.5 text-white text-sm outline-none focus:border-white focus:bg-white/5 transition-all shadow-inner placeholder:text-white/20"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-semibold text-white/70 ml-1">
                      Email ID
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="jane@company.com"
                      className="bg-transparent border border-white/20 rounded-xl px-5 py-3.5 text-white text-sm outline-none focus:border-white focus:bg-white/5 transition-all shadow-inner placeholder:text-white/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="linkedin" className="text-xs font-semibold text-white/70 ml-1">
                      LinkedIn Profile (Optional)
                    </label>
                    <input
                      type="url"
                      id="linkedin"
                      name="linkedin"
                      placeholder="https://linkedin.com/in/..."
                      className="bg-transparent border border-white/20 rounded-xl px-5 py-3.5 text-white text-sm outline-none focus:border-white focus:bg-white/5 transition-all shadow-inner placeholder:text-white/20"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="resume" className="text-xs font-semibold text-white/70 ml-1">
                      Google Drive Resume (Optional)
                    </label>
                    <input
                      type="url"
                      id="resume"
                      name="resume"
                      placeholder="https://drive.google.com/..."
                      className="bg-transparent border border-white/20 rounded-xl px-5 py-3.5 text-white text-sm outline-none focus:border-white focus:bg-white/5 transition-all shadow-inner placeholder:text-white/20"
                    />
                  </div>
                </div>

                <div className="mt-4 flex flex-col items-center gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-[#111329] hover:bg-white/90 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all px-8 py-4 rounded-xl text-sm font-bold tracking-wide flex items-center justify-center disabled:opacity-50"
                  >
                    {isSubmitting ? "Processing..." : "Submit Application"}
                  </button>
                  {submitStatus === "success" && (
                    <p className="text-green-400 text-sm font-semibold">
                      Application sent successfully!
                    </p>
                  )}
                  {submitStatus === "error" && (
                    <p className="text-red-400 text-sm font-semibold">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
