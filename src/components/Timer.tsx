'use client';

import React, { useState, useEffect, useRef } from 'react';

interface TimerProps {
  isRunning: boolean;
  onPause: () => void;
  onResume: () => void;
  onReset: () => void;
  onComplete: () => void;
  duration: number; // in seconds
  className?: string;
}

export default function Timer({
  isRunning,
  onPause,
  onResume,
  onReset,
  onComplete,
  duration,
  className = ''
}: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(duration);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // Only reset timer when duration changes or on initial mount
  useEffect(() => {
    // Only reset if we haven't started counting down yet
    if (timeLeft === duration || timeLeft === 0) {
      setTimeLeft(duration);
    }
  }, [duration]);
  
  // Handle reset button click
  const handleReset = () => {
    setTimeLeft(duration);
    onReset();
  };
  
  // Handle pause button click
  const handlePause = () => {
    // Just pause without resetting
    onPause();
  };
  
  // Handle resume button click
  const handleResume = () => {
    // Resume from current position
    onResume();
  };

  // Timer countdown logic
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined = undefined;
    
    if (isRunning && timeLeft > 0) {
      // Use a ref to track the last update time to ensure accurate timing
      const startTime = Date.now();
      const initialTimeLeft = timeLeft;
      
      interval = setInterval(() => {
        const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
        const newTimeLeft = Math.max(0, initialTimeLeft - elapsedSeconds);
        
        setTimeLeft(newTimeLeft);
        
        if (newTimeLeft === 0) {
          clearInterval(interval);
          // Play sound when timer reaches zero
          if (audioRef.current) {
            audioRef.current.play();
          }
          onComplete();
        }
      }, 100); // Update more frequently for smoother countdown
    }
    
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning, onComplete]);
  
  // This separate effect handles the completion case
  useEffect(() => {
    if (timeLeft === 0 && isRunning) {
      // Play sound when timer reaches zero
      if (audioRef.current) {
        audioRef.current.play();
      }
      onComplete();
    }
  }, [timeLeft, isRunning, onComplete]);

  // Format time as MM:SS
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Calculate percentage of time remaining for progress bar
  const timePercentage = (timeLeft / duration) * 100;
  
  // Determine color based on time left
  const getTimerColor = () => {
    if (timePercentage > 66) return 'bg-green-500';
    if (timePercentage > 33) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className={`bg-white rounded-xl shadow-md ${className}`}>
      {/* Audio element for timer sound */}
      <audio ref={audioRef} preload="auto">
        <source src="/timer-sound.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold text-amber-800 flex items-center gap-2">
            <span>⏱️</span>
            <span>Harvest Timer</span>
          </h3>
          <div className="text-2xl font-bold text-gray-800">
            {formatTime(timeLeft)}
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="w-full h-3 bg-gray-200 rounded-full mb-3 overflow-hidden">
          <div
            className={`h-full ${getTimerColor()} transition-all duration-1000 ease-linear`}
            style={{ width: `${timePercentage}%` }}
          ></div>
        </div>
        
        <div className="flex gap-2">
          {isRunning ? (
            <button
              onClick={handlePause}
              className="flex-1 py-1 px-3 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-medium transition-all text-sm"
            >
              Pause
            </button>
          ) : (
            <button
              onClick={handleResume}
              className="flex-1 py-1 px-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-all text-sm"
            >
              Resume
            </button>
          )}
          <button
            onClick={handleReset}
            className="flex-1 py-1 px-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-all text-sm"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
