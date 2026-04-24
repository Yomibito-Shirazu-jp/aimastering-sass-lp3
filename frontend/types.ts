export type ViewState = 'home' | 'processing' | 'result';

export interface MasteringResultData {
  target_lufs: number;
  target_true_peak: number;
  strategy: string;
  adopted_params: Record<string, number>;
  section_overrides: string;
}

export const MOCK_RESULT_DATA: MasteringResultData = {
  target_lufs: -14.0,
  target_true_peak: -1.0,
  strategy: "バランス重視の自然な音圧アップ。過度なコンプレッションを避け、トランジェントを保護しつつ、配信用プラットフォームに最適なラウドネスへ調整します。",
  adopted_params: {
    "eq_low_gain_db": 1.2,
    "eq_mid_gain_db": -0.5,
    "eq_high_gain_db": 0.8,
    "compressor_threshold_db": -18.0,
    "compressor_ratio": 2.5,
    "limiter_gain_db": 3.2,
    "stereo_width_pct": 105
  },
  section_overrides: "Chorus: +1dB High-shelf EQ applied for extra clarity."
};

export const PROCESSING_STEPS = [
  "音源をアップロード中",
  "ラウドネスと帯域バランスを解析中",
  "AI合議でマスタリング方針を検討中",
  "DSPパラメータを決定中",
  "マスタリングWAVを生成中",
  "ダウンロード準備中"
];
