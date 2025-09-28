'use client';

import { ConnectWallet, Wallet } from '@coinbase/onchainkit/wallet';
import { Name, Avatar } from '@coinbase/onchainkit/identity';
import { useTheme } from './ThemeProvider';
import { Settings2, TrendingUp } from 'lucide-react';

export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="glass-card p-4 mb-6">
      <div className="flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-bg" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gradient">PredictaChat</h1>
            <p className="text-sm text-text-secondary">Prediction Markets in Chat</p>
          </div>
        </div>

        {/* Right side - Theme selector and Wallet */}
        <div className="flex items-center gap-4">
          {/* Theme Selector */}
          <div className="flex items-center gap-2">
            <Settings2 className="w-4 h-4 text-text-secondary" />
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value as any)}
              className="bg-surface border border-border rounded-md px-2 py-1 text-sm text-fg focus:outline-none focus:ring-2 focus:ring-accent/50"
            >
              <option value="default">Finance</option>
              <option value="base">Base</option>
              <option value="celo">Celo</option>
              <option value="solana">Solana</option>
              <option value="coinbase">Coinbase</option>
            </select>
          </div>

          {/* Wallet Connection */}
          <Wallet>
            <ConnectWallet>
              <div className="flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-lg hover:bg-surface/80 transition-all duration-200">
                <Avatar className="w-6 h-6" />
                <Name className="text-sm font-medium" />
              </div>
            </ConnectWallet>
          </Wallet>
        </div>
      </div>
    </header>
  );
}
