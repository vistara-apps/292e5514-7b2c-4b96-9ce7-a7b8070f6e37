'use client';

import { LeaderboardEntry as LeaderboardEntryType } from '@/lib/types';
import { Trophy, Target, TrendingUp, Zap } from 'lucide-react';

interface LeaderboardEntryProps {
  entry: LeaderboardEntryType;
  variant?: 'default';
}

export function LeaderboardEntry({ entry, variant = 'default' }: LeaderboardEntryProps) {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-5 h-5 text-accent" />;
      case 2:
        return <Trophy className="w-5 h-5 text-gray-400" />;
      case 3:
        return <Trophy className="w-5 h-5 text-amber-600" />;
      default:
        return <span className="w-5 h-5 flex items-center justify-center text-sm font-bold text-text-secondary">#{rank}</span>;
    }
  };

  const getStreakColor = (streak: number) => {
    if (streak >= 5) return 'text-accent';
    if (streak >= 3) return 'text-warning';
    return 'text-text-secondary';
  };

  return (
    <div className="leaderboard-entry">
      <div className="flex items-center justify-between">
        {/* Left side - Rank and User */}
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-8 h-8">
            {getRankIcon(entry.rank)}
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center text-lg">
              {entry.user.avatar || '👤'}
            </div>
            <div>
              <div className="font-semibold text-text-primary">
                {entry.user.displayName || 'Anonymous'}
              </div>
              <div className="text-sm text-text-secondary">
                {entry.user.farcasterId || 'No handle'}
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Stats */}
        <div className="flex items-center gap-6">
          {/* Accuracy */}
          <div className="text-center">
            <div className="flex items-center gap-1 text-sm text-text-secondary mb-1">
              <Target className="w-4 h-4" />
              <span>Accuracy</span>
            </div>
            <div className="font-bold text-text-primary">
              {entry.accuracy}%
            </div>
          </div>

          {/* Predictions */}
          <div className="text-center">
            <div className="flex items-center gap-1 text-sm text-text-secondary mb-1">
              <TrendingUp className="w-4 h-4" />
              <span>Predictions</span>
            </div>
            <div className="font-bold text-text-primary">
              {entry.correctPredictions}/{entry.totalPredictions}
            </div>
          </div>

          {/* Streak */}
          <div className="text-center">
            <div className="flex items-center gap-1 text-sm text-text-secondary mb-1">
              <Zap className="w-4 h-4" />
              <span>Streak</span>
            </div>
            <div className={`font-bold ${getStreakColor(entry.streak)}`}>
              {entry.streak}
            </div>
          </div>

          {/* Score */}
          <div className="text-center">
            <div className="text-sm text-text-secondary mb-1">Score</div>
            <div className="font-bold text-accent text-lg">
              {entry.score.toLocaleString()}
            </div>
          </div>
        </div>
      </div>

      {/* Badges */}
      {entry.user.badges.length > 0 && (
        <div className="mt-3 pt-3 border-t border-border/50">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm text-text-secondary">Badges:</span>
            {entry.user.badges.slice(0, 3).map((badge) => (
              <div
                key={badge.id}
                className={`badge ${
                  badge.rarity === 'legendary' ? 'bg-accent/20 text-accent border-accent/30' :
                  badge.rarity === 'epic' ? 'bg-purple-500/20 text-purple-400 border-purple-500/30' :
                  badge.rarity === 'rare' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' :
                  'bg-gray-500/20 text-gray-400 border-gray-500/30'
                }`}
                title={badge.description}
              >
                {badge.icon} {badge.name}
              </div>
            ))}
            {entry.user.badges.length > 3 && (
              <span className="text-sm text-text-secondary">
                +{entry.user.badges.length - 3} more
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
