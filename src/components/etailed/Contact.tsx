import { useState } from "react";
import { Reveal } from "./Reveal";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "5c828f7d-5e23-44e1-8c1e-14cc57e9c183");
    formData.append("subject", "New Contact Inquiry - E-Tailed Digital Studio");

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
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full min-h-[90vh] bg-[#111329] text-white flex items-center justify-center pt-32 pb-24 px-5 sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-screen-xl grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start pt-8">
        
        {/* Left Side: Header Content */}
        <div className="flex flex-col text-left w-full mt-4 lg:mt-12">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-6">
              Get in touch
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
              Want to get in touch?
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-md leading-relaxed">
              We’d be happy to talk through your requirements and then
            </p>
          </Reveal>
        </div>

        {/* Right Side: Form */}
        <div className="w-full">
          <Reveal delay={100}>
            <form onSubmit={handleSubmit} className="flex flex-col w-full">
              
              <div className="flex flex-col gap-2 border-b border-white/20 py-6 focus-within:border-white transition-colors">
                <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-white/60">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="bg-transparent border-none outline-none text-white text-lg md:text-xl w-full"
                />
              </div>

              <div className="flex flex-col gap-2 border-b border-white/20 py-6 focus-within:border-white transition-colors">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-white/60">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="bg-transparent border-none outline-none text-white text-lg md:text-xl w-full"
                />
              </div>

              <div className="flex flex-col gap-2 border-b border-white/20 py-6 focus-within:border-white transition-colors">
                <label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-white/60">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="bg-transparent border-none outline-none text-white text-lg md:text-xl w-full"
                />
              </div>

              <div className="flex flex-col gap-2 border-b border-white/20 py-6 focus-within:border-white transition-colors">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-white/60">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={2}
                  className="bg-transparent border-none outline-none text-white text-lg md:text-xl w-full resize-none"
                />
              </div>

              <div className="mt-12 flex flex-col md:flex-row items-center md:items-start gap-4 justify-start">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto inline-flex items-center justify-center border border-white/20 hover:border-white hover:bg-white hover:text-[#111329] transition-all px-12 py-4 rounded-full text-[11px] md:text-xs font-bold uppercase tracking-[0.15em] disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
                {submitStatus === "success" && (
                  <p className="text-green-400 text-sm font-semibold mt-4 md:mt-0 md:self-center">
                    Message sent successfully!
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="text-red-400 text-sm font-semibold mt-4 md:mt-0 md:self-center">
                    Something went wrong. Please try again.
                  </p>
                )}
              </div>
              
            </form>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
