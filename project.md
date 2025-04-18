# AI Recipe Generator Project Analysis

## Overview

This project is a web application built with Next.js that allows users to generate culinary recipes using Artificial Intelligence. Users can input the name of a dish, select an AI model, and the application will generate a detailed recipe including description, preparation time, cooking time, servings, difficulty, ingredients, instructions, and optional tips. The application features a clean user interface with support for light and dark themes.

## Functionality

- **Recipe Generation:** Users enter a dish name into an input field. Submitting the form sends a request to a backend API endpoint (`/api/chat`).
- **AI Integration:** The backend API uses the Vercel AI SDK to interact with different large language models (Google Gemini, OpenAI GPT). It streams the generated recipe content back to the client.
- **Structured Output:** The AI is prompted to return the recipe in a specific JSON format defined by a Zod schema (`lib/recipe-schema.ts`). This ensures consistency in the displayed recipe.
- **Model Selection:** Users can choose from different AI models (e.g., "Smart", "Smarter", "Smartest") via a dropdown menu in the header. The selected model preference is saved in a browser cookie (`app/actions.ts`, `components/model-selector.tsx`) and used for subsequent API requests.
- **Recipe Display:** Generated recipes are displayed in a structured card format (`components/recipe-generator.tsx`, `components/ui/card.tsx`), showing metadata (prep time, cook time, etc.) and lists for ingredients and instructions.
- **Suggestions:** If no recipe has been generated yet, the application displays clickable suggestion cards to inspire the user (`lib/suggestions.ts`).
- **Theme Switching:** A theme switcher button allows users to toggle between light and dark modes. The theme preference is stored in local storage and applied using CSS variables and Tailwind CSS (`components/theme-switcher.tsx`, `app/layout.tsx`, `app/globals.css`). An animation provides a smooth visual transition.
- **Loading & Error States:** The UI provides visual feedback during recipe generation (loading spinners) and displays error messages if the generation fails (`components/recipe-generator.tsx`).
- **Streaming:** The application utilizes streaming responses from the AI, allowing the recipe content to appear progressively as it's generated (`ai` SDK's `streamObject` and `useObject`).

## Tech Stack

- **Framework:** Next.js (v15+, App Router)
- **Language:** TypeScript
- **AI SDK:** Vercel AI SDK (`@ai-sdk/react`, `@ai-sdk/google`, `@ai-sdk/openai`, `ai`)
- **UI Components:** Custom components (`components/ui/`) built using Radix UI primitives (`@radix-ui/*`) and styled with Tailwind CSS (likely following shadcn/ui conventions).
- **Styling:** Tailwind CSS (v4) with PostCSS. Includes `tailwind-merge` and `clsx` for utility class management.
- **Icons:** Lucide React
- **Schema Validation:** Zod
- **State Management:** React Hooks (`useState`, `useOptimistic`), Vercel AI SDK Hooks (`useObject`)
- **Theme Animation:** `react-theme-switch-animation`
- **Package Manager:** npm (implied from `package.json`, though others like yarn/pnpm/bun are mentioned in README)
- **Deployment:** Vercel (recommended in `README.md`)

## Potential Improvements & Future Features

- **Enhanced Error Handling:** Provide more specific user feedback for different types of errors (e.g., network issues, API key problems, model errors).
- **Input Validation:** Add client-side validation for the dish input field.
- **Recipe History:** Store previously generated recipes (e.g., in local storage or a database) for users to revisit.
- **Save/Favorite Recipes:** Allow users to mark recipes as favorites.
- **Sharing:** Implement functionality to share generated recipes via URL or social media.
- **Image Generation:** Integrate an AI image model to generate a visual representation of the dish.
- **User Accounts:** Introduce user authentication to store preferences and saved recipes centrally.
- **Advanced Search/Filtering:** Allow filtering by ingredients, cuisine type, dietary restrictions, or difficulty (would require prompt adjustments or post-processing).
- **Unit/Integration Testing:** Add automated tests for components and API interactions.
- **Accessibility (a11y):** Conduct a thorough accessibility review and implement necessary improvements.
- **UI/UX Refinements:** Improve the responsiveness of the suggestions section, add subtle animations for recipe loading/display, refine overall layout and styling.
- **Cost Management:** If using paid models extensively, implement usage tracking or budget controls.
- **Internationalization (i18n):** Add support for multiple languages.
