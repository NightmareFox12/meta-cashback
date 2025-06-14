# MetaCashback

[🔙 Back to English README](../README.md)

## 🏆 Visão Geral
MetaCashback é um sistema revolucionário que permite aos usuários ganhar cashback em USDC por suas compras com o Cartão MetaMask. Os usuários podem aumentar sua porcentagem de cashback participando de staking ou bloqueando fundos em protocolos DeFi.

> 💡 **Quanto mais um usuário interage com DeFi, maiores as recompensas que ele recebe.**

## 🚀 Fluxo do Usuário

1. **Compra com o Cartão MetaMask** — O usuário paga com o cartão em qualquer comerciante.
2. **Cashback Base** — Recebe um reembolso inicial em USDC (exemplo: 1%).
3. **Aumento de Cashback via Staking** — Se o usuário bloquear USDC em um pool DeFi, seu cashback pode subir para 2%, 3% ou mais, dependendo do valor bloqueado.
4. **Conversão Automática com LI.FI SDK** — O sistema usa LI.FI para mover recompensas entre cadeias e garantir liquidez eficiente.
5. **Pagamento Automático da Carteira** — As recompensas acumuladas são creditadas diretamente na carteira MetaMask do usuário.

## 🎯 Níveis de Cashback

O cashback aumenta de acordo com a participação do usuário em DeFi:

| Nível | Valor Bloqueado | Cashback | Benefícios |
|-------|----------------|----------|------------|
| 🔰 **Explorador** | $0 - $100 | 1% | Cashback básico |
| 🚀 **Pioneiro** | $100 - $500 | 2% | Acesso a vantagens |
| 🔥 **Lendário** | $500 - $1000 | 3% | Bônus exclusivos |
| 👑 **Elite** | $1000+ | 4% | Benefícios premium |

## 💰 Opções de Recompensa e Rendimento

Maximize o cashback com opções de saque flexíveis e estratégias DeFi projetadas para otimizar os ganhos.

### ⏳ Bônus para Fundos Bloqueados

Os usuários podem aumentar suas recompensas mantendo seus fundos bloqueados por períodos especificados:

- **Bloqueio de 1 mês** → Bônus adicional de 0.5% de cashback
- **Bloqueio de 3 meses** → Bônus adicional de 1% de cashback
- **Bloqueio de 6 meses** → Bônus adicional de 1.5% de cashback + acesso a vantagens exclusivas

> 💡 **Quanto maior o compromisso, maiores os benefícios.**

### 🔄 Opções de Saque de Cashback

Os usuários podem escolher como receber suas recompensas com base em suas preferências:

- **💸 Diretamente em USDC** — Saque instantâneo para sua carteira MetaMask.
- **🔄 Convertido para outro token** — Trocas automáticas usando o LI.FI SDK entre cadeias.
- **📈 Reinvestido em DeFi** — Opção de reinvestir o cashback diretamente em pools de rendimento.

### 🏦 Modo Poupança: Rendimento Passivo

Uma opção inteligente para usuários que desejam maximizar suas recompensas sem esforço:

- **Cashback Auto-Investido em Cofres DeFi** — Aloca reembolsos para um cofre que gera juros sobre USDC.
- **Geração de Rendimento Passivo** — Alavanca estratégias DeFi de baixo risco para obter retornos extras sem gerenciamento ativo.

## 🛠️ Implementação Técnica

MetaCashback integra-se com:

- **Cartão MetaMask** para processamento de pagamentos
- **LI.FI SDK** para transferências e trocas entre cadeias
- **Protocolos DeFi** para staking e geração de rendimento

## 📋 Requisitos

- **Carteira MetaMask**
- **Cartão MetaMask**
- **USDC para staking** (opcional, mas recomendado para recompensas maiores)

## 💻 Tecnologias Utilizadas 

MetaCashback utiliza várias ferramentas e bibliotecas-chave para garantir uma interação fluida com a blockchain, uma experiência de usuário robusta e um ambiente de desenvolvimento eficiente:

1. **Wagmi:** Esta biblioteca de Hooks React para Ethereum facilita a interação com contratos inteligentes e carteiras. Wagmi simplifica a conexão do aplicativo com a blockchain, a leitura e gravação de dados de contrato e o gerenciamento de transações. Isso é crucial para as funcionalidades de staking e o cálculo de cashback com base na interação DeFi do usuário.

2. **MetaMask SDK:** O MetaMask SDK é essencial para permitir que os usuários conectem suas carteiras MetaMask diretamente ao aplicativo MetaCashback. Ele fornece uma interface segura e familiar para autorização de transações, gerenciamento de assinaturas e interação geral com a blockchain, garantindo que os usuários possam realizar suas operações de cashback e staking facilmente.

3. **Rainbow Kit:** Complementando Wagmi e MetaMask SDK, o Rainbow Kit oferece uma interface de usuário pré-projetada e altamente personalizável para conexão de carteira. Ele aprimora a experiência do usuário, fornecendo um modal de conexão atraente e fácil de usar, compatível com várias carteiras além do MetaMask, o que expande a acessibilidade do MetaCashback.

4. **Hardhat:** Para o desenvolvimento e implantação dos contratos inteligentes que governam o sistema de cashback e as interações com os protocolos DeFi, o Hardhat é utilizado. Este ambiente de desenvolvimento flexível permite a compilação, teste e implantação eficientes de contratos inteligentes, o que é crucial para a segurança e confiabilidade das regras de negócio do MetaCashback.

5. **Next.js:** A interface do usuário do MetaCashback é construída com Next.js, um framework React.js que facilita o desenvolvimento de aplicativos web de alto desempenho. Next.js oferece recursos como renderização do lado do servidor (SSR) e geração de sites estáticos (SSG), contribuindo para um carregamento rápido, melhor otimização para mecanismos de busca (SEO) e uma experiência de usuário suave e responsiva.

Essas tecnologias, em conjunto, formam a base técnica do MetaCashback, permitindo a criação de um sistema descentralizado, seguro e fácil de usar para maximizar as recompensas de cashback no ecossistema DeFi.

## 🔗 Links

## 📄 Licença

Distribuído sob a **Licença MIT**.

## 👥 Contribuindo

Contribuições são bem-vindas! Por favor, sinta-se à vontade para enviar um Pull Request.

1. **Faça um fork** do projeto
2. **Crie sua branch de recurso** (`git checkout -b feature/amazing-feature`)
3. **Confirme suas alterações** (`git commit -m 'Add some amazing feature'`)
4. **Envie para a branch** (`git push origin feature/amazing-feature`)
5. **Abra um Pull Request**
