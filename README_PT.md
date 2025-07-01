# MetaCashback

[🔙 Back to English README](../README.md)

## 🏆 Visão Geral
MetaCashback é um sistema revolucionário que permite aos usuários ganharem cashback em **USDC**, uma stablecoin amplamente adotada e lastreada por ativos reais, por suas compras com o **Cartão MetaMask**. Os usuários podem aumentar sua porcentagem de cashback participando de staking ou bloqueando fundos em protocolos DeFi.

💡 **Quanto mais um usuário interage com a DeFi, maiores são as recompensas.**

🔗 Atualmente, o MetaCashback funciona diretamente com a **carteira MetaMask**, oferecendo uma experiência fluida e descentralizada.  
🔜 No futuro, está planejada a integração completa com o **Cartão MetaMask**, estendendo o sistema de cashback para compras físicas realizadas com o cartão.

## 🚀 Fluxo do Usuário

1. **Conexão com a Carteira MetaMask** — O usuário conecta sua carteira MetaMask ao aplicativo MetaCashback usando MetaMask SDK e wagmi.

2. **Interação com DeFi** — O usuário realiza operações elegíveis (como swaps, staking ou depósitos) a partir da sua carteira MetaMask.

3. **Cashback Base** — Um cashback inicial em USDC (ex: 1%) é concedido com base na atividade registrada.

4. **Aumento de Cashback via Staking** — Se o usuário bloquear USDC em um pool DeFi, o cashback pode aumentar para 2%, 3% ou mais, dependendo do valor e do tempo de bloqueio.

5. **Leitura de Saldo com LI.FI SDK** — O sistema utiliza LI.FI para consultar saldos de USDC na rede Optimism e facilitar operações cross-chain.

6. **Pagamento Automático para a Carteira** — As recompensas acumuladas são creditadas diretamente na carteira MetaMask do usuário.

🔜 No futuro, esse fluxo será expandido para incluir compras físicas e digitais feitas com o **Cartão MetaMask**, integrando o cashback diretamente aos pagamentos com cartão.

## 🎯 Níveis de Cashback

O cashback aumenta conforme o nível de participação do usuário na DeFi:

| Nível | Quantia | Cashback |
|-------|---------|----------|
| 🔰 **Explorador** | $0 - $100 | 1% |
| 🚀 **Pioneiro** | $100 - $500 | 2% |
| 🔥 **Lendário** | $500 - $1000 | 3% |
| 👑 **Elite** | $1000+ | 4% |

🎁 **Em breve:** Recompensas adicionais serão adicionadas a cada nível, incluindo bônus exclusivos, acesso antecipado a novos recursos e vantagens dentro do ecossistema MetaCashback.

## 💰 Opções de Recompensa e Rendimento

Maximize seu cashback com opções de saque flexíveis e estratégias DeFi projetadas para otimizar os ganhos.

### 🔄 Opções de Staking e Rendimento

Os usuários podem maximizar seu cashback por meio de estratégias de staking e reinvestimento automático:

**💸 Saque Direto em USDC** — As recompensas podem ser sacadas instantaneamente para a carteira MetaMask do usuário.

**📈 Cashback Reinvestido Automaticamente em Vaults DeFi** — Os usuários podem optar por reinvestir automaticamente seu cashback em cofres que geram juros sobre USDC.

**🛌 Geração de Rendimento Passivo** — O sistema utiliza estratégias DeFi de baixo risco para gerar retornos adicionais sem necessidade de gestão ativa.

💡 Essas opções estarão disponíveis dentro do módulo de staking, permitindo que os usuários escolham entre liquidez imediata ou crescimento a longo prazo.

## 🔮 Planos Futuros

### 🔗 Integração Total com o Cartão MetaMask
A integração com o cartão físico permitirá que os usuários recebam cashback automaticamente ao realizar compras em estabelecimentos tradicionais, conectando o Web3 ao mundo real.

### 🤝 Parcerias com DeFi e Organizações
Parcerias estratégicas serão estabelecidas com protocolos DeFi, DAOs e plataformas de investimento para maximizar os fundos de recompensa e expandir o ecossistema MetaCashback.

### ⏳ Bônus por Tempo de Bloqueio
Os usuários poderão aumentar suas recompensas bloqueando fundos por períodos específicos:

- **Bloqueio de 1 mês** → Bônus adicional de **0,5%** no cashback  
- **Bloqueio de 3 meses** → Bônus adicional de **1%** no cashback  
- **Bloqueio de 6 meses** → Bônus adicional de **1,5%** no cashback + acesso a **vantagens exclusivas**

💡 **Quanto maior o compromisso, maiores os benefícios.**

### 🏆 Bônus Extras por Nível
Um sistema de níveis dinâmico será implementado para oferecer benefícios adicionais com base na fidelidade e atividade do usuário:

- Cashback aumentado  
- Acesso antecipado a novos recursos  
- Participação em governança  
- Recompensas exclusivas por conquistas

## 🛠️ Implementação Técnica

MetaCashback integra-se com:

- **Cartão MetaMask** — (Futuro) Meio de pagamento físico e digital que ativará o cashback em lojas físicas e plataformas online.

- **LI.FI SDK** — Usado para consultar saldos de USDC em redes como Optimism.

- **API DeFiLlama** — Fonte confiável para obter taxas de rendimento (APY) em tempo real, exibindo oportunidades atualizadas de staking e vaults.  
  📎 https://defillama.com/docs/api

- **Protocolos DeFi** — Infraestrutura para staking de USDC e geração de rendimento passivo, com estratégias de baixo risco e alto impacto.

- **MetaMask SDK + wagmi** — Conjunto de ferramentas que permite uma conexão direta, segura e fluida com a carteira do usuário. Usado para:
  - Ler saldos e eventos em tempo real  
  - Assinar transações  
  - Interagir com o contrato inteligente do MetaCashback

A integração com **MetaMask SDK** e **wagmi** permite:

- 📡 Escutar eventos do contrato inteligente  
- 💰 Ler o saldo de tokens do usuário  
- 🤝 Interagir diretamente com o contrato do MetaCashback

## 📋 Requisitos

- Carteira MetaMask  
- Cartão MetaMask (Futuro)  
- USDC para staking (opcional, mas recomendado para maiores recompensas)

## 🔗 Links

https://meta-cashback.vercel.app/

## 📄 Licença

Distribuído sob a **Licença MIT**.

## 📄 Contrato Inteligente Implantado e Verificado na rede Optimist

https://optimistic.etherscan.io/address/0x565cca22f267e08d6d278066d3ca9018433769e1


## 👥 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para enviar um Pull Request.

1. Faça um fork do projeto  
2. Crie sua branch (`git checkout -b feature/amazing-feature`)  
3. Confirme suas alterações (`git commit -m 'Add some amazing feature'`)  
4. Envie para a branch (`git push origin feature/amazing-feature`)  
5. Abra um Pull Request