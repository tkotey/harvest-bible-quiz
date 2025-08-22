'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useGameState } from '../hooks/useGameState';
import GameSetup from '../components/GameSetup';
import ScoreBoard from '../components/ScoreBoard';
import GameBoard from '../components/GameBoard';
import QuestionModal from '../components/QuestionModal';

export default function HarvestBibleQuiz() {
  const gameState = useGameState();

  const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false);

  const getCurrentPhase = () => {
    if (!gameState.gameStarted) return 'setup';
    if (gameState.currentQuestion) {
      // Open the question modal when there's a current question
      if (!isQuestionModalOpen) setIsQuestionModalOpen(true);
      return gameState.showAnswer ? 'answer' : 'question';
    }
    // Close the modal when there's no current question
    if (isQuestionModalOpen) setIsQuestionModalOpen(false);
    return 'playing';
  };
  
  // Adapter functions to convert between index-based and id-based team operations
  const handleRemoveTeam = (index: number) => {
    const teamId = gameState.teams[index]?.id;
    if (teamId) {
      gameState.removeTeam(teamId);
    }
  };
  
  const handleUpdateTeam = (index: number, name: string) => {
    const teamId = gameState.teams[index]?.id;
    if (teamId) {
      gameState.updateTeamName(teamId, name);
    }
  };

  const currentPhase = getCurrentPhase();

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-6xl text-amber-200 animate-pulse">🌾</div>
        <div className="absolute top-20 right-20 text-4xl text-orange-200 animate-bounce">🌽</div>
        <div className="absolute bottom-20 left-20 text-5xl text-yellow-200 animate-pulse">🌱</div>
        <div className="absolute bottom-10 right-10 text-3xl text-amber-200 animate-bounce">🍂</div>
      </div>

      {/* Header */}
      <header className="relative bg-gradient-to-r from-amber-700 via-orange-600 to-yellow-700 text-white shadow-2xl">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 py-8">
          {/* Admin Link - Top Right */}
          <div className="absolute top-4 right-6">
            <Link 
              href="/admin"
              className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-md hover:bg-white/30 transition-colors text-sm font-medium shadow-md"
            >
              Admin
            </Link>
          </div>
          
          {/* Centered Title */}
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-wide drop-shadow-lg">
              🌾 Harvest Bible Quiz 🌾
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90 drop-shadow mb-6">
              Reap the Rewards of Biblical Knowledge
            </p>
            
            <div className="mt-6 flex justify-center space-x-6">
              <div className="bg-white/20 px-5 py-2 rounded-full backdrop-blur-sm shadow-md hover:bg-white/25 transition-all">
                <span className="text-sm font-medium">🌱 Growing in Faith</span>
              </div>
              <div className="bg-white/20 px-5 py-2 rounded-full backdrop-blur-sm shadow-md hover:bg-white/25 transition-all">
                <span className="text-sm font-medium">📜 Through Knowledge</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative container mx-auto px-6 py-8">
        {currentPhase === 'setup' && (
          <div className="animate-fadeIn">
            <GameSetup
              teams={gameState.teams}
              onAddTeam={gameState.addTeam}
              onRemoveTeam={handleRemoveTeam}
              onUpdateTeam={handleUpdateTeam}
              onStartGame={gameState.startGame}
              timerDuration={gameState.timerDuration}
              onSetTimerDuration={gameState.setTimerDuration}
              defaultQuestionLimit={gameState.defaultQuestionLimit}
              onSetDefaultQuestionLimit={gameState.setDefaultQuestionLimit}
              onSetTeamQuestionLimit={gameState.setTeamQuestionLimit}
            />
          </div>
        )}

        {currentPhase === 'playing' && (
          <div className="animate-fadeIn space-y-8">
            <ScoreBoard
              teams={gameState.teams}
              currentTeamIndex={gameState.currentTeamIndex}
            />
            <GameBoard
              currentTeam={gameState.teams[gameState.currentTeamIndex]}
              selectedTestament={gameState.selectedTestament}
              selectedCategory={gameState.selectedCategory}
              selectedPoints={gameState.selectedPoints}
              onTestamentSelect={gameState.selectTestament}
              onPointsSelect={gameState.selectPoints}
              onResetGame={gameState.resetGame}
            />
          </div>
        )}

        {/* Question Modal */}
        {gameState.currentQuestion && (
          <>
            <div className="animate-fadeIn space-y-8">
              <ScoreBoard
                teams={gameState.teams}
                currentTeamIndex={gameState.currentTeamIndex}
              />
            </div>
            
            <QuestionModal
              isOpen={isQuestionModalOpen}
              onClose={() => {
                // Closing the modal should reset the game state to playing
                setIsQuestionModalOpen(false);
                // Do not call nextTurn here as it's already handled by awardPoints
                // This was causing teams to be skipped
              }}
              question={gameState.currentQuestion}
              showAnswer={gameState.showAnswer}
              selectedPoints={gameState.selectedPoints!}
              currentTeam={gameState.teams[gameState.currentTeamIndex]}
              onRevealAnswer={gameState.revealAnswer}
              onAwardPoints={gameState.awardPoints}
              timerDuration={gameState.timerDuration}
            />
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="relative mt-16 bg-gradient-to-r from-amber-700 via-orange-600 to-yellow-700 text-white py-8 shadow-inner">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 text-center max-w-3xl">
          <div className="mb-4">
            <span className="text-2xl">🌾</span>
          </div>
          <p className="text-xl font-medium mb-3 drop-shadow-sm">
            May your harvest of biblical wisdom be abundant!
          </p>
          <div className="h-px w-24 bg-white/30 mx-auto my-4"></div>
          <p className="text-sm opacity-90 font-light">
            Harvest Bible Quiz - Growing in Faith Through Knowledge
          </p>
        </div>
      </footer>
    </div>
  );
}

