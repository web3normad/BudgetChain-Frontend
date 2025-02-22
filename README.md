# BudgetChain-Frontend

## Setup
1. Clone the repository.
2. Run `npm install`.
3. Create a `.env.local` file and add required environment variables.
4. Run `npm run dev` to start the development server.

## Scripts
- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm run start`: Start the production server.
- `npm run lint`: Run ESLint.

## Environment Variables

The following environment variables are required for the project to run:

- `NEXT_PUBLIC_API_URL`: The base URL for the API.
- `NEXT_PUBLIC_ANALYTICS_ID`: Google Analytics tracking ID.
- `DATABASE_URL`: The connection URL for the database.
- `SECRET_KEY`: A secret key for encryption.

Create a `.env.local` file in the root of the project and add the required variables. Use `.env.local.template` as a reference.