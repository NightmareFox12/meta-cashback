# MetaCashback

[🔙 Back to English README](../README.md)

## 🏆 Aperçu
MetaCashback est un système révolutionnaire qui permet aux utilisateurs de gagner du cashback en USDC pour leurs achats avec la carte MetaMask. Les utilisateurs peuvent augmenter leur pourcentage de cashback en participant au staking ou en bloquant des fonds dans des protocoles DeFi.

> 💡 **Plus un utilisateur interagit avec la DeFi, plus les récompenses qu'il reçoit sont importantes.**

## 🚀 Flux Utilisateur

1. **Achat avec la carte MetaMask** — L'utilisateur paie avec la carte chez n'importe quel commerçant.
2. **Cashback de base** — Reçoit un remboursement initial en USDC (exemple : 1 %).
3. **Augmentation du cashback via le Staking** — Si l'utilisateur bloque des USDC dans un pool DeFi, son cashback peut atteindre 2 %, 3 % ou plus, selon le montant bloqué.
4. **Lecture de Solde avec le SDK LI.FI** — Le système utilise LI.FI pour lire les soldes USDC sur Optimism et garantir des opérations efficaces.
5. **Paiement automatique du portefeuille** — Les récompenses accumulées sont créditées directement sur le portefeuille MetaMask de l'utilisateur.

## 🎯 Niveaux de Cashback

Le cashback augmente en fonction de la participation de l'utilisateur à la DeFi :

| Niveau | Montant Verrouillé | Cashback | Avantages |
|--------|-------------------|----------|-----------|
| 🔰 **Explorateur** | $0 - $100 | 1% | Cashback de base |
| 🚀 **Pionnier** | $100 - $500 | 2% | Accès à des avantages |
| 🔥 **Légendaire** | $500 - $1000 | 3% | Bonus exclusifs |
| 👑 **Élite** | $1000+ | 4% | Avantages premium |

## 💰 Options de Récompense et de Rendement

Maximisez le cashback avec des options de retrait flexibles et des stratégies DeFi conçues pour optimiser les gains.

### ⏳ Bonus pour les Fonds Verrouillés

Les utilisateurs peuvent augmenter leurs récompenses en maintenant leurs fonds verrouillés pendant des périodes spécifiées :

- **Verrouillage de 1 mois** → Bonus cashback supplémentaire de 0.5%
- **Verrouillage de 3 mois** → Bonus cashback supplémentaire de 1%
- **Verrouillage de 6 mois** → Bonus cashback supplémentaire de 1.5% + accès à des avantages exclusifs

> 💡 **Plus l'engagement est long, plus les avantages sont importants.**

### 🔄 Options de Retrait de Cashback

Les utilisateurs peuvent choisir comment recevoir leurs récompenses en fonction de leurs préférences :

- **💸 Directement en USDC** — Retrait instantané vers leur portefeuille MetaMask.
- **🔄 Converti en un autre token** — Échanges automatiques utilisant le SDK LI.FI entre les chaînes.
- **📈 Réinvesti en DeFi** — Option de réinvestir le cashback directement dans des pools de rendement.

### 🏦 Mode Épargne : Rendement Passif

Une option intelligente pour les utilisateurs qui souhaitent maximiser leurs récompenses sans effort :

- **Cashback Auto-Investi dans des Vaults DeFi** — Alloue les remboursements à un vault qui génère des intérêts sur l'USDC.
- **Génération de Rendement Passif** — Tire parti des stratégies DeFi à faible risque pour obtenir des rendements supplémentaires sans gestion active.

## 🛠️ Implémentation Technique

MetaCashback s’intègre avec :

**Carte MetaMask** pour le traitement des paiements  

**LI.FI SDK** pour la lecture des soldes sur Optimism  

**API Return Finance** pour afficher l’APY en temps réel  

**Protocoles DeFi** pour le staking et la génération de rendement

## 📋 Exigences

- **Portefeuille MetaMask**
- **Carte MetaMask**
- **USDC pour le staking** (facultatif, mais recommandé pour des récompenses plus élevées)

## 💻 Technologies Utilisées 

MetaCashback utilise plusieurs outils et bibliothèques clés pour assurer une interaction fluide avec la blockchain, une expérience utilisateur robuste et un environnement de développement efficace :

1. **Wagmi:** Cette bibliothèque de hooks React pour Ethereum facilite l'interaction avec les contrats intelligents et les portefeuilles. Wagmi simplifie la connexion de l'application à la blockchain, la lecture et l'écriture de données de contrat, et la gestion des transactions. Ceci est crucial pour les fonctionnalités de staking et le calcul du cashback basé sur l'interaction DeFi de l'utilisateur.

2. **MetaMask SDK:** Le MetaMask SDK est essentiel pour permettre aux utilisateurs de connecter leurs portefeuilles MetaMask directement à l'application MetaCashback. Il fournit une interface sécurisée et familière pour l'autorisation des transactions, la gestion des signatures et l'interaction générale avec la blockchain, garantissant que les utilisateurs peuvent effectuer leurs opérations de cashback et de staking facilement.

3. **Rainbow Kit:** En complément de Wagmi et du MetaMask SDK, Rainbow Kit offre une interface utilisateur pré-conçue et hautement personnalisable pour la connexion de portefeuille. Il améliore l'expérience utilisateur en fournissant un modal de connexion attrayant et facile à utiliser, compatible avec plusieurs portefeuilles en plus de MetaMask, ce qui étend l'accessibilité de MetaCashback.

4. **Hardhat:** Pour le développement et le déploiement des contrats intelligents qui régissent le système de cashback et les interactions avec les protocoles DeFi, Hardhat est utilisé. Cet environnement de développement flexible permet de compiler, tester et déployer des contrats intelligents de manière efficace, ce qui est crucial pour la sécurité et la fiabilité des règles métier de MetaCashback.

5- **Next.js:** L'interface utilisateur de MetaCashback est construite avec Next.js, un framework React.js qui facilite le développement d'applications web haute performance. Next.js offre des fonctionnalités telles que le rendu côté serveur (SSR) et la génération de sites statiques (SSG), contribuant à un chargement rapide, une meilleure optimisation pour les moteurs de recherche (SEO) et une expérience utilisateur fluide et réactive.

Ces technologies, ensemble, forment la base technique de MetaCashback, permettant la création d'un système décentralisé, sécurisé et convivial pour maximiser les récompenses de cashback dans l'écosystème DeFi.

## 🔗 Liens

https://meta-cashback.vercel.app/

## 📄 Licence

Distribué sous la **Licence MIT**.

## 👥 Contributions

Les contributions sont les bienvenues ! N'hésitez pas à soumettre une Pull Request.

1. **Forkez** le projet
2. **Créez votre branche de fonctionnalité** (`git checkout -b feature/amazing-feature`)
3. **Commitez vos modifications** (`git commit -m 'Ajouter une fonctionnalité incroyable'`)
4. **Poussez vers la branche** (`git push origin feature/amazing-feature`)
5. **Ouvrez une Pull Request**
