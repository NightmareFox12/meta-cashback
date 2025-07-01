# MetaCashback

[🔙 Back to English README](../README.md)

## 🏆 Résumé
MetaCashback est un système révolutionnaire qui permet aux utilisateurs de gagner du cashback en **USDC**, une stablecoin largement adoptée et adossée à des actifs réels, pour leurs achats via la **Carte MetaMask**. Les utilisateurs peuvent augmenter leur pourcentage de cashback en participant à du staking ou en bloquant des fonds dans des protocoles DeFi.

💡 **Plus un utilisateur interagit avec la DeFi, plus ses récompenses sont élevées.**

🔗 Actuellement, MetaCashback fonctionne directement avec le **wallet MetaMask**, offrant une expérience fluide et décentralisée.  
🔜 À l’avenir, il est conçu pour s’intégrer pleinement à la **Carte MetaMask**, étendant ainsi le système de cashback aux achats physiques effectués avec la carte.

## 🚀 Parcours Utilisateur

1. **Connexion au Wallet MetaMask** — L’utilisateur connecte son portefeuille MetaMask à l’application MetaCashback via MetaMask SDK et wagmi.

2. **Interaction avec la DeFi** — L’utilisateur effectue des opérations éligibles (swaps, staking, dépôts) depuis son wallet MetaMask.

3. **Cashback de Base** — Un cashback initial en USDC (ex. : 1 %) est attribué en fonction de l’activité enregistrée.

4. **Augmentation du Cashback via Staking** — Si l’utilisateur bloque des USDC dans un pool DeFi, son cashback peut atteindre 2 %, 3 % ou plus, selon le montant et la durée du blocage.

5. **Lecture de Solde avec LI.FI SDK** — Le système utilise LI.FI pour consulter les soldes en USDC sur Optimism et faciliter les opérations inter-chaînes.

6. **Paiement Automatique vers le Wallet** — Les récompenses accumulées sont créditées directement sur le portefeuille MetaMask de l’utilisateur.

🔜 À l’avenir, ce parcours s’étendra aux achats physiques et numériques effectués avec la **Carte MetaMask**, intégrant le cashback directement aux paiements par carte.

## 🎯 Niveaux de Cashback

Le cashback augmente selon la participation de l’utilisateur dans la DeFi :

| Niveau | Montant | Cashback |
|--------|---------|----------|
| 🔰 **Explorateur** | $0 - $100 | 1 % |
| 🚀 **Pionnier** | $100 - $500 | 2 % |
| 🔥 **Légendaire** | $500 - $1000 | 3 % |
| 👑 **Élite** | $1000+ | 4 % |

🎁 **À venir :** Des récompenses supplémentaires seront ajoutées à chaque niveau, incluant des bonus exclusifs, un accès anticipé à de nouvelles fonctionnalités et des avantages dans l’écosystème MetaCashback.

## 💰 Options de Récompense et de Rendement

Maximisez votre cashback grâce à des options de retrait flexibles et des stratégies DeFi conçues pour optimiser les gains.

### 🔄 Options de Staking et de Rendement

Les utilisateurs peuvent maximiser leur cashback via des stratégies de staking et de réinvestissement automatique :

**💸 Retrait Direct en USDC** — Les récompenses peuvent être retirées instantanément vers le wallet MetaMask de l’utilisateur.

**📈 Cashback Réinvesti Automatiquement dans des Vaults DeFi** — Les utilisateurs peuvent choisir de réinvestir automatiquement leur cashback dans des coffres générant des intérêts sur l’USDC.

**🛌 Génération de Rendement Passif** — Le système exploite des stratégies DeFi à faible risque pour générer des rendements supplémentaires sans gestion active.

💡 Ces options seront disponibles dans le module de staking, permettant aux utilisateurs de choisir entre liquidité immédiate ou croissance à long terme.

## 🔮 Feuille de Route

### 🔗 Intégration Complète avec la Carte MetaMask
L’intégration avec la carte physique permettra aux utilisateurs de recevoir du cashback automatiquement lors de leurs achats dans des commerces traditionnels, reliant ainsi Web3 au monde réel.

### 🤝 Partenariats avec des Protocoles DeFi et Organisations
Des partenariats stratégiques seront établis avec des protocoles DeFi, des DAOs et des plateformes d’investissement pour maximiser les fonds de récompense et élargir l’écosystème MetaCashback.

### ⏳ Bonus pour Fonds Bloqués
Les utilisateurs pourront augmenter leurs récompenses en bloquant leurs fonds pendant des périodes spécifiques :

- **Blocage de 1 mois** → Bonus de **0,5 %** de cashback  
- **Blocage de 3 mois** → Bonus de **1 %** de cashback  
- **Blocage de 6 mois** → Bonus de **1,5 %** de cashback + accès à des **avantages exclusifs**

💡 **Plus l’engagement est long, plus les bénéfices sont élevés.**

### 🏆 Bonus Supplémentaires par Niveau
Un système de niveaux dynamiques sera mis en place pour offrir des avantages supplémentaires selon la fidélité et l’activité de l’utilisateur :

- Cashback augmenté  
- Accès anticipé aux nouvelles fonctionnalités  
- Participation à la gouvernance  
- Récompenses exclusives pour les utilisateurs actifs

## 🛠️ Intégration Technique

MetaCashback s’intègre avec :

- **Carte MetaMask** — (À venir) Moyen de paiement physique et numérique qui activera le cashback chez les commerçants traditionnels et en ligne.

- **LI.FI SDK** — Utilisé pour consulter les soldes en USDC sur des réseaux comme Optimism.

- **API DeFiLlama** — Source fiable pour obtenir les taux de rendement (APY) en temps réel, permettant d’afficher les opportunités de staking et de vaults à jour.  
  📎 https://defillama.com/docs/api

- **Protocoles DeFi** — Infrastructure de base pour le staking d’USDC et la génération de rendement passif, intégrant des stratégies à faible risque et à fort impact.

- **MetaMask SDK + wagmi** — Ensemble d’outils permettant une connexion directe, sécurisée et fluide avec le wallet de l’utilisateur. Utilisé pour :
  - Lire les soldes et événements en temps réel  
  - Signer des transactions  
  - Interagir avec le smart contract de MetaCashback

L’intégration avec **MetaMask SDK** et **wagmi** permet :

- 📡 L’écoute des événements du smart contract  
- 💰 La lecture du solde de tokens de l’utilisateur  
- 🤝 L’interaction directe avec le contrat de MetaCashback

## 📋 Prérequis

- Wallet MetaMask  
- Carte MetaMask (à venir)  
- USDC pour le staking (optionnel mais recommandé pour des récompenses plus élevées)

## 🔗 Liens

https://meta-cashback.vercel.app/

## 📄 Licence

Distribué sous la **Licence MIT**.

## 📄 Contrat Intelligent Déployé et Vérifié sur le réseau Optimist

https://optimistic.etherscan.io/address/0x565cca22f267e08d6d278066d3ca9018433769e1

## 👥 Contributions

Les contributions sont les bienvenues ! N’hésitez pas à soumettre une Pull Request.

1. Forkez le projet  
2. Créez votre branche (`git checkout -b feature/amazing-feature`)  
3. Commitez vos modifications (`git commit -m 'Add some amazing feature'`)  
4. Poussez la branche (`git push origin feature/amazing-feature`)  
5. Ouvrez une Pull Request