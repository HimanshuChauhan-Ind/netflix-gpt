import { GoogleGenerativeAI } from "@google/generative-ai";

const useGetMovieRecommendation = async (moviePrompt) => {
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_AI);
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  const prompt =
    "Give me 5 movie recommendations based on: " +
    moviePrompt +
    ". Give it in array format [movie1,movie2,movie3,movie4,movie5] and no other text. ";

  const result = await model.generateContent(prompt);
  return result.response.text();
};

export default useGetMovieRecommendation;
