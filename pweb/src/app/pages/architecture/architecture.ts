import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface ArchLayer {
  name: string;
  role: string;
  points: string[];
}

interface ArchSection {
  index: string;
  label: string;
  title: string;
  status: 'Live' | 'Planned';
  intro: string;
  layers: ArchLayer[];
}

interface Principle {
  name: string;
  detail: string;
}

@Component({
  selector: 'app-architecture',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './architecture.html',
  styleUrl: './architecture.css',
})
export class ArchitectureComponent {
  sections: ArchSection[] = [
    {
      index: '01',
      label: 'frontend',
      title: 'Angular, Static by Design',
      status: 'Live',
      intro:
        'The site is prerendered and served as a static front end on Vercel. ' +
        'It is static today but built to be responsive to a backend: components ' +
        'never fetch data themselves, they ask services for it.',
      layers: [
        {
          name: 'Components',
          role: 'Presentation',
          points: [
            'Standalone, lazy-loaded page components (Home, Experience, Architecture)',
            'Render typed models only, with no knowledge of where the data comes from',
          ],
        },
        {
          name: 'Services',
          role: 'Data access',
          points: [
            'Injectable services are the single seam between the UI and data',
            'Serve local mock data today, then switch to HttpClient calls against the API without touching components',
          ],
        },
        {
          name: 'Models',
          role: 'Contracts',
          points: [
            'Shared TypeScript interfaces mirror the API DTOs',
            'Mock data and real responses share one shape',
          ],
        },
      ],
    },
    {
      index: '02',
      label: 'backend',
      title: 'Spring Boot RESTful API',
      status: 'Planned',
      intro:
        'The backend follows RESTful design: resource-based URLs, the correct HTTP ' +
        'verbs and status codes, and DTOs at the boundary. Each request flows ' +
        'through three layers, each with one job.',
      layers: [
        {
          name: 'Controller',
          role: 'HTTP layer',
          points: [
            'Maps routes like GET /api/experience to service calls',
            'Handles request validation and response codes, with no business logic',
          ],
        },
        {
          name: 'Service',
          role: 'Business layer',
          points: [
            'Owns business rules and transaction boundaries',
            'Depends on DAO interfaces, injected by Spring',
          ],
        },
        {
          name: 'DAO',
          role: 'Persistence layer',
          points: [
            'MyBatis mappers hold all SQL and talk to PostgreSQL',
            'Swappable behind an interface, so the service layer never sees SQL',
          ],
        },
      ],
    },
  ];

  principles: Principle[] = [
    {
      name: 'Separation of concerns',
      detail:
        'Each layer has a single responsibility, so a change to SQL, business rules, or the UI stays in one place.',
    },
    {
      name: 'Object oriented design',
      detail:
        'Layers depend on interfaces, not implementations, and receive collaborators through dependency injection.',
    },
    {
      name: 'DRY',
      detail:
        'One API client on the front end, shared DTO mappers, and centralized error handling with @ControllerAdvice instead of repeated try/catch blocks.',
    },
    {
      name: 'Testability',
      detail:
        'Every layer can be tested in isolation: JUnit and Mockito on the backend, Jasmine and Karma on the front end.',
    },
  ];
}
