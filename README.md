# Shippex Assessment - Portfolio Project

This is a React TypeScript application built with Vite that provides a shipping tracking interface. The application has been modified to use mock data instead of external APIs, making it perfect for portfolio demonstration and Vercel deployment.

## 🚀 Features

- **Mock Authentication**: Login system with predefined credentials
- **Package Tracking**: Search and track shipments using AWB numbers
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Timeline View**: Detailed shipment timeline with scan history
- **Error Handling**: Comprehensive error states and validation
- **Offline Detection**: Network status awareness

## 📋 Prerequisites

Before running the project, ensure you have:

- [Node.js](https://nodejs.org/) (>= 16.x)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

## 🛠️ Setup

1. Clone the repository:

```bash
git clone <repository-url>
cd shippex-assessment
```

2. Install dependencies:

```bash
npm install
```

## 🏃‍♂️ Running the Application

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Production Build

```bash
npm run build
npm run preview
```

## 🔐 Demo Credentials

### Login

- **Username**: `test@shippex.com`
- **Password**: `testy123@`

### Test AWB Numbers

- `210173066689` - Complete shipment with full timeline
- `123456789012` - Shipment in processing

## 🎯 Key Changes Made

### 1. Removed External API Dependencies

- Removed proxy server configuration from `vite.config.ts`
- Replaced axios API calls with mock data service
- Created comprehensive mock data matching original API structure

### 2. Mock Data Service

- **Location**: `src/services/mockApi.ts`
- **Features**:
  - Mock login authentication
  - Mock shipment tracking data
  - Realistic shipping timeline data
  - Error simulation for invalid AWBs

### 3. Vercel Deployment Ready

- Added `vercel.json` configuration
- Updated `package.json` for production
- SPA routing configuration for client-side routing

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
│   ├── auth/           # Authentication pages
│   └── tracking/       # Tracking functionality
├── routes/             # Routing configuration
├── services/           # Mock API service
├── assets/             # Static assets
└── utils/              # Utility functions
```

## 🌐 Deployment

This project is configured for easy deployment on Vercel:

1. Push to GitHub repository
2. Connect to Vercel
3. Deploy automatically

The `vercel.json` configuration ensures proper SPA routing.

## 🧪 Testing Features

1. **Login Flow**: Test with provided credentials
2. **Valid Tracking**: Use test AWB numbers
3. **Invalid Tracking**: Try random 12-digit numbers
4. **Responsive Design**: Test on different screen sizes
5. **Error States**: Test network offline simulation
6. **GitHub Integration**: GitHub repository links available on homepage, login, and tracking pages

## 🔗 GitHub Repository Link

The application includes GitHub repository links in multiple locations:

- **Homepage**: Prominent button to "View README" (default landing page)
- **Login Page**: Link below the sign-in form
- **Tracking Page**: Header link for easy access

The homepage is now the default landing page and dynamically shows either "Sign In to Track Shipments" or "Go to Tracking" based on the user's login status.

**Important**: Update the GitHub URL in `src/constants/index.ts` with your actual repository URL:

```typescript
GITHUB_REPO_URL: "https://github.com/your-username/shippex-assessment";
```

## 🔧 Technologies Used

- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **React Router** for navigation
- **React Cookie** for session management
- **Mock Data Service** replacing external APIs

---

**Note**: This is a portfolio demonstration project with mock data. All API calls have been replaced with local mock services for reliable demonstration purposes.

