# 🚀 React Vite Tailwind Typescript Starter Deluxe

![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/-Tailwind%20CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/-Redux%20Toolkit-764ABC?style=flat-square&logo=redux&logoColor=white)
![React Router](https://img.shields.io/badge/-React%20Router-CA4245?style=flat-square&logo=react-router&logoColor=white)

A supercharged ⚡ starter template for building modern, scalable React applications with Vite, Tailwind CSS, TypeScript, and a suite of powerful tools and libraries.

## 🌟 Features

- ⚛️ React 18 with hooks for efficient UI development
- 🛠️ Vite 4 for lightning-fast builds and hot module replacement
- 🎨 Tailwind CSS 3 for utility-first styling
- 🧰 TypeScript for enhanced type safety and developer experience
- 🔄 Redux Toolkit & Zustand for flexible state management
- 🧭 React Router for seamless navigation
- 📝 React Hook Form for efficient form handling
- 🌐 Axios for streamlined API requests
- 📅 date-fns for powerful date manipulation
- 🧩 Chakra UI & Material-UI for flexible component libraries
- 🎭 React Icons for a vast selection of customizable icons
- 🧪 Jest and React Testing Library for robust testing
- 📚 Storybook for isolated component development
- 🐶 Husky & lint-staged for pre-commit code quality checks
- 📏 ESLint & Prettier for consistent code style
- 🌿 dotenv for secure environment variable management
- 📁 Opinionated folder structure for scalability
- 🚀 Fast refresh for quick development iterations
- 📱 Responsive design ready

## 🚀 Quick Start

### Prerequisites

- Node.js (version 14 or above)
- npm or yarn

### Setting Up Your Project

1. Clone this repository:

   ```bash
   git clone https://github.com/timataliatov/WBS-Coding-School.git
   cd your-project-name
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your environment variables:

   ```bash
   cp .env.example .env
   ```

   Edit the `.env` file with your specific configuration.

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000`. Happy coding! 🎉

## 📚 Available Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the app for production
- `npm run preview`: Preview the production build locally
- `npm run lint`: Run ESLint to catch linting errors
- `npm run format`: Format code with Prettier
- `npm test`: Run Jest tests
- `npm run storybook`: Start Storybook for component development
- `npm run build-storybook`: Build Storybook for deployment

## 📂 Enhanced Folder Structure

```
react-vite-tailwind-starter/
├── .storybook/          # Storybook configuration
├── public/              # Static files
├── src/
│   ├── components/      # Reusable components
│   ├── pages/           # Page components
│   ├── hooks/           # Custom React hooks
│   ├── services/        # API services
│   ├── store/           # Redux store setup
│   │   ├── slices/      # Redux slices
│   │   └── index.ts     # Store configuration
│   ├── styles/          # Global styles
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Utility functions
│   ├── App.tsx          # Main App component
│   └── main.tsx         # Entry point
├── tests/
│   ├── unit/            # Unit tests
│   └── integration/     # Integration tests
├── .eslintrc.json       # ESLint configuration
├── .gitignore           # Git ignore rules
├── .prettierrc          # Prettier configuration
├── index.html           # HTML entry point
├── jest.config.js       # Jest configuration
├── package.json         # Project dependencies and scripts
├── postcss.config.js    # PostCSS configuration
├── README.md            # Project documentation (you are here!)
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## 🧑‍💻 Development Workflow

1. Create a feature branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Develop and test your feature.

3. Run linting and formatting:

   ```bash
   npm run lint
   npm run format
   ```

4. Commit changes (Husky will run pre-commit hooks):

   ```bash
   git add .
   git commit -m "Add your meaningful commit message here"
   ```

5. Push your branch and create a Pull Request on GitHub.

## 🔄 State Management

This starter includes two popular state management solutions:

1. **Redux Toolkit**: For complex, global state management.

   - Located in `src/store/`
   - Create slices in `src/store/slices/`
   - Configure store in `src/store/index.ts`

2. **Zustand**: For simpler, hook-based state management.
   - Create stores in `src/store/zustand/`
   - Use in components with `import { useYourStore } from 'src/store/zustand/yourStore'`

Choose the one that best fits your project's needs!

## 🎨 Styling and UI

- **Tailwind CSS**: Customize your design system in `tailwind.config.js`
- **Chakra UI**: Import and use components from `@chakra-ui/react`
- **Material-UI**: Import and use components from `@mui/material`
- **React Icons**: Import icons from `react-icons`, e.g., `import { FaReact } from 'react-icons/fa'`

## 🧪 Testing

- Write unit tests in the `tests/unit/` directory
- Write integration tests in the `tests/integration/` directory
- Run tests with `npm test`

## 📚 Storybook

- Develop components in isolation with Storybook
- Write stories in `src/components/YourComponent/YourComponent.stories.tsx`
- Run Storybook with `npm run storybook`

## 🛠️ Configuration Files

- **TypeScript**: Adjust compiler options in `tsconfig.json`
- **Vite**: Modify build settings in `vite.config.ts`
- **ESLint**: Customize linting rules in `.eslintrc.json`
- **Prettier**: Adjust code formatting in `.prettierrc`
- **Jest**: Configure testing in `jest.config.js`

## 🔐 Environment Variables

- Use `process.env.VITE_YOUR_VARIABLE` to access environment variables
- Add new variables to both `.env` and `.env.example` (without real values)

## 🚀 Deployment

1. Build your project:

   ```bash
   npm run build
   ```

2. Deploy the `dist/` directory to your hosting platform of choice (Vercel, Netlify, etc.)

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the project
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a pull request

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Zustand](https://github.com/pmndrs/zustand)
- [React Router](https://reactrouter.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Axios](https://axios-http.com/)
- [date-fns](https://date-fns.org/)
- [Chakra UI](https://chakra-ui.com/)
- [Material-UI](https://mui.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Storybook](https://storybook.js.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

---

Happy coding! If you find this starter kit helpful, please give it a ⭐️ on GitHub!

---

## 🌟 How to Use This Template

1. Click the "Use this template" button at the top of this repository.
2. Choose a name for your new repository and create it.
3. Clone your new repository locally:
   ```bash
   git clone https://github.com/your-username/your-new-repo.git
   cd your-new-repo
   ```
4. Install dependencies:
   ```bash
   npm install
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

## 🛠 Customization and Next Steps

After creating your project from this template:

1. Update the `package.json` file:

   - Change the `name` and `version` fields.
   - Update the `description` and `author` fields.

2. Configure environment variables:

   - Copy `.env.example` to `.env` and fill in your project-specific values.

3. Modify the `vite.config.ts` file if you need to adjust build settings.

4. Update this README.md file to describe your specific project.

5. Start building your components in the `src/components` directory.

6. Create new pages in the `src/pages` directory and add them to your routing configuration.

7. Customize the Tailwind configuration in `tailwind.config.js` to match your design system.

8. Set up your state management solution (Redux or Zustand) based on your project needs.

9. Write tests for your components and utilities.

10. Set up Continuous Integration using the provided GitHub Actions workflow.

Remember to commit your changes regularly and push to your repository!

## 🤝 Contributing

Contributions are welcome! Please check out the [Contributing Guide](CONTRIBUTING.md) for more details.

## 📜 License

This project is open source and available under the [MIT License](LICENSE).
