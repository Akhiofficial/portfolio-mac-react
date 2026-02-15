import React from "react";
import MacWindow from "./windows/macWindow";
import Terminal from "react-console-emulator";
import "./Cli.scss";

const Cli = ({ windowName, windowsState, setWindowsState }) => {
  const welcomeMessage = `
═══════════════════════════════════════════════════════════════
                                                              
     Welcome to My Portfolio Terminal!                         
     Type 'help' to see all available commands                 
                                                              
═══════════════════════════════════════════════════════════════
`;

  const commands = {
    about: {
      description: "Show information about me",
      usage: "about",
      fn: () => {
        return `
Hello! I'm a passionate full-stack developer with a focus on
creating beautiful and functional web applications. I specialize
in React, JavaScript, and modern web technologies.

I love building user-friendly interfaces and solving complex
problems with code. When I'm not coding, you'll find me exploring
new technologies and contributing to open-source projects.
`;
      },
    },
    skills: {
      description: "Display my technical skills",
      usage: "skills",
      fn: () => {
        return `
Frontend Skills:
───────────────────────────────────────────────────────────────
  • React.js / Next.js
  • JavaScript / TypeScript
  • HTML5 / CSS3 / SCSS
  • Responsive Design
  • Webpack / Vite
  • State Management (Redux, Context API)

Backend Skills:
───────────────────────────────────────────────────────────────
  • Node.js / Express
  • Databases (MongoDB, PostgreSQL)
  • REST APIs
  • Authentication & Authorization

Tools & DevOps:
───────────────────────────────────────────────────────────────
  • Git / GitHub
  • Docker
  • CI/CD Pipelines
  • Linux / Ubuntu
`;
      },
    },
    projects: {
      description: "View my portfolio projects",
      usage: "projects",
      fn: () => {
        return `
Featured Projects:
───────────────────────────────────────────────────────────────
1. Hotel App
   A comprehensive hotel management application facilitating seamless booking and administrative operations. Vibe coded.
   Tech: PHP, SQL, Vanilla JS, CSS
   Repo: https://github.com/Akhiofficial/hotel-app

2. Placemate Campus Placement System
   An efficient platform designed to streamline and manage campus placement processes.
   Tech: React, Node.js, Education Tech, Web App
   Repo: https://github.com/Akhiofficial/placemate-campus-placement-system

3. CareerVarta
   A dynamic career guidance and news platform built on WordPress.
   Tech: WordPress, PHP
   Link: https://careervarta.com/

4. Sabah Siddiqui Portfolio
   A professional portfolio website showcasing achievements, skills, and work experience.
   Tech: WordPress, Portfolio, Design
   Link: https://sabahsiddiqui.com/

5. Secure House
   Optimized the SEO performance for a security services website.
   Tech: SEO, Web Performance
   Link: https://secure-house.co.uk/

6. Type 'github' to view all projects on GitHub!
`;
      },
    },
    experience: {
      description: "Display my work experience",
      usage: "experience",
      fn: () => {
        return `
Work Experience:
───────────────────────────────────────────────────────────────
2023 - Present | Senior Frontend Developer
TechCorp Solutions
  • Led development of customer-facing applications
  • Mentored junior developers
  • Improved performance by 40%

2021 - 2023 | Full Stack Developer
StartupHub
  • Built scalable web applications
  • Implemented CI/CD pipelines
  • Collaborated with cross-functional teams

2020 - 2021 | Junior Developer
Web Design Co.
  • Developed responsive websites
  • Learned modern web technologies
  • Contributed to multiple client projects
`;
      },
    },
    contact: {
      description: "Get my contact information",
      usage: "contact",
      fn: () => {
        return `
Contact Information:
───────────────────────────────────────────────────────────────
Email:     contact@yourportfolio.com
Phone:     +1 (555) 123-4567
Location:  San Francisco, CA
Timezone:  PST (UTC-8)

Social Links:
───────────────────────────────────────────────────────────────
GitHub:    github.com/yourprofile
LinkedIn:  linkedin.com/in/yourprofile
Twitter:   twitter.com/yourprofile
Portfolio: yourportfolio.com

Feel free to reach out or connect with me on any platform!
`;
      },
    },
    resume: {
      description: "View resume/CV",
      usage: "resume",
      fn: () => {
        return `
Loading resume...

RESUME
───────────────────────────────────────────────────────────────
Download my full resume: https://yourportfolio.com/resume.pdf

SUMMARY
Senior Full Stack Developer with 4+ years of experience building
scalable web applications. Expertise in React, Node.js, and cloud
technologies.

EDUCATION
Bachelor of Science in Computer Science
State University, 2020

CERTIFICATIONS
• AWS Solutions Architect Associate
• React Advanced Patterns (FrontendMasters)
• Full Stack Development (Udemy)

For detailed information, please download the full resume PDF.
`;
      },
    },
    github: {
      description: "Open GitHub profile",
      usage: "github",
      fn: () => {
        return `
Opening GitHub profile...
📂 GitHub: https://github.com/yourprofile

View all my projects, contributions, and code samples on GitHub!
`;
      },
    },
    linkedin: {
      description: "Open LinkedIn profile",
      usage: "linkedin",
      fn: () => {
        return `
Opening LinkedIn profile...
💼 LinkedIn: https://linkedin.com/in/yourprofile

Connect with me on LinkedIn for professional updates!
`;
      },
    },
    email: {
      description: "Display email address",
      usage: "email",
      fn: () => {
        return `
Email: contact@yourportfolio.com

Feel free to send me an email for inquiries or collaboration opportunities!
`;
      },
    },
    whoami: {
      description: "Show current user information",
      usage: "whoami",
      fn: () => {
        return "akhilesh";
      },
    },
    echo: {
      description: "Echo a passed string",
      usage: "echo <string>",
      fn: (...args) => args.join(" "),
    },
  };

  return (
    <MacWindow windowName={windowName} windowsState={windowsState} setWindowsState={setWindowsState}>
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={welcomeMessage}
          promptLabel={"akhilesh@mac:~$"}
          promptLabelStyle={{ color: "rgb(38, 255, 0)" }}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
