# AI Recipe Generator 🍳

A modern web application that generates detailed culinary recipes using AI. Built with Next.js, TypeScript, and the Vercel AI SDK.

## ✨ Features

- **AI-Powered Recipe Generation**: Enter any dish name and get a complete recipe with description, prep/cook times, ingredients, and instructions
- **Multiple AI Models**: Choose between different AI intelligence levels ("Smart", "Smarter", "Smartest")
- **Structured Output**: Consistent recipe format with metadata and step-by-step instructions
- **Dark/Light Mode**: Seamless theme switching with smooth animations
- **Inspiration Cards**: Browse suggestion cards to spark your culinary creativity
- **Real-time Streaming**: Watch as your recipe appears progressively during generation

## 🛠️ Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **AI Integration**: Vercel AI SDK with support for Google Gemini and OpenAI GPT models
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Styling**: Tailwind CSS v4
- **State Management**: React Hooks & Vercel AI SDK Hooks
- **Validation**: Zod schema for structured recipe data
- **Icons**: Lucide React
- **Deployment**: Self-hosted on Raspberry Pi 5

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or yarn install
   # or pnpm install
   # or bun install
   ```
3. Set up environment variables in a `.env` file:
   ```
   OPENAI_API_KEY=""
   GOOGLE_GENERATIVE_AI_API_KEY=""
   ```
4. Run the development server:
   ```bash
   npm run dev
   # or yarn dev
   # or pnpm dev
   # or bun dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📌 How It Works

1. Users enter a dish name in the input field
2. The request is sent to the `/api/chat` endpoint
3. The backend uses the selected AI model to generate a structured recipe
4. Results are streamed back to the user in real-time
5. The recipe is displayed in a clean, organized card format

## 🔜 Future Enhancements

- Recipe history and favorites
- Social sharing capabilities
- AI-generated food images
- User accounts for personalization
- Advanced filtering by ingredients or dietary restrictions
- Internationalization support
- Enhanced accessibility features

## 🤝 Contributing

Contributions are welcome! Feel free to submit a PR or open an issue to suggest improvements.

## 📄 License

[MIT License](LICENSE)
