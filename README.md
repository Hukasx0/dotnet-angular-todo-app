# Todo List Application

Todo List application showcasing full-stack development with Angular 17, .NET 8 Core, and PostgreSQL database.

## Technologies Used

- Frontend: Angular 17
- Backend: .NET Core 8.0 Web API
- Database: PostgreSQL
- ORM: Entity Framework Core
- Visual Studio

## Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [.NET SDK](https://dotnet.microsoft.com/download) (8.0)
- [PostgreSQL](https://www.postgresql.org/download/)
- [Angular CLI](https://angular.dev/tools/cli) (`npm install -g @angular/cli`)

## Getting Started

### Database Setup

1. Create a PostgreSQL database:
```sql
CREATE DATABASE todoappdb;
```

2. Update the connection string in `appsettings.json` (dotnet-angular-todo-app.Server/):
```json
{
  "ConnectionStrings": {
    "DatabaseConnection": "Host=localhost;Port=5432;Database=todoappdb;Username=postgres;Password=root"
  }
}
```

### Backend Setup

1. Navigate to the API project directory:
```bash
cd dotnet-angular-todo-app.Server/
```

2. Run migrations:
```bash
dotnet ef database update
```

3. Start the API:
```bash
dotnet run
```

The API will be available at `https://localhost:5087`

### Frontend Setup

1. Navigate to the Angular project directory:
```bash
cd dotnet-angular-todo-app.client/
```

2. Install dependencies:
```bash
npm install
```

3. Start the Angular application:
```bash
ng serve
```

The application will be available at `http://localhost:4200`

## Features

- Create new todo items
- Mark todos as complete/incomplete
- Delete existing todos
- Real-time updates
