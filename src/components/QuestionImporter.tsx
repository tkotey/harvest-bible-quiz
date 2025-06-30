'use client';

import React, { useState } from 'react';
import { importQuestionsFromJson, validateQuestion } from '../utils/questionImporter';
import { Question } from '../types';

interface QuestionImporterProps {
  onImport: (questions: Question[]) => void;
}

export default function QuestionImporter({ onImport }: QuestionImporterProps) {
  const [jsonInput, setJsonInput] = useState('');
  const [importStatus, setImportStatus] = useState<{
    success: boolean;
    message: string;
    count: number;
  } | null>(null);
  const [showImporter, setShowImporter] = useState(false);

  const handleImport = () => {
    try {
      const importedQuestions = importQuestionsFromJson(jsonInput);
      
      if (importedQuestions.length === 0) {
        setImportStatus({
          success: false,
          message: 'No valid questions found in the imported data.',
          count: 0
        });
        return;
      }
      
      onImport(importedQuestions);
      
      setImportStatus({
        success: true,
        message: `Successfully imported ${importedQuestions.length} questions.`,
        count: importedQuestions.length
      });
      
      // Clear the input after successful import
      setJsonInput('');
    } catch (error) {
      setImportStatus({
        success: false,
        message: `Error importing questions: ${error instanceof Error ? error.message : 'Unknown error'}`,
        count: 0
      });
    }
  };

  const handleExampleClick = () => {
    const exampleQuestion: Question = {
      id: 'example_123',
      question: 'Who was the first king of Israel?',
      answer: 'Saul',
      category: '1 Samuel',
      difficulty: 'Medium',
      points: 200,
      testament: 'Old Testament'
    };
    
    const exampleJson = JSON.stringify([exampleQuestion], null, 2);
    setJsonInput(exampleJson);
  };

  return (
    <div className="my-8 border border-amber-200 rounded-lg p-6 bg-amber-50">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-amber-800">Question Importer</h3>
        <button 
          onClick={() => setShowImporter(!showImporter)}
          className="text-amber-700 hover:text-amber-900 font-medium"
        >
          {showImporter ? 'Hide Importer' : 'Show Importer'}
        </button>
      </div>
      
      {showImporter && (
        <>
          <p className="mb-4 text-amber-700">
            Paste JSON-formatted questions below to import them into the quiz. 
            Each question must include id, question, answer, category, testament, difficulty, and points fields.
          </p>
          
          <div className="mb-2 flex justify-end">
            <button 
              onClick={handleExampleClick}
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              Show Example Format
            </button>
          </div>
          
          <textarea 
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
            className="w-full h-64 p-3 border border-amber-300 rounded-md font-mono text-sm"
            placeholder='[
  {
    "id": "unique_id",
    "question": "Question text",
    "answer": "Answer text",
    "category": "Book name",
    "testament": "Old Testament or New Testament",
    "difficulty": "Easy, Medium, or Hard",
    "points": 100
  }
]'
          />
          
          <div className="mt-4 flex justify-between items-center">
            <button
              onClick={handleImport}
              disabled={!jsonInput.trim()}
              className={`px-4 py-2 rounded-md font-medium ${
                !jsonInput.trim()
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : 'bg-amber-500 text-white hover:bg-amber-600'
              }`}
            >
              Import Questions
            </button>
            
            {importStatus && (
              <div className={`text-sm ${importStatus.success ? 'text-green-600' : 'text-red-600'}`}>
                {importStatus.message}
              </div>
            )}
          </div>
          
          <div className="mt-6 border-t border-amber-200 pt-4">
            <h4 className="font-semibold text-amber-800 mb-2">Validation Rules:</h4>
            <ul className="list-disc pl-5 text-sm text-amber-700 space-y-1">
              <li>Each question must have a unique ID</li>
              <li>Testament must be either "Old Testament" or "New Testament"</li>
              <li>Difficulty must be "Easy", "Medium", or "Hard"</li>
              <li>Points must be a number (typically 100, 200, or 300)</li>
              <li>All fields (id, question, answer, category, testament, difficulty, points) are required</li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
