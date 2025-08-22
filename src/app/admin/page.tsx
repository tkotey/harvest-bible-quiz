'use client';

import React, { useState, useEffect } from 'react';
import QuestionImporter from '../../components/QuestionImporter';
import { Question } from '../../types';
import { getTotalQuestionCount, getTestamentQuestionCount } from '../../data/questions';
import Link from 'next/link';

const STORAGE_KEY = 'bibleQuizImportedQuestions';

export default function AdminPage() {
  // Initialize with empty values to avoid hydration mismatch
  const [importedQuestions, setImportedQuestions] = useState<Question[]>([]);
  const [stats, setStats] = useState({
    total: 0,
    oldTestament: 0,
    newTestament: 0
  });
  const [isClient, setIsClient] = useState(false);

  // First useEffect to mark when client-side rendering happens
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Second useEffect to load data only after client-side rendering is confirmed
  useEffect(() => {
    if (isClient) {
      // Set base stats first
      const baseStats = {
        total: getTotalQuestionCount(),
        oldTestament: getTestamentQuestionCount('Old Testament'),
        newTestament: getTestamentQuestionCount('New Testament')
      };
      
      setStats(baseStats);
      
      try {
        const savedQuestions = localStorage.getItem(STORAGE_KEY);
        if (savedQuestions) {
          const parsedQuestions = JSON.parse(savedQuestions) as Question[];
          setImportedQuestions(parsedQuestions);
          
          // Update stats to include saved questions
          setStats({
            total: baseStats.total + parsedQuestions.length,
            oldTestament: baseStats.oldTestament + parsedQuestions.filter(q => q.testament === 'Old Testament').length,
            newTestament: baseStats.newTestament + parsedQuestions.filter(q => q.testament === 'New Testament').length
          });
        }
      } catch (error) {
        console.error('Error loading saved questions:', error);
      }
    }
  }, [isClient]);

  const handleImportQuestions = (questions: Question[]) => {
    // Add new questions to state
    const updatedQuestions = [...importedQuestions, ...questions];
    setImportedQuestions(updatedQuestions);
    
    // Save to localStorage
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedQuestions));
    } catch (error) {
      console.error('Error saving questions to localStorage:', error);
    }
    
    // Update stats
    setStats({
      total: stats.total + questions.length,
      oldTestament: stats.oldTestament + questions.filter(q => q.testament === 'Old Testament').length,
      newTestament: stats.newTestament + questions.filter(q => q.testament === 'New Testament').length
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-amber-800">Bible Quiz Admin</h1>
        <Link 
          href="/"
          className="px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
        >
          Back to Game
        </Link>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold text-amber-700 mb-4">Question Statistics</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-center">
            <div className="text-4xl font-bold text-amber-700">{stats.total}</div>
            <div className="text-amber-600">Total Questions</div>
          </div>
          
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-center">
            <div className="text-4xl font-bold text-amber-700">{stats.oldTestament}</div>
            <div className="text-amber-600">Old Testament</div>
          </div>
          
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-center">
            <div className="text-4xl font-bold text-amber-700">{stats.newTestament}</div>
            <div className="text-amber-600">New Testament</div>
          </div>
        </div>
      </div>
      
      <QuestionImporter onImport={handleImportQuestions} />
      
      {/* Display imported questions */}
      {importedQuestions.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-6 mt-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-amber-700">Imported Questions ({importedQuestions.length})</h2>
            <button
              onClick={() => {
                if (confirm('Are you sure you want to clear all imported questions?')) {
                  localStorage.removeItem(STORAGE_KEY);
                  setImportedQuestions([]);
                  setStats({
                    total: getTotalQuestionCount(),
                    oldTestament: getTestamentQuestionCount('Old Testament'),
                    newTestament: getTestamentQuestionCount('New Testament')
                  });
                }
              }}
              className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition-colors"
            >
              Clear All
            </button>
          </div>
          
          <div className="max-h-96 overflow-y-auto border border-amber-200 rounded-lg">
            <table className="min-w-full divide-y divide-amber-200">
              <thead className="bg-amber-50 sticky top-0">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-amber-800 uppercase tracking-wider">ID</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-amber-800 uppercase tracking-wider">Question</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-amber-800 uppercase tracking-wider">Category</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-amber-800 uppercase tracking-wider">Testament</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-amber-800 uppercase tracking-wider">Difficulty</th>
                </tr>
              </thead>
              <tbody>
                {importedQuestions.map((q, index) => (
                  <tr key={q.id} className={index % 2 === 0 ? 'bg-amber-50' : 'bg-white'}>
                    <td className="py-2 px-4 border-b border-amber-100">{q.id}</td>
                    <td className="py-2 px-4 border-b border-amber-100">{q.question}</td>
                    <td className="py-2 px-4 border-b border-amber-100">{q.category}</td>
                    <td className="py-2 px-4 border-b border-amber-100">{q.testament}</td>
                    <td className="py-2 px-4 border-b border-amber-100">{q.difficulty} ({q.points}pts)</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
