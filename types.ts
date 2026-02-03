
export interface MarketData {
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  history: { time: string; value: number }[];
}

export interface RoadmapStep {
  id: string;
  phase: string;
  title: string;
  description: string;
  status: 'completed' | 'current' | 'upcoming';
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

// Added Strategy interface to fix: Module '"../types"' has no exported member 'Strategy'
export interface Strategy {
  name: string;
  type: string;
  status: 'active' | 'inactive';
  performance: number;
  sharpe: number;
}
