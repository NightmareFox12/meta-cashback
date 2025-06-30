# MetaCashback

[🔙 Back to English README](../README.md)

## 🏆 Panoramica
MetaCashback è un sistema rivoluzionario che consente agli utenti di guadagnare cashback in **USDC**, una stablecoin ampiamente adottata e supportata da asset reali, per i loro acquisti tramite la **Carta MetaMask**. Gli utenti possono aumentare la percentuale di cashback partecipando allo staking o bloccando fondi in protocolli DeFi.

💡 **Più un utente interagisce con la DeFi, maggiori saranno le sue ricompense.**

🔗 Attualmente, MetaCashback funziona direttamente con il **wallet MetaMask**, offrendo un’esperienza fluida e decentralizzata.  
🔜 In futuro, è prevista l’integrazione completa con la **Carta MetaMask**, estendendo il sistema di cashback anche agli acquisti fisici effettuati con carta.

## 🚀 Flusso Utente

1. **Connessione al Wallet MetaMask** — L’utente collega il proprio wallet MetaMask all’app MetaCashback tramite MetaMask SDK e wagmi.

2. **Interazione con la DeFi** — L’utente esegue operazioni idonee (come swap, staking o depositi) dal proprio wallet MetaMask.

3. **Cashback Base** — Viene accreditato un cashback iniziale in USDC (es. 1%) in base all’attività registrata.

4. **Aumento del Cashback tramite Staking** — Se l’utente blocca USDC in un pool DeFi, il cashback può salire al 2%, 3% o più, a seconda dell’importo e della durata del blocco.

5. **Lettura del Saldo con LI.FI SDK** — Il sistema utilizza LI.FI per consultare i saldi USDC su Optimism e facilitare operazioni cross-chain.

6. **Pagamento Automatico al Wallet** — Le ricompense accumulate vengono accreditate direttamente nel wallet MetaMask dell’utente.

🔜 In futuro, questo flusso sarà esteso per includere acquisti fisici e digitali effettuati con la **Carta MetaMask**, integrando il cashback direttamente nei pagamenti con carta.

## 🎯 Livelli di Cashback

Il cashback aumenta in base al livello di partecipazione dell’utente nella DeFi:

| Livello | Importo | Cashback |
|---------|---------|----------|
| 🔰 **Esploratore** | $0 - $100 | 1% |
| 🚀 **Pioniere** | $100 - $500 | 2% |
| 🔥 **Leggendario** | $500 - $1000 | 3% |
| 👑 **Elite** | $1000+ | 4% |

🎁 **In arrivo:** Verranno aggiunte ricompense extra per ogni livello, inclusi bonus esclusivi, accesso anticipato a nuove funzionalità e vantaggi nell’ecosistema MetaCashback.

## 💰 Opzioni di Ricompensa e Rendimento

Massimizza il cashback con opzioni di prelievo flessibili e strategie DeFi progettate per ottimizzare i rendimenti.

### 🔄 Opzioni di Staking e Rendimento

Gli utenti possono aumentare il proprio cashback attraverso strategie di staking e reinvestimento automatico:

**💸 Prelievo Diretto in USDC** — Le ricompense possono essere prelevate istantaneamente nel wallet MetaMask dell’utente.

**📈 Cashback Reinvestito in Vault DeFi** — Gli utenti possono scegliere di reinvestire automaticamente il cashback in vault che generano interessi su USDC.

**🛌 Generazione di Rendimento Passivo** — Il sistema sfrutta strategie DeFi a basso rischio per generare rendimenti aggiuntivi senza gestione attiva.

💡 Queste opzioni saranno disponibili nel modulo di staking, permettendo agli utenti di scegliere tra liquidità immediata o crescita a lungo termine.

## 🔮 Piani Futuri

### 🔗 Integrazione Completa con la Carta MetaMask
L’integrazione con la carta fisica permetterà agli utenti di ricevere cashback automaticamente durante gli acquisti presso commercianti tradizionali, colmando il divario tra Web3 e il mondo reale.

### 🤝 Collaborazioni con DeFi e Organizzazioni
Saranno stabilite partnership strategiche con protocolli DeFi, DAO e piattaforme di investimento per massimizzare i fondi destinati alle ricompense e ampliare l’ecosistema MetaCashback.

### ⏳ Bonus per Fondi Bloccati
Gli utenti potranno aumentare le proprie ricompense bloccando fondi per periodi specifici:

- **Blocco di 1 mese** → Bonus cashback aggiuntivo dello **0,5%**  
- **Blocco di 3 mesi** → Bonus cashback aggiuntivo dell’**1%**  
- **Blocco di 6 mesi** → Bonus cashback aggiuntivo dell’**1,5%** + accesso a **vantaggi esclusivi**

💡 **Più lungo è l’impegno, maggiori saranno i benefici.**

### 🏆 Bonus Extra per Livello
Sarà implementato un sistema dinamico di livelli che offrirà vantaggi aggiuntivi in base alla fedeltà e all’attività dell’utente:

- Cashback aumentato  
- Accesso anticipato a nuove funzionalità  
- Partecipazione alla governance  
- Ricompense esclusive per utenti attivi

## 🛠️ Integrazione Tecnica

MetaCashback si integra con:

- **Carta MetaMask** — (Futuro) Metodo di pagamento fisico e digitale che abiliterà il cashback presso commercianti tradizionali e online.

- **LI.FI SDK** — Utilizzato per consultare i saldi USDC su reti come Optimism.

- **API DeFiLlama** — Fonte affidabile per ottenere APY in tempo reale, mostrando opportunità aggiornate di staking e vault.  
  📎 https://defillama.com/docs/api

- **Protocolli DeFi** — Infrastruttura per lo staking di USDC e la generazione di rendimento passivo, con strategie a basso rischio e alto impatto.

- **MetaMask SDK + wagmi** — Toolkit che consente una connessione diretta, sicura e fluida con il wallet dell’utente. Utilizzato per:
  - Leggere saldi ed eventi in tempo reale  
  - Firmare transazioni  
  - Interagire con lo smart contract di MetaCashback

L’integrazione con **MetaMask SDK** e **wagmi** consente:

- 📡 Ascolto degli eventi del contratto intelligente  
- 💰 Lettura del saldo dei token dell’utente  
- 🤝 Interazione diretta con il contratto MetaCashback

## 📋 Requisiti

- Wallet MetaMask  
- Carta MetaMask (Futuro)  
- USDC per lo staking (opzionale, ma consigliato per ottenere ricompense maggiori)

## 🔗 Link

https://meta-cashback.vercel.app/

## 📄 Licenza

Distribuito sotto licenza **MIT**.

## 👥 Contributi

I contributi sono benvenuti! Sentiti libero di inviare una Pull Request.

1. Fai un fork del progetto  
2. Crea il tuo branch (`git checkout -b feature/amazing-feature`)  
3. Conferma le modifiche (`git commit -m 'Add some amazing feature'`)  
4. Fai il push del branch (`git push origin feature/amazing-feature`)  
5. Apri una Pull Request