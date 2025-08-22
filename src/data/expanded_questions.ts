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

const rawExpandedQuestionBank: RawQuestion[] = [
  // OLD TESTAMENT - GENESIS (100-400 points)
  {
    id: 1,
    category: 'Genesis',
    testament: 'Old',
    difficulty: 100,
    question: 'Who were the first man and woman created by God?',
    answer: 'Adam and Eve',
    used: false
  },
  {
    id: 2,
    category: 'Genesis',
    testament: 'Old',
    difficulty: 200,
    question: 'How many days did it rain during the flood?',
    answer: '40 days and 40 nights',
    used: false
  },
  {
    id: 3,
    category: 'Genesis',
    testament: 'Old',
    difficulty: 300,
    question: 'What did Jacob\'s name change to after wrestling with the angel?',
    answer: 'Israel',
    used: false
  },
  {
    id: 4,
    category: 'Genesis',
    testament: 'Old',
    difficulty: 400,
    question: 'Who was sold into slavery by his brothers for 20 pieces of silver?',
    answer: 'Joseph',
    used: false
  },

  // OLD TESTAMENT - EXODUS (100-400 points)
  {
    id: 5,
    category: 'Exodus',
    testament: 'Old',
    difficulty: 100,
    question: 'Who led the Israelites out of Egypt?',
    answer: 'Moses',
    used: false
  },
  {
    id: 6,
    category: 'Exodus',
    testament: 'Old',
    difficulty: 200,
    question: 'How many plagues did God send upon Egypt?',
    answer: '10 plagues',
    used: false
  },
  {
    id: 7,
    category: 'Exodus',
    testament: 'Old',
    difficulty: 300,
    question: 'What was the first plague that God sent upon Egypt?',
    answer: 'Water turned to blood',
    used: false
  },
  {
    id: 8,
    category: 'Exodus',
    testament: 'Old',
    difficulty: 400,
    question: 'What was the name of Moses\' brother who served as his spokesman?',
    answer: 'Aaron',
    used: false
  },

  // OLD TESTAMENT - LEVITICUS (100-400 points)
  {
    id: 9,
    category: 'Leviticus',
    testament: 'Old',
    difficulty: 100,
    question: 'What type of sacrifices are described in Leviticus?',
    answer: 'Animal sacrifices and offerings',
    used: false
  },
  {
    id: 10,
    category: 'Leviticus',
    testament: 'Old',
    difficulty: 200,
    question: 'What is the Day of Atonement called in Hebrew?',
    answer: 'Yom Kippur',
    used: false
  },
  {
    id: 11,
    category: 'Leviticus',
    testament: 'Old',
    difficulty: 300,
    question: 'How often was the Year of Jubilee celebrated?',
    answer: 'Every 50 years',
    used: false
  },
  {
    id: 12,
    category: 'Leviticus',
    testament: 'Old',
    difficulty: 400,
    question: 'What were the five types of offerings described in Leviticus?',
    answer: 'Burnt, grain, peace, sin, and guilt offerings',
    used: false
  },

  // OLD TESTAMENT - NUMBERS (100-400 points)
  {
    id: 13,
    category: 'Numbers',
    testament: 'Old',
    difficulty: 100,
    question: 'How long did the Israelites wander in the wilderness?',
    answer: '40 years',
    used: false
  },
  {
    id: 14,
    category: 'Numbers',
    testament: 'Old',
    difficulty: 200,
    question: 'How many spies were sent to scout the Promised Land?',
    answer: '12 spies',
    used: false
  },
  {
    id: 15,
    category: 'Numbers',
    testament: 'Old',
    difficulty: 300,
    question: 'Who was swallowed by the earth for rebelling against Moses?',
    answer: 'Korah, Dathan, and Abiram',
    used: false
  },
  {
    id: 16,
    category: 'Numbers',
    testament: 'Old',
    difficulty: 400,
    question: 'What did Balaam\'s donkey do that was miraculous?',
    answer: 'It spoke to Balaam',
    used: false
  },

  // OLD TESTAMENT - DEUTERONOMY (100-400 points)
  {
    id: 17,
    category: 'Deuteronomy',
    testament: 'Old',
    difficulty: 100,
    question: 'Who gave the speeches recorded in Deuteronomy?',
    answer: 'Moses',
    used: false
  },
  {
    id: 18,
    category: 'Deuteronomy',
    testament: 'Old',
    difficulty: 200,
    question: 'From which mountain did Moses view the Promised Land?',
    answer: 'Mount Nebo',
    used: false
  },
  {
    id: 19,
    category: 'Deuteronomy',
    testament: 'Old',
    difficulty: 300,
    question: 'What choice did Moses set before the Israelites?',
    answer: 'Life and death, blessing and cursing',
    used: false
  },
  {
    id: 20,
    category: 'Deuteronomy',
    testament: 'Old',
    difficulty: 400,
    question: 'Who was chosen to succeed Moses as leader?',
    answer: 'Joshua',
    used: false
  },

  // OLD TESTAMENT - JOSHUA (100-400 points)
  {
    id: 21,
    category: 'Joshua',
    testament: 'Old',
    difficulty: 100,
    question: 'Who led the Israelites into the Promised Land?',
    answer: 'Joshua',
    used: false
  },
  {
    id: 22,
    category: 'Joshua',
    testament: 'Old',
    difficulty: 200,
    question: 'How many days did the Israelites march around Jericho?',
    answer: '7 days',
    used: false
  },
  {
    id: 23,
    category: 'Joshua',
    testament: 'Old',
    difficulty: 300,
    question: 'What river did the Israelites cross to enter the Promised Land?',
    answer: 'The Jordan River',
    used: false
  },
  {
    id: 24,
    category: 'Joshua',
    testament: 'Old',
    difficulty: 400,
    question: 'What miraculous event happened during the battle with the Amorites?',
    answer: 'The sun stood still',
    used: false
  },

  // OLD TESTAMENT - JUDGES (100-400 points)
  {
    id: 25,
    category: 'Judges',
    testament: 'Old',
    difficulty: 100,
    question: 'Who was the strongest judge of Israel?',
    answer: 'Samson',
    used: false
  },
  {
    id: 26,
    category: 'Judges',
    testament: 'Old',
    difficulty: 200,
    question: 'Who was the female judge who led Israel to victory?',
    answer: 'Deborah',
    used: false
  },
  {
    id: 27,
    category: 'Judges',
    testament: 'Old',
    difficulty: 300,
    question: 'How many men did Gideon have in his final army?',
    answer: '300 men',
    used: false
  },
  {
    id: 28,
    category: 'Judges',
    testament: 'Old',
    difficulty: 400,
    question: 'What was Samson\'s riddle about?',
    answer: 'Out of the eater came something to eat, out of the strong came something sweet',
    used: false
  },

  // OLD TESTAMENT - RUTH (100-400 points)
  {
    id: 29,
    category: 'Ruth',
    testament: 'Old',
    difficulty: 100,
    question: 'Who was Ruth\'s mother-in-law?',
    answer: 'Naomi',
    used: false
  },
  {
    id: 30,
    category: 'Ruth',
    testament: 'Old',
    difficulty: 200,
    question: 'Who did Ruth marry in Bethlehem?',
    answer: 'Boaz',
    used: false
  },
  {
    id: 31,
    category: 'Ruth',
    testament: 'Old',
    difficulty: 300,
    question: 'Complete Ruth\'s famous words: "Where you go I will go, and where you stay..."',
    answer: 'I will stay. Your people will be my people and your God my God',
    used: false
  },
  {
    id: 32,
    category: 'Ruth',
    testament: 'Old',
    difficulty: 400,
    question: 'Ruth was the great-grandmother of which famous king?',
    answer: 'King David',
    used: false
  },

  // OLD TESTAMENT - 1 SAMUEL (100-400 points)
  {
    id: 33,
    category: '1 Samuel',
    testament: 'Old',
    difficulty: 100,
    question: 'Who was the first king of Israel?',
    answer: 'Saul',
    used: false
  },
  {
    id: 34,
    category: '1 Samuel',
    testament: 'Old',
    difficulty: 200,
    question: 'What did David use to kill Goliath?',
    answer: 'A sling and a stone',
    used: false
  },
  {
    id: 35,
    category: '1 Samuel',
    testament: 'Old',
    difficulty: 300,
    question: 'Who was David\'s best friend?',
    answer: 'Jonathan',
    used: false
  },
  {
    id: 36,
    category: '1 Samuel',
    testament: 'Old',
    difficulty: 400,
    question: 'How did Saul die?',
    answer: 'He fell on his own sword',
    used: false
  },

  // OLD TESTAMENT - 2 SAMUEL (100-400 points)
  {
    id: 37,
    category: '2 Samuel',
    testament: 'Old',
    difficulty: 100,
    question: 'Who became king after Saul died?',
    answer: 'David',
    used: false
  },
  {
    id: 38,
    category: '2 Samuel',
    testament: 'Old',
    difficulty: 200,
    question: 'Who was Bathsheba\'s husband whom David had killed?',
    answer: 'Uriah',
    used: false
  },
  {
    id: 39,
    category: '2 Samuel',
    testament: 'Old',
    difficulty: 300,
    question: 'Which of David\'s sons rebelled against him?',
    answer: 'Absalom',
    used: false
  },
  {
    id: 40,
    category: '2 Samuel',
    testament: 'Old',
    difficulty: 400,
    question: 'What did David want to build for God that he was not allowed to build?',
    answer: 'A temple',
    used: false
  },

  // OLD TESTAMENT - 1 KINGS (100-400 points)
  {
    id: 41,
    category: '1 Kings',
    testament: 'Old',
    difficulty: 100,
    question: 'Who was the wisest king of Israel?',
    answer: 'Solomon',
    used: false
  },
  {
    id: 42,
    category: '1 Kings',
    testament: 'Old',
    difficulty: 200,
    question: 'What did Solomon ask God for?',
    answer: 'Wisdom',
    used: false
  },
  {
    id: 43,
    category: '1 Kings',
    testament: 'Old',
    difficulty: 300,
    question: 'How did God answer Elijah\'s prayer on Mount Carmel?',
    answer: 'Fire came down from heaven and consumed the sacrifice',
    used: false
  },
  {
    id: 44,
    category: '1 Kings',
    testament: 'Old',
    difficulty: 400,
    question: 'How was Elijah taken up to heaven?',
    answer: 'In a whirlwind by a chariot of fire',
    used: false
  },

  // OLD TESTAMENT - 2 KINGS (100-400 points)
  {
    id: 45,
    category: '2 Kings',
    testament: 'Old',
    difficulty: 100,
    question: 'Who was Elijah\'s successor?',
    answer: 'Elisha',
    used: false
  },
  {
    id: 46,
    category: '2 Kings',
    testament: 'Old',
    difficulty: 200,
    question: 'How many times did Naaman have to dip in the Jordan River?',
    answer: 'Seven times',
    used: false
  },
  {
    id: 47,
    category: '2 Kings',
    testament: 'Old',
    difficulty: 300,
    question: 'What did Elisha do to make an axe head float?',
    answer: 'He threw a stick into the water',
    used: false
  },
  {
    id: 48,
    category: '2 Kings',
    testament: 'Old',
    difficulty: 400,
    question: 'How many years was added to Hezekiah\'s life after he prayed?',
    answer: '15 years',
    used: false
  },

  // OLD TESTAMENT - PSALMS (100-400 points)
  {
    id: 49,
    category: 'Psalms',
    testament: 'Old',
    difficulty: 100,
    question: 'Complete this verse: "The Lord is my shepherd, I shall not..."',
    answer: 'want',
    used: false
  },
  {
    id: 50,
    category: 'Psalms',
    testament: 'Old',
    difficulty: 200,
    question: 'Which Psalm begins with "Blessed is the man who walks not in the counsel of the wicked"?',
    answer: 'Psalm 1',
    used: false
  },
  {
    id: 51,
    category: 'Psalms',
    testament: 'Old',
    difficulty: 300,
    question: 'Which Psalm is known as the longest chapter in the Bible?',
    answer: 'Psalm 119',
    used: false
  },
  {
    id: 52,
    category: 'Psalms',
    testament: 'Old',
    difficulty: 400,
    question: 'Which Psalm begins with "My God, my God, why have you forsaken me?"',
    answer: 'Psalm 22',
    used: false
  },

  // OLD TESTAMENT - PROVERBS (100-400 points)
  {
    id: 53,
    category: 'Proverbs',
    testament: 'Old',
    difficulty: 100,
    question: 'Complete this proverb: "The fear of the Lord is the beginning of..."',
    answer: 'wisdom',
    used: false
  },
  {
    id: 54,
    category: 'Proverbs',
    testament: 'Old',
    difficulty: 200,
    question: 'Complete this proverb: "Trust in the Lord with all your heart and lean not on..."',
    answer: 'your own understanding',
    used: false
  },
  {
    id: 55,
    category: 'Proverbs',
    testament: 'Old',
    difficulty: 300,
    question: 'Complete this proverb: "Pride goes before..."',
    answer: 'destruction, and a haughty spirit before a fall',
    used: false
  },
  {
    id: 56,
    category: 'Proverbs',
    testament: 'Old',
    difficulty: 400,
    question: 'Complete this proverb: "As iron sharpens iron, so..."',
    answer: 'one man sharpens another',
    used: false
  },

  // OLD TESTAMENT - ECCLESIASTES (100-400 points)
  {
    id: 57,
    category: 'Ecclesiastes',
    testament: 'Old',
    difficulty: 100,
    question: 'Complete this famous verse: "To everything there is a season, and a time to..."',
    answer: 'every purpose under heaven',
    used: false
  },
  {
    id: 58,
    category: 'Ecclesiastes',
    testament: 'Old',
    difficulty: 200,
    question: 'What does Ecclesiastes say about the conclusion of the whole matter?',
    answer: 'Fear God and keep His commandments',
    used: false
  },
  {
    id: 59,
    category: 'Ecclesiastes',
    testament: 'Old',
    difficulty: 300,
    question: 'What does Ecclesiastes say about two being better than one?',
    answer: 'They have a good reward for their labor',
    used: false
  },
  {
    id: 60,
    category: 'Ecclesiastes',
    testament: 'Old',
    difficulty: 400,
    question: 'What does Ecclesiastes say about a threefold cord?',
    answer: 'A threefold cord is not quickly broken',
    used: false
  },

  // OLD TESTAMENT - ISAIAH (100-400 points)
  {
    id: 61,
    category: 'Isaiah',
    testament: 'Old',
    difficulty: 100,
    question: 'Complete this prophecy: "For unto us a child is born, unto us a son is..."',
    answer: 'given',
    used: false
  },
  {
    id: 62,
    category: 'Isaiah',
    testament: 'Old',
    difficulty: 200,
    question: 'Complete this verse: "Come now, let us reason together, says the Lord: though your sins are like scarlet, they shall be as..."',
    answer: 'white as snow',
    used: false
  },
  {
    id: 63,
    category: 'Isaiah',
    testament: 'Old',
    difficulty: 300,
    question: 'Complete this Messianic prophecy: "He was wounded for our transgressions, he was bruised for our..."',
    answer: 'iniquities',
    used: false
  },
  {
    id: 64,
    category: 'Isaiah',
    testament: 'Old',
    difficulty: 400,
    question: 'What did Isaiah say when God asked "Whom shall I send?"',
    answer: 'Here am I! Send me',
    used: false
  },

  // OLD TESTAMENT - DANIEL (100-400 points)
  {
    id: 65,
    category: 'Daniel',
    testament: 'Old',
    difficulty: 100,
    question: 'Who was thrown into the lion\'s den?',
    answer: 'Daniel',
    used: false
  },
  {
    id: 66,
    category: 'Daniel',
    testament: 'Old',
    difficulty: 200,
    question: 'Who were Daniel\'s three friends who were thrown into the fiery furnace?',
    answer: 'Shadrach, Meshach, and Abednego',
    used: false
  },
  {
    id: 67,
    category: 'Daniel',
    testament: 'Old',
    difficulty: 300,
    question: 'How many times a day did Daniel pray?',
    answer: 'Three times a day',
    used: false
  },
  {
    id: 68,
    category: 'Daniel',
    testament: 'Old',
    difficulty: 400,
    question: 'What did the handwriting on the wall say at Belshazzar\'s feast?',
    answer: 'MENE, MENE, TEKEL, UPHARSIN',
    used: false
  },

  // NEW TESTAMENT - MATTHEW (100-400 points)
  {
    id: 69,
    category: 'Matthew',
    testament: 'New',
    difficulty: 100,
    question: 'In what city was Jesus born?',
    answer: 'Bethlehem',
    used: false
  },
  {
    id: 70,
    category: 'Matthew',
    testament: 'New',
    difficulty: 200,
    question: 'What gifts did the wise men bring to Jesus?',
    answer: 'Gold, frankincense, and myrrh',
    used: false
  },
  {
    id: 71,
    category: 'Matthew',
    testament: 'New',
    difficulty: 300,
    question: 'Complete the Beatitude: "Blessed are the poor in spirit, for..."',
    answer: 'theirs is the kingdom of heaven',
    used: false
  },
  {
    id: 72,
    category: 'Matthew',
    testament: 'New',
    difficulty: 400,
    question: 'In the parable of the talents, how many talents did the master give to his servants in total?',
    answer: '8 talents (5 + 2 + 1)',
    used: false
  },

  // NEW TESTAMENT - MARK (100-400 points)
  {
    id: 73,
    category: 'Mark',
    testament: 'New',
    difficulty: 100,
    question: 'What was Jesus\' occupation before his ministry?',
    answer: 'Carpenter',
    used: false
  },
  {
    id: 74,
    category: 'Mark',
    testament: 'New',
    difficulty: 200,
    question: 'What did Jesus use to feed the 5,000?',
    answer: '5 loaves and 2 fish',
    used: false
  },
  {
    id: 75,
    category: 'Mark',
    testament: 'New',
    difficulty: 300,
    question: 'What happened to the fig tree that Jesus cursed?',
    answer: 'It withered',
    used: false
  },
  {
    id: 76,
    category: 'Mark',
    testament: 'New',
    difficulty: 400,
    question: 'What was the name of the man possessed by many demons whom Jesus healed?',
    answer: 'Legion',
    used: false
  },

  // NEW TESTAMENT - LUKE (100-400 points)
  {
    id: 77,
    category: 'Luke',
    testament: 'New',
    difficulty: 100,
    question: 'Who was Jesus\' mother?',
    answer: 'Mary',
    used: false
  },
  {
    id: 78,
    category: 'Luke',
    testament: 'New',
    difficulty: 200,
    question: 'In the parable of the Good Samaritan, who helped the injured man?',
    answer: 'A Samaritan',
    used: false
  },
  {
    id: 79,
    category: 'Luke',
    testament: 'New',
    difficulty: 300,
    question: 'Who were the first people to visit baby Jesus after his birth?',
    answer: 'Shepherds',
    used: false
  },
  {
    id: 80,
    category: 'Luke',
    testament: 'New',
    difficulty: 400,
    question: 'Who was the prophetess who recognized baby Jesus at the temple?',
    answer: 'Anna',
    used: false
  },

  // NEW TESTAMENT - JOHN (100-400 points)
  {
    id: 81,
    category: 'John',
    testament: 'New',
    difficulty: 100,
    question: 'Complete this verse: "For God so loved the world that he gave his..."',
    answer: 'one and only Son',
    used: false
  },
  {
    id: 82,
    category: 'John',
    testament: 'New',
    difficulty: 200,
    question: 'What was Jesus\' first miracle?',
    answer: 'Turning water into wine',
    used: false
  },
  {
    id: 83,
    category: 'John',
    testament: 'New',
    difficulty: 300,
    question: 'Complete this "I AM" statement: "I am the bread of..."',
    answer: 'life',
    used: false
  },
  {
    id: 84,
    category: 'John',
    testament: 'New',
    difficulty: 400,
    question: 'How many days was Lazarus dead before Jesus raised him?',
    answer: '4 days',
    used: false
  },

  // NEW TESTAMENT - ACTS (100-400 points)
  {
    id: 85,
    category: 'Acts',
    testament: 'New',
    difficulty: 100,
    question: 'Who wrote the book of Acts?',
    answer: 'Luke',
    used: false
  },
  {
    id: 86,
    category: 'Acts',
    testament: 'New',
    difficulty: 200,
    question: 'On what day did the Holy Spirit come upon the disciples?',
    answer: 'Pentecost',
    used: false
  },
  {
    id: 87,
    category: 'Acts',
    testament: 'New',
    difficulty: 300,
    question: 'What was Saul\'s name changed to after his conversion?',
    answer: 'Paul',
    used: false
  },
  {
    id: 88,
    category: 'Acts',
    testament: 'New',
    difficulty: 400,
    question: 'In what city did Paul and Silas get imprisoned and sing hymns?',
    answer: 'Philippi',
    used: false
  },

  // NEW TESTAMENT - ROMANS (100-400 points)
  {
    id: 89,
    category: 'Romans',
    testament: 'New',
    difficulty: 100,
    question: 'Who wrote the book of Romans?',
    answer: 'Paul',
    used: false
  },
  {
    id: 90,
    category: 'Romans',
    testament: 'New',
    difficulty: 200,
    question: 'According to Romans, what is the wages of sin?',
    answer: 'Death',
    used: false
  },
  {
    id: 91,
    category: 'Romans',
    testament: 'New',
    difficulty: 300,
    question: 'According to Romans 12, what should we offer our bodies as?',
    answer: 'A living sacrifice',
    used: false
  },
  {
    id: 92,
    category: 'Romans',
    testament: 'New',
    difficulty: 400,
    question: 'According to Romans, how does faith come?',
    answer: 'By hearing, and hearing by the word of God',
    used: false
  },

  // NEW TESTAMENT - 1 CORINTHIANS (100-400 points)
  {
    id: 93,
    category: '1 Corinthians',
    testament: 'New',
    difficulty: 100,
    question: 'What is the greatest of faith, hope, and love?',
    answer: 'Love',
    used: false
  },
  {
    id: 94,
    category: '1 Corinthians',
    testament: 'New',
    difficulty: 200,
    question: 'What does Paul say our bodies are temples of?',
    answer: 'The Holy Spirit',
    used: false
  },
  {
    id: 95,
    category: '1 Corinthians',
    testament: 'New',
    difficulty: 300,
    question: 'According to 1 Corinthians 15, what is the last enemy to be destroyed?',
    answer: 'Death',
    used: false
  },
  {
    id: 96,
    category: '1 Corinthians',
    testament: 'New',
    difficulty: 400,
    question: 'What does Paul say about the wisdom of this world?',
    answer: 'It is foolishness with God',
    used: false
  },

  // NEW TESTAMENT - EPHESIANS (100-400 points)
  {
    id: 97,
    category: 'Ephesians',
    testament: 'New',
    difficulty: 100,
    question: 'According to Ephesians, we are saved by grace through what?',
    answer: 'Faith',
    used: false
  },
  {
    id: 98,
    category: 'Ephesians',
    testament: 'New',
    difficulty: 200,
    question: 'What does Paul say we should put on as our armor?',
    answer: 'The armor of God',
    used: false
  },
  {
    id: 99,
    category: 'Ephesians',
    testament: 'New',
    difficulty: 300,
    question: 'According to Ephesians, what should we not let the sun go down on?',
    answer: 'Our anger',
    used: false
  },
  {
    id: 100,
    category: 'Ephesians',
    testament: 'New',
    difficulty: 400,
    question: 'According to Ephesians, what has God prepared for us to walk in?',
    answer: 'Good works',
    used: false
  },

  // NEW TESTAMENT - PHILIPPIANS (100-400 points)
  {
    id: 101,
    category: 'Philippians',
    testament: 'New',
    difficulty: 100,
    question: 'Complete this verse: "I can do all things through Christ who..."',
    answer: 'strengthens me',
    used: false
  },
  {
    id: 102,
    category: 'Philippians',
    testament: 'New',
    difficulty: 200,
    question: 'According to Philippians, what should we think about?',
    answer: 'Whatever is true, noble, right, pure, lovely, admirable',
    used: false
  },
  {
    id: 103,
    category: 'Philippians',
    testament: 'New',
    difficulty: 300,
    question: 'According to Philippians, what should we work out with fear and trembling?',
    answer: 'Our salvation',
    used: false
  },
  {
    id: 104,
    category: 'Philippians',
    testament: 'New',
    difficulty: 400,
    question: 'According to Philippians, what will God supply according to his riches?',
    answer: 'All our needs',
    used: false
  },

  // NEW TESTAMENT - HEBREWS (100-400 points)
  {
    id: 105,
    category: 'Hebrews',
    testament: 'New',
    difficulty: 100,
    question: 'According to Hebrews, what is faith?',
    answer: 'The substance of things hoped for, the evidence of things not seen',
    used: false
  },
  {
    id: 106,
    category: 'Hebrews',
    testament: 'New',
    difficulty: 200,
    question: 'According to Hebrews, what is sharper than any two-edged sword?',
    answer: 'The word of God',
    used: false
  },
  {
    id: 107,
    category: 'Hebrews',
    testament: 'New',
    difficulty: 300,
    question: 'In Hebrews 11, who offered Isaac as a sacrifice?',
    answer: 'Abraham',
    used: false
  },
  {
    id: 108,
    category: 'Hebrews',
    testament: 'New',
    difficulty: 400,
    question: 'What does Hebrews say about Jesus being the same?',
    answer: 'Jesus Christ is the same yesterday, today, and forever',
    used: false
  },

  // NEW TESTAMENT - JAMES (100-400 points)
  {
    id: 109,
    category: 'James',
    testament: 'New',
    difficulty: 100,
    question: 'What should we ask God for if we lack it?',
    answer: 'Wisdom',
    used: false
  },
  {
    id: 110,
    category: 'James',
    testament: 'New',
    difficulty: 200,
    question: 'What does James say about faith without works?',
    answer: 'It is dead',
    used: false
  },
  {
    id: 111,
    category: 'James',
    testament: 'New',
    difficulty: 300,
    question: 'What does James say about double-minded people?',
    answer: 'They are unstable in all their ways',
    used: false
  },
  {
    id: 112,
    category: 'James',
    testament: 'New',
    difficulty: 400,
    question: 'According to James, what should we do when we are sick?',
    answer: 'Call for the elders of the church to pray',
    used: false
  },

  // NEW TESTAMENT - 1 PETER (100-400 points)
  {
    id: 113,
    category: '1 Peter',
    testament: 'New',
    difficulty: 100,
    question: 'According to 1 Peter, what should we cast on God?',
    answer: 'All our anxiety',
    used: false
  },
  {
    id: 114,
    category: '1 Peter',
    testament: 'New',
    difficulty: 200,
    question: 'According to 1 Peter, what are we as believers?',
    answer: 'A chosen generation, a royal priesthood, a holy nation',
    used: false
  },
  {
    id: 115,
    category: '1 Peter',
    testament: 'New',
    difficulty: 300,
    question: 'According to 2 Peter, what is God not willing that any should do?',
    answer: 'Perish',
    used: false
  },
  {
    id: 116,
    category: '1 Peter',
    testament: 'New',
    difficulty: 400,
    question: 'According to 2 Peter, what will the heavens and earth be destroyed by?',
    answer: 'Fire',
    used: false
  },

  // NEW TESTAMENT - REVELATION (100-400 points)
  {
    id: 117,
    category: 'Revelation',
    testament: 'New',
    difficulty: 200,
    question: 'Who wrote the book of Revelation?',
    answer: 'John',
    used: false
  },
  {
    id: 118,
    category: 'Revelation',
    testament: 'New',
    difficulty: 300,
    question: 'According to Revelation, what is the number of the beast?',
    answer: '666',
    used: false
  },
  {
    id: 119,
    category: 'Revelation',
    testament: 'New',
    difficulty: 400,
    question: 'According to Revelation, what will there be no more of in the new heaven and earth?',
    answer: 'No more death, sorrow, crying, or pain',
    used: false
  },
  {
    id: 120,
    category: 'Revelation',
    testament: 'New',
    difficulty: 100,
    question: 'How many churches are mentioned in Revelation chapters 2-3?',
    answer: 'Seven churches',
    used: false
  }
];

// Normalize raw data to conform to `Question`
export const expandedQuestionBank: Question[] = rawExpandedQuestionBank.map((q) => {
  const difficultyLabel: Question['difficulty'] =
    q.difficulty === 100 ? 'Easy' :
    q.difficulty === 200 ? 'Medium' :
    q.difficulty === 300 ? 'Hard' : 'Expert';

  const testamentLabel: Question['testament'] =
    q.testament === 'Old' ? 'Old Testament' : 'New Testament';

  return {
    id: String(q.id),
    category: q.category,
    testament: testamentLabel,
    difficulty: difficultyLabel,
    points: q.difficulty,
    question: q.question,
    answer: q.answer,
    used: q.used,
  } satisfies Question;
});

// Helper function to get all unique categories
export const getAllCategories = (): string[] => {
  const categories = expandedQuestionBank.map(q => q.category);
  return [...new Set(categories)].sort();
};

// Helper function to get questions by testament
export const getQuestionsByTestament = (testament: 'Old Testament' | 'New Testament'): Question[] => {
  return expandedQuestionBank.filter(q => q.testament === testament);
};

// Helper function to get questions by category
export const getQuestionsByCategory = (category: string): Question[] => {
  return expandedQuestionBank.filter(q => q.category === category);
};

