import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatAddress(address: string): string {
  if (!address) return '';
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function formatTimeAgo(date: Date): string {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  if (diffInSeconds < 60) return 'just now';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
  return `${Math.floor(diffInSeconds / 86400)}d ago`;
}

export function calculateAccuracy(correct: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((correct / total) * 100);
}

export function formatPercentage(value: number, total: number): string {
  if (total === 0) return '0%';
  return `${Math.round((value / total) * 100)}%`;
}

export function generatePredictionId(): string {
  return `pred_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export function generateVoteId(): string {
  return `vote_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export function parsePredictionFromText(text: string): { question: string; dueDate?: Date } | null {
  // Parse "YES/NO: Will Bitcoin hit $110K October 2025?" format
  const yesNoMatch = text.match(/^YES\/NO:\s*(.+?)(?:\s+by\s+(.+?))?(?:\?)?$/i);
  
  if (yesNoMatch) {
    const question = yesNoMatch[1].trim();
    const dateStr = yesNoMatch[2];
    
    let dueDate: Date | undefined;
    if (dateStr) {
      // Simple date parsing - in production, use a proper date parsing library
      const parsedDate = new Date(dateStr);
      if (!isNaN(parsedDate.getTime())) {
        dueDate = parsedDate;
      }
    }
    
    return { question, dueDate };
  }
  
  return null;
}

export function getVotePercentages(yesVotes: number, noVotes: number) {
  const total = yesVotes + noVotes;
  if (total === 0) return { yesPercentage: 50, noPercentage: 50 };
  
  return {
    yesPercentage: Math.round((yesVotes / total) * 100),
    noPercentage: Math.round((noVotes / total) * 100),
  };
}
