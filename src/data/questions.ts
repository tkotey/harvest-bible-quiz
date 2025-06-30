import { questionBank as stableQuestionBank } from './stable_questions';
import { additionalQuestionBank } from './additional_questions';
import { expandedQuestionBank } from './expanded_questions';
import { comprehensiveQuestionBank } from './comprehensive_questions';
import { Question } from '../types';

// Helper function to deduplicate questions by ID
const deduplicateQuestions = (questions: Question[]): Question[] => {
  const uniqueQuestions = new Map<string, Question>();
  
  questions.forEach(question => {
    const id = typeof question.id === 'number' ? String(question.id) : question.id;
    if (!uniqueQuestions.has(id)) {
      // Normalize the question format if needed
      const normalizedQuestion: Question = {
        ...question,
        id: id,
        testament: question.testament === 'Old' || question.testament === 'New' 
          ? `${question.testament} Testament` 
          : question.testament,
        difficulty: typeof question.difficulty === 'number' 
          ? question.difficulty === 100 ? 'Easy' 
            : question.difficulty === 200 ? 'Medium' 
            : question.difficulty === 300 ? 'Hard' 
            : question.difficulty === 400 ? 'Expert' 
            : 'Medium'
          : question.difficulty,
        points: typeof question.difficulty === 'number' 
          ? question.difficulty 
          : question.difficulty === 'Easy' ? 100 
            : question.difficulty === 'Medium' ? 200 
            : question.difficulty === 'Hard' ? 300 
            : question.difficulty === 'Expert' ? 400 
            : 200
      };
      uniqueQuestions.set(id, normalizedQuestion);
    }
  });
  
  return Array.from(uniqueQuestions.values());
};

// Combine all question banks and deduplicate
export const questionBank: Question[] = deduplicateQuestions([
  ...stableQuestionBank, 
  ...additionalQuestionBank,
  ...expandedQuestionBank,
  ...comprehensiveQuestionBank
]);

// Helper function to get all unique categories
export const getAllCategories = (): string[] => {
  const categories = new Set(questionBank.map(q => q.category));
  return Array.from(categories).sort();
};

// Helper function to get questions by testament
export const getQuestionsByTestament = (testament: 'Old Testament' | 'New Testament'): Question[] => {
  return questionBank.filter(q => q.testament === testament);
};

// Helper function to get questions by category
export const getQuestionsByCategory = (category: string): Question[] => {
  return questionBank.filter(q => q.category === category);
};

// Helper function to get questions by difficulty
export const getQuestionsByDifficulty = (difficulty: string): Question[] => {
  return questionBank.filter(q => q.difficulty === difficulty);
};

// Helper function to get total question count
export const getTotalQuestionCount = (): number => {
  return questionBank.length;
};

// Helper function to get question count by category
export const getCategoryQuestionCount = (category: string): number => {
  return questionBank.filter(q => q.category === category).length;
};

// Helper function to get question count by testament
export const getTestamentQuestionCount = (testament: 'Old Testament' | 'New Testament'): number => {
  return questionBank.filter(q => q.testament === testament).length;
};

