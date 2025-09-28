export interface User {
  userId: string;
  farcasterId?: string;
  ethAddress?: string;
  leaderboardScore: number;
  badges: Badge[];
  creationTimestamp: Date;
  displayName?: string;
  avatar?: string;
}

export interface Prediction {
  predictionId: string;
  question: string;
  creatorUserId: string;
  creationTimestamp: Date;
  status: 'open' | 'closed' | 'resolved';
  outcome: 'yes' | 'no' | 'undecided';
  verificationSource?: string;
  dueDate: Date;
  yesVotes: number;
  noVotes: number;
  totalStake: number;
  category?: string;
}

export interface Vote {
  voteId: string;
  predictionId: string;
  voterUserId: string;
  choice: 'yes' | 'no';
  timestamp: Date;
  stakeAmount: number;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  earnedAt: Date;
}

export interface LeaderboardEntry {
  user: User;
  rank: number;
  score: number;
  correctPredictions: number;
  totalPredictions: number;
  accuracy: number;
  streak: number;
}

export interface ChatMessage {
  id: string;
  userId: string;
  content: string;
  timestamp: Date;
  type: 'message' | 'prediction' | 'vote';
  predictionId?: string;
}
