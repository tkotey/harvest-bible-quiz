'use client';

import React from 'react';
import Modal from './Modal';

interface DifficultyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDifficulty: (points: number) => void;
}

export default function DifficultyModal({
  isOpen,
  onClose,
  onSelectDifficulty
}: DifficultyModalProps) {
  const difficulties = [
    { points: 100, label: 'Easy', emoji: '🌱', color: 'from-green-500 to-emerald-600' },
    { points: 200, label: 'Medium', emoji: '🌾', color: 'from-yellow-500 to-amber-600' },
    { points: 300, label: 'Hard', emoji: '🌽', color: 'from-orange-500 to-red-600' },
  ];

  const handleSelectDifficulty = (points: number) => {
    onSelectDifficulty(points);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Choose Your Harvest Difficulty"
      size="lg"
    >
      <div className="text-center mb-6">
        <div className="text-5xl mb-4 animate-bounce">🌾</div>
        <p className="text-gray-700 mb-6 bg-amber-50 p-4 rounded-lg border border-amber-200 inline-block">
          Select the difficulty level for your Bible knowledge challenge:
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-4 max-w-3xl mx-auto">
          {difficulties.map((difficulty) => (
            <button
              key={difficulty.points}
              onClick={() => handleSelectDifficulty(difficulty.points)}
              className={`bg-gradient-to-r ${difficulty.color} text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:rotate-1 flex flex-col items-center justify-center border-2 border-white/30`}
            >
              <span className="text-4xl mb-2">{difficulty.emoji}</span>
              <span className="text-xl font-bold">{difficulty.label}</span>
              <span className="mt-2 bg-white/20 px-3 py-1 rounded-full text-sm">
                {difficulty.points} Points
              </span>
            </button>
          ))}
        </div>
      </div>
      
      <div className="text-center text-gray-500 text-sm mt-4">
        <p>Higher difficulty questions are worth more points!</p>
      </div>
    </Modal>
  );
}
