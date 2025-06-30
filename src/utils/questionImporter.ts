import { Question } from '../types';

/**
 * Validates if a question object has all required fields in the correct format
 * @param question The question object to validate
 * @returns True if the question is valid, false otherwise
 */
export const validateQuestion = (question: any): boolean => {
  if (!question) return false;
  
  // Check required fields
  if (!question.id || typeof question.id !== 'string') return false;
  if (!question.question || typeof question.question !== 'string') return false;
  if (!question.answer || typeof question.answer !== 'string') return false;
  if (!question.category || typeof question.category !== 'string') return false;
  
  // Check testament is valid
  if (!question.testament || 
      (question.testament !== 'Old Testament' && question.testament !== 'New Testament')) {
    return false;
  }
  
  // Check difficulty is valid
  if (!question.difficulty || 
      (question.difficulty !== 'Easy' && 
       question.difficulty !== 'Medium' && 
       question.difficulty !== 'Hard' && 
       question.difficulty !== 'Expert')) {
    return false;
  }
  
  // Check points is a number
  if (typeof question.points !== 'number') return false;
  
  return true;
};

/**
 * Imports questions from a JSON string
 * @param jsonString JSON string containing an array of question objects
 * @returns Array of valid Question objects
 */
export const importQuestionsFromJson = (jsonString: string): Question[] => {
  try {
    const parsedData = JSON.parse(jsonString);
    
    if (!Array.isArray(parsedData)) {
      throw new Error('Imported data must be an array of questions');
    }
    
    const validQuestions: Question[] = [];
    const errors: string[] = [];
    
    parsedData.forEach((item, index) => {
      if (validateQuestion(item)) {
        validQuestions.push(item as Question);
      } else {
        errors.push(`Question at index ${index} is invalid`);
      }
    });
    
    if (errors.length > 0) {
      console.warn('Some questions were invalid and were not imported:', errors);
    }
    
    return validQuestions;
  } catch (error) {
    console.error('Failed to import questions:', error);
    return [];
  }
};

/**
 * Merges imported questions with existing question bank
 * @param existingQuestions The existing question bank
 * @param newQuestions The new questions to import
 * @returns Combined array of questions with duplicates removed
 */
export const mergeQuestions = (existingQuestions: Question[], newQuestions: Question[]): Question[] => {
  // Create a map of existing question IDs for quick lookup
  const existingIds = new Set(existingQuestions.map(q => q.id));
  
  // Filter out duplicate questions
  const uniqueNewQuestions = newQuestions.filter(q => !existingIds.has(q.id));
  
  // Merge the arrays
  return [...existingQuestions, ...uniqueNewQuestions];
};

/**
 * Exports questions to a JSON string
 * @param questions Array of questions to export
 * @returns JSON string representation of the questions
 */
export const exportQuestionsToJson = (questions: Question[]): string => {
  return JSON.stringify(questions, null, 2);
};
