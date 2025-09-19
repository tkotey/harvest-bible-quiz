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

const rawBatch3Questions: RawQuestion[] = [
  // NEW TESTAMENT - 2 CORINTHIANS (100-400 points)
  {
    id: 'b3_1',
    category: '2 Corinthians',
    testament: 'New',
    difficulty: 100,
    question: 'According to 2 Corinthians, God\'s grace is what?',
    answer: 'Sufficient',
    used: false
  },
  {
    id: 'b3_2',
    category: '2 Corinthians',
    testament: 'New',
    difficulty: 200,
    question: 'What does Paul say about being a new creature in Christ?',
    answer: 'Old things have passed away; all things have become new',
    used: false
  },
  {
    id: 'b3_3',
    category: '2 Corinthians',
    testament: 'New',
    difficulty: 300,
    question: 'Paul mentions being caught up to which heaven?',
    answer: 'The third heaven',
    used: false
  },
  {
    id: 'b3_4',
    category: '2 Corinthians',
    testament: 'New',
    difficulty: 400,
    question: 'What was Paul\'s "thorn in the flesh"?',
    answer: 'A messenger of Satan (the exact nature is not specified)',
    used: false
  },

  // NEW TESTAMENT - GALATIANS (100-400 points)
  {
    id: 'b3_5',
    category: 'Galatians',
    testament: 'New',
    difficulty: 100,
    question: 'What are the fruit of the Spirit according to Galatians?',
    answer: 'Love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control',
    used: false
  },
  {
    id: 'b3_6',
    category: 'Galatians',
    testament: 'New',
    difficulty: 200,
    question: 'According to Galatians, we are justified by what?',
    answer: 'Faith, not by works of the law',
    used: false
  },
  {
    id: 'b3_7',
    category: 'Galatians',
    testament: 'New',
    difficulty: 300,
    question: 'Complete this verse: "I have been crucified with Christ..."',
    answer: 'nevertheless I live; yet not I, but Christ lives in me',
    used: false
  },
  {
    id: 'b3_8',
    category: 'Galatians',
    testament: 'New',
    difficulty: 400,
    question: 'What does Paul say about the law being our schoolmaster?',
    answer: 'The law was our schoolmaster to bring us to Christ',
    used: false
  },

  // NEW TESTAMENT - EPHESIANS (100-400 points)
  {
    id: 'b3_9',
    category: 'Ephesians',
    testament: 'New',
    difficulty: 100,
    question: 'According to Ephesians, we are saved by grace through what?',
    answer: 'Faith',
    used: false
  },
  {
    id: 'b3_10',
    category: 'Ephesians',
    testament: 'New',
    difficulty: 200,
    question: 'What should children do according to Ephesians 6?',
    answer: 'Obey their parents in the Lord',
    used: false
  },
  {
    id: 'b3_11',
    category: 'Ephesians',
    testament: 'New',
    difficulty: 300,
    question: 'What are the pieces of the armor of God mentioned in Ephesians 6?',
    answer: 'Belt of truth, breastplate of righteousness, feet shod with peace, shield of faith, helmet of salvation, sword of the Spirit',
    used: false
  },
  {
    id: 'b3_12',
    category: 'Ephesians',
    testament: 'New',
    difficulty: 400,
    question: 'According to Ephesians, who are we wrestling against?',
    answer: 'Principalities, powers, rulers of darkness, spiritual wickedness in high places',
    used: false
  },

  // NEW TESTAMENT - PHILIPPIANS (100-400 points)
  {
    id: 'b3_13',
    category: 'Philippians',
    testament: 'New',
    difficulty: 100,
    question: 'Complete this verse: "I can do all things..."',
    answer: 'through Christ who strengthens me',
    used: false
  },
  {
    id: 'b3_14',
    category: 'Philippians',
    testament: 'New',
    difficulty: 200,
    question: 'What does Paul say to rejoice in always?',
    answer: 'The Lord',
    used: false
  },
  {
    id: 'b3_15',
    category: 'Philippians',
    testament: 'New',
    difficulty: 300,
    question: 'According to Philippians, what surpasses all understanding?',
    answer: 'The peace of God',
    used: false
  },
  {
    id: 'b3_16',
    category: 'Philippians',
    testament: 'New',
    difficulty: 400,
    question: 'What does Paul say about his former life as a Pharisee?',
    answer: 'He counts it as loss/dung for the excellence of knowing Christ',
    used: false
  },

  // NEW TESTAMENT - COLOSSIANS (100-400 points)
  {
    id: 'b3_17',
    category: 'Colossians',
    testament: 'New',
    difficulty: 100,
    question: 'According to Colossians, what should we set our minds on?',
    answer: 'Things above, not on things on the earth',
    used: false
  },
  {
    id: 'b3_18',
    category: 'Colossians',
    testament: 'New',
    difficulty: 200,
    question: 'What does Paul say about Christ in relation to the church?',
    answer: 'He is the head of the body, the church',
    used: false
  },
  {
    id: 'b3_19',
    category: 'Colossians',
    testament: 'New',
    difficulty: 300,
    question: 'According to Colossians, in Christ dwells what?',
    answer: 'All the fullness of the Godhead bodily',
    used: false
  },
  {
    id: 'b3_20',
    category: 'Colossians',
    testament: 'New',
    difficulty: 400,
    question: 'What does Paul say about the mystery that was hidden for ages?',
    answer: 'Christ in you, the hope of glory',
    used: false
  },

  // NEW TESTAMENT - 1 THESSALONIANS (100-400 points)
  {
    id: 'b3_21',
    category: '1 Thessalonians',
    testament: 'New',
    difficulty: 100,
    question: 'What does Paul say to do without ceasing?',
    answer: 'Pray',
    used: false
  },
  {
    id: 'b3_22',
    category: '1 Thessalonians',
    testament: 'New',
    difficulty: 200,
    question: 'According to 1 Thessalonians, what should we do in everything?',
    answer: 'Give thanks',
    used: false
  },
  {
    id: 'b3_23',
    category: '1 Thessalonians',
    testament: 'New',
    difficulty: 300,
    question: 'How will the Lord descend from heaven according to 1 Thessalonians?',
    answer: 'With a shout, with the voice of the archangel, and with the trumpet of God',
    used: false
  },
  {
    id: 'b3_24',
    category: '1 Thessalonians',
    testament: 'New',
    difficulty: 400,
    question: 'What does Paul say about the day of the Lord?',
    answer: 'It comes as a thief in the night',
    used: false
  },

  // NEW TESTAMENT - 2 THESSALONIANS (100-400 points)
  {
    id: 'b3_25',
    category: '2 Thessalonians',
    testament: 'New',
    difficulty: 100,
    question: 'What does Paul say about those who don\'t work?',
    answer: 'If anyone will not work, neither shall he eat',
    used: false
  },
  {
    id: 'b3_26',
    category: '2 Thessalonians',
    testament: 'New',
    difficulty: 200,
    question: 'What must come before the day of Christ according to 2 Thessalonians?',
    answer: 'A falling away and the man of sin being revealed',
    used: false
  },
  {
    id: 'b3_27',
    category: '2 Thessalonians',
    testament: 'New',
    difficulty: 300,
    question: 'What is the man of sin also called?',
    answer: 'The son of perdition',
    used: false
  },
  {
    id: 'b3_28',
    category: '2 Thessalonians',
    testament: 'New',
    difficulty: 400,
    question: 'What will destroy the lawless one?',
    answer: 'The breath of the Lord\'s mouth and the brightness of His coming',
    used: false
  },

  // NEW TESTAMENT - 1 TIMOTHY (100-400 points)
  {
    id: 'b3_29',
    category: '1 Timothy',
    testament: 'New',
    difficulty: 100,
    question: 'According to 1 Timothy, what is the root of all evil?',
    answer: 'The love of money',
    used: false
  },
  {
    id: 'b3_30',
    category: '1 Timothy',
    testament: 'New',
    difficulty: 200,
    question: 'What does Paul say about Christ Jesus coming into the world?',
    answer: 'He came to save sinners',
    used: false
  },
  {
    id: 'b3_31',
    category: '1 Timothy',
    testament: 'New',
    difficulty: 300,
    question: 'What are the qualifications for a bishop according to 1 Timothy?',
    answer: 'Blameless, husband of one wife, vigilant, sober, of good behavior, given to hospitality, apt to teach',
    used: false
  },
  {
    id: 'b3_32',
    category: '1 Timothy',
    testament: 'New',
    difficulty: 400,
    question: 'What does Paul say about godliness with contentment?',
    answer: 'It is great gain',
    used: false
  },

  // NEW TESTAMENT - 2 TIMOTHY (100-400 points)
  {
    id: 'b3_33',
    category: '2 Timothy',
    testament: 'New',
    difficulty: 100,
    question: 'What does Paul say about all Scripture?',
    answer: 'All Scripture is given by inspiration of God',
    used: false
  },
  {
    id: 'b3_34',
    category: '2 Timothy',
    testament: 'New',
    difficulty: 200,
    question: 'What does Paul tell Timothy to study to show himself approved?',
    answer: 'The Word of God',
    used: false
  },
  {
    id: 'b3_35',
    category: '2 Timothy',
    testament: 'New',
    difficulty: 300,
    question: 'What does Paul say about the last days?',
    answer: 'Perilous times shall come',
    used: false
  },
  {
    id: 'b3_36',
    category: '2 Timothy',
    testament: 'New',
    difficulty: 400,
    question: 'What does Paul say he has fought?',
    answer: 'The good fight',
    used: false
  },

  // NEW TESTAMENT - TITUS (100-400 points)
  {
    id: 'b3_37',
    category: 'Titus',
    testament: 'New',
    difficulty: 100,
    question: 'What does Paul say about good works in Titus?',
    answer: 'We should be zealous for good works',
    used: false
  },
  {
    id: 'b3_38',
    category: 'Titus',
    testament: 'New',
    difficulty: 200,
    question: 'How are we saved according to Titus?',
    answer: 'Not by works of righteousness, but by His mercy',
    used: false
  },
  {
    id: 'b3_39',
    category: 'Titus',
    testament: 'New',
    difficulty: 300,
    question: 'What does Paul say about the grace of God?',
    answer: 'It has appeared to all men, bringing salvation',
    used: false
  },
  {
    id: 'b3_40',
    category: 'Titus',
    testament: 'New',
    difficulty: 400,
    question: 'What does the grace of God teach us according to Titus?',
    answer: 'To deny ungodliness and worldly lusts, and to live soberly, righteously, and godly',
    used: false
  },

  // NEW TESTAMENT - HEBREWS (100-400 points)
  {
    id: 'b3_41',
    category: 'Hebrews',
    testament: 'New',
    difficulty: 100,
    question: 'According to Hebrews, what is faith?',
    answer: 'The substance of things hoped for, the evidence of things not seen',
    used: false
  },
  {
    id: 'b3_42',
    category: 'Hebrews',
    testament: 'New',
    difficulty: 200,
    question: 'What does Hebrews say about the Word of God?',
    answer: 'It is living and powerful, sharper than any two-edged sword',
    used: false
  },
  {
    id: 'b3_43',
    category: 'Hebrews',
    testament: 'New',
    difficulty: 300,
    question: 'According to Hebrews, Jesus is a priest after what order?',
    answer: 'The order of Melchizedek',
    used: false
  },
  {
    id: 'b3_44',
    category: 'Hebrews',
    testament: 'New',
    difficulty: 400,
    question: 'What does Hebrews say about Jesus being the same?',
    answer: 'Jesus Christ is the same yesterday, today, and forever',
    used: false
  },

  // NEW TESTAMENT - JAMES (100-400 points)
  {
    id: 'b3_45',
    category: 'James',
    testament: 'New',
    difficulty: 100,
    question: 'According to James, what should we do when we face trials?',
    answer: 'Count it all joy',
    used: false
  },
  {
    id: 'b3_46',
    category: 'James',
    testament: 'New',
    difficulty: 200,
    question: 'What does James say about faith without works?',
    answer: 'Faith without works is dead',
    used: false
  },
  {
    id: 'b3_47',
    category: 'James',
    testament: 'New',
    difficulty: 300,
    question: 'What does James say about the tongue?',
    answer: 'It is a little member that boasts great things; it is a fire, a world of iniquity',
    used: false
  },
  {
    id: 'b3_48',
    category: 'James',
    testament: 'New',
    difficulty: 400,
    question: 'What does James say about drawing near to God?',
    answer: 'Draw near to God and He will draw near to you',
    used: false
  },

  // NEW TESTAMENT - 1 PETER (100-400 points)
  {
    id: 'b3_49',
    category: '1 Peter',
    testament: 'New',
    difficulty: 100,
    question: 'What does Peter say about casting our cares?',
    answer: 'Cast all your care upon Him, for He cares for you',
    used: false
  },
  {
    id: 'b3_50',
    category: '1 Peter',
    testament: 'New',
    difficulty: 200,
    question: 'According to 1 Peter, what are we as believers?',
    answer: 'A chosen generation, a royal priesthood, a holy nation, a peculiar people',
    used: false
  }
];

// Convert raw questions to proper Question format
export const batch3QuestionBank: Question[] = rawBatch3Questions.map(q => ({
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
