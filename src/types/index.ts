export interface Question {
  id: string;
  category: string;
  testament: 'Old Testament' | 'New Testament';
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Expert';
  points: number;
  question: string;
  answer: string;
  used?: boolean;
}

export interface Team {
  id: string;
  name: string;
  score: number;
  color: string;
  questionsAnswered: number;
  questionLimit: number;
}

export interface GameState {
  teams: Team[];
  currentTeamIndex: number;
  currentQuestion: Question | null;
  gameStarted: boolean;
  showAnswer: boolean;
  selectedPoints: number | null;
  selectedCategory: string | null;
  selectedTestament: 'Old' | 'New' | null;
  timerDuration: number;
  defaultQuestionLimit: number;
}

export type GamePhase = 'setup' | 'playing' | 'question' | 'answer';

export interface GameActions {
  addTeam: (name: string) => void;
  removeTeam: (teamId: string) => void;
  updateTeamName: (teamId: string, name: string) => void;
  updateTeam: (teamId: string, name: string) => void;
  startGame: () => void;
  selectTestament: (testament: 'Old' | 'New') => void;
  selectCategory: (category: string) => void;
  selectPoints: (points: number) => void;
  selectQuestion: (points: number, category: string) => void;
  revealAnswer: () => void;
  awardPoints: (correct: boolean) => void;
  nextTurn: () => void;
  resetGame: () => void;
  setTimerDuration: (seconds: number) => void;
  setDefaultQuestionLimit: (limit: number) => void;
  setTeamQuestionLimit: (teamId: string, limit: number) => void;
}

