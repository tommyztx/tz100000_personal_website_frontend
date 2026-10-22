import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface Role {
  title: string;
  dates: string;
  bullets: string[];
  tech: string[];
}

interface Employer {
  name: string;
  location: string;
  roles: Role[];
}

interface Project {
  name: string;
  subtitle: string;
  dates: string;
  inProgress: boolean;
  bullets: string[];
  tech: string[];
}

interface SkillGroup {
  label: string;
  items: string[];
}

interface Education {
  school: string;
  location: string;
  degree: string;
  dates: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class ExperienceComponent {
  primaryRole = 'Software Engineer';
  currentEmployer = 'Fidelity Investments';

  summary =
    'Software engineer at Fidelity Investments building full-stack and cloud systems ' +
    'across Angular, Spring Boot, PostgreSQL, and AWS. I focus on automation and ' +
    'maintainable design, from AI agent-driven workflows that cut developer workload 45% ' +
    'to API migrations that saved ~$40,000/month. Currently pursuing an MS in Computer ' +
    'Science with an AI specialization at Georgia Tech.';

  employers: Employer[] = [
    {
      name: 'Fidelity Investments',
      location: 'Westlake, TX',
      roles: [
        {
          title: 'Software Engineer',
          dates: 'November 2025 – Present',
          bullets: [
            'Built an AI agent-driven automation workflow for Liquibase on a config-driven app, cutting developer workload 45%',
            'Applied event-driven architecture to root-cause diagnostics; built a tool resolving 65% of config/code issues',
            'Ran PostgreSQL backfill and categorization scripts to remediate records for 40,000+ participants',
            'Automated onboarding (IntelliJ, VS Code, Postman, PostgreSQL, security) for 2,500 new hires',
            'Led a workstream guiding client onboarding for a product area, distributing work across two engineers and providing hands-on technical support over three months',
          ],
          tech: ['AI Agents', 'Liquibase', 'PostgreSQL', 'Event-Driven Architecture'],
        },
        {
          title: 'Associate Software Engineer, LEAP Program',
          dates: 'July 2025 – November 2025',
          bullets: [
            'Built a full-stack application with testing and deployment across Angular, Spring Boot, and SQL',
            'Drove unit, integration, and e2e test coverage to 100% using dependency injection across all MVC layers',
            'Configured project foundations with Spring, JDBC, MyBatis, JUnit, Jasmine, and Karma',
          ],
          tech: ['Angular', 'Spring Boot', 'MyBatis', 'JUnit', 'Jasmine', 'Karma'],
        },
        {
          title: 'Wealth, Database Platform Enablement Intern',
          dates: 'June 2024 – August 2024',
          bullets: [
            'Built Python and AWS Lambda ETL components to ingest, extract, and reformat 20,000+ client-requested data files daily',
            'Migrated manual job scheduling to Control-M, replacing hands-on timing with configurable schedules across the team',
            'Created a reusable codebase for 60+ workflows querying business data on client request, saving months of future development time',
          ],
          tech: ['Python', 'AWS Lambda', 'Control-M'],
        },
        {
          title: 'PI, API Decommission and Migration Intern',
          dates: 'June 2023 – August 2023',
          bullets: [
            'Migrated internal SOAP microservices to REST APIs, moving workloads from C2C boxes to AWS EKS for 10+ features',
            'Decommissioned legacy SOAP APIs post-migration, saving the organization ~$40,000/month',
            'Established Postman, Splunk, and Datadog monitoring on the new Spring Boot services to assure quality',
          ],
          tech: ['Spring Boot', 'REST', 'AWS EKS', 'Splunk', 'Datadog'],
        },
      ],
    },
    {
      name: 'Texas A&M University',
      location: 'College Station, TX',
      roles: [
        {
          title: 'Student Technician, Architecture and Engineering',
          dates: 'November 2023 – May 2024',
          bullets: [
            "Designed a UI to automate migration of 100,000+ GitHub repositories, metadata, permissions, and organizations from on-prem Enterprise to Cloud Enterprise, serving the university's 70,000-user GitHub infrastructure",
            'Owned the migration workflow design under an architecture manager, architecting an AWS Step Function to replace a fully manual, per-organization process',
            'Increased migration throughput 300%+ by eliminating redundant manual handoffs between repo owners, org owners, and script runs',
            'Maintained infrastructure as code with Terraform and GitHub Actions across the full project',
          ],
          tech: ['AWS Step Functions', 'Terraform', 'GitHub Actions'],
        },
      ],
    },
  ];

  projects: Project[] = [
    {
      name: 'This Website',
      subtitle: 'Personal site and architecture showcase',
      dates: 'In progress',
      inProgress: true,
      bullets: [
        'Angular front end prerendered and deployed as a static site on Vercel',
        'Service-based data layer designed to connect to a planned Spring Boot API',
      ],
      tech: ['Angular', 'Vercel', 'Spring Boot'],
    },
    {
      name: 'LEAP: SmallChange',
      subtitle: 'Full Stack (Frontend, Middle Tier, Backend)',
      dates: 'June 2025 – October 2025',
      inProgress: false,
      bullets: [
        'Built a portfolio-tracking app using Angular, Spring, and Oracle SQL',
        'Led SQL schema, UML, and ER diagram planning to scope requirements across four services',
        'Followed MVC and RESTful design practices to connect a Spring backend to an Angular frontend',
      ],
      tech: ['Angular', 'Spring', 'Oracle SQL'],
    },
    {
      name: 'Datatopia',
      subtitle: 'Pharmaceutical Data Company Chatbot · Capstone, Backend Developer',
      dates: 'August 2024',
      inProgress: false,
      bullets: [
        'Integrated 300GB of pharmaceutical data from Azure SQL into a Microsoft Azure environment',
        "Scaled and secured inter-service connections using Docker across the company's infrastructure",
        'Modeled a four-month development roadmap for the chatbot using LangChain and LangGraph',
      ],
      tech: ['Azure', 'Docker', 'LangChain', 'LangGraph'],
    },
    {
      name: 'Twyf',
      subtitle: 'Group Tab Mobile App Startup · Cofounder, Backend Developer',
      dates: 'July 2024',
      inProgress: false,
      bullets: [
        'Led Agile user testing in Figma, iterating 15+ UX flows for a group-tab payment app',
        'Designed PostgreSQL schema to support account and group functionality at market scale',
        'Researched REST API scalability strategies, projected to expand user support capacity by 40%',
      ],
      tech: ['PostgreSQL', 'REST', 'Figma'],
    },
    {
      name: 'Budget Worksheet',
      subtitle: 'Personal project',
      dates: 'In progress',
      inProgress: true,
      bullets: [],
      tech: [],
    },
    {
      name: 'Friend Trip Payment Equalizer',
      subtitle: 'Personal project',
      dates: 'In progress',
      inProgress: true,
      bullets: [],
      tech: [],
    },
  ];

  skills: SkillGroup[] = [
    {
      label: 'Languages',
      items: ['Python', 'C++', 'JavaScript', 'Java', 'SQL', 'HTML/CSS', 'NodeJS', 'Angular'],
    },
    {
      label: 'Technical',
      items: [
        'AWS', 'Azure', 'Terraform', 'Spring Boot', 'MyBatis', 'REST APIs', 'PostgreSQL',
        'Unix/Linux', 'Git', 'Agile', 'JUnit', 'Jasmine', 'Karma', 'Mockito', 'Splunk', 'Datadog',
      ],
    },
    {
      label: 'AI Tooling',
      items: ['Microsoft Copilot', 'Claude', 'AI Agents', 'MCP (Model Context Protocol)'],
    },
    {
      label: 'Certifications',
      items: ['AWS Cloud Practitioner CloudQuest'],
    },
  ];

  education: Education[] = [
    {
      school: 'Georgia Institute of Technology',
      location: 'Atlanta, GA',
      degree: 'Master of Science in Computer Science, AI Specialization',
      dates: 'Expected May 2029',
    },
    {
      school: 'Texas A&M University',
      location: 'College Station, TX',
      degree: 'Bachelor of Engineering in Computer Science; Minor in Statistics',
      dates: 'May 2025',
    },
  ];
}
