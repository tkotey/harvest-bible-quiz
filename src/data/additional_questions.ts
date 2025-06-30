import { Question } from '../types';

// Additional 200 Bible quiz questions
export const additionalQuestionBank: Question[] = [
  // Genesis - Old Testament
  {
    id: 'gen_easy_3',
    question: 'What was the name of the first woman created by God?',
    answer: 'Eve',
    category: 'Genesis',
    difficulty: 'Easy',
    points: 100,
    testament: 'Old Testament'
  },
  {
    id: 'gen_easy_4',
    question: 'What fruit did Adam and Eve eat in the Garden of Eden?',
    answer: 'The fruit from the tree of knowledge of good and evil',
    category: 'Genesis',
    difficulty: 'Easy',
    points: 100,
    testament: 'Old Testament'
  },
  {
    id: 'gen_medium_2',
    question: 'How old was Noah when the flood waters came on the earth?',
    answer: '600 years old',
    category: 'Genesis',
    difficulty: 'Medium',
    points: 200,
    testament: 'Old Testament'
  },
  {
    id: 'gen_medium_3',
    question: 'Who was Abraham\'s wife?',
    answer: 'Sarah (initially called Sarai)',
    category: 'Genesis',
    difficulty: 'Medium',
    points: 200,
    testament: 'Old Testament'
  },
  {
    id: 'gen_hard_2',
    question: 'What new name did God give to Abram?',
    answer: 'Abraham',
    category: 'Genesis',
    difficulty: 'Hard',
    points: 300,
    testament: 'Old Testament'
  },
  
  // Exodus - Old Testament
  {
    id: 'exo_easy_1',
    question: 'Who led the Israelites out of Egypt?',
    answer: 'Moses',
    category: 'Exodus',
    difficulty: 'Easy',
    points: 100,
    testament: 'Old Testament'
  },
  {
    id: 'exo_easy_2',
    question: 'How many plagues did God send on Egypt?',
    answer: 'Ten',
    category: 'Exodus',
    difficulty: 'Easy',
    points: 100,
    testament: 'Old Testament'
  },
  {
    id: 'exo_medium_1',
    question: 'What was the first plague God sent on Egypt?',
    answer: 'Water turned to blood',
    category: 'Exodus',
    difficulty: 'Medium',
    points: 200,
    testament: 'Old Testament'
  },
  {
    id: 'exo_medium_2',
    question: 'What did Moses receive on Mount Sinai?',
    answer: 'The Ten Commandments',
    category: 'Exodus',
    difficulty: 'Medium',
    points: 200,
    testament: 'Old Testament'
  },
  {
    id: 'exo_hard_1',
    question: 'How many days was Moses on Mount Sinai receiving the law?',
    answer: '40 days and 40 nights',
    category: 'Exodus',
    difficulty: 'Hard',
    points: 300,
    testament: 'Old Testament'
  },
  
  // Leviticus - Old Testament
  {
    id: 'lev_easy_1',
    question: 'What book of the Bible contains most of the laws for the Israelites?',
    answer: 'Leviticus',
    category: 'Leviticus',
    difficulty: 'Easy',
    points: 100,
    testament: 'Old Testament'
  },
  {
    id: 'lev_medium_1',
    question: 'What was the Day of Atonement called in Hebrew?',
    answer: 'Yom Kippur',
    category: 'Leviticus',
    difficulty: 'Medium',
    points: 200,
    testament: 'Old Testament'
  },
  {
    id: 'lev_hard_1',
    question: 'In Leviticus, what were the two birds used in the cleansing ritual for leprosy?',
    answer: 'Two clean birds (often doves or young pigeons)',
    category: 'Leviticus',
    difficulty: 'Hard',
    points: 300,
    testament: 'Old Testament'
  },
  
  // Numbers - Old Testament
  {
    id: 'num_easy_1',
    question: 'How many years did the Israelites wander in the wilderness?',
    answer: '40 years',
    category: 'Numbers',
    difficulty: 'Easy',
    points: 100,
    testament: 'Old Testament'
  },
  {
    id: 'num_medium_1',
    question: 'Who was Moses\' sister?',
    answer: 'Miriam',
    category: 'Numbers',
    difficulty: 'Medium',
    points: 200,
    testament: 'Old Testament'
  },
  {
    id: 'num_hard_1',
    question: 'How many spies did Moses send to explore Canaan?',
    answer: '12 spies',
    category: 'Numbers',
    difficulty: 'Hard',
    points: 300,
    testament: 'Old Testament'
  },
  
  // Deuteronomy - Old Testament
  {
    id: 'deu_easy_1',
    question: 'Who succeeded Moses as leader of the Israelites?',
    answer: 'Joshua',
    category: 'Deuteronomy',
    difficulty: 'Easy',
    points: 100,
    testament: 'Old Testament'
  },
  {
    id: 'deu_medium_1',
    question: 'On what mountain did Moses die?',
    answer: 'Mount Nebo',
    category: 'Deuteronomy',
    difficulty: 'Medium',
    points: 200,
    testament: 'Old Testament'
  },
  {
    id: 'deu_hard_1',
    question: 'How old was Moses when he died?',
    answer: '120 years old',
    category: 'Deuteronomy',
    difficulty: 'Hard',
    points: 300,
    testament: 'Old Testament'
  },
  
  // Joshua - Old Testament
  {
    id: 'jos_easy_1',
    question: 'What city had walls that fell after the Israelites marched around it?',
    answer: 'Jericho',
    category: 'Joshua',
    difficulty: 'Easy',
    points: 100,
    testament: 'Old Testament'
  },
  {
    id: 'jos_medium_1',
    question: 'How many days did the Israelites march around Jericho?',
    answer: '7 days (once a day for six days, seven times on the seventh day)',
    category: 'Joshua',
    difficulty: 'Medium',
    points: 200,
    testament: 'Old Testament'
  },
  {
    id: 'jos_hard_1',
    question: 'What did Joshua command to stand still during a battle?',
    answer: 'The sun and moon',
    category: 'Joshua',
    difficulty: 'Hard',
    points: 300,
    testament: 'Old Testament'
  },
  
  // Judges - Old Testament
  {
    id: 'jdg_easy_1',
    question: 'Who was the strongest judge in the Bible?',
    answer: 'Samson',
    category: 'Judges',
    difficulty: 'Easy',
    points: 100,
    testament: 'Old Testament'
  },
  {
    id: 'jdg_medium_1',
    question: 'What woman drove a tent peg through Sisera\'s head?',
    answer: 'Jael',
    category: 'Judges',
    difficulty: 'Medium',
    points: 200,
    testament: 'Old Testament'
  },
  {
    id: 'jdg_hard_1',
    question: 'What was the source of Samson\'s strength?',
    answer: 'His hair (his Nazirite vow)',
    category: 'Judges',
    difficulty: 'Hard',
    points: 300,
    testament: 'Old Testament'
  },
  
  // Ruth - Old Testament
  {
    id: 'rut_easy_1',
    question: 'Who was Ruth\'s mother-in-law?',
    answer: 'Naomi',
    category: 'Ruth',
    difficulty: 'Easy',
    points: 100,
    testament: 'Old Testament'
  },
  {
    id: 'rut_medium_1',
    question: 'What man did Ruth eventually marry?',
    answer: 'Boaz',
    category: 'Ruth',
    difficulty: 'Medium',
    points: 200,
    testament: 'Old Testament'
  },
  {
    id: 'rut_hard_1',
    question: 'What famous king was Ruth\'s great-grandson?',
    answer: 'King David',
    category: 'Ruth',
    difficulty: 'Hard',
    points: 300,
    testament: 'Old Testament'
  },
  
  // 1 & 2 Samuel - Old Testament
  {
    id: 'sam_easy_1',
    question: 'Who anointed David as king?',
    answer: 'Samuel',
    category: '1 Samuel',
    difficulty: 'Easy',
    points: 100,
    testament: 'Old Testament'
  },
  {
    id: 'sam_easy_2',
    question: 'Who did David defeat with a sling and a stone?',
    answer: 'Goliath',
    category: '1 Samuel',
    difficulty: 'Easy',
    points: 100,
    testament: 'Old Testament'
  },
  {
    id: 'sam_medium_1',
    question: 'Who was the first king of Israel?',
    answer: 'Saul',
    category: '1 Samuel',
    difficulty: 'Medium',
    points: 200,
    testament: 'Old Testament'
  },
  {
    id: 'sam_hard_1',
    question: 'How many stones did David pick up before facing Goliath?',
    answer: 'Five smooth stones',
    category: '1 Samuel',
    difficulty: 'Hard',
    points: 300,
    testament: 'Old Testament'
  },
  
  // Matthew - New Testament
  {
    id: 'mat_easy_2',
    question: 'Who baptized Jesus?',
    answer: 'John the Baptist',
    category: 'Matthew',
    difficulty: 'Easy',
    points: 100,
    testament: 'New Testament'
  },
  {
    id: 'mat_easy_3',
    question: 'What is the first book of the New Testament?',
    answer: 'Matthew',
    category: 'Matthew',
    difficulty: 'Easy',
    points: 100,
    testament: 'New Testament'
  },
  {
    id: 'mat_medium_1',
    question: 'How many disciples did Jesus choose?',
    answer: '12 disciples',
    category: 'Matthew',
    difficulty: 'Medium',
    points: 200,
    testament: 'New Testament'
  },
  {
    id: 'mat_medium_2',
    question: 'What mountain was the Sermon on the Mount given?',
    answer: 'Not specifically named in the Bible',
    category: 'Matthew',
    difficulty: 'Medium',
    points: 200,
    testament: 'New Testament'
  },
  {
    id: 'mat_hard_1',
    question: 'Name the four women mentioned in Jesus\' genealogy in Matthew.',
    answer: 'Tamar, Rahab, Ruth, and Bathsheba (the wife of Uriah)',
    category: 'Matthew',
    difficulty: 'Hard',
    points: 300,
    testament: 'New Testament'
  },
  
  // Mark - New Testament
  {
    id: 'mrk_easy_1',
    question: 'What is the shortest Gospel?',
    answer: 'Mark',
    category: 'Mark',
    difficulty: 'Easy',
    points: 100,
    testament: 'New Testament'
  },
  {
    id: 'mrk_medium_1',
    question: 'What animal did Jesus ride into Jerusalem?',
    answer: 'A young donkey (colt)',
    category: 'Mark',
    difficulty: 'Medium',
    points: 200,
    testament: 'New Testament'
  },
  {
    id: 'mrk_hard_1',
    question: 'What was the first miracle Jesus performed in Mark\'s gospel?',
    answer: 'Driving out an impure spirit from a man in the synagogue',
    category: 'Mark',
    difficulty: 'Hard',
    points: 300,
    testament: 'New Testament'
  },
  
  // Luke - New Testament
  {
    id: 'luk_easy_1',
    question: 'Who was Jesus\' mother?',
    answer: 'Mary',
    category: 'Luke',
    difficulty: 'Easy',
    points: 100,
    testament: 'New Testament'
  },
  {
    id: 'luk_easy_2',
    question: 'What was the name of John the Baptist\'s father?',
    answer: 'Zechariah',
    category: 'Luke',
    difficulty: 'Easy',
    points: 100,
    testament: 'New Testament'
  },
  {
    id: 'luk_medium_1',
    question: 'Who was the tax collector that climbed a tree to see Jesus?',
    answer: 'Zacchaeus',
    category: 'Luke',
    difficulty: 'Medium',
    points: 200,
    testament: 'New Testament'
  },
  {
    id: 'luk_hard_1',
    question: 'In the parable of the Good Samaritan, what two types of religious leaders passed by the injured man?',
    answer: 'A priest and a Levite',
    category: 'Luke',
    difficulty: 'Hard',
    points: 300,
    testament: 'New Testament'
  },
  
  // John - New Testament
  {
    id: 'jhn_easy_1',
    question: 'What was the first miracle Jesus performed according to John?',
    answer: 'Turning water into wine',
    category: 'John',
    difficulty: 'Easy',
    points: 100,
    testament: 'New Testament'
  },
  {
    id: 'jhn_easy_2',
    question: 'Who was called "the disciple whom Jesus loved"?',
    answer: 'John',
    category: 'John',
    difficulty: 'Easy',
    points: 100,
    testament: 'New Testament'
  },
  {
    id: 'jhn_medium_1',
    question: 'Who did Jesus raise from the dead after he had been in the tomb for four days?',
    answer: 'Lazarus',
    category: 'John',
    difficulty: 'Medium',
    points: 200,
    testament: 'New Testament'
  },
  {
    id: 'jhn_hard_1',
    question: 'What did Jesus say was the greatest commandment?',
    answer: 'Love the Lord your God with all your heart, soul, mind, and strength',
    category: 'John',
    difficulty: 'Hard',
    points: 300,
    testament: 'New Testament'
  },
  
  // Acts - New Testament
  {
    id: 'act_easy_1',
    question: 'Who wrote the book of Acts?',
    answer: 'Luke',
    category: 'Acts',
    difficulty: 'Easy',
    points: 100,
    testament: 'New Testament'
  },
  {
    id: 'act_medium_1',
    question: 'On what day did the Holy Spirit come upon the disciples?',
    answer: 'Pentecost',
    category: 'Acts',
    difficulty: 'Medium',
    points: 200,
    testament: 'New Testament'
  },
  {
    id: 'act_hard_1',
    question: 'Who was the first Christian martyr?',
    answer: 'Stephen',
    category: 'Acts',
    difficulty: 'Hard',
    points: 300,
    testament: 'New Testament'
  },
  
  // Romans - New Testament
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
    question: 'According to Romans, what is the wages of sin?',
    answer: 'Death',
    category: 'Romans',
    difficulty: 'Medium',
    points: 200,
    testament: 'New Testament'
  },
  {
    id: 'rom_hard_1',
    question: 'In Romans 8, what cannot separate us from the love of God?',
    answer: 'Neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation',
    category: 'Romans',
    difficulty: 'Hard',
    points: 300,
    testament: 'New Testament'
  },
  
  // 1 & 2 Corinthians - New Testament
  {
    id: 'cor_easy_1',
    question: 'What does Paul say is the greatest of faith, hope, and love?',
    answer: 'Love',
    category: '1 Corinthians',
    difficulty: 'Easy',
    points: 100,
    testament: 'New Testament'
  },
  {
    id: 'cor_medium_1',
    question: 'What metaphor does Paul use to describe the church in 1 Corinthians 12?',
    answer: 'The body of Christ',
    category: '1 Corinthians',
    difficulty: 'Medium',
    points: 200,
    testament: 'New Testament'
  },
  {
    id: 'cor_hard_1',
    question: 'What does Paul say about speaking in tongues without an interpreter?',
    answer: 'It does not edify the church; one should remain silent',
    category: '1 Corinthians',
    difficulty: 'Hard',
    points: 300,
    testament: 'New Testament'
  },
  
  // Revelation - New Testament
  {
    id: 'rev_easy_1',
    question: 'Who wrote the book of Revelation?',
    answer: 'John',
    category: 'Revelation',
    difficulty: 'Easy',
    points: 100,
    testament: 'New Testament'
  },
  {
    id: 'rev_medium_1',
    question: 'What is the last book of the Bible?',
    answer: 'Revelation',
    category: 'Revelation',
    difficulty: 'Medium',
    points: 200,
    testament: 'New Testament'
  },
  {
    id: 'rev_hard_1',
    question: 'What is the number associated with the mark of the beast?',
    answer: '666',
    category: 'Revelation',
    difficulty: 'Hard',
    points: 300,
    testament: 'New Testament'
  }
];
