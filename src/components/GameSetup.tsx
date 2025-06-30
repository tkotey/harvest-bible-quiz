'use client';

import React, { useState } from 'react';
import { Team } from '../types';

interface GameSetupProps {
  teams: Team[];
  onAddTeam: (name: string) => void;
  onRemoveTeam: (index: number) => void;
  onUpdateTeam: (index: number, name: string) => void;
  onStartGame: () => void;
  timerDuration: number;
  onSetTimerDuration: (seconds: number) => void;
  defaultQuestionLimit: number;
  onSetDefaultQuestionLimit: (limit: number) => void;
  onSetTeamQuestionLimit: (teamId: string, limit: number) => void;
}

export default function GameSetup({
  teams,
  onAddTeam,
  onRemoveTeam,
  onUpdateTeam,
  onStartGame,
  timerDuration,
  onSetTimerDuration,
  defaultQuestionLimit,
  onSetDefaultQuestionLimit,
  onSetTeamQuestionLimit,
}: GameSetupProps) {
  const [newTeamName, setNewTeamName] = useState('');

  const handleAddTeam = () => {
    if (newTeamName.trim()) {
      onAddTeam(newTeamName.trim());
      setNewTeamName('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddTeam();
    }
  };

  return (
    <div className="max-w-4xl mx-auto animate-fadeIn">
      {/* Welcome Section */}
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-amber-800 mb-4 drop-shadow-sm">
            🌾 Prepare for the Harvest! 🌾
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Gather your teams and prepare to reap the rewards of biblical knowledge. Add
            teams below and begin your journey through the scriptures!
          </p>
        </div>

        {/* How to Play Preview */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-6 max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-4 rounded-lg border-2 border-green-200 transform hover:scale-105 transition-all duration-300">
            <div className="text-2xl mb-2">🌱</div>
            <h3 className="font-semibold text-green-800 mb-1">Easy</h3>
            <p className="text-sm text-green-700">100 points</p>
          </div>
          
          <div className="bg-gradient-to-br from-yellow-100 to-amber-100 p-4 rounded-lg border-2 border-yellow-200 transform hover:scale-105 transition-all duration-300">
            <div className="text-2xl mb-2">🌾</div>
            <h3 className="font-semibold text-yellow-800 mb-1">Medium</h3>
            <p className="text-sm text-yellow-700">200 points</p>
          </div>
          
          <div className="bg-gradient-to-br from-orange-100 to-red-100 p-4 rounded-lg border-2 border-orange-200 transform hover:scale-105 transition-all duration-300">
            <div className="text-2xl mb-2">🌽</div>
            <h3 className="font-semibold text-orange-800 mb-1">Hard</h3>
            <p className="text-sm text-orange-700">300 points</p>
          </div>
          

        </div>
      </div>

      {/* Team Setup Section */}
      <div className="harvest-card p-8 mb-8">
        <h3 className="text-responsive-lg font-bold text-amber-800 mb-6 text-center">
          🌾 Harvest Teams 🌾
        </h3>

        {/* Add Team Form */}
        <div className="mb-10">
          <h4 className="text-lg font-semibold text-amber-700 mb-4 text-center">
            Add Your Harvest Teams:
          </h4>
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-md border border-amber-100 max-w-lg mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
              <div className="w-full md:w-auto flex-grow">
                <input
                  type="text"
                  value={newTeamName}
                  onChange={(e) => setNewTeamName(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Enter team name..."
                  className="w-full px-4 py-3 rounded-lg border-2 border-amber-200 focus:border-amber-500 focus:outline-none transition-all duration-300 shadow-inner"
                />
              </div>
              <button
                onClick={handleAddTeam}
                disabled={!newTeamName.trim()}
                className="harvest-button disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-md"
              >
                <span className="flex items-center justify-center gap-2">
                  <span>➕</span>
                  <span>Add Team</span>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Teams List */}
        {teams.length > 0 && (
          <div className="mb-10">
            <h4 className="text-lg font-semibold text-amber-700 mb-4 text-center">
              Teams Ready for Harvest:
            </h4>
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10 max-w-3xl mx-auto">
                {teams.map((team, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-white to-amber-50 p-5 rounded-xl border border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300 animate-slideIn"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-6 h-6 rounded-full border-2 border-white shadow-md"
                          style={{ backgroundColor: team.color }}
                        ></div>
                        <input
                          type="text"
                          value={team.name}
                          onChange={(e) => onUpdateTeam(index, e.target.value)}
                          className="font-semibold text-gray-800 bg-transparent border-none focus:outline-none focus:bg-white focus:px-3 focus:py-1 focus:rounded-lg transition-all duration-300 text-lg"
                        />
                      </div>
                      <button
                        onClick={() => onRemoveTeam(index)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-full transition-all duration-300"
                        title="Remove team"
                      >
                        ❌
                      </button>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <div className="text-sm font-medium text-gray-600 bg-white/50 py-1 px-3 rounded-full inline-block">
                        Score: {team.score} points
                      </div>
                      <div className="text-sm font-medium text-blue-600 bg-blue-50 py-1 px-3 rounded-full inline-flex items-center gap-2">
                        <span>Questions:</span>
                        <select 
                          value={team.questionLimit}
                          onChange={(e) => onSetTeamQuestionLimit(team.id, parseInt(e.target.value))}
                          className="bg-transparent border-none focus:outline-none focus:bg-white rounded-md text-blue-700 font-semibold"
                        >
                          {[3, 5, 7, 10, 15].map(limit => (
                            <option key={limit} value={limit}>{limit}</option>
                          ))}
                        </select>
                      </div>
                      <div className="text-sm font-medium text-green-600 bg-green-50 py-1 px-3 rounded-full inline-block">
                        Answered: {team.questionsAnswered}/{team.questionLimit}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Minimum Teams Notice */}
        {teams.length < 2 && (
          <div className="text-center p-4 bg-amber-50 border-2 border-amber-200 rounded-lg mb-6">
            <p className="text-amber-800 font-medium">
              🌾 Add at least 2 teams to begin the harvest! 🌾
            </p>
            <p className="text-sm text-amber-600 mt-1">
              Teams take turns selecting categories and difficulty levels
            </p>
          </div>
        )}

        {/* Timer Settings */}
        {teams.length >= 2 && (
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-amber-700 mb-4 text-center">
              ⏱️ Question Timer Settings
            </h4>
            <div className="bg-amber-50 p-4 rounded-lg border-2 border-amber-200 max-w-md mx-auto">
              <p className="text-amber-800 mb-3 text-center">
                Set the time allowed for each question:
              </p>
              <div className="grid grid-cols-3 gap-3 mb-2">
                {[30, 60, 90].map((seconds) => (
                  <button
                    key={seconds}
                    onClick={() => onSetTimerDuration(seconds)}
                    className={`py-2 rounded-lg transition-all ${timerDuration === seconds
                      ? 'bg-amber-500 text-white font-medium'
                      : 'bg-amber-100 hover:bg-amber-200 text-amber-800'
                    }`}
                  >
                    {seconds} sec
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[120, 180].map((seconds) => (
                  <button
                    key={seconds}
                    onClick={() => onSetTimerDuration(seconds)}
                    className={`py-2 rounded-lg transition-all ${timerDuration === seconds
                      ? 'bg-amber-500 text-white font-medium'
                      : 'bg-amber-100 hover:bg-amber-200 text-amber-800'
                    }`}
                  >
                    {seconds / 60} min
                  </button>
                ))}
              </div>
              <p className="text-xs text-amber-600 mt-3 text-center">
                Timer will automatically start when a difficulty is selected
              </p>
            </div>
          </div>
        )}
        
        {/* Question Limit Settings */}
        {teams.length >= 2 && (
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-amber-700 mb-4 text-center">
              🔢 Question Limit Settings
            </h4>
            <div className="bg-amber-50 p-4 rounded-lg border-2 border-amber-200 max-w-md mx-auto">
              <p className="text-amber-800 mb-3 text-center">
                Set the default number of questions each team can answer:
              </p>
              <div className="grid grid-cols-5 gap-3 mb-4">
                {[3, 5, 7, 10, 15].map((limit) => (
                  <button
                    key={limit}
                    onClick={() => onSetDefaultQuestionLimit(limit)}
                    className={`py-2 rounded-lg transition-all ${defaultQuestionLimit === limit
                      ? 'bg-amber-500 text-white font-medium'
                      : 'bg-amber-100 hover:bg-amber-200 text-amber-800'
                    }`}
                  >
                    {limit}
                  </button>
                ))}
              </div>
              <p className="text-xs text-amber-600 mt-1 mb-3 text-center">
                This limit applies to all teams by default
              </p>
            </div>
          </div>
        )}

        {/* Start Game Button */}
        {teams.length >= 2 && (
          <div className="text-center animate-scaleIn">
            <button
              onClick={onStartGame}
              className="harvest-button text-xl px-12 py-4 text-white font-bold shadow-2xl"
            >
              <span className="flex items-center justify-center gap-3">
                <span>🌾</span>
                <span>Begin the Harvest!</span>
                <span>🌾</span>
              </span>
            </button>
            <p className="text-sm text-amber-600 mt-3">
              Ready to test your biblical knowledge!
            </p>
          </div>
        )}
      </div>

      {/* Instructions */}
      <div className="harvest-card p-6 text-center">
        <h4 className="text-lg font-semibold text-amber-800 mb-3">
          📖 How to Play 📖
        </h4>
        <div className="text-sm text-gray-700 space-y-2 max-w-2xl mx-auto">
          <p>🔄 Teams take turns selecting biblical categories and difficulty levels</p>
          <p>🎯 Higher points mean more challenging questions, but greater rewards!</p>
          <p>📚 Answer correctly to earn points and grow your harvest of knowledge</p>
          <p>🏆 The team with the most points wins the harvest!</p>
        </div>
        
        <div className="mt-4 text-amber-600 font-medium">
          🌾 May your harvest of biblical wisdom be abundant! 🌾
        </div>
      </div>
    </div>
  );
}

