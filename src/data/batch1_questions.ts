import { Question } from '../types';

// Raw format used in this file; will be normalized to `Question` below
interface RawQuestion {
  id: number | string;
  category: string;
  testament: 'Old' | 'New';
  difficulty: 100 | 200 | 300 | 400;
  question: string;
  answer: string;
  used?: boolean;
}

const rawBatch1Questions: RawQuestion[] = [
  // OLD TESTAMENT - EXODUS (100-400 points)
  {
    id: 'b1_1',
    category: 'Exodus',
    testament: 'Old',
    difficulty: 100,
    question: 'Who led the Israelites out of Egypt?',
    answer: 'Moses',
    used: false
  },
  {
    id: 'b1_2',
    category: 'Exodus',
    testament: 'Old',
    difficulty: 200,
    question: 'How many plagues did God send upon Egypt?',
    answer: '10 plagues',
    used: false
  },
  {
    id: 'b1_3',
    category: 'Exodus',
    testament: 'Old',
    difficulty: 300,
    question: 'What mountain did Moses receive the Ten Commandments on?',
    answer: 'Mount Sinai',
    used: false
  },
  {
    id: 'b1_4',
    category: 'Exodus',
    testament: 'Old',
    difficulty: 400,
    question: 'What was the name of Moses\' brother who served as his spokesman?',
    answer: 'Aaron',
    used: false
  },

  // OLD TESTAMENT - LEVITICUS (100-400 points)
  {
    id: 'b1_5',
    category: 'Leviticus',
    testament: 'Old',
    difficulty: 100,
    question: 'What day of the week was designated as the Sabbath?',
    answer: 'The seventh day (Saturday)',
    used: false
  },
  {
    id: 'b1_6',
    category: 'Leviticus',
    testament: 'Old',
    difficulty: 200,
    question: 'What was the Day of Atonement called in Hebrew?',
    answer: 'Yom Kippur',
    used: false
  },
  {
    id: 'b1_7',
    category: 'Leviticus',
    testament: 'Old',
    difficulty: 300,
    question: 'Which tribe was set apart to serve as priests?',
    answer: 'The tribe of Levi',
    used: false
  },
  {
    id: 'b1_8',
    category: 'Leviticus',
    testament: 'Old',
    difficulty: 400,
    question: 'What animal was used as the scapegoat on the Day of Atonement?',
    answer: 'A goat',
    used: false
  },

  // OLD TESTAMENT - NUMBERS (100-400 points)
  {
    id: 'b1_9',
    category: 'Numbers',
    testament: 'Old',
    difficulty: 100,
    question: 'How many years did the Israelites wander in the wilderness?',
    answer: '40 years',
    used: false
  },
  {
    id: 'b1_10',
    category: 'Numbers',
    testament: 'Old',
    difficulty: 200,
    question: 'Who was the spy that brought back a good report about the Promised Land along with Joshua?',
    answer: 'Caleb',
    used: false
  },
  {
    id: 'b1_11',
    category: 'Numbers',
    testament: 'Old',
    difficulty: 300,
    question: 'What did Moses strike to bring forth water for the people?',
    answer: 'A rock',
    used: false
  },
  {
    id: 'b1_12',
    category: 'Numbers',
    testament: 'Old',
    difficulty: 400,
    question: 'Who was swallowed by the earth for rebelling against Moses?',
    answer: 'Korah, Dathan, and Abiram',
    used: false
  },

  // OLD TESTAMENT - DEUTERONOMY (100-400 points)
  {
    id: 'b1_13',
    category: 'Deuteronomy',
    testament: 'Old',
    difficulty: 100,
    question: 'What does the word "Deuteronomy" mean?',
    answer: 'Second law',
    used: false
  },
  {
    id: 'b1_14',
    category: 'Deuteronomy',
    testament: 'Old',
    difficulty: 200,
    question: 'From which mountain did Moses view the Promised Land before his death?',
    answer: 'Mount Nebo',
    used: false
  },
  {
    id: 'b1_15',
    category: 'Deuteronomy',
    testament: 'Old',
    difficulty: 300,
    question: 'What is the greatest commandment according to Deuteronomy 6:5?',
    answer: 'Love the Lord your God with all your heart, soul, and strength',
    used: false
  },
  {
    id: 'b1_16',
    category: 'Deuteronomy',
    testament: 'Old',
    difficulty: 400,
    question: 'How old was Moses when he died?',
    answer: '120 years old',
    used: false
  },

  // OLD TESTAMENT - JOSHUA (100-400 points)
  {
    id: 'b1_17',
    category: 'Joshua',
    testament: 'Old',
    difficulty: 100,
    question: 'Which city\'s walls fell down after the Israelites marched around it?',
    answer: 'Jericho',
    used: false
  },
  {
    id: 'b1_18',
    category: 'Joshua',
    testament: 'Old',
    difficulty: 200,
    question: 'Who hid the Israelite spies in Jericho?',
    answer: 'Rahab',
    used: false
  },
  {
    id: 'b1_19',
    category: 'Joshua',
    testament: 'Old',
    difficulty: 300,
    question: 'What did Joshua command to stand still during battle?',
    answer: 'The sun and moon',
    used: false
  },
  {
    id: 'b1_20',
    category: 'Joshua',
    testament: 'Old',
    difficulty: 400,
    question: 'Which man took forbidden items from Jericho, causing Israel\'s defeat at Ai?',
    answer: 'Achan',
    used: false
  },

  // OLD TESTAMENT - JUDGES (100-400 points)
  {
    id: 'b1_21',
    category: 'Judges',
    testament: 'Old',
    difficulty: 100,
    question: 'Who was the strongest judge of Israel?',
    answer: 'Samson',
    used: false
  },
  {
    id: 'b1_22',
    category: 'Judges',
    testament: 'Old',
    difficulty: 200,
    question: 'Which judge defeated the Midianites with only 300 men?',
    answer: 'Gideon',
    used: false
  },
  {
    id: 'b1_23',
    category: 'Judges',
    testament: 'Old',
    difficulty: 300,
    question: 'Who was the female judge and prophetess who led Israel?',
    answer: 'Deborah',
    used: false
  },
  {
    id: 'b1_24',
    category: 'Judges',
    testament: 'Old',
    difficulty: 400,
    question: 'Which judge made a rash vow concerning his daughter?',
    answer: 'Jephthah',
    used: false
  },

  // OLD TESTAMENT - RUTH (100-400 points)
  {
    id: 'b1_25',
    category: 'Ruth',
    testament: 'Old',
    difficulty: 100,
    question: 'What was the name of Ruth\'s mother-in-law?',
    answer: 'Naomi',
    used: false
  },
  {
    id: 'b1_26',
    category: 'Ruth',
    testament: 'Old',
    difficulty: 200,
    question: 'From which country was Ruth originally?',
    answer: 'Moab',
    used: false
  },
  {
    id: 'b1_27',
    category: 'Ruth',
    testament: 'Old',
    difficulty: 300,
    question: 'Who was the kinsman-redeemer that married Ruth?',
    answer: 'Boaz',
    used: false
  },
  {
    id: 'b1_28',
    category: 'Ruth',
    testament: 'Old',
    difficulty: 400,
    question: 'What was the name of Ruth and Boaz\'s son?',
    answer: 'Obed',
    used: false
  },

  // OLD TESTAMENT - 1 SAMUEL (100-400 points)
  {
    id: 'b1_29',
    category: '1 Samuel',
    testament: 'Old',
    difficulty: 100,
    question: 'Who was the first king of Israel?',
    answer: 'Saul',
    used: false
  },
  {
    id: 'b1_30',
    category: '1 Samuel',
    testament: 'Old',
    difficulty: 200,
    question: 'Which young shepherd boy defeated Goliath?',
    answer: 'David',
    used: false
  },
  {
    id: 'b1_31',
    category: '1 Samuel',
    testament: 'Old',
    difficulty: 300,
    question: 'Who was the priest that raised Samuel?',
    answer: 'Eli',
    used: false
  },
  {
    id: 'b1_32',
    category: '1 Samuel',
    testament: 'Old',
    difficulty: 400,
    question: 'What was the name of Saul\'s son who became David\'s best friend?',
    answer: 'Jonathan',
    used: false
  },

  // OLD TESTAMENT - 2 SAMUEL (100-400 points)
  {
    id: 'b1_33',
    category: '2 Samuel',
    testament: 'Old',
    difficulty: 100,
    question: 'Which city did David capture and make his capital?',
    answer: 'Jerusalem',
    used: false
  },
  {
    id: 'b1_34',
    category: '2 Samuel',
    testament: 'Old',
    difficulty: 200,
    question: 'Who was the woman David committed adultery with?',
    answer: 'Bathsheba',
    used: false
  },
  {
    id: 'b1_35',
    category: '2 Samuel',
    testament: 'Old',
    difficulty: 300,
    question: 'Which prophet confronted David about his sin?',
    answer: 'Nathan',
    used: false
  },
  {
    id: 'b1_36',
    category: '2 Samuel',
    testament: 'Old',
    difficulty: 400,
    question: 'What was the name of David\'s son who rebelled against him?',
    answer: 'Absalom',
    used: false
  },

  // OLD TESTAMENT - 1 KINGS (100-400 points)
  {
    id: 'b1_37',
    category: '1 Kings',
    testament: 'Old',
    difficulty: 100,
    question: 'Who was David\'s son that became king after him?',
    answer: 'Solomon',
    used: false
  },
  {
    id: 'b1_38',
    category: '1 Kings',
    testament: 'Old',
    difficulty: 200,
    question: 'What did Solomon ask God for when he became king?',
    answer: 'Wisdom',
    used: false
  },
  {
    id: 'b1_39',
    category: '1 Kings',
    testament: 'Old',
    difficulty: 300,
    question: 'Which prophet challenged the prophets of Baal on Mount Carmel?',
    answer: 'Elijah',
    used: false
  },
  {
    id: 'b1_40',
    category: '1 Kings',
    testament: 'Old',
    difficulty: 400,
    question: 'What was the name of the evil queen who persecuted the prophets?',
    answer: 'Jezebel',
    used: false
  },

  // OLD TESTAMENT - 2 KINGS (100-400 points)
  {
    id: 'b1_41',
    category: '2 Kings',
    testament: 'Old',
    difficulty: 100,
    question: 'How was Elijah taken up to heaven?',
    answer: 'In a whirlwind by a chariot of fire',
    used: false
  },
  {
    id: 'b1_42',
    category: '2 Kings',
    testament: 'Old',
    difficulty: 200,
    question: 'Who succeeded Elijah as prophet?',
    answer: 'Elisha',
    used: false
  },
  {
    id: 'b1_43',
    category: '2 Kings',
    testament: 'Old',
    difficulty: 300,
    question: 'Which Syrian commander was healed of leprosy by dipping in the Jordan River?',
    answer: 'Naaman',
    used: false
  },
  {
    id: 'b1_44',
    category: '2 Kings',
    testament: 'Old',
    difficulty: 400,
    question: 'Who was the boy king who reigned for 40 years and repaired the temple?',
    answer: 'Joash',
    used: false
  },

  // OLD TESTAMENT - PSALMS (100-400 points)
  {
    id: 'b1_45',
    category: 'Psalms',
    testament: 'Old',
    difficulty: 100,
    question: 'Who wrote most of the Psalms?',
    answer: 'David',
    used: false
  },
  {
    id: 'b1_46',
    category: 'Psalms',
    testament: 'Old',
    difficulty: 200,
    question: 'Complete this verse: "The Lord is my shepherd..."',
    answer: 'I shall not want',
    used: false
  },
  {
    id: 'b1_47',
    category: 'Psalms',
    testament: 'Old',
    difficulty: 300,
    question: 'Which Psalm begins with "Blessed is the man who walks not in the counsel of the wicked"?',
    answer: 'Psalm 1',
    used: false
  },
  {
    id: 'b1_48',
    category: 'Psalms',
    testament: 'Old',
    difficulty: 400,
    question: 'How many books is the book of Psalms divided into?',
    answer: 'Five books',
    used: false
  },

  // OLD TESTAMENT - PROVERBS (100-400 points)
  {
    id: 'b1_49',
    category: 'Proverbs',
    testament: 'Old',
    difficulty: 100,
    question: 'Complete this proverb: "Trust in the Lord with all your heart..."',
    answer: 'and lean not on your own understanding',
    used: false
  },
  {
    id: 'b1_50',
    category: 'Proverbs',
    testament: 'Old',
    difficulty: 200,
    question: 'According to Proverbs, what is the beginning of wisdom?',
    answer: 'The fear of the Lord',
    used: false
  }
];

// Convert raw questions to proper Question format
export const batch1QuestionBank: Question[] = rawBatch1Questions.map(q => ({
  id: String(q.id),
  category: q.category,
  testament: q.testament === 'Old' ? 'Old Testament' : 'New Testament',
  difficulty: q.difficulty === 100 ? 'Easy' 
    : q.difficulty === 200 ? 'Medium' 
    : q.difficulty === 300 ? 'Hard' 
    : 'Expert',
  points: q.difficulty,
  question: q.question,
  answer: q.answer,
  used: q.used || false
}));
