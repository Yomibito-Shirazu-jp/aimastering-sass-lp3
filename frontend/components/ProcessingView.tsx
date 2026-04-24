import React, { useState, useEffect } from 'react';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { PROCESSING_STEPS } from '../types';

interface ProcessingViewProps {
  onComplete: () => void;
}

export const ProcessingView: React.FC<ProcessingViewProps> = ({ onComplete }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  useEffect(() => {
    let step = 0;
    const intervalTime = 1500; // 1.5 seconds per step for simulation

    const interval = setInterval(() => {
      step++;
      if (step >= PROCESSING_STEPS.length) {
        clearInterval(interval);
        setTimeout(onComplete, 500); // Brief pause before transitioning
      } else {
        setCurrentStepIndex(step);
      }
    }, intervalTime);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const progressPercentage = Math.min(100, Math.round(((currentStepIndex + 1) / PROCESSING_STEPS.length) * 100));

  return (
    <div class="flex-grow flex items-center justify-center p-4">
      <div class="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
        <div class="flex flex-col items-center text-center mb-8">
          <div class="relative w-20 h-20 mb-6">
            <div class="absolute inset-0 border-4 border-slate-800 rounded-full"></div>
            <div 
              class="absolute inset-0 border-4 border-brand-500 rounded-full border-t-transparent animate-spin"
              style={{ animationDuration: '1.5s' }}
            ></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <span class="text-sm font-bold text-brand-400">{progressPercentage}%</span>
            </div>
          </div>
          <h2 class="text-2xl font-bold text-slate-100 mb-2">Processing Audio</h2>
          <p class="text-slate-400 text-sm">AI合議システムが最適な処理を計算しています</p>
        </div>

        <div class="space-y-4">
          {PROCESSING_STEPS.map((step, index) => {
            const isCompleted = index < currentStepIndex;
            const isCurrent = index === currentStepIndex;
            const isPending = index > currentStepIndex;

            return (
              <div key={index} class={`flex items-center gap-3 ${isPending ? 'opacity-40' : 'opacity-100'} transition-opacity duration-300`}>
                {isCompleted ? (
                  <CheckCircle2 class="w-5 h-5 text-emerald-500 flex-shrink-0" />
                ) : isCurrent ? (
                  <Loader2 class="w-5 h-5 text-brand-400 animate-spin flex-shrink-0" />
                ) : (
                  <div class="w-5 h-5 rounded-full border-2 border-slate-700 flex-shrink-0"></div>
                )}
                <span class={`text-sm font-medium ${isCurrent ? 'text-brand-300' : isCompleted ? 'text-slate-300' : 'text-slate-500'}`}>
                  {step}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
