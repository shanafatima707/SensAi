import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "SensAi", // Unique app ID
  name: "SensAi",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});
