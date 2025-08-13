# Overview

This is a complete, fully-functional comprehensive business solutions platform replicating Lambana Solutions Hub with all service categories, professional design, and inquiry management. The application is a full-stack React website featuring a modern business portfolio with contact functionality, built using React with TypeScript on the frontend and Express.js on the backend. The project includes a comprehensive contact form system that allows visitors to submit inquiries and enables administrators to manage contact submissions.

## Recent Updates (January 2025)
✓ Complete homepage with hero section and professional service showcase
✓ Six major service categories with detailed descriptions and imagery
✓ Fully functional contact form with validation and backend API integration
✓ Responsive design with navigation and smooth scrolling
✓ Professional branding and styling matching business requirements
✓ Statistics section and service quick links
✓ About, payment portal, and comprehensive footer sections
✓ TypeScript type safety throughout frontend and backend

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The frontend is built with React 18 and TypeScript, using Vite as the build tool. The application follows a modern component-based architecture with:

- **UI Framework**: React with TypeScript for type safety
- **Styling**: Tailwind CSS with Radix UI components (shadcn/ui) for consistent design
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation for robust form management
- **Component Library**: Comprehensive set of accessible UI components from Radix UI

## Backend Architecture
The backend uses Express.js with TypeScript in a RESTful API pattern:

- **Server Framework**: Express.js with TypeScript support
- **API Structure**: RESTful endpoints for contact management (/api/contacts)
- **Data Validation**: Zod schemas for request/response validation
- **Storage Layer**: Abstracted storage interface supporting both memory storage (development) and database storage (production)
- **Development Server**: Integration with Vite for hot module replacement in development

## Data Storage Solutions
The application uses a flexible storage architecture:

- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Development Storage**: In-memory storage implementation for development/testing
- **Production Storage**: PostgreSQL with connection pooling via Neon's serverless driver

## Database Schema
The application defines two main entities:
- **Users**: For potential authentication system (id, username, password)
- **Contacts**: For contact form submissions (id, firstName, lastName, email, phone, service, subject, message, createdAt)

## Authentication and Authorization
Currently implements a basic user schema structure for future authentication features. The contact endpoints are publicly accessible for form submissions, with potential for admin-only access to contact management features.

## Build and Deployment
- **Development**: Vite dev server with hot reload and TypeScript checking
- **Production Build**: Vite for frontend bundling, esbuild for backend compilation
- **Asset Management**: Static asset serving with proper caching headers
- **Environment Configuration**: Environment-based configuration for database connections and API endpoints

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL database hosting
- **Drizzle ORM**: Type-safe database ORM and query builder
- **connect-pg-simple**: PostgreSQL session store for Express

## UI and Styling
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Radix UI**: Headless UI components for accessibility and behavior
- **shadcn/ui**: Pre-built component library built on Radix UI
- **Lucide React**: Icon library for consistent iconography

## Frontend Libraries
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form handling and validation
- **Wouter**: Lightweight routing library
- **Zod**: Schema validation library
- **date-fns**: Date manipulation utilities

## Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type safety and developer experience
- **PostCSS**: CSS processing with Autoprefixer
- **ESBuild**: Fast JavaScript bundler for production builds

## Third-party Integrations
- **Font Awesome**: Icon library for additional icons
- **Google Fonts**: Custom font loading (DM Sans, Architects Daughter, Fira Code, Geist Mono)
- **Replit Integration**: Development environment integration with runtime error overlay and cartographer plugins