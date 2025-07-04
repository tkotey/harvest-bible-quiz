'use client';

import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import Timer from './Timer';
import { Question, Team } from '../types';
import { playTimerEndSound } from '../utils/audioUtils';

interface QuestionModalProps {
  isOpen: boolean;
  onClose: () => void;
  question: Question | null;
  showAnswer: boolean;
  selectedPoints: number | null;
  currentTeam: Team | null;
  onRevealAnswer: () => void;
  onAwardPoints: (correct: boolean) => void;
  timerDuration?: number; // Added timer duration from global state
}

export default function QuestionModal({
  isOpen,
  onClose,
  question,
  showAnswer,
  selectedPoints,
  currentTeam,
  onRevealAnswer,
  onAwardPoints,
  timerDuration = 60, // Default 60 seconds if not provided
}: QuestionModalProps) {
  const [isTimerActive, setIsTimerActive] = useState(false);
  
  // Reset timer when modal closes
  useEffect(() => {
    // Only reset the timer when modal closes
    if (!isOpen) {
      setIsTimerActive(false);
    }
  }, [isOpen]);
  
  // Store the current time left when pausing
  const [pausedTimeLeft, setPausedTimeLeft] = useState<number | null>(null);
  
  // Pause timer when answer is revealed
  useEffect(() => {
    if (showAnswer && isTimerActive) {
      setIsTimerActive(false);
    }
  }, [showAnswer, isTimerActive])
  if (!question || !currentTeam || !selectedPoints) return null;

  const difficultyInfo = {
    100: { emoji: '🌱', label: 'Easy', color: 'from-green-500 to-emerald-600', bgColor: 'from-green-100 to-emerald-100', textColor: 'text-green-800' },
    200: { emoji: '🌾', label: 'Medium', color: 'from-yellow-500 to-amber-600', bgColor: 'from-yellow-100 to-amber-100', textColor: 'text-yellow-800' },
    300: { emoji: '🌽', label: 'Hard', color: 'from-orange-500 to-red-600', bgColor: 'from-orange-100 to-red-100', textColor: 'text-orange-800' },
  };

  const difficulty = difficultyInfo[selectedPoints as keyof typeof difficultyInfo];

  const handleAwardPoints = (correct: boolean) => {
    onAwardPoints(correct);
    onClose();
  };

  const handleTimerComplete = () => {
    // Play sound when timer completes
    playTimerEndSound();
    setIsTimerActive(false);
    
    // Auto-reveal answer when timer completes if not already revealed
    if (!showAnswer) {
      onRevealAnswer();
    }
  };

  const handleToggleTimer = () => {
    if (isTimerActive) {
      // If timer is active, pause it
      setIsTimerActive(false);
    } else {
      // If timer is paused, resume or start it
      setIsTimerActive(true);
    }
  };
  
  const handleStartTimer = () => {
    // Start the timer when the user clicks the Start button
    setIsTimerActive(true);
  };
  
  const handleResetTimer = () => {
    // Reset timer but keep it paused
    setIsTimerActive(false);
    setPausedTimeLeft(null); // Clear any saved paused time
    // Force the Timer component to reset its internal state
    setTimeout(() => {
      // This will force the Timer component to reset its timeLeft state
      // by triggering the useEffect that watches the duration prop
      setIsTimerActive(false);
    }, 0);
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="Scripture Challenge"
        size="xl"
      >
        <div className="animate-fadeIn">
        {/* Timer Component */}
        <div className="mb-6">
          <Timer
            isRunning={isTimerActive}
            onPause={() => {
              // Save current state when pausing
              setIsTimerActive(false);
            }}
            onResume={() => {
              // Resume from saved state
              setIsTimerActive(true);
            }}
            onReset={handleResetTimer}
            onComplete={handleTimerComplete}
            duration={timerDuration}
            className="border border-amber-200"
            key={`timer-${timerDuration}`} /* Remove isTimerActive from key to prevent re-render on pause/resume */
          />
          
          {/* Timer Start Button - only show if timer is not active and answer is not revealed */}
          {!isTimerActive && !showAnswer && (
            <div className="mt-3 text-center">
              <button
                onClick={handleStartTimer}
                className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-lg transition-all flex items-center justify-center gap-2 mx-auto">
                <span>▶️</span>
                <span>Start Timer</span>
              </button>
            </div>
          )}
        </div>
          
        {/* Question Meta Info */}
        <div className="flex flex-wrap justify-center items-center gap-4 text-lg mb-6">
          <span className="bg-gradient-to-r from-amber-100 to-orange-100 px-4 py-2 rounded-full border border-amber-300 font-semibold text-amber-800">
            📖 {question.category}
          </span>
          <span className={`bg-gradient-to-r ${difficulty.color} text-white px-4 py-2 rounded-full font-semibold shadow-lg`}>
            {difficulty.emoji} {difficulty.label} - {question.points} points
          </span>
          <span className="bg-gradient-to-r from-blue-100 to-indigo-100 px-4 py-2 rounded-full border border-blue-300 font-semibold text-blue-800">
            {question.testament} Testament
          </span>
        </div>

        {/* Current Team and Timer Controls */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 mb-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div
                className="w-6 h-6 rounded-full border-2 border-white shadow-lg"
                style={{ backgroundColor: currentTeam.color }}
              ></div>
              <h3 className="text-xl font-bold text-gray-800">
                {currentTeam.name}'s Turn
              </h3>
              <div className="bg-gray-100 px-3 py-1 rounded-full">
                <span className="text-gray-700 font-medium">
                  Current Score: {currentTeam.score}
                </span>
              </div>
            </div>
            
            {/* Timer status indicator */}
            <div className={`px-4 py-2 rounded-lg flex items-center gap-2 ${isTimerActive 
              ? 'bg-green-100 text-green-800' 
              : 'bg-amber-100 text-amber-800'}`}
            >
              <span>⏱️</span>
              <span>{isTimerActive ? 'Timer Running' : 'Timer Paused'}</span>
            </div>
          </div>
        </div>

        {/* Question */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4 animate-pulse">❓</div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed mb-6 bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-xl border border-amber-200 shadow-inner">
            {question.question}
          </h3>
          
          {!showAnswer && (
            <button
              onClick={onRevealAnswer}
              className="bg-gradient-to-r from-amber-500 to-yellow-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center justify-center gap-3">
                <span>🌾</span>
                <span>Reveal the Harvest</span>
                <span>🌾</span>
              </span>
            </button>
          )}
        </div>

        {/* Answer Section */}
        {showAnswer && (
          <div className="animate-fadeIn">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6 mb-8">
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">✅</div>
                <h4 className="text-xl font-bold text-green-800 mb-4">Answer:</h4>
              </div>
              <p className="text-lg text-green-700 text-center leading-relaxed font-medium">
                {question.answer}
              </p>
            </div>

            {/* Scoring Buttons */}
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Did {currentTeam.name} answer correctly?
              </h4>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => handleAwardPoints(true)}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center justify-center gap-3">
                    <span>✅</span>
                    <span>Correct! (+{selectedPoints} points)</span>
                    <span>🌾</span>
                  </span>
                </button>
                
                <button
                  onClick={() => handleAwardPoints(false)}
                  className="bg-gradient-to-r from-red-500 to-pink-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center justify-center gap-3">
                    <span>❌</span>
                    <span>Incorrect (No points)</span>
                    <span>🌾</span>
                  </span>
                </button>
              </div>
              
              <p className="text-sm text-gray-600 mt-4">
                Click the appropriate button to award points and continue to the next team
              </p>
            </div>
          </div>
        )}
      </div>
    </Modal>

    {/* Timer is now integrated directly in the question modal */}
    </>
  );
}
