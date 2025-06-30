'use client';

import React from 'react';
import { Team } from '../types';

interface ScoreBoardProps {
  teams: Team[];
  currentTeamIndex: number;
}

export default function ScoreBoard({ teams, currentTeamIndex }: ScoreBoardProps) {
  const sortedTeams = [...teams].sort((a, b) => b.score - a.score);
  const leadingTeam = sortedTeams[0];

  return (
    <div className="harvest-card p-6 mb-8 animate-fadeIn">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-responsive-lg font-bold text-amber-800 mb-2">
          🏆 Harvest Scoreboard 🏆
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
          <div className="bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
            <span className="text-amber-800 font-medium">
              🌾 {teams.length} Teams Competing
            </span>
          </div>
          {leadingTeam && (
            <div className="bg-yellow-100 px-3 py-1 rounded-full border border-yellow-300">
              <span className="text-yellow-800 font-medium">
                🏆 Leading Team: {leadingTeam.name}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Current Turn Indicator */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-100 to-indigo-100 px-6 py-3 rounded-full border-2 border-blue-200 shadow-md">
          <div
            className="w-3 h-3 rounded-full animate-pulse"
            style={{ backgroundColor: teams[currentTeamIndex]?.color }}
          ></div>
          <span className="font-semibold text-blue-800">
            Current Turn: {teams[currentTeamIndex]?.name}
          </span>
        </div>
      </div>

      {/* Teams Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {teams.map((team, index) => {
          const isCurrentTeam = index === currentTeamIndex;
          const isLeading = team.score === leadingTeam.score && team.score > 0;
          const position = sortedTeams.findIndex(t => t.name === team.name) + 1;
          
          return (
            <div
              key={index}
              className={`relative p-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 ${
                isCurrentTeam 
                  ? 'ring-4 ring-blue-300 ring-opacity-50 shadow-xl' 
                  : 'hover:shadow-xl'
              }`}
              style={{
                background: `linear-gradient(135deg, ${team.color}15 0%, ${team.color}25 100%)`,
                borderColor: team.color,
                borderWidth: '2px'
              }}
            >
              {/* Position Badge */}
              <div className="absolute -top-2 -right-2">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg"
                  style={{ backgroundColor: team.color }}
                >
                  {position}
                </div>
              </div>

              {/* Leading Team Crown */}
              {isLeading && (
                <div className="absolute -top-3 -left-2">
                  <div className="text-2xl animate-bounce">👑</div>
                </div>
              )}

              {/* Current Turn Indicator */}
              {isCurrentTeam && (
                <div className="absolute top-2 left-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                </div>
              )}

              {/* Team Info */}
              <div className="text-center">
                <div className="mb-2">
                  <div
                    className="w-6 h-6 rounded-full mx-auto mb-2 border-2 border-white shadow-sm"
                    style={{ backgroundColor: team.color }}
                  ></div>
                  <h3 className="font-bold text-gray-800 text-lg truncate" title={team.name}>
                    {team.name}
                  </h3>
                </div>

                {/* Score Display */}
                <div className="bg-white bg-opacity-70 rounded-lg p-3 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-gray-800 mb-1">
                    {team.score}
                  </div>
                  <div className="text-sm text-gray-600">
                    points harvested
                  </div>
                  
                  {/* Question Limit Display */}
                  <div className="mt-2 pt-2 border-t border-gray-200">
                    <div className="flex justify-center items-center gap-1">
                      <div className="text-xs font-medium text-blue-600">
                        Questions: {team.questionsAnswered}/{team.questionLimit}
                      </div>
                      <div 
                        className="h-1 flex-grow rounded-full bg-gray-200 max-w-[60px]" 
                        title={`${team.questionsAnswered} of ${team.questionLimit} questions answered`}
                      >
                        <div 
                          className="h-1 rounded-full bg-blue-500" 
                          style={{ width: `${(team.questionsAnswered / team.questionLimit) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {team.questionLimit - team.questionsAnswered} remaining
                    </div>
                  </div>
                </div>

                {/* Status Indicators */}
                <div className="mt-3 flex justify-center gap-2">
                  {isCurrentTeam && (
                    <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      Active
                    </span>
                  )}
                  {isLeading && team.score > 0 && (
                    <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      Leading
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Game Stats */}
      <div className="mt-6 pt-4 border-t border-amber-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-amber-50 p-3 rounded-lg">
            <div className="text-lg font-bold text-amber-800">
              {teams.reduce((sum, team) => sum + team.score, 0)}
            </div>
            <div className="text-sm text-amber-600">Total Points</div>
          </div>
          
          <div className="bg-orange-50 p-3 rounded-lg">
            <div className="text-lg font-bold text-orange-800">
              {leadingTeam?.score || 0}
            </div>
            <div className="text-sm text-orange-600">Highest Score</div>
          </div>
          
          <div className="bg-yellow-50 p-3 rounded-lg">
            <div className="text-lg font-bold text-yellow-800">
              {teams.length}
            </div>
            <div className="text-sm text-yellow-600">Teams Playing</div>
          </div>
          
          <div className="bg-green-50 p-3 rounded-lg">
            <div className="text-lg font-bold text-green-800">
              {Math.round((teams.reduce((sum, team) => sum + team.score, 0) / teams.length) || 0)}
            </div>
            <div className="text-sm text-green-600">Average Score</div>
          </div>
        </div>
      </div>
    </div>
  );
}

