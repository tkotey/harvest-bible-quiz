'use client';

import React, { useEffect, useState } from 'react';
import { Team } from '../types';
import { getTestamentQuestionCount } from '../data/questions';
import DifficultyModal from './DifficultyModal';

interface GameBoardProps {
  currentTeam: Team;
  selectedTestament: 'Old' | 'New' | null;
  selectedCategory: string | null;
  selectedPoints: number | null;
  onTestamentSelect: (testament: 'Old' | 'New') => void;
  onCategorySelect: (category: string) => void;
  onPointsSelect: (points: number) => void;
  onResetGame: () => void;
}

export default function GameBoard({
  currentTeam,
  selectedTestament,
  selectedCategory,
  selectedPoints,
  onTestamentSelect,
  onCategorySelect,
  onPointsSelect,
  onResetGame,
}: GameBoardProps) {
  // No longer need categories with modal-based UI
  const pointValues = [100, 200, 300];
  const [oldTestamentCount, setOldTestamentCount] = useState<number>(0);
  const [newTestamentCount, setNewTestamentCount] = useState<number>(0);
  const [isDifficultyModalOpen, setIsDifficultyModalOpen] = useState(false);

  useEffect(() => {
    // Count questions in each testament
    setOldTestamentCount(getTestamentQuestionCount('Old Testament'));
    setNewTestamentCount(getTestamentQuestionCount('New Testament'));
  }, []);

  const difficultyInfo = {
    100: { emoji: '🌱', label: 'Easy', color: 'from-green-400 to-emerald-500', bgColor: 'from-green-100 to-emerald-100', textColor: 'text-green-800' },
    200: { emoji: '🌾', label: 'Medium', color: 'from-yellow-400 to-amber-500', bgColor: 'from-yellow-100 to-amber-100', textColor: 'text-yellow-800' },
    300: { emoji: '🌽', label: 'Hard', color: 'from-orange-400 to-red-500', bgColor: 'from-orange-100 to-red-100', textColor: 'text-orange-800' },
    400: { emoji: '🍂', label: 'Expert', color: 'from-purple-400 to-pink-500', bgColor: 'from-purple-100 to-pink-100', textColor: 'text-purple-800' },
  };

  const handleTestamentSelect = (testament: 'Old' | 'New') => {
    onTestamentSelect(testament);
    setIsDifficultyModalOpen(true);
  };

  return (
    <div className="max-w-6xl mx-auto animate-fadeIn">
      {/* Header Section */}
      <div className="harvest-card p-6 mb-8 text-center">
        <div className="mb-4">
          <h2 className="text-responsive-xl font-bold text-amber-800 mb-3">
            {currentTeam.name}, Choose Your Harvest!
          </h2>
          <p className="text-lg text-gray-700">
            Select a biblical category and difficulty level to reap your reward
          </p>
        </div>
        
        {/* Reset Button */}
        <div className="flex justify-center">
          <button
            onClick={onResetGame}
            className="bg-gradient-to-r from-gray-400 to-gray-500 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 no-print"
          >
            🔄 Reset Harvest
          </button>
        </div>
      </div>

      {/* Testament Selection */}
      <div className="harvest-card p-8 mb-8">
        <h3 className="text-responsive-lg font-bold text-amber-800 mb-6 text-center">
          📖 Choose Your Testament 📖
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 max-w-2xl mx-auto">
          <button
            onClick={() => handleTestamentSelect('Old')}
            className={`p-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-slideIn ${
              selectedTestament === 'Old'
                ? 'bg-gradient-to-r from-amber-400 to-orange-400 text-white shadow-xl ring-4 ring-amber-200'
                : 'bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 hover:from-amber-200 hover:to-orange-200 border-2 border-amber-200'
            }`}
          >
            <div className="text-4xl mb-3">📜</div>
            <div className="text-xl font-bold mb-2">Old Testament</div>
            <div className="text-sm opacity-80">Genesis to Malachi</div>
            <div className="text-sm mt-2 bg-amber-100 rounded-full px-3 py-1 inline-block">{oldTestamentCount} Questions</div>
          </button>
          
          <button
            onClick={() => handleTestamentSelect('New')}
            className={`p-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-slideIn ${
              selectedTestament === 'New'
                ? 'bg-gradient-to-r from-blue-400 to-indigo-400 text-white shadow-xl ring-4 ring-blue-200'
                : 'bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 hover:from-blue-200 hover:to-indigo-200 border-2 border-blue-200'
            }`}
          >
            <div className="text-4xl mb-3">✝️</div>
            <div className="text-xl font-bold mb-2">New Testament</div>
            <div className="text-sm opacity-80">Matthew to Revelation</div>
            <div className="text-sm mt-2 bg-blue-100 rounded-full px-3 py-1 inline-block">{newTestamentCount} Questions</div>
          </button>
        </div>

        {selectedTestament && (
          <div className="text-center animate-scaleIn">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-violet-100 px-4 py-2 rounded-full border border-purple-300">
              <span className="text-purple-800 font-medium">
                {selectedTestament === 'Old' ? '📜' : '✝️'} Selected: {selectedTestament} Testament
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Difficulty Selection Modal */}
      <DifficultyModal
        isOpen={isDifficultyModalOpen}
        onClose={() => setIsDifficultyModalOpen(false)}
        onSelectDifficulty={onPointsSelect}
      />

      {/* Instructions */}
      <div className="harvest-card p-6">
        <h4 className="text-lg font-bold text-amber-800 mb-4 text-center">
          📖 Harvest Instructions 📖
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center max-w-3xl mx-auto">
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <div className="text-2xl mb-2">🌱</div>
            <h5 className="font-semibold text-green-800 mb-2">Easy (100 points):</h5>
            <p className="text-sm text-green-700">Basic biblical knowledge</p>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <div className="text-2xl mb-2">🌾</div>
            <h5 className="font-semibold text-yellow-800 mb-2">Medium (200 points):</h5>
            <p className="text-sm text-yellow-700">Intermediate understanding</p>
          </div>
          
          <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
            <div className="text-2xl mb-2">🌽</div>
            <h5 className="font-semibold text-orange-800 mb-2">Hard (300 points):</h5>
            <p className="text-sm text-orange-700">Detailed biblical knowledge</p>
          </div>
          
          {/* Expert level removed as requested */}
        </div>
        
        <div className="mt-6 text-center text-amber-700">
          <p className="font-medium">
            Choose wisely - higher points mean more challenging questions, but greater rewards!
          </p>
          <p className="text-sm mt-2 text-amber-600">
            🌾 May your harvest of biblical wisdom be abundant! 🌾
          </p>
        </div>
      </div>
    </div>
  );
}

