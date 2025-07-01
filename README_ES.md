# MetaCashback

[🔙 Back to English README](../README.md)

## 🏆 Resumen
MetaCashback es un sistema revolucionario que permite a los usuarios ganar cashback en **USDC**, una stablecoin ampliamente adoptada y respaldada por activos reales, por sus compras con la **MetaMask Card**. Los usuarios pueden aumentar su porcentaje de cashback participando en staking o bloqueando fondos en protocolos DeFi.

💡 **Cuanto más interactúa un usuario con DeFi, mayores recompensas recibe.**

🔗 Actualmente, MetaCashback funciona directamente con la **wallet MetaMask**, permitiendo una experiencia fluida y descentralizada.  🔜 En el futuro, está diseñado para integrarse completamente con la **Tarjeta MetaMask Card**, lo que permitirá extender el sistema de cashback al mundo físico mediante compras con tarjeta.

**Nota: Actualmente disponible en la red de Optimist. Próximamente se integrarán otras cadenas como Arbitrum, Ethereum, entre otras.**

## 🚀 Flujo de Usuario

1. **Conexión con MetaMask Wallet** — El usuario conecta su cartera MetaMask a la aplicación MetaCashback mediante MetaMask SDK y wagmi.

2. **Interacción con DeFi** — El usuario realiza operaciones elegibles (como swaps, staking o depósitos) desde su wallet MetaMask.

3. **Cashback Base** — Recibe un reembolso inicial en USDC (ejemplo: 1%) por su actividad registrada.

4. **Aumento de Cashback mediante Staking** — Si el usuario bloquea USDC en un pool DeFi, su cashback puede subir al 2%, 3% o más, dependiendo de la cantidad y el tiempo bloqueado.

5. **Lectura de Balance con LI.FI SDK** — El sistema utiliza LI.FI para consultar saldos de USDC en Optimism y facilitar operaciones eficientes.

6. **Pago Automático a la Cartera** — Las recompensas acumuladas se acreditan directamente en la cartera MetaMask del usuario.

🔜 En el futuro, este flujo se ampliará para incluir compras físicas y digitales realizadas con la **Tarjeta MetaMask Card**, integrando el cashback directamente con los pagos con tarjeta.

## 🎯 Niveles de Cashback

El cashback aumenta según la participación del usuario en DeFi:

| Nivel | Cantidad | Cashback |
|-------|--------------|----------|
| 🔰 **Explorador** | $0 - $100 | 1% |
| 🚀 **Pionero** | $100 - $500 | 2% |
| 🔥 **Legendario** | $500 - $1000 | 3% |
| 👑 **Elite** | $1000+ | 4% |

🎁 **Próximamente:** Se añadirán recompensas adicionales para cada nivel, incluyendo bonificaciones exclusivas, acceso anticipado a nuevas funciones, y ventajas dentro del ecosistema MetaCashback.

## 💰 Opciones de Recompensa y Rendimiento

Maximiza el cashback con opciones de retiro flexibles y estrategias DeFi diseñadas para optimizar las ganancias.

### 🔄 Opciones de Staking y Rendimiento

Los usuarios pueden maximizar su cashback mediante estrategias de staking y reinversión automática:

**💸 Retiro Directo en USDC** — Las recompensas pueden retirarse instantáneamente a la cartera MetaMask del usuario.

**📈 Cashback Auto-Invertido en Bóvedas DeFi** — Los usuarios pueden optar por reinvertir automáticamente su cashback en bóvedas que generan intereses sobre USDC.

**🛌 Generación de Rendimiento Pasivo** — El sistema aprovecha estrategias DeFi de bajo riesgo para generar retornos adicionales sin necesidad de gestión activa.

💡 Estas opciones estarán disponibles dentro del módulo de staking, permitiendo a los usuarios elegir entre liquidez inmediata o crecimiento a largo plazo.

## 🔮 Planes a Futuro

### 🔗 Vinculación total con MetaMask Card
La integración completa con la tarjeta física permitirá a los usuarios obtener cashback automáticamente al realizar compras en comercios tradicionales, cerrando el ciclo entre Web3 y el mundo real.

### 🤝 Asociación con otras DeFi y organizaciones
Se establecerán alianzas estratégicas con protocolos DeFi, DAOs y plataformas de inversión para maximizar los fondos destinados al sistema de recompensas y ampliar el ecosistema MetaCashback.

### ⏳ Bonificaciones por tiempo bloqueado
Los usuarios podrán aumentar sus recompensas bloqueando sus fondos por períodos determinados:

- **Bloqueo de 1 mes** → Bonificación adicional del **0.5%** en cashback  
- **Bloqueo de 3 meses** → Bonificación adicional del **1%** en cashback  
- **Bloqueo de 6 meses** → Bonificación adicional del **1.5%** en cashback + acceso a **ventajas exclusivas**

💡 **Cuanto mayor sea el compromiso, mayores serán los beneficios.**

### 🏆 Bonos extras por niveles
Se implementará un sistema de niveles dinámico que otorgará beneficios adicionales según la fidelidad y actividad del usuario:

- Cashback incrementado
- Acceso anticipado a nuevas funciones
- Participación en gobernanza
- Recompensas exclusivas por logros

## 🛠️ Implementación Técnica

MetaCashback se integra con:

- **Tarjeta MetaMask** — (Futuro) Medio de pago físico y digital que permitirá activar el sistema de cashback en comercios tradicionales y plataformas online.

- **LI.FI SDK** — Utilizado para consultar balances de USDC en redes como Optimism

- **DeFiLlama API** — Fuente confiable para obtener tasas de rendimiento (APY) en tiempo real, permitiendo mostrar oportunidades actualizadas de staking y bóvedas DeFi.  
  📎 https://defillama.com/docs/api

- **Protocolos DeFi** — Infraestructura base para el staking de USDC y la generación de rendimiento pasivo, integrando estrategias de bajo riesgo y alto impacto.

- **MetaMask SDK + wagmi** — Conjunto de herramientas que permite una conexión directa, segura y fluida con la wallet del usuario. Se utiliza para:
  - Leer balances y eventos en tiempo real
  - Firmar transacciones
  - Interactuar con el contrato inteligente de MetaCashback

La integración con **MetaMask SDK** y **wagmi** permite:

- 📡 Escuchar eventos del contrato inteligente
- 💰 Leer el balance de tokens del usuario
- 🤝 Interactuar directamente con el contrato de MetaCashback

## 📋 Requisitos

- Cartera MetaMask  
- Tarjeta MetaMask (Futuro)
- USDC para staking (opcional, pero recomendado para mayores recompensas)

## 🔗 Enlaces

https://meta-cashback.vercel.app/

## 📄 Licencia

Distribuido bajo la **Licencia MIT**.

## 📄 Smart Contract Desplegado y Verificado en la red de Optimist

https://optimistic.etherscan.io/address/0x565cca22f267e08d6d278066d3ca9018433769e1

## 👥 Contribuciones

¡Las contribuciones son bienvenidas! No dudes en enviar un Pull Request.

1. Haz un "fork" del proyecto  
2. Crea tu rama de característica (`git checkout -b feature/amazing-feature`)  
3. Confirma tus cambios (`git commit -m 'Add some amazing feature'`)  
4. Envía a la rama (`git push origin feature/amazing-feature`)  
5. Abre un Pull Request
