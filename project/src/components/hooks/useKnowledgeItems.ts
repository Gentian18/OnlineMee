import { useQuery } from '@tanstack/react-query';

export interface KnowledgeItem {
  id: string;
  title: string;
  category: string;
  summary: string;
  content: string;
  source: string;
}

export function useKnowledgeItems() {
  return useQuery({
    queryKey: ['knowledge'],
    queryFn: async (): Promise<KnowledgeItem[]> => {
      const response = await fetch('/data/knowledge.json');
      if (!response.ok) {
        throw new Error('Kon de kennisbank niet laden');
      }
      return response.json();
    },
  });
}