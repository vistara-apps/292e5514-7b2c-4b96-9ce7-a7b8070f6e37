# PredictaChat

Turn your group chats into dynamic prediction markets.

## Overview

PredictaChat is a Base MiniApp that allows users to create and participate in YES/NO prediction markets directly within chat environments. Built for Base Wallet users, it seamlessly integrates prediction markets into social interactions.

## Features

### 🎯 Core Features
- **In-Chat Prediction Creation**: Create prediction markets by typing structured prompts
- **Verifiable Outcome Tracking**: Transparent tracking with verifiable data sources
- **Sentiment & Trend Aggregation**: Reveal collective intelligence from user predictions
- **Gamified Leaderboards**: Compete with badges, streaks, and rankings
- **User-Generated Markets**: Community-driven prediction topics

### 🎨 Design System
- **Professional Finance Theme**: Wall Street meets crypto aesthetic
- **Multi-Chain Theme Support**: Base, Celo, Solana, Coinbase themes
- **Responsive Design**: Mobile-first approach
- **Smooth Animations**: Polished user experience

### 🔧 Technical Stack
- **Next.js 15** with App Router
- **React 19** for OnchainKit compatibility
- **OnchainKit** for Base integration
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Base L2** for blockchain operations

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Base Wallet (for testing)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd predictachat
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Add your OnchainKit API key:
```
NEXT_PUBLIC_ONCHAINKIT_API_KEY=your_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

### Creating Predictions
1. Navigate to the Chat tab
2. Type a prediction in the format: `YES/NO: Your question here?`
3. The system will automatically create an interactive prediction market
4. Other users can vote YES or NO

### Voting on Predictions
1. Browse active predictions in the Markets tab
2. Click YES or NO to cast your vote
3. Small stake amounts are automatically applied
4. Track your accuracy on the Leaderboard

### Viewing Results
1. Check the Leaderboard tab for rankings
2. View your badges and achievements
3. Track prediction outcomes and accuracy

## Architecture

### Data Models
- **User**: Profile, scores, badges, timestamps
- **Prediction**: Questions, votes, outcomes, verification
- **Vote**: User choices, stakes, timestamps
- **Badge**: Achievements, rarity levels

### Key Components
- `PredictionCard`: Display prediction markets
- `VoteButton`: YES/NO voting interface
- `LeaderboardEntry`: User rankings display
- `AgentChatInput`: Chat-based prediction creation
- `ResultBadge`: Outcome indicators

### Theme System
The app supports multiple blockchain themes:
- **Finance Pro** (default): Gold accents, professional styling
- **Base**: Base protocol blue theme
- **Celo**: Yellow accents, sharp borders
- **Solana**: Purple gradients, medium borders
- **Coinbase**: Navy background, subtle styling

## API Integration

### Planned Integrations
- **Base Minikit**: Frame interactions and social features
- **Farcaster Hubs**: User profiles and social graph
- **On-chain Indexer**: Prediction data storage
- **Oracle Services**: Outcome verification

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## Roadmap

### Phase 1 (Current)
- ✅ Core prediction market functionality
- ✅ Chat-based creation interface
- ✅ Voting and leaderboards
- ✅ Multi-theme support

### Phase 2 (Next)
- [ ] Base L2 integration
- [ ] Real oracle data feeds
- [ ] Advanced analytics
- [ ] Mobile app optimization

### Phase 3 (Future)
- [ ] Cross-chain support
- [ ] Advanced prediction types
- [ ] Social features expansion
- [ ] Monetization features

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@predictachat.com or join our Discord community.

---

Built with ❤️ for the Base ecosystem
