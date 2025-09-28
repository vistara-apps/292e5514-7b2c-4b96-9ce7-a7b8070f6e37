'use client';

import { Prediction } from '@/lib/types';
import { formatTimeAgo, getVotePercentages } from '@/lib/utils';
import { VoteButton } from './VoteButton';
import { Clock, TrendingUp, Users } from 'lucide-react';

interface PredictionCardProps {
  prediction: Prediction;
  variant?: 'active' | 'resolved';
  onVote?: (predictionId: string, choice: 'yes' | 'no') => void;
  showVoteButtons?: boolean;
}

export function PredictionCard({ 
  prediction, 
  variant = 'active',
  onVote,
  showVoteButtons = true 
}: PredictionCardProps) {
  const { yesPercentage, noPercentage } = getVotePercentages(
    prediction.yesVotes, 
    prediction.noVotes
  );
  
  const totalVotes = prediction.yesVotes + prediction.noVotes;
  const isResolved = prediction.status === 'resolved';
  
  return (
    <div className={`prediction-card ${variant === 'resolved' ? 'opacity-80' : ''}`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-text-primary mb-2">
            {prediction.question}
          </h3>
          <div className="flex items-center gap-4 text-sm text-text-secondary">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{formatTimeAgo(prediction.creationTimestamp)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{totalVotes} votes</span>
            </div>
            {prediction.category && (
              <span className="badge bg-accent/20 text-accent border border-accent/30">
                {prediction.category}
              </span>
            )}
          </div>
        </div>
        
        {isResolved && (
          <div className={`badge ${
            prediction.outcome === 'yes' ? 'badge-success' : 'badge-error'
          }`}>
            {prediction.outcome === 'yes' ? '✓ YES' : '✗ NO'}
          </div>
        )}
      </div>

      {/* Vote Distribution */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-success">YES</span>
          <span className="text-sm text-text-secondary">{yesPercentage}%</span>
        </div>
        <div className="w-full bg-surface rounded-full h-2 mb-2">
          <div 
            className="bg-success h-2 rounded-full transition-all duration-300"
            style={{ width: `${yesPercentage}%` }}
          />
        </div>
        
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-error">NO</span>
          <span className="text-sm text-text-secondary">{noPercentage}%</span>
        </div>
        <div className="w-full bg-surface rounded-full h-2">
          <div 
            className="bg-error h-2 rounded-full transition-all duration-300"
            style={{ width: `${noPercentage}%` }}
          />
        </div>
      </div>

      {/* Vote Counts */}
      <div className="flex items-center justify-between mb-4 text-sm">
        <div className="flex items-center gap-4">
          <span className="text-success font-medium">
            {prediction.yesVotes} YES
          </span>
          <span className="text-error font-medium">
            {prediction.noVotes} NO
          </span>
        </div>
        <div className="flex items-center gap-1 text-text-secondary">
          <TrendingUp className="w-4 h-4" />
          <span>{prediction.totalStake} ETH staked</span>
        </div>
      </div>

      {/* Vote Buttons */}
      {showVoteButtons && !isResolved && onVote && (
        <div className="flex gap-3">
          <VoteButton
            variant="yes"
            onClick={() => onVote(prediction.predictionId, 'yes')}
            className="flex-1"
          >
            Vote YES
          </VoteButton>
          <VoteButton
            variant="no"
            onClick={() => onVote(prediction.predictionId, 'no')}
            className="flex-1"
          >
            Vote NO
          </VoteButton>
        </div>
      )}

      {/* Due Date */}
      <div className="mt-4 pt-4 border-t border-border/50">
        <div className="flex items-center justify-between text-sm text-text-secondary">
          <span>
            {isResolved ? 'Resolved' : 'Ends'}: {prediction.dueDate.toLocaleDateString()}
          </span>
          {prediction.verificationSource && (
            <span className="text-accent">
              Verified by {prediction.verificationSource}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
