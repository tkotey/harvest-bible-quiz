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

const rawBatch4Questions: RawQuestion[] = [
  // NEW TESTAMENT - 2 PETER (100-400 points)
  {
    id: 'b4_1',
    category: '2 Peter',
    testament: 'New',
    difficulty: 100,
    question: 'According to 2 Peter, what is God not willing that any should do?',
    answer: 'Perish',
    used: false
  },
  {
    id: 'b4_2',
    category: '2 Peter',
    testament: 'New',
    difficulty: 200,
    question: 'What does 2 Peter say about the day of the Lord?',
    answer: 'It will come as a thief in the night',
    used: false
  },
  {
    id: 'b4_3',
    category: '2 Peter',
    testament: 'New',
    difficulty: 300,
    question: 'According to 2 Peter, what will happen to the heavens and earth?',
    answer: 'They will pass away with a great noise and be burned up',
    used: false
  },
  {
    id: 'b4_4',
    category: '2 Peter',
    testament: 'New',
    difficulty: 400,
    question: 'What does Peter say about Paul\'s letters?',
    answer: 'Some things are hard to understand, which the unlearned twist to their destruction',
    used: false
  },

  // NEW TESTAMENT - 1 JOHN (100-400 points)
  {
    id: 'b4_5',
    category: '1 John',
    testament: 'New',
    difficulty: 100,
    question: 'According to 1 John, what is God?',
    answer: 'God is love',
    used: false
  },
  {
    id: 'b4_6',
    category: '1 John',
    testament: 'New',
    difficulty: 200,
    question: 'What does 1 John say about walking in the light?',
    answer: 'If we walk in the light, we have fellowship with one another',
    used: false
  },
  {
    id: 'b4_7',
    category: '1 John',
    testament: 'New',
    difficulty: 300,
    question: 'According to 1 John, what cleanses us from all sin?',
    answer: 'The blood of Jesus Christ',
    used: false
  },
  {
    id: 'b4_8',
    category: '1 John',
    testament: 'New',
    difficulty: 400,
    question: 'What does John say about perfect love?',
    answer: 'Perfect love casts out fear',
    used: false
  },

  // NEW TESTAMENT - 2 JOHN (100-400 points)
  {
    id: 'b4_9',
    category: '2 John',
    testament: 'New',
    difficulty: 100,
    question: 'To whom is 2 John addressed?',
    answer: 'The elect lady and her children',
    used: false
  },
  {
    id: 'b4_10',
    category: '2 John',
    testament: 'New',
    difficulty: 200,
    question: 'What does John say about those who do not bring the doctrine of Christ?',
    answer: 'Do not receive them into your house or bid them God speed',
    used: false
  },
  {
    id: 'b4_11',
    category: '2 John',
    testament: 'New',
    difficulty: 300,
    question: 'What commandment does John say is not new?',
    answer: 'That we love one another',
    used: false
  },
  {
    id: 'b4_12',
    category: '2 John',
    testament: 'New',
    difficulty: 400,
    question: 'What does John say about deceivers?',
    answer: 'Many deceivers have entered the world who do not confess Jesus Christ as coming in the flesh',
    used: false
  },

  // NEW TESTAMENT - 3 JOHN (100-400 points)
  {
    id: 'b4_13',
    category: '3 John',
    testament: 'New',
    difficulty: 100,
    question: 'To whom is 3 John addressed?',
    answer: 'Gaius',
    used: false
  },
  {
    id: 'b4_14',
    category: '3 John',
    testament: 'New',
    difficulty: 200,
    question: 'What does John wish for Gaius?',
    answer: 'That he prosper and be in health as his soul prospers',
    used: false
  },
  {
    id: 'b4_15',
    category: '3 John',
    testament: 'New',
    difficulty: 300,
    question: 'Who does John mention as loving to have preeminence?',
    answer: 'Diotrephes',
    used: false
  },
  {
    id: 'b4_16',
    category: '3 John',
    testament: 'New',
    difficulty: 400,
    question: 'What does John say about Demetrius?',
    answer: 'He has a good testimony from all and from the truth itself',
    used: false
  },

  // NEW TESTAMENT - JUDE (100-400 points)
  {
    id: 'b4_17',
    category: 'Jude',
    testament: 'New',
    difficulty: 100,
    question: 'How does Jude describe himself?',
    answer: 'A servant of Jesus Christ and brother of James',
    used: false
  },
  {
    id: 'b4_18',
    category: 'Jude',
    testament: 'New',
    difficulty: 200,
    question: 'What does Jude say we should earnestly do?',
    answer: 'Contend for the faith',
    used: false
  },
  {
    id: 'b4_19',
    category: 'Jude',
    testament: 'New',
    difficulty: 300,
    question: 'What example does Jude give of God\'s judgment?',
    answer: 'Sodom and Gomorrah',
    used: false
  },
  {
    id: 'b4_20',
    category: 'Jude',
    testament: 'New',
    difficulty: 400,
    question: 'What does Jude say about Michael the archangel?',
    answer: 'He disputed with the devil about the body of Moses',
    used: false
  },

  // NEW TESTAMENT - REVELATION (100-400 points)
  {
    id: 'b4_21',
    category: 'Revelation',
    testament: 'New',
    difficulty: 100,
    question: 'How many churches are mentioned in Revelation?',
    answer: 'Seven',
    used: false
  },
  {
    id: 'b4_22',
    category: 'Revelation',
    testament: 'New',
    difficulty: 200,
    question: 'What is the number of the beast in Revelation?',
    answer: '666',
    used: false
  },
  {
    id: 'b4_23',
    category: 'Revelation',
    testament: 'New',
    difficulty: 300,
    question: 'How many seals, trumpets, and bowls are there in Revelation?',
    answer: 'Seven of each',
    used: false
  },
  {
    id: 'b4_24',
    category: 'Revelation',
    testament: 'New',
    difficulty: 400,
    question: 'What are the names of the two witnesses in Revelation?',
    answer: 'They are not named (though some believe they represent Moses and Elijah)',
    used: false
  },

  // OLD TESTAMENT - JOB (100-400 points)
  {
    id: 'b4_25',
    category: 'Job',
    testament: 'Old',
    difficulty: 100,
    question: 'What land was Job from?',
    answer: 'The land of Uz',
    used: false
  },
  {
    id: 'b4_26',
    category: 'Job',
    testament: 'Old',
    difficulty: 200,
    question: 'How many sons and daughters did Job have originally?',
    answer: 'Seven sons and three daughters',
    used: false
  },
  {
    id: 'b4_27',
    category: 'Job',
    testament: 'Old',
    difficulty: 300,
    question: 'What did Job say about being born?',
    answer: 'Naked I came from my mother\'s womb, and naked I shall return',
    used: false
  },
  {
    id: 'b4_28',
    category: 'Job',
    testament: 'Old',
    difficulty: 400,
    question: 'Who were Job\'s three friends who came to comfort him?',
    answer: 'Eliphaz, Bildad, and Zophar',
    used: false
  },

  // OLD TESTAMENT - SONG OF SOLOMON (100-400 points)
  {
    id: 'b4_29',
    category: 'Song of Solomon',
    testament: 'Old',
    difficulty: 100,
    question: 'What is another name for the Song of Solomon?',
    answer: 'Song of Songs',
    used: false
  },
  {
    id: 'b4_30',
    category: 'Song of Solomon',
    testament: 'Old',
    difficulty: 200,
    question: 'Complete this verse: "I am my beloved\'s..."',
    answer: 'and my beloved is mine',
    used: false
  },
  {
    id: 'b4_31',
    category: 'Song of Solomon',
    testament: 'Old',
    difficulty: 300,
    question: 'What does the beloved say about love?',
    answer: 'Love is strong as death',
    used: false
  },
  {
    id: 'b4_32',
    category: 'Song of Solomon',
    testament: 'Old',
    difficulty: 400,
    question: 'What cannot quench love according to Song of Solomon?',
    answer: 'Many waters cannot quench love, neither can floods drown it',
    used: false
  },

  // OLD TESTAMENT - LAMENTATIONS (100-400 points)
  {
    id: 'b4_33',
    category: 'Lamentations',
    testament: 'Old',
    difficulty: 100,
    question: 'Who is traditionally considered the author of Lamentations?',
    answer: 'Jeremiah',
    used: false
  },
  {
    id: 'b4_34',
    category: 'Lamentations',
    testament: 'Old',
    difficulty: 200,
    question: 'What does Lamentations say about God\'s mercies?',
    answer: 'They are new every morning',
    used: false
  },
  {
    id: 'b4_35',
    category: 'Lamentations',
    testament: 'Old',
    difficulty: 300,
    question: 'Complete this verse: "Great is thy..."',
    answer: 'faithfulness',
    used: false
  },
  {
    id: 'b4_36',
    category: 'Lamentations',
    testament: 'Old',
    difficulty: 400,
    question: 'What city is being mourned in Lamentations?',
    answer: 'Jerusalem',
    used: false
  },

  // OLD TESTAMENT - ESTHER (100-400 points)
  {
    id: 'b4_37',
    category: 'Esther',
    testament: 'Old',
    difficulty: 100,
    question: 'What was Esther\'s Hebrew name?',
    answer: 'Hadassah',
    used: false
  },
  {
    id: 'b4_38',
    category: 'Esther',
    testament: 'Old',
    difficulty: 200,
    question: 'Who was Esther\'s cousin who raised her?',
    answer: 'Mordecai',
    used: false
  },
  {
    id: 'b4_39',
    category: 'Esther',
    testament: 'Old',
    difficulty: 300,
    question: 'Who was the evil official who plotted to destroy the Jews?',
    answer: 'Haman',
    used: false
  },
  {
    id: 'b4_40',
    category: 'Esther',
    testament: 'Old',
    difficulty: 400,
    question: 'What feast celebrates the deliverance recorded in Esther?',
    answer: 'Purim',
    used: false
  },

  // OLD TESTAMENT - NEHEMIAH (100-400 points)
  {
    id: 'b4_41',
    category: 'Nehemiah',
    testament: 'Old',
    difficulty: 100,
    question: 'What did Nehemiah rebuild in Jerusalem?',
    answer: 'The walls',
    used: false
  },
  {
    id: 'b4_42',
    category: 'Nehemiah',
    testament: 'Old',
    difficulty: 200,
    question: 'What was Nehemiah\'s position in the Persian court?',
    answer: 'Cupbearer to the king',
    used: false
  },
  {
    id: 'b4_43',
    category: 'Nehemiah',
    testament: 'Old',
    difficulty: 300,
    question: 'Who opposed Nehemiah\'s work on the walls?',
    answer: 'Sanballat and Tobiah',
    used: false
  },
  {
    id: 'b4_44',
    category: 'Nehemiah',
    testament: 'Old',
    difficulty: 400,
    question: 'How long did it take to rebuild the walls of Jerusalem?',
    answer: '52 days',
    used: false
  },

  // OLD TESTAMENT - EZRA (100-400 points)
  {
    id: 'b4_45',
    category: 'Ezra',
    testament: 'Old',
    difficulty: 100,
    question: 'What was Ezra\'s profession?',
    answer: 'Priest and scribe',
    used: false
  },
  {
    id: 'b4_46',
    category: 'Ezra',
    testament: 'Old',
    difficulty: 200,
    question: 'What did Ezra help rebuild in Jerusalem?',
    answer: 'The temple',
    used: false
  },
  {
    id: 'b4_47',
    category: 'Ezra',
    testament: 'Old',
    difficulty: 300,
    question: 'Which Persian king allowed the Jews to return and rebuild?',
    answer: 'Cyrus',
    used: false
  },
  {
    id: 'b4_48',
    category: 'Ezra',
    testament: 'Old',
    difficulty: 400,
    question: 'What did Ezra do when he learned about intermarriage with foreign peoples?',
    answer: 'He tore his garments and pulled hair from his head and beard',
    used: false
  },

  // OLD TESTAMENT - CHRONICLES (100-400 points)
  {
    id: 'b4_49',
    category: '1 Chronicles',
    testament: 'Old',
    difficulty: 100,
    question: 'What do the books of Chronicles focus on?',
    answer: 'The history of Judah and the temple',
    used: false
  },
  {
    id: 'b4_50',
    category: '2 Chronicles',
    testament: 'Old',
    difficulty: 200,
    question: 'What did Solomon ask God for when he became king?',
    answer: 'Wisdom and knowledge to govern the people',
    used: false
  }
];

// Convert raw questions to proper Question format
export const batch4QuestionBank: Question[] = rawBatch4Questions.map(q => ({
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
