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

const rawBatch2Questions: RawQuestion[] = [
  // OLD TESTAMENT - ECCLESIASTES (100-400 points)
  {
    id: 'b2_1',
    category: 'Ecclesiastes',
    testament: 'Old',
    difficulty: 100,
    question: 'Who is traditionally considered the author of Ecclesiastes?',
    answer: 'Solomon',
    used: false
  },
  {
    id: 'b2_2',
    category: 'Ecclesiastes',
    testament: 'Old',
    difficulty: 200,
    question: 'Complete this famous verse: "To everything there is a season..."',
    answer: 'and a time to every purpose under heaven',
    used: false
  },
  {
    id: 'b2_3',
    category: 'Ecclesiastes',
    testament: 'Old',
    difficulty: 300,
    question: 'What does the Preacher say is "vanity of vanities"?',
    answer: 'All is vanity',
    used: false
  },
  {
    id: 'b2_4',
    category: 'Ecclesiastes',
    testament: 'Old',
    difficulty: 400,
    question: 'According to Ecclesiastes, what should we do in our youth?',
    answer: 'Remember our Creator',
    used: false
  },

  // OLD TESTAMENT - ISAIAH (100-400 points)
  {
    id: 'b2_5',
    category: 'Isaiah',
    testament: 'Old',
    difficulty: 100,
    question: 'Complete this prophecy: "For unto us a child is born..."',
    answer: 'unto us a son is given',
    used: false
  },
  {
    id: 'b2_6',
    category: 'Isaiah',
    testament: 'Old',
    difficulty: 200,
    question: 'What did Isaiah see in his vision of God\'s throne?',
    answer: 'Seraphim with six wings',
    used: false
  },
  {
    id: 'b2_7',
    category: 'Isaiah',
    testament: 'Old',
    difficulty: 300,
    question: 'Which king\'s life was extended by 15 years after Isaiah\'s prayer?',
    answer: 'Hezekiah',
    used: false
  },
  {
    id: 'b2_8',
    category: 'Isaiah',
    testament: 'Old',
    difficulty: 400,
    question: 'What sign did God give to Ahaz concerning the virgin birth?',
    answer: 'A virgin shall conceive and bear a son called Immanuel',
    used: false
  },

  // OLD TESTAMENT - JEREMIAH (100-400 points)
  {
    id: 'b2_9',
    category: 'Jeremiah',
    testament: 'Old',
    difficulty: 100,
    question: 'What is Jeremiah often called because of his sorrowful prophecies?',
    answer: 'The weeping prophet',
    used: false
  },
  {
    id: 'b2_10',
    category: 'Jeremiah',
    testament: 'Old',
    difficulty: 200,
    question: 'How many years did Jeremiah prophesy Judah would be in captivity?',
    answer: '70 years',
    used: false
  },
  {
    id: 'b2_11',
    category: 'Jeremiah',
    testament: 'Old',
    difficulty: 300,
    question: 'What did God tell Jeremiah he was before he was formed in the womb?',
    answer: 'A prophet to the nations',
    used: false
  },
  {
    id: 'b2_12',
    category: 'Jeremiah',
    testament: 'Old',
    difficulty: 400,
    question: 'Who was Jeremiah\'s scribe that wrote down his prophecies?',
    answer: 'Baruch',
    used: false
  },

  // OLD TESTAMENT - EZEKIEL (100-400 points)
  {
    id: 'b2_13',
    category: 'Ezekiel',
    testament: 'Old',
    difficulty: 100,
    question: 'What did Ezekiel see in his vision of the valley?',
    answer: 'Dry bones',
    used: false
  },
  {
    id: 'b2_14',
    category: 'Ezekiel',
    testament: 'Old',
    difficulty: 200,
    question: 'What creatures did Ezekiel see in his vision of God\'s throne?',
    answer: 'Four living creatures (cherubim)',
    used: false
  },
  {
    id: 'b2_15',
    category: 'Ezekiel',
    testament: 'Old',
    difficulty: 300,
    question: 'Where was Ezekiel when he received his prophetic calling?',
    answer: 'By the river Chebar in Babylon',
    used: false
  },
  {
    id: 'b2_16',
    category: 'Ezekiel',
    testament: 'Old',
    difficulty: 400,
    question: 'What did God tell Ezekiel to eat that was sweet as honey?',
    answer: 'A scroll',
    used: false
  },

  // OLD TESTAMENT - DANIEL (100-400 points)
  {
    id: 'b2_17',
    category: 'Daniel',
    testament: 'Old',
    difficulty: 100,
    question: 'What did Daniel and his friends refuse to eat in Babylon?',
    answer: 'The king\'s food and wine',
    used: false
  },
  {
    id: 'b2_18',
    category: 'Daniel',
    testament: 'Old',
    difficulty: 200,
    question: 'Who were Daniel\'s three friends thrown into the fiery furnace?',
    answer: 'Shadrach, Meshach, and Abednego',
    used: false
  },
  {
    id: 'b2_19',
    category: 'Daniel',
    testament: 'Old',
    difficulty: 300,
    question: 'What did the handwriting on the wall say at Belshazzar\'s feast?',
    answer: 'MENE, MENE, TEKEL, UPHARSIN',
    used: false
  },
  {
    id: 'b2_20',
    category: 'Daniel',
    testament: 'Old',
    difficulty: 400,
    question: 'How many times a day did Daniel pray toward Jerusalem?',
    answer: 'Three times',
    used: false
  },

  // OLD TESTAMENT - JONAH (100-400 points)
  {
    id: 'b2_21',
    category: 'Jonah',
    testament: 'Old',
    difficulty: 100,
    question: 'Which city was Jonah told to preach to?',
    answer: 'Nineveh',
    used: false
  },
  {
    id: 'b2_22',
    category: 'Jonah',
    testament: 'Old',
    difficulty: 200,
    question: 'What swallowed Jonah when he tried to flee?',
    answer: 'A great fish (whale)',
    used: false
  },
  {
    id: 'b2_23',
    category: 'Jonah',
    testament: 'Old',
    difficulty: 300,
    question: 'How long was Jonah in the belly of the fish?',
    answer: 'Three days and three nights',
    used: false
  },
  {
    id: 'b2_24',
    category: 'Jonah',
    testament: 'Old',
    difficulty: 400,
    question: 'What plant did God provide to give Jonah shade?',
    answer: 'A gourd (or castor oil plant)',
    used: false
  },

  // NEW TESTAMENT - MATTHEW (100-400 points)
  {
    id: 'b2_25',
    category: 'Matthew',
    testament: 'New',
    difficulty: 100,
    question: 'What was Matthew\'s occupation before following Jesus?',
    answer: 'Tax collector',
    used: false
  },
  {
    id: 'b2_26',
    category: 'Matthew',
    testament: 'New',
    difficulty: 200,
    question: 'How many beatitudes are there in the Sermon on the Mount?',
    answer: 'Eight (or nine)',
    used: false
  },
  {
    id: 'b2_27',
    category: 'Matthew',
    testament: 'New',
    difficulty: 300,
    question: 'What did Jesus say we cannot serve along with God?',
    answer: 'Mammon (money/riches)',
    used: false
  },
  {
    id: 'b2_28',
    category: 'Matthew',
    testament: 'New',
    difficulty: 400,
    question: 'How many generations are listed from Abraham to Christ in Matthew\'s genealogy?',
    answer: '42 generations (14 + 14 + 14)',
    used: false
  },

  // NEW TESTAMENT - MARK (100-400 points)
  {
    id: 'b2_29',
    category: 'Mark',
    testament: 'New',
    difficulty: 100,
    question: 'Who baptized Jesus in the Jordan River?',
    answer: 'John the Baptist',
    used: false
  },
  {
    id: 'b2_30',
    category: 'Mark',
    testament: 'New',
    difficulty: 200,
    question: 'What came down like a dove when Jesus was baptized?',
    answer: 'The Holy Spirit',
    used: false
  },
  {
    id: 'b2_31',
    category: 'Mark',
    testament: 'New',
    difficulty: 300,
    question: 'Which disciple cut off the ear of the high priest\'s servant?',
    answer: 'Peter',
    used: false
  },
  {
    id: 'b2_32',
    category: 'Mark',
    testament: 'New',
    difficulty: 400,
    question: 'What was the name of the high priest\'s servant whose ear was cut off?',
    answer: 'Malchus',
    used: false
  },

  // NEW TESTAMENT - LUKE (100-400 points)
  {
    id: 'b2_33',
    category: 'Luke',
    testament: 'New',
    difficulty: 100,
    question: 'Who was the angel that announced Jesus\' birth to Mary?',
    answer: 'Gabriel',
    used: false
  },
  {
    id: 'b2_34',
    category: 'Luke',
    testament: 'New',
    difficulty: 200,
    question: 'In which city was Jesus born?',
    answer: 'Bethlehem',
    used: false
  },
  {
    id: 'b2_35',
    category: 'Luke',
    testament: 'New',
    difficulty: 300,
    question: 'Who was the prophetess who recognized baby Jesus in the temple?',
    answer: 'Anna',
    used: false
  },
  {
    id: 'b2_36',
    category: 'Luke',
    testament: 'New',
    difficulty: 400,
    question: 'What was the name of the man who took baby Jesus in his arms and blessed God?',
    answer: 'Simeon',
    used: false
  },

  // NEW TESTAMENT - JOHN (100-400 points)
  {
    id: 'b2_37',
    category: 'John',
    testament: 'New',
    difficulty: 100,
    question: 'Complete this verse: "For God so loved the world..."',
    answer: 'that he gave his only begotten Son',
    used: false
  },
  {
    id: 'b2_38',
    category: 'John',
    testament: 'New',
    difficulty: 200,
    question: 'What was Jesus\' first miracle?',
    answer: 'Turning water into wine at Cana',
    used: false
  },
  {
    id: 'b2_39',
    category: 'John',
    testament: 'New',
    difficulty: 300,
    question: 'How many "I AM" statements did Jesus make in John\'s Gospel?',
    answer: 'Seven',
    used: false
  },
  {
    id: 'b2_40',
    category: 'John',
    testament: 'New',
    difficulty: 400,
    question: 'Who was the disciple that Jesus loved, traditionally identified as the author of John?',
    answer: 'John',
    used: false
  },

  // NEW TESTAMENT - ACTS (100-400 points)
  {
    id: 'b2_41',
    category: 'Acts',
    testament: 'New',
    difficulty: 100,
    question: 'On which day did the Holy Spirit come upon the disciples?',
    answer: 'Pentecost',
    used: false
  },
  {
    id: 'b2_42',
    category: 'Acts',
    testament: 'New',
    difficulty: 200,
    question: 'Who was the first Christian martyr?',
    answer: 'Stephen',
    used: false
  },
  {
    id: 'b2_43',
    category: 'Acts',
    testament: 'New',
    difficulty: 300,
    question: 'What was Saul\'s name changed to after his conversion?',
    answer: 'Paul',
    used: false
  },
  {
    id: 'b2_44',
    category: 'Acts',
    testament: 'New',
    difficulty: 400,
    question: 'Which Ethiopian official did Philip baptize?',
    answer: 'The Ethiopian eunuch',
    used: false
  },

  // NEW TESTAMENT - ROMANS (100-400 points)
  {
    id: 'b2_45',
    category: 'Romans',
    testament: 'New',
    difficulty: 100,
    question: 'According to Romans, what is the wages of sin?',
    answer: 'Death',
    used: false
  },
  {
    id: 'b2_46',
    category: 'Romans',
    testament: 'New',
    difficulty: 200,
    question: 'Complete this verse: "All have sinned and fall short..."',
    answer: 'of the glory of God',
    used: false
  },
  {
    id: 'b2_47',
    category: 'Romans',
    testament: 'New',
    difficulty: 300,
    question: 'According to Romans 8, what can separate us from the love of God?',
    answer: 'Nothing',
    used: false
  },
  {
    id: 'b2_48',
    category: 'Romans',
    testament: 'New',
    difficulty: 400,
    question: 'In Romans, who does Paul use as an example of faith?',
    answer: 'Abraham',
    used: false
  },

  // NEW TESTAMENT - 1 CORINTHIANS (100-400 points)
  {
    id: 'b2_49',
    category: '1 Corinthians',
    testament: 'New',
    difficulty: 100,
    question: 'What is the greatest of faith, hope, and love?',
    answer: 'Love',
    used: false
  },
  {
    id: 'b2_50',
    category: '1 Corinthians',
    testament: 'New',
    difficulty: 200,
    question: 'According to 1 Corinthians 13, love is patient and what?',
    answer: 'Kind',
    used: false
  }
];

// Convert raw questions to proper Question format
export const batch2QuestionBank: Question[] = rawBatch2Questions.map(q => ({
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
