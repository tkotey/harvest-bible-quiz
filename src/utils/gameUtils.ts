import { Question } from '../types';

export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const getQuestionsByCategory = (questions: Question[], category: string): Question[] => {
  return questions.filter(q => q.category === category);
};

export const getQuestionsByDifficulty = (questions: Question[], difficulty: number): Question[] => {
  // `Question.difficulty` is a label, numeric comparisons should use `points`.
  return questions.filter(q => q.points === difficulty);
};

export const getQuestionsByTestament = (questions: Question[], testament: 'Old Testament' | 'New Testament'): Question[] => {
  return questions.filter(q => q.testament === testament);
};

export const getRandomQuestion = (questions: Question[]): Question | null => {
  if (questions.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
};

export const formatScore = (score: number): string => {
  return score.toLocaleString();
};

export const getDifficultyColor = (difficulty: number): string => {
  switch (difficulty) {
    case 100:
      return 'bg-green-500 hover:bg-green-600';
    case 200:
      return 'bg-yellow-500 hover:bg-yellow-600';
    case 300:
      return 'bg-orange-500 hover:bg-orange-600';
    case 400:
      return 'bg-red-500 hover:bg-red-600';
    default:
      return 'bg-gray-500 hover:bg-gray-600';
  }
};

export const getDifficultyLabel = (difficulty: number): string => {
  switch (difficulty) {
    case 100:
      return 'Easy';
    case 200:
      return 'Medium';
    case 300:
      return 'Hard';
    case 400:
      return 'Expert';
    default:
      return 'Unknown';
  }
};

export const getGameProgress = (totalQuestions: number, usedQuestions: number): number => {
  if (totalQuestions === 0) return 0;
  return Math.round((usedQuestions / totalQuestions) * 100);
};

export const isGameComplete = (questions: Question[]): boolean => {
  return questions.every(q => q.used);
};

export const getWinningTeam = (teams: { id: number; name: string; score: number }[]): { id: number; name: string; score: number } | null => {
  if (teams.length === 0) return null;
  
  const maxScore = Math.max(...teams.map(t => t.score));
  const winners = teams.filter(t => t.score === maxScore);
  
  // Return null if it's a tie, otherwise return the winning team
  return winners.length === 1 ? winners[0] : null;
};

