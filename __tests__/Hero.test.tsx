import { render, screen } from "@testing-library/react";
import Hero from "@/components/Hero";

describe("Hero", () => {
  it("renders name, title, and CTA buttons", () => {
    render(
      <Hero
        name="Test User"
        title="AI Engineer & Software Engineer"
        tagline="Building AI-powered solutions for real-world impact."
        location="Kuala Lumpur, Malaysia"
        resumeUrl="/resume.pdf"
        email="test@example.com"
        socials={[
          { label: "GitHub", href: "https://github.com/example", icon: "github" },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/example", icon: "linkedin" },
          { label: "Email", href: "mailto:test@example.com", icon: "email" }
        ]}
      />
    );

    expect(screen.getByRole("heading", { name: /test user/i })).toBeInTheDocument();
    expect(screen.getByText(/ai engineer & software engineer/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /view projects/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /download resume/i })).toBeInTheDocument();
  });
});
