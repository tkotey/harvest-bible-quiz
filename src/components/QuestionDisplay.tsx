'use client';

import React from 'react';
import { Question, Team } from '../types';

interface QuestionDisplayProps {
  question: Question;
  showAnswer: boolean;
  selectedPoints: number;
  teams: Team[];
  currentTeamIndex: number;
  onRevealAnswer: () => void;
  onAwardPoints: (correct: boolean) => void;
  onNextTurn: () => void;
}

export default function QuestionDisplay({
  question,
  showAnswer,
  selectedPoints,
  teams,
  currentTeamIndex,
  onRevealAnswer,
  onAwardPoints,
}: QuestionDisplayProps) {
  const currentTeam = teams[currentTeamIndex];
  
  const difficultyInfo = {
    100: { emoji: '🌱', label: 'Easy', color: 'from-green-500 to-emerald-600', bgColor: 'from-green-100 to-emerald-100', textColor: 'text-green-800' },
    200: { emoji: '🌾', label: 'Medium', color: 'from-yellow-500 to-amber-600', bgColor: 'from-yellow-100 to-amber-100', textColor: 'text-yellow-800' },
    300: { emoji: '🌽', label: 'Hard', color: 'from-orange-500 to-red-600', bgColor: 'from-orange-100 to-red-100', textColor: 'text-orange-800' },
    400: { emoji: '🍂', label: 'Expert', color: 'from-purple-500 to-pink-600', bgColor: 'from-purple-100 to-pink-100', textColor: 'text-purple-800' },
  };

  const difficulty = difficultyInfo[selectedPoints as keyof typeof difficultyInfo];

  return (
    <div className="max-w-4xl mx-auto animate-fadeIn">
      {/* Question Header */}
      <div className="harvest-card p-8 mb-8">
        <div className="text-center mb-6">
          <h2 className="text-responsive-xl font-bold text-amber-800 mb-4">
            📖 Scripture Challenge 📖
          </h2>
          
          {/* Question Meta Info */}
          <div className="flex flex-wrap justify-center items-center gap-4 text-lg">
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
        </div>
      </div>

      {/* Current Team */}
      <div className="harvest-card p-6 mb-8 text-center">
        <div className="flex items-center justify-center gap-4">
          <div
            className="w-6 h-6 rounded-full border-2 border-white shadow-lg"
            style={{ backgroundColor: currentTeam.color }}
          ></div>
          <h3 className="text-xl font-bold text-gray-800">
            {currentTeam.name}&apos;s Turn
          </h3>
          <div className="bg-gray-100 px-3 py-1 rounded-full">
            <span className="text-gray-700 font-medium">
              Current Score: {currentTeam.score}
            </span>
          </div>
        </div>
      </div>

      {/* Question Card */}
      <div className="harvest-card p-8 mb-8">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">❓</div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed mb-6">
            {question.question}
          </h3>
          
          {!showAnswer && (
            <button
              onClick={onRevealAnswer}
              className="harvest-button text-xl px-8 py-4"
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
                  onClick={() => onAwardPoints(true)}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center justify-center gap-3">
                    <span>✅</span>
                    <span>Correct! (+{selectedPoints} points)</span>
                    <span>🌾</span>
                  </span>
                </button>
                
                <button
                  onClick={() => onAwardPoints(false)}
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

      {/* Educational Note */}
      <div className="harvest-card p-6 text-center">
        <h4 className="text-lg font-semibold text-amber-800 mb-3">
          📚 Learning Opportunity 📚
        </h4>
        <p className="text-gray-700 leading-relaxed">
          Take a moment to discuss this question and answer with your group. 
          Bible study is not just about getting the right answer, but about growing in understanding together!
        </p>
        <div className="mt-4 text-amber-600 font-medium">
          🌾 May your harvest of biblical wisdom be abundant! 🌾
        </div>
      </div>
    </div>
  );
}

