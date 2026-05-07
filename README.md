# Joshua Hoban — Portfolio

Live at [joshuahoban.dev](https://joshuahoban.dev)

A full-stack personal portfolio with a React frontend and .NET 10 API backend.
Feel free to use this as a template for your own portfolio.

## Tech Stack

**Frontend**
- React 19 + TypeScript + Vite
- Tailwind CSS v4
- Framer Motion

**Backend**
- ASP.NET Core (.NET 10)
- Contact form sends email via SMTP (Gmail)

**Deployment**
- Frontend → Vercel
- Backend → Azure App Service (Windows, .NET 10)

## Project Structure

Portfolio/
├── frontend/        # React/Vite app
└── backend/
└── Portfolio.Api/   # ASP.NET Core Web API



## Local Development

### Prerequisites
- Node.js 20+
- .NET 10 SDK

### Frontend

```bash
cd frontend
npm install
npm run dev
Runs on http://localhost:5173

Backend
Create backend/Portfolio.Api/appsettings.Development.json:


{
  "Smtp": {
    "Host": "smtp.gmail.com",
    "Port": "587",
    "Username": "your-email@gmail.com",
    "Password": "your-app-password",
    "ToEmail": "your-email@gmail.com"
  }
}
Then run:


cd backend/Portfolio.Api
dotnet run
Runs on http://localhost:5097

Frontend Environment
Create frontend/.env.local:


VITE_API_URL=http://localhost:5097
Deployment
Backend → Azure App Service
Publish the .NET project:

cd backend/Portfolio.Api
dotnet publish -c Release -o ./publish
Deploy the publish/ folder to your Azure App Service via the VS Code Azure extension.
Set CORS in Program.cs to allow your Vercel domain.
Frontend → Vercel
Import the GitHub repo in Vercel
Set Root Directory to frontend
Add environment variable:
VITE_API_URL = your Azure App Service URL
Deploy
License
MIT — use it, fork it, make it yours.
