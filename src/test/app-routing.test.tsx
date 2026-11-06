import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import App from "@/App";

describe("App routing", () => {
  const routes = [
    { path: "/", expectedText: "E-TAILED Digital India" },
    { path: "/services", expectedText: "Professional Ecosystem" },
    { path: "/about", expectedText: "About" },
    { path: "/partner", expectedText: "Partner With Us" },
    { path: "/careers", expectedText: "Want to Be a" },
    { path: "/faq", expectedText: "Frequently Asked" },
    { path: "/contact", expectedText: "Email" },
    { path: "/privacy-policy", expectedText: "Privacy Policy" },
    { path: "/terms-conditions", expectedText: "Terms & Conditions" },
    { path: "/refund-policy", expectedText: "Refund Policy" },
    { path: "/shipping-policy", expectedText: "Shipping Policy" },
    { path: "/disclaimer", expectedText: "Disclaimer" },
    { path: "/cookie-policy", expectedText: "Cookie Policy" },
    { path: "/unknown-route", expectedText: "404" },
  ];

  routes.forEach(({ path, expectedText }) => {
    it(`renders content for route ${path}`, async () => {
      render(
        <MemoryRouter initialEntries={[path]}>
          <App />
        </MemoryRouter>,
      );
      const elements = await screen.findAllByText(new RegExp(expectedText, "i"));
      expect(elements.length).toBeGreaterThan(0);
    });
  });
});
