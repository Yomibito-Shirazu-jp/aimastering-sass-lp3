import React, { useState } from 'react';
import { CheckCircle, Download, ChevronDown, ChevronUp, Terminal, Sliders } from 'lucide-react';
import { MasteringResultData, MOCK_RESULT_DATA } from '../types';

interface ResultViewProps {
  onReset: () => void;
}

export const ResultView: React.FC<ResultViewProps> = ({ onReset }) => {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const data: MasteringResultData = MOCK_RESULT_DATA;

  return (
    <div class="flex-grow flex flex-col items-center py-12 px-4 w-full max-w-4xl mx-auto">
      
      {/* Success Banner */}
      <div class="w-full bg-emerald-950/30 border border-emerald-900/50 rounded-2xl p-8 text-center mb-8">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-emerald-900/50 rounded-full mb-4">
          <CheckCircle class="w-8 h-8 text-emerald-400" />
        </div>
        <h2 class="text-3xl font-bold text-slate-100 mb-4">マスタリング完了</h2>
        <p class="text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          このマスターは、音源分析結果をもとに<span class="text-brand-300 font-semibold">AI合議システム</span>がDSP方針を決定し、レンダリングされました。過剰な処理を避け、配信用に整えられた自然な音圧感をお楽しみください。
        </p>
        
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button class="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            <Download class="w-5 h-5" />
            WAVをダウンロード
          </button>
          <button 
            onClick={onReset}
            class="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 px-8 py-3 rounded-lg font-medium transition-colors"
          >
            別の音源を処理する
          </button>
        </div>
      </div>

      {/* Advanced / Developer Mode Toggle */}
      <div class="w-full">
        <button 
          onClick={() => setShowAdvanced(!showAdvanced)}
          class="flex items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors mx-auto mb-6"
        >
          <Terminal class="w-4 h-4" />
          <span class="text-sm font-medium">Advanced / Developer Mode</span>
          {showAdvanced ? <ChevronUp class="w-4 h-4" /> : <ChevronDown class="w-4 h-4" />}
        </button>

        {showAdvanced && (
          <div class="bg-slate-900 border border-slate-800 rounded-xl p-6 animate-in fade-in slide-in-from-top-4 duration-300">
            <div class="flex items-center gap-2 mb-4 border-b border-slate-800 pb-4">
              <Sliders class="w-5 h-5 text-brand-400" />
              <h3 class="text-lg font-semibold text-slate-200">AI Deliberation Results</h3>
            </div>
            
            <div class="bg-slate-950/50 border border-slate-800/50 rounded-lg p-4 mb-6">
              <p class="text-sm text-slate-400 leading-relaxed">
                AI合議では、複数のエージェント（<code class="text-brand-300 font-mono">Grammatica</code>, <code class="text-brand-300 font-mono">Logica</code>, <code class="text-brand-300 font-mono">Rhetorica</code>）が個別にDSP方針を提案し、その結果を統合して最終的な <code class="bg-slate-800 px-1.5 py-0.5 rounded text-slate-300 font-mono">adopted_params</code> を決定します。
              </p>
            </div>

            <div class="grid md:grid-cols-2 gap-6 mb-8">
              <div class="bg-slate-950 rounded-lg p-4 border border-slate-800/50">
                <span class="block text-xs text-slate-500 uppercase tracking-wider mb-1">Target LUFS</span>
                <span class="text-xl font-mono text-slate-200">{data.target_lufs} dB</span>
              </div>
              <div class="bg-slate-950 rounded-lg p-4 border border-slate-800/50">
                <span class="block text-xs text-slate-500 uppercase tracking-wider mb-1">Target True Peak</span>
                <span class="text-xl font-mono text-slate-200">{data.target_true_peak} dB</span>
              </div>
            </div>

            <div class="mb-8">
              <h4 class="text-sm font-semibold text-slate-300 mb-2">Strategy</h4>
              <div class="bg-slate-950 rounded-lg p-4 border border-slate-800/50 text-sm text-slate-300 leading-relaxed">
                {data.strategy}
              </div>
            </div>

            <div class="mb-8">
              <h4 class="text-sm font-semibold text-slate-300 mb-2">Adopted Parameters</h4>
              <div class="overflow-x-auto rounded-lg border border-slate-800/50">
                <table class="w-full text-sm text-left">
                  <thead class="text-xs text-slate-400 uppercase bg-slate-950 border-b border-slate-800/50">
                    <tr>
                      <th scope="col" class="px-6 py-3 font-medium">Parameter</th>
                      <th scope="col" class="px-6 py-3 font-medium">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(data.adopted_params).map(([key, value], index) => (
                      <tr key={key} class={`bg-slate-900 ${index !== Object.keys(data.adopted_params).length - 1 ? 'border-b border-slate-800/50' : ''}`}>
                        <td class="px-6 py-3 font-mono text-slate-300">{key}</td>
                        <td class="px-6 py-3 font-mono text-brand-300">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h4 class="text-sm font-semibold text-slate-300 mb-2">Section Overrides</h4>
              <div class="bg-slate-950 rounded-lg p-4 border border-slate-800/50 text-sm font-mono text-slate-400">
                {data.section_overrides}
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};
