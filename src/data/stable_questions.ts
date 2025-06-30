import { Question } from '../types';

// Stable working question bank for Harvest Bible Quiz
export const questionBank: Question[] = [
  // Genesis Questions
  {
    id: 'gen_easy_1',
    question: 'How many days did God take to create the world?',
    answer: 'Six days (God rested on the seventh day)',
    category: 'Genesis',
    difficulty: 'Easy',
    points: 100,
    testament: 'Old Testament'
  },
  {
    id: 'gen_easy_2',
    question: 'What was the name of the first man God created?',
    answer: 'Adam',
    category: 'Genesis',
    difficulty: 'Easy',
    points: 100,
    testament: 'Old Testament'
  },
  {
    id: 'gen_medium_1',
    question: 'What did God use to destroy the earth in Noah\'s time?',
    answer: 'A flood',
    category: 'Genesis',
    difficulty: 'Medium',
    points: 200,
    testament: 'Old Testament'
  },
  {
    id: 'gen_hard_1',
    question: 'How many of each clean animal did Noah take on the ark?',
    answer: 'Seven pairs (or fourteen total)',
    category: 'Genesis',
    difficulty: 'Hard',
    points: 300,
    testament: 'Old Testament'
  },
  
  // Matthew Questions
  {
    id: 'mat_easy_1',
    question: 'In what city was Jesus born?',
    answer: 'Bethlehem',
    category: 'Matthew',
    difficulty: 'Easy',
    points: 100,
    testament: 'New Testament'
  },
  {
    id: 'mat_easy_2',
    question: 'Who were Jesus\' earthly parents?',
    answer: 'Mary and Joseph',
    category: 'Matthew',
    difficulty: 'Easy',
    points: 100,
    testament: 'New Testament'
  },
  {
    id: 'mat_medium_1',
    question: 'What gifts did the wise men bring to Jesus?',
    answer: 'Gold, frankincense, and myrrh',
    category: 'Matthew',
    difficulty: 'Medium',
    points: 200,
    testament: 'New Testament'
  },
  {
    id: 'mat_hard_1',
    question: 'Who baptized Jesus?',
    answer: 'John the Baptist',
    category: 'Matthew',
    difficulty: 'Hard',
    points: 300,
    testament: 'New Testament'
  },
  
  // Romans Questions
  {
    id: 'rom_easy_1',
    question: 'Who wrote the book of Romans?',
    answer: 'Paul',
    category: 'Romans',
    difficulty: 'Easy',
    points: 100,
    testament: 'New Testament'
  },
  {
    id: 'rom_medium_1',
    question: 'According to Romans, all have done what?',
    answer: 'Sinned and fall short of the glory of God',
    category: 'Romans',
    difficulty: 'Medium',
    points: 200,
    testament: 'New Testament'
  }
];

// Helper functions
export const getAllCategories = (): string[] => {
  const categories = new Set(questionBank.map(q => q.category));
  return Array.from(categories).sort();
};

export const getQuestionsByTestament = (testament: 'Old Testament' | 'New Testament'): Question[] => {
  return questionBank.filter(q => q.testament === testament);
};

export const getQuestionsByCategory = (category: string): Question[] => {
  return questionBank.filter(q => q.category === category);
};

export const getQuestionsByDifficulty = (difficulty: string): Question[] => {
  return questionBank.filter(q => q.difficulty === difficulty);
};

export const getTotalQuestionCount = (): number => {
  return questionBank.length;
};

export const getCategoryQuestionCount = (category: string): number => {
  return questionBank.filter(q => q.category === category).length;
};

export const getTestamentQuestionCount = (testament: 'Old Testament' | 'New Testament'): number => {
  return questionBank.filter(q => q.testament === testament).length;
};

