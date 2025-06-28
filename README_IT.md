# MetaCashback

[🔙 Back to English README](../README.md)

## 🏆 Panoramica
MetaCashback è un sistema rivoluzionario che permette agli utenti di guadagnare cashback in USDC per i loro acquisti con la MetaMask Card. Gli utenti possono aumentare la loro percentuale di cashback partecipando allo staking o bloccando fondi in protocolli DeFi.

> 💡 **Più un utente interagisce con DeFi, maggiori sono le ricompense che riceve.**

## 🚀 Flusso Utente

1. **Acquisto con MetaMask Card** — L'utente paga con la carta presso qualsiasi commerciante.
2. **Cashback Base** — Riceve un rimborso iniziale in USDC (esempio: 1%).
3. **Aumento del Cashback tramite Staking** — Se l'utente blocca USDC in un pool DeFi, il suo cashback può salire al 2%, 3% o più, a seconda dell'importo bloccato.
4. **Lettura del Saldo con LI.FI SDK** — Il sistema utilizza LI.FI per leggere i saldi USDC su Optimism e supportare operazioni efficienti.
5. **Pagamento Automatico al Portafoglio** — Le ricompense accumulate vengono accreditate direttamente nel portafoglio MetaMask dell'utente.

## 🎯 Livelli di Cashback

Il cashback aumenta in base alla partecipazione dell'utente in DeFi:

| Livello | Importo Bloccato | Cashback | Benefici |
|---------|-----------------|----------|----------|
| 🔰 **Esploratore** | $0 - $100 | 1% | Cashback base |
| 🚀 **Pioniere** | $100 - $500 | 2% | Accesso a vantaggi |
| 🔥 **Leggendario** | $500 - $1000 | 3% | Bonus esclusivi |
| 👑 **Élite** | $1000+ | 4% | Benefici premium |

## 💰 Opzioni di Ricompensa e Rendimento

Massimizza il cashback con opzioni di prelievo flessibili e strategie DeFi progettate per ottimizzare i guadagni.

### ⏳ Bonus per Fondi Bloccati

Gli utenti possono aumentare le loro ricompense mantenendo i loro fondi bloccati per periodi specifici:

- **Blocco di 1 mese** → Bonus cashback aggiuntivo dello 0.5%
- **Blocco di 3 mesi** → Bonus cashback aggiuntivo dell'1%
- **Blocco di 6 mesi** → Bonus cashback aggiuntivo dell'1.5% + accesso a vantaggi esclusivi

> 💡 **Più lungo è l'impegno, maggiori sono i benefici.**

### 🔄 Opzioni di Prelievo Cashback

Gli utenti possono scegliere come ricevere le loro ricompense in base alle loro preferenze:

- **💸 Direttamente in USDC** — Prelievo istantaneo al loro portafoglio MetaMask.
- **🔄 Convertito in un altro token** — Scambi automatici utilizzando il LI.FI SDK tra le blockchain.
- **📈 Reinvestito in DeFi** — Opzione di reinvestire il cashback direttamente in pool di rendimento.

### 🏦 Modalità Risparmio: Rendimento Passivo

Un'opzione intelligente per gli utenti che desiderano massimizzare le loro ricompense senza sforzo:

- **Cashback Auto-Investito in Vault DeFi** — Alloca i rimborsi a una vault che genera interessi su USDC.
- **Generazione di Rendimento Passivo** — Sfrutta strategie DeFi a basso rischio per ottenere rendimenti aggiuntivi senza gestione attiva.

## 🛠️ Implementazione Tecnica

MetaCashback si integra con:

**Carta MetaMask** per l'elaborazione dei pagamenti  

**LI.FI SDK** per la lettura del saldo su Optimism  

**DeFiLlama API** per mostrare l'APY in tempo reale: https://defillama.com/docs/api  

**Protocolli DeFi** per staking e generazione di rendimento


## 📋 Requisiti

- **Portafoglio MetaMask**
- **MetaMask Card**
- **USDC per lo staking** (opzionale, ma consigliato per ricompense più elevate)

## 💻 Tecnologie Utilizzate 
MetaCashback impiega diversi strumenti e librerie chiave per garantire un'interazione fluida con la blockchain, un'esperienza utente robusta e un ambiente di sviluppo efficiente:

1. **Wagmi:** Questa libreria di React Hooks per Ethereum facilita l'interazione con smart contract e wallet. Wagmi semplifica la connessione dell'applicazione alla blockchain, la lettura e scrittura di dati sui contratti e la gestione delle transazioni. Questo è fondamentale per le funzionalità di staking e il calcolo del cashback basato sull'interazione DeFi dell'utente.

2. **MetaMask SDK:** Il MetaMask SDK è essenziale per consentire agli utenti di connettere i loro wallet MetaMask direttamente all'applicazione MetaCashback. Fornisce un'interfaccia sicura e familiare per l'autorizzazione delle transazioni, la gestione delle firme e l'interazione generale con la blockchain, garantendo che gli utenti possano eseguire le loro operazioni di cashback e staking in modo semplice.

3. **Rainbow Kit:** A complemento di Wagmi e MetaMask SDK, Rainbow Kit offre un'interfaccia utente pre-progettata e altamente personalizzabile per la connessione del wallet. Migliora l'esperienza dell'utente fornendo un modale di connessione attraente e facile da usare, compatibile con più wallet oltre a MetaMask, il che espande l'accessibilità di MetaCashback.

4. **Hardhat:** Per lo sviluppo e il deployment degli smart contract che regolano il sistema di cashback e le interazioni con i protocolli DeFi, viene utilizzato Hardhat. Questo ambiente di sviluppo flessibile consente di compilare, testare e deployare contratti intelligenti in modo efficiente, il che è cruciale per la sicurezza e l'affidabilità delle regole di business di MetaCashback.

5. **Next.js:** L'interfaccia utente di MetaCashback è costruita con Next.js, un framework di React.js che facilita lo sviluppo di applicazioni web ad alte prestazioni. Next.js offre funzionalità come il rendering lato server (SSR) e la generazione di siti statici (SSG), contribuendo a un caricamento rapido, una migliore ottimizzazione per i motori di ricerca (SEO) e un'esperienza utente fluida e reattiva.

Queste tecnologie, insieme, formano la base tecnica di MetaCashback, consentendo la creazione di un sistema decentralizzato, sicuro e facile da usare per massimizzare le ricompense di cashback nell'ecosistema DeFi.

## 🔗 Collegamenti

https://meta-cashback.vercel.app/

## 📄 Licenza

Distribuito sotto la **Licenza MIT**.

## 👥 Contributi

I contributi sono benvenuti! Non esitare a inviare una Pull Request.

1. **Forka** il progetto
2. **Crea il tuo ramo di funzionalità** (`git checkout -b feature/amazing-feature`)
3. **Effettua il commit** delle tue modifiche (`git commit -m 'Add some amazing feature'`)
4. **Effettua il push** sul ramo (`git push origin feature/amazing-feature`)
5. **Apri una Pull Request`
