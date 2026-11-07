import { useQuery } from '@tanstack/react-query';

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export function useQuiz() {
  return useQuery({
    queryKey: ['quiz'],
    queryFn: async (): Promise<QuizQuestion[]> => {
      const response = await fetch('/data/quiz.json');
      if (!response.ok) {
        throw new Error('Kon de quiz niet laden');
      }
      return response.json();
    },
  });
}