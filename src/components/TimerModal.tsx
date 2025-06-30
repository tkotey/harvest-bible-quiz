'use client';

import React, { useState, useEffect, useRef } from 'react';
import Modal from './Modal';

interface TimerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTimerComplete: () => void;
  defaultDuration?: number; // in seconds
  autoStart?: boolean; // Whether to auto-start the timer when modal opens
}

export default function TimerModal({
  isOpen,
  onClose,
  onTimerComplete,
  defaultDuration = 60, // Default 60 seconds
  autoStart = false
}: TimerModalProps) {
  const [duration, setDuration] = useState(defaultDuration);
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isRunning, setIsRunning] = useState(false);
  const [showSettings, setShowSettings] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // Reset timer when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeLeft(duration);
      setIsRunning(autoStart); // Auto-start if specified
      setShowSettings(!autoStart); // Skip settings if auto-starting
    }
  }, [isOpen, duration, autoStart]);
  
  // Handle changes to autoStart prop
  useEffect(() => {
    if (isOpen) {
      setIsRunning(autoStart);
      if (autoStart) {
        setShowSettings(false);
      }
    }
  }, [autoStart, isOpen]);

  // Timer countdown logic
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (isRunning && timeLeft === 0) {
      setIsRunning(false);
      // Play sound when timer reaches zero
      if (audioRef.current) {
        audioRef.current.play();
      }
      onTimerComplete();
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, timeLeft, onTimerComplete]);

  const handleStartTimer = () => {
    setShowSettings(false);
    setIsRunning(true);
  };

  const handlePauseTimer = () => {
    setIsRunning(false);
  };

  const handleResumeTimer = () => {
    setIsRunning(true);
  };

  const handleResetTimer = () => {
    setTimeLeft(duration);
    setIsRunning(false);
  };

  const handleDurationChange = (seconds: number) => {
    setDuration(seconds);
    setTimeLeft(seconds);
  };

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
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-full max-w-md mx-auto bg-white rounded-xl overflow-hidden">
        <div className="p-6">
          <h3 className="text-xl font-bold text-center text-amber-800 mb-4 flex items-center justify-center gap-2">
            <span>⏱️</span>
            <span>Harvest Timer</span>
          </h3>

          {/* Audio element for timer sound */}
          <audio ref={audioRef} preload="auto">
            <source src="/timer-sound.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>

          {showSettings ? (
            <div className="animate-fadeIn">
              <p className="text-center text-gray-600 mb-4">
                Set the time for this question:
              </p>
              
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[30, 60, 90].map((seconds) => (
                  <button
                    key={seconds}
                    onClick={() => handleDurationChange(seconds)}
                    className={`py-2 px-3 rounded-lg transition-all ${
                      duration === seconds
                        ? 'bg-amber-500 text-white font-medium'
                        : 'bg-amber-100 hover:bg-amber-200 text-amber-800'
                    }`}
                  >
                    {seconds} sec
                  </button>
                ))}
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[120, 180].map((seconds) => (
                  <button
                    key={seconds}
                    onClick={() => handleDurationChange(seconds)}
                    className={`py-2 px-3 rounded-lg transition-all ${
                      duration === seconds
                        ? 'bg-amber-500 text-white font-medium'
                        : 'bg-amber-100 hover:bg-amber-200 text-amber-800'
                    }`}
                  >
                    {seconds / 60} min
                  </button>
                ))}
              </div>
              
              <button
                onClick={handleStartTimer}
                className="w-full py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2"
              >
                <span>▶️</span>
                <span>Start Timer</span>
              </button>
            </div>
          ) : (
            <div className="animate-fadeIn">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-gray-800">
                  {formatTime(timeLeft)}
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Time Remaining
                </p>
              </div>
              
              {/* Progress bar */}
              <div className="w-full h-4 bg-gray-200 rounded-full mb-6 overflow-hidden">
                <div
                  className={`h-full ${getTimerColor()} transition-all duration-1000 ease-linear`}
                  style={{ width: `${timePercentage}%` }}
                ></div>
              </div>
              
              <div className="flex gap-3">
                {isRunning ? (
                  <button
                    onClick={handlePauseTimer}
                    className="flex-1 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-medium transition-all"
                  >
                    Pause
                  </button>
                ) : (
                  <button
                    onClick={handleResumeTimer}
                    className="flex-1 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-all"
                  >
                    Resume
                  </button>
                )}
                <button
                  onClick={handleResetTimer}
                  className="flex-1 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-all"
                >
                  Reset
                </button>
              </div>
              
              <button
                onClick={() => setShowSettings(true)}
                className="w-full mt-3 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition-all text-sm"
              >
                Change Duration
              </button>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
}
