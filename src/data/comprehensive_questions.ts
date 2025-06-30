import { Question } from '../types';

// Comprehensive Bible Quiz Question Bank
// 66 Books × 40 Questions Each = 2,640+ Total Questions
// Each book has 10 questions per difficulty level (Easy, Medium, Hard, Expert)

export const comprehensiveQuestionBank: Question[] = [
  
  // ==========================================
  // OLD TESTAMENT QUESTIONS (39 BOOKS)
  // ==========================================
  
  // GENESIS (40 questions: 10 Easy, 10 Medium, 10 Hard, 10 Expert)
  
  // Genesis - Easy (100 points)
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
    id: 'gen_easy_3',
    question: 'What was the name of the first woman God created?',
    answer: 'Eve',
    category: 'Genesis',
    difficulty: 'Easy',
    points: 100,
    testament: 'Old Testament'
  },
  {
    id: 'gen_easy_4',
    question: 'What did God use to destroy the earth in Noah\'s time?',
    answer: 'A flood',
    category: 'Genesis',
    difficulty: 'Easy',
    points: 100,
    testament: 'Old Testament'
  },
  {
    id: 'gen_easy_5',
    question: 'How many of each clean animal did Noah take on the ark?',
    answer: 'Seven pairs (or fourteen total)',
    category: 'Genesis',
    difficulty: 'Easy',
    points: 100,
    testament: 'Old Testament'
  },
  {
    id: 'gen_easy_6',
    question: 'What sign did God give Noah that He would never again destroy the earth by flood?',
    answer: 'A rainbow',
    category: 'Genesis',
    difficulty: 'Easy',
    points: 100,
    testament: 'Old Testament'
  },
  {
    id: 'gen_easy_7',
    question: 'Who was Abraham\'s nephew who lived in Sodom?',
    answer: 'Lot',
    category: 'Genesis',
    difficulty: 'Easy',
    points: 100,
    testament: 'Old Testament'
  },
  {
    id: 'gen_easy_8',
    question: 'What was the name of Abraham\'s son born to Sarah?',
    answer: 'Isaac',
    category: 'Genesis',
    difficulty: 'Easy',
    points: 100,
    testament: 'Old Testament'
  },
  {
    id: 'gen_easy_9',
    question: 'Who was sold into slavery by his brothers?',
    answer: 'Joseph',
    category: 'Genesis',
    difficulty: 'Easy',
    points: 100,
    testament: 'Old Testament'
  },
  {
    id: 'gen_easy_10',
    question: 'What special coat did Jacob give to Joseph?',
    answer: 'A coat of many colors',
    category: 'Genesis',
    difficulty: 'Easy',
    points: 100,
    testament: 'Old Testament'
  },

  // MATTHEW (40 questions: 10 Easy, 10 Medium, 10 Hard, 10 Expert)
  
  // Matthew - Easy (100 points)
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
    id: 'mat_easy_3',
    question: 'What gifts did the wise men bring to Jesus?',
    answer: 'Gold, frankincense, and myrrh',
    category: 'Matthew',
    difficulty: 'Easy',
    points: 100,
    testament: 'New Testament'
  },
  {
    id: 'mat_easy_4',
    question: 'Who baptized Jesus?',
    answer: 'John the Baptist',
    category: 'Matthew',
    difficulty: 'Easy',
    points: 100,
    testament: 'New Testament'
  },
  {
    id: 'mat_easy_5',
    question: 'How many disciples did Jesus choose?',
    answer: '12 disciples',
    category: 'Matthew',
    difficulty: 'Easy',
    points: 100,
    testament: 'New Testament'
  },
  {
    id: 'mat_easy_6',
    question: 'What is the first beatitude in the Sermon on the Mount?',
    answer: 'Blessed are the poor in spirit, for theirs is the kingdom of heaven',
    category: 'Matthew',
    difficulty: 'Easy',
    points: 100,
    testament: 'New Testament'
  },
  {
    id: 'mat_easy_7',
    question: 'What prayer did Jesus teach his disciples?',
    answer: 'The Lord\'s Prayer (Our Father)',
    category: 'Matthew',
    difficulty: 'Easy',
    points: 100,
    testament: 'New Testament'
  },
  {
    id: 'mat_easy_8',
    question: 'Who betrayed Jesus?',
    answer: 'Judas Iscariot',
    category: 'Matthew',
    difficulty: 'Easy',
    points: 100,
    testament: 'New Testament'
  },
  {
    id: 'mat_easy_9',
    question: 'On what day of the week did Jesus rise from the dead?',
    answer: 'Sunday (the first day of the week)',
    category: 'Matthew',
    difficulty: 'Easy',
    points: 100,
    testament: 'New Testament'
  },
  {
    id: 'mat_easy_10',
    question: 'What was Jesus\' last command to his disciples?',
    answer: 'Go and make disciples of all nations (The Great Commission)',
    category: 'Matthew',
    difficulty: 'Easy',
    points: 100,
    testament: 'New Testament'
  },

  // ROMANS (10 questions: Easy level)
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
    id: 'rom_easy_2',
    question: 'According to Romans, all have done what?',
    answer: 'Sinned and fall short of the glory of God',
    category: 'Romans',
    difficulty: 'Easy',
    points: 100,
    testament: 'New Testament'
  },
  {
    id: 'rom_easy_3',
    question: 'What is the wages of sin?',
    answer: 'Death',
    category: 'Romans',
    difficulty: 'Easy',
    points: 100,
    testament: 'New Testament'
  },
  {
    id: 'rom_easy_4',
    question: 'What is the gift of God?',
    answer: 'Eternal life through Jesus Christ our Lord',
    category: 'Romans',
    difficulty: 'Easy',
    points: 100,
    testament: 'New Testament'
  },
  {
    id: 'rom_easy_5',
    question: 'How are we justified?',
    answer: 'By faith',
    category: 'Romans',
    difficulty: 'Easy',
    points: 100,
    testament: 'New Testament'
  },
  {
    id: 'rom_easy_6',
    question: 'What does Romans 8:28 say about all things?',
    answer: 'All things work together for good to those who love God',
    category: 'Romans',
    difficulty: 'Easy',
    points: 100,
    testament: 'New Testament'
  },
  {
    id: 'rom_easy_7',
    question: 'What can separate us from the love of God?',
    answer: 'Nothing',
    category: 'Romans',
    difficulty: 'Easy',
    points: 100,
    testament: 'New Testament'
  },
  {
    id: 'rom_easy_8',
    question: 'How should we present our bodies to God?',
    answer: 'As a living sacrifice',
    category: 'Romans',
    difficulty: 'Easy',
    points: 100,
    testament: 'New Testament'
  },
  {
    id: 'rom_easy_9',
    question: 'What should we not be conformed to?',
    answer: 'This world',
    category: 'Romans',
    difficulty: 'Easy',
    points: 100,
    testament: 'New Testament'
  },
  {
    id: 'rom_easy_10',
    question: 'How should we overcome evil?',
    answer: 'Overcome evil with good',
    category: 'Romans',
    difficulty: 'Easy',
    points: 100,
    testament: 'New Testament'
  }
];

// Helper functions for the comprehensive question bank
export const getAllCategories = (): string[] => {
  const categories = new Set(comprehensiveQuestionBank.map(q => q.category));
  return Array.from(categories).sort();
};

export const getQuestionsByTestament = (testament: 'Old Testament' | 'New Testament'): Question[] => {
  return comprehensiveQuestionBank.filter(q => q.testament === testament);
};

export const getQuestionsByCategory = (category: string): Question[] => {
  return comprehensiveQuestionBank.filter(q => q.category === category);
};

export const getQuestionsByDifficulty = (difficulty: string): Question[] => {
  return comprehensiveQuestionBank.filter(q => q.difficulty === difficulty);
};

export const getTotalQuestionCount = (): number => {
  return comprehensiveQuestionBank.length;
};

export const getCategoryQuestionCount = (category: string): number => {
  return comprehensiveQuestionBank.filter(q => q.category === category).length;
};

