import { User, Prediction, Vote, Badge, LeaderboardEntry } from './types';

export const mockUsers: User[] = [
  {
    userId: 'user_1',
    farcasterId: 'alice.eth',
    ethAddress: '0x1234567890123456789012345678901234567890',
    leaderboardScore: 1250,
    badges: [
      {
        id: 'badge_1',
        name: 'Prophet',
        description: '10 correct predictions in a row',
        icon: '🔮',
        rarity: 'epic',
        earnedAt: new Date('2024-01-15'),
      },
    ],
    creationTimestamp: new Date('2024-01-01'),
    displayName: 'Alice',
    avatar: '👩‍💼',
  },
  {
    userId: 'user_2',
    farcasterId: 'bob.crypto',
    ethAddress: '0x2345678901234567890123456789012345678901',
    leaderboardScore: 980,
    badges: [],
    creationTimestamp: new Date('2024-01-02'),
    displayName: 'Bob',
    avatar: '👨‍💻',
  },
  {
    userId: 'user_3',
    farcasterId: 'charlie.base',
    ethAddress: '0x3456789012345678901234567890123456789012',
    leaderboardScore: 1100,
    badges: [
      {
        id: 'badge_2',
        name: 'Early Adopter',
        description: 'First 100 users',
        icon: '🚀',
        rarity: 'rare',
        earnedAt: new Date('2024-01-01'),
      },
    ],
    creationTimestamp: new Date('2024-01-01'),
    displayName: 'Charlie',
    avatar: '🧑‍🚀',
  },
];

export const mockPredictions: Prediction[] = [
  {
    predictionId: 'pred_1',
    question: 'Will Bitcoin hit $110K by October 2025?',
    creatorUserId: 'user_1',
    creationTimestamp: new Date('2024-01-20'),
    status: 'open',
    outcome: 'undecided',
    dueDate: new Date('2025-10-31'),
    yesVotes: 1637,
    noVotes: 855,
    totalStake: 2.5,
    category: 'Crypto',
  },
  {
    predictionId: 'pred_2',
    question: 'Will Ethereum 2.0 staking rewards exceed 5% APY this year?',
    creatorUserId: 'user_2',
    creationTimestamp: new Date('2024-01-18'),
    status: 'open',
    outcome: 'undecided',
    dueDate: new Date('2024-12-31'),
    yesVotes: 420,
    noVotes: 380,
    totalStake: 1.8,
    category: 'DeFi',
  },
  {
    predictionId: 'pred_3',
    question: 'Will Base TVL exceed $10B by end of 2024?',
    creatorUserId: 'user_3',
    creationTimestamp: new Date('2024-01-15'),
    status: 'resolved',
    outcome: 'yes',
    dueDate: new Date('2024-12-31'),
    yesVotes: 890,
    noVotes: 210,
    totalStake: 3.2,
    category: 'L2',
  },
];

export const mockVotes: Vote[] = [
  {
    voteId: 'vote_1',
    predictionId: 'pred_1',
    voterUserId: 'user_2',
    choice: 'yes',
    timestamp: new Date('2024-01-21'),
    stakeAmount: 0.1,
  },
  {
    voteId: 'vote_2',
    predictionId: 'pred_1',
    voterUserId: 'user_3',
    choice: 'no',
    timestamp: new Date('2024-01-22'),
    stakeAmount: 0.05,
  },
];

export const mockLeaderboard: LeaderboardEntry[] = [
  {
    user: mockUsers[0],
    rank: 1,
    score: 1250,
    correctPredictions: 15,
    totalPredictions: 18,
    accuracy: 83,
    streak: 5,
  },
  {
    user: mockUsers[2],
    rank: 2,
    score: 1100,
    correctPredictions: 12,
    totalPredictions: 16,
    accuracy: 75,
    streak: 3,
  },
  {
    user: mockUsers[1],
    rank: 3,
    score: 980,
    correctPredictions: 10,
    totalPredictions: 15,
    accuracy: 67,
    streak: 1,
  },
];
