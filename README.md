# MetaCashback

## This document is available in other languages:
- 🇪🇸 **Español** - [README_ES.md](README_ES.md)
- 🇮🇹 **Italiano** - [README_IT.md](README_IT.md)
- 🇧🇷 **Português** - [README_PT.md](README_PT.md)
- 🇫🇷 **Français** - [README_FR.md](README_FR.md)
- 🇨🇳 **中文** - [README_ZH.md](README_ZH.md)

## 🏆 Overview
MetaCashback is a revolutionary system that allows users to earn cashback in **USDC**, a widely adopted stablecoin backed by real-world assets, for their purchases using the **MetaMask Card**. Users can increase their cashback percentage by participating in staking or locking funds in DeFi protocols.

💡 **The more a user interacts with DeFi, the greater the rewards.**

🔗 Currently, MetaCashback operates directly with the **MetaMask wallet**, enabling a seamless and decentralized experience.  
🔜 In the future, it is designed to fully integrate with the **MetaMask Card**, extending the cashback system to physical purchases made with the card.

## 🚀 User Flow

1. **Connect MetaMask Wallet** — The user connects their MetaMask wallet to the MetaCashback app using MetaMask SDK and wagmi.

2. **DeFi Interaction** — The user performs eligible operations (such as swaps, staking, or deposits) from their MetaMask wallet.

3. **Base Cashback** — An initial cashback in USDC (e.g., 1%) is granted based on the user’s activity.

4. **Increased Cashback via Staking** — If the user locks USDC in a DeFi pool, their cashback can increase to 2%, 3%, or more, depending on the amount and duration locked.

5. **Balance Reading with LI.FI SDK** — The system uses LI.FI to check USDC balances on Optimism and facilitate efficient operations.

6. **Automatic Wallet Payout** — Accumulated rewards are credited directly to the user’s MetaMask wallet.

🔜 In the future, this flow will expand to include physical and digital purchases made with the **MetaMask Card**, integrating cashback directly into card payments.

## 🎯 Cashback Tiers

Cashback increases based on the user’s DeFi participation:

| Tier | Amount | Cashback |
|------|--------|----------|
| 🔰 **Explorer** | $0 - $100 | 1% |
| 🚀 **Pioneer** | $100 - $500 | 2% |
| 🔥 **Legendary** | $500 - $1000 | 3% |
| 👑 **Elite** | $1000+ | 4% |

🎁 **Coming Soon:** Additional rewards will be added to each tier, including exclusive bonuses, early access to new features, and perks within the MetaCashback ecosystem.

## 💰 Reward & Yield Options

Maximize cashback with flexible withdrawal options and DeFi strategies designed to optimize returns.

### 🔄 Staking & Yield Options

Users can maximize their cashback through staking and auto-reinvestment strategies:

**💸 Direct Withdrawal in USDC** — Rewards can be instantly withdrawn to the user’s MetaMask wallet.

**📈 Auto-Reinvest Cashback in DeFi Vaults** — Users can choose to automatically reinvest their cashback into vaults that generate interest on USDC.

**🛌 Passive Yield Generation** — The system leverages low-risk DeFi strategies to generate additional returns with no active management required.

💡 These options will be available within the staking module, allowing users to choose between immediate liquidity or long-term growth.

## 🔮 Future Plans

### 🔗 Full Integration with MetaMask Card
The full integration with the physical card will allow users to earn cashback automatically when making purchases at traditional merchants, bridging the gap between Web3 and the real world.

### 🤝 Partnerships with DeFi and Organizations
Strategic partnerships will be established with DeFi protocols, DAOs, and investment platforms to maximize the reward pool and expand the MetaCashback ecosystem.

### ⏳ Time-Locked Bonus Rewards
Users can boost their rewards by locking funds for specific periods:

- **1-month lock** → Additional **0.5%** cashback bonus  
- **3-month lock** → Additional **1%** cashback bonus  
- **6-month lock** → Additional **1.5%** cashback bonus + access to **exclusive perks**

💡 **The longer the commitment, the greater the benefits.**

### 🏆 Extra Tier Bonuses
A dynamic tier system will be implemented to grant additional benefits based on user loyalty and activity:

- Increased cashback
- Early access to new features
- Governance participation
- Exclusive achievement rewards

## 🛠️ Technical Implementation

MetaCashback integrates with:

- **MetaMask Card** — (Future) A physical and digital payment method that will enable cashback activation in traditional and online merchants.

- **LI.FI SDK** — Used to query USDC balances on networks like Optimism.

- **DeFiLlama API** — A reliable source for real-time APY data, enabling up-to-date staking and vault opportunities.  
  📎 https://defillama.com/docs/api

- **DeFi Protocols** — Core infrastructure for USDC staking and passive yield generation, integrating low-risk, high-impact strategies.

- **MetaMask SDK + wagmi** — A toolkit enabling a direct, secure, and seamless connection with the user’s wallet. Used to:
  - Read balances and real-time events
  - Sign transactions
  - Interact with the MetaCashback smart contract

The integration with **MetaMask SDK** and **wagmi** enables:

- 📡 Listening to smart contract events  
- 💰 Reading user token balances  
- 🤝 Direct interaction with the MetaCashback contract

## 📋 Requirements

- MetaMask Wallet  
- MetaMask Card (Future)  
- USDC for staking (optional, but recommended for higher rewards)

## 🔗 Links

https://meta-cashback.vercel.app/

## 📄 License

Distributed under the **MIT License**.

## 📄 Smart Contract Deployed and Verified on the Optimist network

https://optimistic.etherscan.io/address/0x565cca22f267e08d6d278066d3ca9018433769e1

## 👥 Contributions

Contributions are welcome! Feel free to submit a Pull Request.

1. Fork the project  
2. Create your feature branch (`git checkout -b feature/amazing-feature`)  
3. Commit your changes (`git commit -m 'Add some amazing feature'`)  
4. Push to the branch (`git push origin feature/amazing-feature`)  
5. Open a Pull Request