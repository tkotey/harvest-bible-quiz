import { useState, useCallback } from 'react';
import { Team, Question, GameState, GameActions } from '../types';
import { questionBank } from '../data/questions';
import { getRandomQuestion } from '../utils/gameUtils';

// Predefined team colors for visual distinction
const TEAM_COLORS = [
  '#FF6B6B', // Red
  '#4ECDC4', // Teal
  '#45B7D1', // Blue
  '#96CEB4', // Green
  '#FFEAA7', // Yellow
  '#DDA0DD', // Plum
  '#98D8C8', // Mint
  '#F7DC6F', // Light Yellow
  '#BB8FCE', // Light Purple
  '#85C1E9', // Light Blue
  '#F8C471', // Orange
  '#82E0AA', // Light Green
];

// Using interfaces from types/index.ts

const initialGameState: GameState = {
  teams: [],
  currentTeamIndex: 0,
  currentQuestion: null,
  gameStarted: false,
  showAnswer: false,
  selectedPoints: null,
  selectedCategory: null,
  selectedTestament: null,
  timerDuration: 60, // Default 60 seconds
  defaultQuestionLimit: 5, // Default number of questions per team
};

// Using interfaces from types/index.ts

export const useGameState = (): GameState & GameActions => {
  const [gameState, setGameState] = useState<GameState>(initialGameState);

  const addTeam = useCallback((name: string) => {
    if (name.trim() === '') return;
    
    setGameState(prev => {
      const newTeam: Team = {
        id: `team-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        name: name.trim(),
        score: 0,
        color: TEAM_COLORS[prev.teams.length % TEAM_COLORS.length],
        questionsAnswered: 0,
        questionLimit: prev.defaultQuestionLimit,
      };
      
      return {
        ...prev,
        teams: [...prev.teams, newTeam],
      };
    });
  }, []);

  const removeTeam = useCallback((teamId: string) => {
    setGameState(prev => {
      const newTeams = prev.teams.filter(team => team.id !== teamId);
      let newCurrentTeamIndex = prev.currentTeamIndex;
      
      // Adjust current team index if necessary
      if (newCurrentTeamIndex >= newTeams.length && newTeams.length > 0) {
        newCurrentTeamIndex = 0;
      }
      
      return {
        ...prev,
        teams: newTeams,
        currentTeamIndex: newCurrentTeamIndex,
      };
    });
  }, []);

  const updateTeamName = useCallback((teamId: string, name: string) => {
    if (name.trim() === '') return;
    
    setGameState(prev => ({
      ...prev,
      teams: prev.teams.map(team =>
        team.id === teamId ? { ...team, name: name.trim() } : team
      ),
    }));
  }, []);

  const startGame = useCallback(() => {
    if (gameState.teams.length < 2) return;
    
    setGameState(prev => ({
      ...prev,
      gameStarted: true,
      currentTeamIndex: 0,
    }));
  }, [gameState.teams.length]);

  const selectTestament = useCallback((testament: 'Old' | 'New') => {
    // When selecting a testament, automatically set a default category
    // This allows skipping the category selection step
    setGameState(prev => ({
      ...prev,
      selectedTestament: testament,
      selectedCategory: 'Bible', // Set a default category
      selectedPoints: null,
    }));
  }, []);

  const selectCategory = useCallback((category: string) => {
    setGameState(prev => ({
      ...prev,
      selectedCategory: category,
      selectedPoints: null,
    }));
  }, []);

  const selectPoints = useCallback((points: number) => {
    if (!gameState.selectedTestament) return;
    
    // Map numeric points to difficulty string and testament to full name
    const difficultyMap: Record<number, string> = {
      100: 'Easy',
      200: 'Medium',
      300: 'Hard',
      400: 'Expert'
    };
    
    const testamentMap: Record<string, string> = {
      'Old': 'Old Testament',
      'New': 'New Testament'
    };
    
    // Filter questions by testament and difficulty only (category is skipped)
    const filteredQuestions = questionBank.filter(
      q => q.points === points && 
           q.testament === testamentMap[gameState.selectedTestament as 'Old' | 'New'] &&
           (q.used === undefined || q.used === false)
    );
    
    console.log('Filtered questions:', filteredQuestions.length, 'for testament:', testamentMap[gameState.selectedTestament!], 'and points:', points);
    
    const question = getRandomQuestion(filteredQuestions);
    if (!question) {
      console.log('No question found');
      return;
    }

    setGameState(prev => ({
      ...prev,
      currentQuestion: question,
      selectedPoints: points,
      showAnswer: false,
    }));
  }, [gameState.selectedTestament]);

  const selectQuestion = useCallback((points: number, category: string) => {
    // Map numeric points to difficulty string and testament to full name
    const testamentMap: Record<string, string> = {
      'Old': 'Old Testament',
      'New': 'New Testament'
    };
    
    // Filter questions by testament and difficulty (category is now optional)
    const filteredQuestions = questionBank.filter(
      q => (category ? q.category === category : true) && 
           q.points === points && 
           (gameState.selectedTestament ? q.testament === testamentMap[gameState.selectedTestament as 'Old' | 'New'] : true) && 
           (q.used === undefined || q.used === false)
    );
    
    const question = getRandomQuestion(filteredQuestions);
    if (!question) return;

    setGameState(prev => ({
      ...prev,
      currentQuestion: question,
      selectedPoints: points,
      selectedCategory: category || prev.selectedCategory,
      showAnswer: false,
    }));
  }, [gameState.selectedTestament]);

  const revealAnswer = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      showAnswer: true,
    }));
  }, []);

  const awardPoints = useCallback((correct: boolean) => {
    setGameState(prev => {
      // Make sure we have valid data
      if (!prev.teams.length || prev.currentTeamIndex >= prev.teams.length || !prev.currentQuestion) {
        console.error('Invalid state in awardPoints:', { teams: prev.teams.length, currentTeamIndex: prev.currentTeamIndex, hasQuestion: !!prev.currentQuestion });
        return prev;
      }

      const currentTeam = prev.teams[prev.currentTeamIndex];
      const pointsToAdd = correct ? prev.selectedPoints || 0 : 0;
      const nextTeamIndex = (prev.currentTeamIndex + 1) % prev.teams.length;
      
      console.log(
        `Awarding ${pointsToAdd} points to team ${currentTeam.name} (${currentTeam.id}). ` +
        `Current score: ${currentTeam.score}, New score will be: ${currentTeam.score + pointsToAdd}. ` +
        `Questions answered: ${currentTeam.questionsAnswered + 1}/${currentTeam.questionLimit}`
      );
      
      // Mark the current question as used to prevent reuse
      if (prev.currentQuestion) {
        const questionId = prev.currentQuestion.id;
        // Find the question in the question bank and mark it as used
        questionBank.forEach(q => {
          if (q.id === questionId) {
            q.used = true;
          }
        });
      }
      
      // Create updated teams array with the new score and increment questions answered
      const updatedTeams = prev.teams.map(team => {
        if (team.id === currentTeam.id) {
          return { 
            ...team, 
            score: team.score + pointsToAdd,
            questionsAnswered: team.questionsAnswered + 1 
          };
        }
        return team;
      });
      
      // Find the next team that hasn't reached their question limit
      let nextValidTeamIndex = nextTeamIndex;
      let loopCount = 0;
      
      // Check if all teams have reached their question limit
      const allTeamsFinished = updatedTeams.every(team => team.questionsAnswered >= team.questionLimit);
      
      if (!allTeamsFinished) {
        // Find the next team that still has questions remaining
        while (loopCount < updatedTeams.length) {
          const nextTeam = updatedTeams[nextValidTeamIndex];
          if (nextTeam.questionsAnswered < nextTeam.questionLimit) {
            break;
          }
          nextValidTeamIndex = (nextValidTeamIndex + 1) % updatedTeams.length;
          loopCount++;
        }
      }
      
      return {
        ...prev,
        teams: updatedTeams,
        // Advance to the next valid team
        currentTeamIndex: nextValidTeamIndex,
        currentQuestion: null,
        showAnswer: false,
        selectedPoints: null,
        selectedCategory: null,
        // Keep the selected testament for the next team
      };
    });
  }, []);

  const nextTurn = useCallback(() => {
    setGameState(prev => {
      const nextTeamIndex = (prev.currentTeamIndex + 1) % prev.teams.length;
      
      return {
        ...prev,
        currentTeamIndex: nextTeamIndex,
        currentQuestion: null,
        showAnswer: false,
        selectedPoints: null,
        selectedCategory: null,
        // Keep the selected testament for the next team
      };
    });
  }, []);

  const resetGame = useCallback(() => {
    setGameState(prev => ({
      ...initialGameState,
      teams: prev.teams.map(team => ({ 
        ...team, 
        score: 0,
        questionsAnswered: 0 
      })),
    }));
  }, []);

  const setTimerDuration = useCallback((seconds: number) => {
    setGameState(prev => ({
      ...prev,
      timerDuration: seconds
    }));
  }, []);

  const setDefaultQuestionLimit = useCallback((limit: number) => {
    if (limit < 1) return; // Ensure limit is at least 1
    
    setGameState(prev => ({
      ...prev,
      defaultQuestionLimit: limit,
      // Update all teams that haven't started answering questions yet
      teams: prev.teams.map(team => {
        if (team.questionsAnswered === 0) {
          return { ...team, questionLimit: limit };
        }
        return team;
      })
    }));
  }, []);

  const setTeamQuestionLimit = useCallback((teamId: string, limit: number) => {
    if (limit < 1) return; // Ensure limit is at least 1
    
    setGameState(prev => ({
      ...prev,
      teams: prev.teams.map(team => {
        if (team.id === teamId) {
          return { ...team, questionLimit: limit };
        }
        return team;
      })
    }));
  }, []);

  return {
    ...gameState,
    addTeam,
    removeTeam,
    updateTeam: updateTeamName,
    updateTeamName,
    startGame,
    selectTestament,
    selectCategory,
    selectPoints,
    selectQuestion,
    revealAnswer,
    awardPoints,
    nextTurn,
    resetGame,
    setTimerDuration,
    setDefaultQuestionLimit,
    setTeamQuestionLimit,
  };
};
