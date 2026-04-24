import React from 'react';
import { Activity, SlidersHorizontal, Maximize, ArrowRight, UploadCloud, Cpu, Settings, Download, CheckCircle2 } from 'lucide-react';
import { ViewState } from '../types';

interface HomeViewProps {
  onStart: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onStart }) => {
  return (
    <div class="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section class="w-full max-w-6xl mx-auto px-4 py-24 flex flex-col items-center text-center">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-900/30 border border-brand-800/50 text-brand-300 text-xs font-medium mb-8">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
          </span>
          AI Deliberation System
        </div>
        <h1 class="text-5xl md:text-7xl font-bold tracking-tight text-slate-50 mb-6 leading-tight">
          自然な音圧感。<br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-indigo-400">
            AI合議による次世代マスタリング。
          </span>
        </h1>
        <p class="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
          WhitePrint は単一のAI判断ではなく、複数のAI視点による合議でマスタリング方針を決定します。音圧、帯域バランス、ステレオ感、質感を総合的に評価し、過剰な処理を避けながら、配信に適した自然なマスターを生成します。
        </p>
        <button 
          onClick={onStart}
          class="group relative inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
        >
          <UploadCloud class="w-5 h-5" />
          音源をアップロードして開始
          <ArrowRight class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </section>

      {/* Key Features List */}
      <section class="w-full max-w-5xl mx-auto px-4 pb-20">
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            "3つのAI視点による合議マスタリング",
            "音圧、質感、バランスを多角的に判断",
            "極端な処理を避ける安全設計",
            "楽曲ごとにDSPパラメータを自動決定"
          ].map((feature, idx) => (
            <div key={idx} class="flex items-center gap-3 bg-slate-900/40 border border-slate-800/60 rounded-xl p-4 shadow-sm">
              <CheckCircle2 class="w-5 h-5 text-brand-400 flex-shrink-0" />
              <span class="text-sm font-medium text-slate-300">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Deliberation Concept Section */}
      <section class="w-full bg-slate-900/50 border-y border-slate-800 py-20">
        <div class="max-w-6xl mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-3xl font-bold text-slate-100 mb-4">単一AIではなく、AI合議でマスタリング方針を決定</h2>
            <p class="text-slate-400 max-w-3xl mx-auto leading-relaxed">
              1つのAIが一方的に処理を決めるのではなく、複数のAI視点で音源を評価します。ラウドネス、ダイナミクス、帯域バランス、ステレオ感、質感リスクを総合的に判断し、最終的なDSPパラメータを統合。これにより、過剰な音圧処理や不自然なEQを避けながら、楽曲ごとに自然な配信用マスターを生成します。
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-slate-950 border border-slate-800 rounded-2xl p-8 hover:border-blue-500/50 transition-colors">
              <div class="w-12 h-12 bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 border border-blue-800/50">
                <Activity class="w-6 h-6 text-blue-400" />
              </div>
              <h3 class="text-xl font-semibold text-slate-200 mb-3">1. Loudness Judge</h3>
              <p class="text-slate-400 text-sm leading-relaxed">
                LUFS、True Peak、ダイナミクスを評価。配信プラットフォームの基準を満たしつつ、楽曲の持つ本来のダイナミクスを損なわない自然な音圧を導き出します。
              </p>
            </div>
            <div class="bg-slate-950 border border-slate-800 rounded-2xl p-8 hover:border-indigo-500/50 transition-colors">
              <div class="w-12 h-12 bg-indigo-900/30 rounded-xl flex items-center justify-center mb-6 border border-indigo-800/50">
                <SlidersHorizontal class="w-6 h-6 text-indigo-400" />
              </div>
              <h3 class="text-xl font-semibold text-slate-200 mb-3">2. Tone Judge</h3>
              <p class="text-slate-400 text-sm leading-relaxed">
                低域、低中域、中域、高域、Air感を評価。ジャンルごとの特性を考慮し、不自然なEQ処理を避け、楽曲の魅力を引き出す帯域バランスを提案します。
              </p>
            </div>
            <div class="bg-slate-950 border border-slate-800 rounded-2xl p-8 hover:border-purple-500/50 transition-colors">
              <div class="w-12 h-12 bg-purple-900/30 rounded-xl flex items-center justify-center mb-6 border border-purple-800/50">
                <Maximize class="w-6 h-6 text-purple-400" />
              </div>
              <h3 class="text-xl font-semibold text-slate-200 mb-3">3. Space Judge</h3>
              <p class="text-slate-400 text-sm leading-relaxed">
                ステレオ幅、低域のモノ互換、相関を評価。広がりを与えつつも、モノラル再生時の位相崩れを防ぎ、安定した空間表現を実現します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section class="w-full max-w-6xl mx-auto px-4 py-24">
        <h2 class="text-3xl font-bold text-slate-100 mb-12 text-center">処理フロー</h2>
        <div class="relative">
          {/* Connecting Line */}
          <div class="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2 z-0"></div>
          
          <div class="grid md:grid-cols-4 gap-8 relative z-10">
            {[
              { icon: Activity, title: "1. Audio Analysis", desc: "楽曲のLUFS、True Peak、ダイナミクス、ステレオ幅、帯域バランスを分析" },
              { icon: Cpu, title: "2. AI Deliberation", desc: "複数のAI視点がマスタリング方針を提案し、最適なDSPパラメータに統合" },
              { icon: Settings, title: "3. DSP Mastering", desc: "決定されたパラメータを使ってDSPチェーンでWAVを生成" },
              { icon: Download, title: "4. Download", desc: "マスタリング済みWAVをダウンロード" }
            ].map((step, idx) => (
              <div key={idx} class="flex flex-col items-center text-center bg-slate-950 md:bg-transparent p-6 md:p-0 rounded-xl border border-slate-800 md:border-none">
                <div class="w-16 h-16 bg-slate-900 border-2 border-slate-700 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <step.icon class="w-7 h-7 text-brand-400" />
                </div>
                <h4 class="text-lg font-semibold text-slate-200 mb-2">{step.title}</h4>
                <p class="text-sm text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
