'use client';

import { useState } from 'react';
import { Send, Sparkles } from 'lucide-react';
import { parsePredictionFromText } from '@/lib/utils';

interface AgentChatInputProps {
  variant?: 'withSuggestionChips';
  onSendMessage?: (message: string) => void;
  onCreatePrediction?: (question: string, dueDate?: Date) => void;
}

const suggestionChips = [
  'YES/NO: Will BTC reach $100k by end of 2024?',
  'YES/NO: Will Ethereum merge to PoS succeed?',
  'YES/NO: Will Base TVL exceed $5B this year?',
  'YES/NO: Will AI tokens outperform BTC in 2024?',
];

export function AgentChatInput({ 
  variant = 'withSuggestionChips',
  onSendMessage,
  onCreatePrediction 
}: AgentChatInputProps) {
  const [message, setMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isProcessing) return;

    setIsProcessing(true);
    
    try {
      // Check if this is a prediction format
      const predictionData = parsePredictionFromText(message);
      
      if (predictionData && onCreatePrediction) {
        onCreatePrediction(predictionData.question, predictionData.dueDate);
      } else if (onSendMessage) {
        onSendMessage(message);
      }
      
      setMessage('');
    } catch (error) {
      console.error('Error processing message:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setMessage(suggestion);
  };

  return (
    <div className="space-y-4">
      {/* Suggestion Chips */}
      {variant === 'withSuggestionChips' && (
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-text-secondary">
            <Sparkles className="w-4 h-4" />
            <span>Try these prediction prompts:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {suggestionChips.map((chip, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(chip)}
                className="px-3 py-2 bg-surface/50 hover:bg-surface border border-border/50 rounded-lg text-sm text-text-secondary hover:text-text-primary transition-all duration-200 hover:scale-105"
              >
                {chip}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Chat Input */}
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex gap-3">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type 'YES/NO: Your prediction question?' to create a market..."
            className="chat-input flex-1"
            disabled={isProcessing}
          />
          <button
            type="submit"
            disabled={!message.trim() || isProcessing}
            className="btn-primary px-4 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isProcessing ? (
              <div className="w-5 h-5 border-2 border-bg border-t-transparent rounded-full animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
          </button>
        </div>
        
        {/* Helper Text */}
        <div className="mt-2 text-xs text-text-secondary">
          💡 Start with "YES/NO:" to create a prediction market, or just chat normally
        </div>
      </form>
    </div>
  );
}
