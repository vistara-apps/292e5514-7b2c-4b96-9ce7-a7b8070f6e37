'use client';

import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { StatsOverview } from './components/StatsOverview';
import { PredictionCard } from './components/PredictionCard';
import { LeaderboardEntry } from './components/LeaderboardEntry';
import { AgentChatInput } from './components/AgentChatInput';
import { mockPredictions, mockLeaderboard } from '@/lib/mockData';
import { generatePredictionId } from '@/lib/utils';
import { Prediction } from '@/lib/types';
import { MessageSquare, Trophy, Plus, Filter } from 'lucide-react';

export default function HomePage() {
  const [predictions, setPredictions] = useState<Prediction[]>(mockPredictions);
  const [activeTab, setActiveTab] = useState<'chat' | 'predictions' | 'leaderboard'>('chat');
  const [filter, setFilter] = useState<'all' | 'active' | 'resolved'>('all');

  // Calculate stats
  const totalPredictions = predictions.length;
  const activePredictions = predictions.filter(p => p.status === 'open').length;
  const totalUsers = mockLeaderboard.length;
  const totalVolume = predictions.reduce((sum, p) => sum + p.totalStake, 0);

  const handleCreatePrediction = (question: string, dueDate?: Date) => {
    const newPrediction: Prediction = {
      predictionId: generatePredictionId(),
      question,
      creatorUserId: 'current_user',
      creationTimestamp: new Date(),
      status: 'open',
      outcome: 'undecided',
      dueDate: dueDate || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
      yesVotes: 0,
      noVotes: 0,
      totalStake: 0,
      category: 'General',
    };

    setPredictions(prev => [newPrediction, ...prev]);
    setActiveTab('predictions');
  };

  const handleVote = (predictionId: string, choice: 'yes' | 'no') => {
    setPredictions(prev => prev.map(p => {
      if (p.predictionId === predictionId) {
        return {
          ...p,
          yesVotes: choice === 'yes' ? p.yesVotes + 1 : p.yesVotes,
          noVotes: choice === 'no' ? p.noVotes + 1 : p.noVotes,
          totalStake: p.totalStake + 0.01, // Small stake amount
        };
      }
      return p;
    }));
  };

  const filteredPredictions = predictions.filter(p => {
    if (filter === 'active') return p.status === 'open';
    if (filter === 'resolved') return p.status === 'resolved';
    return true;
  });

  const tabs = [
    { id: 'chat', label: 'Chat', icon: MessageSquare },
    { id: 'predictions', label: 'Markets', icon: Plus },
    { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
  ];

  return (
    <div className="min-h-screen bg-bg">
      <div className="max-w-6xl mx-auto p-4">
        <Header />
        
        <StatsOverview
          totalPredictions={totalPredictions}
          activePredictions={activePredictions}
          totalUsers={totalUsers}
          totalVolume={totalVolume}
        />

        {/* Tab Navigation */}
        <div className="glass-card p-1 mb-6">
          <div className="flex gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-all duration-200 flex-1 justify-center ${
                  activeTab === tab.id
                    ? 'bg-accent text-bg shadow-lg'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface/50'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="animate-fade-in">
          {activeTab === 'chat' && (
            <div className="space-y-6">
              <div className="glass-card p-6">
                <h2 className="text-xl font-semibold text-text-primary mb-4">
                  Create Prediction Markets
                </h2>
                <AgentChatInput
                  variant="withSuggestionChips"
                  onCreatePrediction={handleCreatePrediction}
                />
              </div>

              {/* Recent Predictions */}
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-4">
                  Recent Predictions
                </h3>
                <div className="space-y-4">
                  {predictions.slice(0, 3).map((prediction) => (
                    <PredictionCard
                      key={prediction.predictionId}
                      prediction={prediction}
                      onVote={handleVote}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'predictions' && (
            <div className="space-y-6">
              {/* Filter Bar */}
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-text-primary">
                  Prediction Markets
                </h2>
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-text-secondary" />
                  <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value as any)}
                    className="bg-surface border border-border rounded-md px-3 py-1 text-sm text-fg focus:outline-none focus:ring-2 focus:ring-accent/50"
                  >
                    <option value="all">All Markets</option>
                    <option value="active">Active</option>
                    <option value="resolved">Resolved</option>
                  </select>
                </div>
              </div>

              {/* Predictions Grid */}
              <div className="grid gap-6 lg:grid-cols-2">
                {filteredPredictions.map((prediction) => (
                  <PredictionCard
                    key={prediction.predictionId}
                    prediction={prediction}
                    variant={prediction.status === 'resolved' ? 'resolved' : 'active'}
                    onVote={handleVote}
                  />
                ))}
              </div>

              {filteredPredictions.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🔮</div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    No predictions found
                  </h3>
                  <p className="text-text-secondary">
                    Try adjusting your filter or create a new prediction in the Chat tab.
                  </p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'leaderboard' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-text-primary">
                  Leaderboard
                </h2>
                <div className="text-sm text-text-secondary">
                  Top predictors this month
                </div>
              </div>

              <div className="space-y-4">
                {mockLeaderboard.map((entry) => (
                  <LeaderboardEntry
                    key={entry.user.userId}
                    entry={entry}
                  />
                ))}
              </div>

              {/* Achievement Showcase */}
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold text-text-primary mb-4">
                  Recent Achievements
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-center gap-3 p-3 bg-surface/50 rounded-lg">
                    <div className="text-2xl">🏆</div>
                    <div>
                      <div className="font-medium text-text-primary">Alice earned "Prophet"</div>
                      <div className="text-sm text-text-secondary">10 correct predictions in a row</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-surface/50 rounded-lg">
                    <div className="text-2xl">🚀</div>
                    <div>
                      <div className="font-medium text-text-primary">Charlie earned "Early Adopter"</div>
                      <div className="text-sm text-text-secondary">First 100 users</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
