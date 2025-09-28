'use client';

import { useTheme } from '../components/ThemeProvider';
import { PredictionCard } from '../components/PredictionCard';
import { LeaderboardEntry } from '../components/LeaderboardEntry';
import { VoteButton } from '../components/VoteButton';
import { mockPredictions, mockLeaderboard } from '@/lib/mockData';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const themes = [
  { id: 'default', name: 'Finance Pro', description: 'Professional finance theme with gold accents' },
  { id: 'base', name: 'Base', description: 'Base protocol theme with blue accents' },
  { id: 'celo', name: 'Celo', description: 'Celo theme with yellow accents' },
  { id: 'solana', name: 'Solana', description: 'Solana theme with purple accents' },
  { id: 'coinbase', name: 'Coinbase', description: 'Coinbase theme with navy background' },
];

export default function ThemePreviewPage() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-bg">
      <div className="max-w-6xl mx-auto p-4">
        {/* Header */}
        <div className="glass-card p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link 
                href="/"
                className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to App
              </Link>
              <div>
                <h1 className="text-xl font-bold text-text-primary">Theme Preview</h1>
                <p className="text-sm text-text-secondary">Preview different blockchain themes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Theme Selector */}
        <div className="glass-card p-6 mb-6">
          <h2 className="text-lg font-semibold text-text-primary mb-4">Select Theme</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {themes.map((themeOption) => (
              <button
                key={themeOption.id}
                onClick={() => setTheme(themeOption.id as any)}
                className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                  theme === themeOption.id
                    ? 'border-accent bg-accent/10'
                    : 'border-border hover:border-accent/50 bg-surface/50'
                }`}
              >
                <div className="font-semibold text-text-primary mb-1">
                  {themeOption.name}
                </div>
                <div className="text-sm text-text-secondary">
                  {themeOption.description}
                </div>
                {theme === themeOption.id && (
                  <div className="mt-2 text-xs text-accent font-medium">
                    ✓ Currently Active
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Component Previews */}
        <div className="space-y-8">
          {/* Buttons Preview */}
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Buttons</h3>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">Primary Button</button>
              <button className="btn-secondary">Secondary Button</button>
              <VoteButton variant="yes">Vote YES</VoteButton>
              <VoteButton variant="no">Vote NO</VoteButton>
            </div>
          </div>

          {/* Badges Preview */}
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Badges</h3>
            <div className="flex flex-wrap gap-4">
              <div className="badge badge-success">Success Badge</div>
              <div className="badge badge-error">Error Badge</div>
              <div className="badge badge-warning">Warning Badge</div>
              <div className="badge bg-accent/20 text-accent border border-accent/30">Accent Badge</div>
            </div>
          </div>

          {/* Prediction Card Preview */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">Prediction Card</h3>
            <div className="max-w-2xl">
              <PredictionCard
                prediction={mockPredictions[0]}
                onVote={() => {}}
              />
            </div>
          </div>

          {/* Leaderboard Entry Preview */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">Leaderboard Entry</h3>
            <div className="max-w-3xl">
              <LeaderboardEntry entry={mockLeaderboard[0]} />
            </div>
          </div>

          {/* Color Palette */}
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Color Palette</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div className="w-full h-12 bg-bg rounded border border-border"></div>
                <div className="text-sm text-text-secondary">Background</div>
              </div>
              <div className="space-y-2">
                <div className="w-full h-12 bg-surface rounded border border-border"></div>
                <div className="text-sm text-text-secondary">Surface</div>
              </div>
              <div className="space-y-2">
                <div className="w-full h-12 bg-accent rounded"></div>
                <div className="text-sm text-text-secondary">Accent</div>
              </div>
              <div className="space-y-2">
                <div className="w-full h-12 bg-primary rounded"></div>
                <div className="text-sm text-text-secondary">Primary</div>
              </div>
            </div>
          </div>

          {/* Typography Preview */}
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Typography</h3>
            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-text-primary">Display Heading</h1>
              <h2 className="text-xl font-semibold text-text-primary">Section Heading</h2>
              <p className="text-base text-text-primary">Primary text content goes here.</p>
              <p className="text-base text-text-secondary">Secondary text content goes here.</p>
              <p className="text-sm text-text-secondary">Caption text goes here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
