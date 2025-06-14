# MetaCashback

## This document is available in other languages:
- 🇪🇸 **Español** - [README_ES.md](README_ES.md)
- 🇮🇹 **Italiano** - [README_IT.md](README_IT.md)
- 🇧🇷 **Português** - [README_PT.md](README_PT.md)
- 🇫🇷 **Français** - [README_FR.md](README_FR.md)
- 🇨🇳 **中文** - [README_ZH.md](README_ZH.md)

## 🏆 Overview

MetaCashback is a revolutionary system that allows users to earn cashback in USDC for their purchases with the MetaMask Card. Users can increase their cashback percentage by participating in staking or locking funds in DeFi protocols.

> 💡 **The more a user interacts with DeFi, the greater the rewards they receive.**

## 🚀 User Flow

1. **Purchase with MetaMask Card** — The user pays with the card at any merchant.
2. **Base Cashback** — Receives an initial refund in USDC (example: 1%).
3. **Cashback Increase via Staking** — If the user locks USDC in a DeFi pool, their cashback can rise to 2%, 3%, or more, depending on the amount locked.
4. **Automatic Conversion with LI.FI SDK** — The system uses LI.FI to move rewards across chains and ensure efficient liquidity.
5. **Automated Wallet Payment** — Accumulated rewards are credited directly to the user's MetaMask wallet.

## 🎯 Cashback Levels

Cashback increases according to the user's participation in DeFi:

| Level | Amount Locked | Cashback | Benefits |
|-------|--------------|----------|----------|
| 🔰 **Explorer** | $0 - $100 | 1% | Basic cashback |
| 🚀 **Pioneer** | $100 - $500 | 2% | Access to perks |
| 🔥 **Legendary** | $500 - $1000 | 3% | Exclusive bonuses |
| 👑 **Elite** | $1000+ | 4% | Premium benefits |

## 💰 Reward & Yield Options

Maximize cashback with flexible withdrawal options and DeFi strategies designed to optimize earnings.

### ⏳ Bonuses for Locked Funds

Users can increase their rewards by maintaining their funds locked for specified periods:

- **1-month lock** → Additional 0.5% cashback bonus
- **3-month lock** → Additional 1% cashback bonus
- **6-month lock** → Additional 1.5% cashback bonus + access to exclusive perks

> 💡 **The longer the commitment, the greater the benefits.**

### 🔄 Cashback Withdrawal Options

Users can choose how to receive their rewards based on their preferences:

- **💸 Directly in USDC** — Instant withdrawal to their MetaMask wallet.
- **🔄 Converted to another token** — Automatic swaps using the LI.FI SDK across chains.
- **📈 Reinvested in DeFi** — Option to reinvest cashback directly into yield pools.

### 🏦 Savings Mode: Passive Yield

A smart option for users who want to maximize their rewards effortlessly:

- **Cashback Auto-Invested in DeFi Vaults** — Allocates refunds to a vault that generates interest on USDC.
- **Passive Yield Generation** — Leverages low-risk DeFi strategies to earn extra returns without active management.

## 🛠️ Technical Implementation

MetaCashback integrates with:

- **MetaMask Card** for payment processing
- **LI.FI SDK** for cross-chain transfers and swaps
- **DeFi protocols** for staking and yield generation

## 📋 Requirements

- MetaMask wallet
- MetaMask Card
- USDC for staking (optional, but recommended for higher rewards)

## 💻 Technologies Used
MetaCashback uses several key tools and libraries to ensure smooth blockchain interaction, a robust user experience, and an efficient development environment:

1. **Wagmi:** This React Hooks library for Ethereum simplifies interacting with smart contracts and wallets. Wagmi makes it easy to connect the app to the blockchain, read and write contract data, and manage transactions. This is crucial for staking functionalities and calculating cashback based on user DeFi interaction.

2. **MetaMask SDK:** The MetaMask SDK is essential for allowing users to connect their MetaMask wallets directly to the MetaCashback application. It provides a secure and familiar interface for authorizing transactions, managing signatures, and general blockchain interaction, ensuring users can easily perform their cashback and staking operations.

3. **Rainbow Kit:** Complementing Wagmi and MetaMask SDK, Rainbow Kit offers a pre-designed and highly customizable user interface for wallet connection. It enhances the user experience by providing an attractive and easy-to-use connection modal, compatible with multiple wallets beyond MetaMask, which expands MetaCashback's accessibility.

4. **Hardhat:** Hardhat is used for developing and deploying the smart contracts that govern the cashback system and interactions with DeFi protocols. This flexible development environment allows for efficient compilation, testing, and deployment of smart contracts, which is crucial for the security and reliability of MetaCashback's business rules.

5. **Next.js:** MetaCashback's user interface is built with Next.js, a React.js framework that facilitates the development of high-performance web applications. Next.js provides features like server-side rendering (SSR) and static site generation (SSG), contributing to fast loading, better search engine optimization (SEO), and a smooth, responsive user experience.

These technologies, together, form the technical foundation of MetaCashback, enabling the creation of a decentralized, secure, and user-friendly system to maximize cashback rewards in the DeFi ecosystem.

## 🔗 Links

## 📄 License

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


