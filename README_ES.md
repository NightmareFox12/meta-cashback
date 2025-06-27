# MetaCashback

[🔙 Back to English README](../README.md)

## 🏆 Resumen
MetaCashback es un sistema revolucionario que permite a los usuarios ganar cashback en USDC por sus compras con la tarjeta MetaMask. Los usuarios pueden aumentar su porcentaje de cashback participando en staking o bloqueando fondos en protocolos DeFi.

💡 **Cuanto más interactúa un usuario con DeFi, mayores recompensas recibe.**

## 🚀 Flujo de Usuario

1. **Compra con la Tarjeta MetaMask** — El usuario paga con la tarjeta en cualquier comercio.

2. **Cashback Base** — Recibe un reembolso inicial en USDC (ejemplo: 1%).

3. **Aumento de Cashback mediante Staking** — Si el usuario bloquea USDC en un pool DeFi, su cashback puede subir al 2%, 3% o más, dependiendo de la cantidad bloqueada.

4. **Lectura de Balance con LI.FI SDK** — El sistema utiliza LI.FI para consultar saldos de USDC en Optimism y facilitar operaciones eficientes.

5. **Pago Automático a la Cartera** — Las recompensas acumuladas se acreditan directamente en la cartera MetaMask del usuario.

## 🎯 Niveles de Cashback

El cashback aumenta según la participación del usuario en DeFi:

| Nivel | Cantidad | Cashback | Beneficios |
|-------|--------------|----------|----------|
| 🔰 **Explorador** | $0 - $100 | 1% | Cashback Básico |
| 🚀 **Pionero** | $100 - $500 | 2% | Acceso a los Perk |
| 🔥 **Legendario** | $500 - $1000 | 3% | Bonus Exclusivos |
| 👑 **Elite** | $1000+ | 4% | Beneficios Premium |

## 💰 Opciones de Recompensa y Rendimiento

Maximiza el cashback con opciones de retiro flexibles y estrategias DeFi diseñadas para optimizar las ganancias.

### ⏳ Bonificaciones por Fondos Bloqueados

Los usuarios pueden aumentar sus recompensas manteniendo sus fondos bloqueados por períodos específicos:

**Bloqueo de 1 mes** → Bonificación adicional del 0.5% en cashback

**Bloqueo de 3 meses** → Bonificación adicional del 1% en cashback

**Bloqueo de 6 meses** → Bonificación adicional del 1.5% en cashback + acceso a ventajas exclusivas

💡 **Cuanto mayor sea el compromiso, mayores serán los beneficios.**

### 🔄 Opciones de Retiro de Cashback

Los usuarios pueden elegir cómo recibir sus recompensas según sus preferencias:

**💸 Directamente en USDC** — Retiro instantáneo a su cartera MetaMask.

**🔄 Convertido a otro token** — Intercambios automáticos usando el LI.FI SDK entre cadenas.

**📈 Reinvertido en DeFi** — Opción de reinvertir el cashback directamente en pools de rendimiento.

### 🏦 Modo Ahorro: Rendimiento Pasivo

Una opción inteligente para usuarios que desean maximizar sus recompensas sin esfuerzo:

**Cashback Auto-Invertido en Bóvedas DeFi** — Asigna los reembolsos a una bóveda que genera intereses sobre USDC.

**Generación de Rendimiento Pasivo** — Aprovecha estrategias DeFi de bajo riesgo para obtener retornos adicionales sin gestión activa.

## 🛠️ Implementación Técnica

MetaCashback se integra con:

**Tarjeta MetaMask** para el procesamiento de pagos

**LI.FI SDK** para transferencias y swaps entre cadenas

**Protocolos DeFi** para staking y generación de rendimiento

## 📋 Requisitos

Cartera MetaMask

Tarjeta MetaMask

USDC para staking (opcional, pero recomendado para mayores recompensas)

## 💻 Tecnologías Utilizadas

Para el desarrollo de MetaCashback, se han empleado diversas herramientas y librerías clave que aseguran una interacción fluida con la blockchain, una experiencia de usuario robusta y un entorno de desarrollo eficiente:

1. **Wagmi:** Esta librería React Hooks para Ethereum facilita la interacción con smart contracts y wallets. Wagmi simplifica la conexión de la aplicación con la blockchain, la lectura y escritura de datos en contratos, y la gestión de transacciones. Esto es fundamental para las funcionalidades de staking y el cálculo de cashback basado en la interacción DeFi del usuario.

2. **MetaMask SDK:** El MetaMask SDK es esencial para permitir a los usuarios conectar sus carteras MetaMask directamente a la aplicación MetaCashback. Proporciona una interfaz segura y familiar para la autorización de transacciones, la gestión de firmas y la interacción general con la blockchain, asegurando que los usuarios puedan realizar sus operaciones de cashback y staking de forma sencilla.

3. **Rainbow Kit:** Complementando a Wagmi y MetaMask SDK, Rainbow Kit ofrece una interfaz de usuario prediseñada y altamente personalizable para la conexión de carteras. Mejora la experiencia del usuario al proporcionar un modal de conexión atractivo y fácil de usar, compatible con múltiples carteras además de MetaMask, lo que amplía la accesibilidad de MetaCashback.

4. **Hardhat:** Para el desarrollo y despliegue de los smart contracts que rigen el sistema de cashback y las interacciones con los protocolos DeFi, se utiliza Hardhat. Este entorno de desarrollo flexible permite compilar, testear y desplegar contratos inteligentes de manera eficiente, lo que es crucial para la seguridad y fiabilidad de las reglas de negocio de MetaCashback.

5. **Next.js:** La interfaz de usuario de MetaCashback está construida con Next.js, un framework de React.js que facilita el desarrollo de aplicaciones web de alto rendimiento. Next.js proporciona características como el renderizado del lado del servidor (SSR) y la generación de sitios estáticos (SSG), lo que contribuye a una carga rápida, una mejor optimización para motores de búsqueda (SEO) y una experiencia de usuario fluida y reactiva.

Estas tecnologías, en conjunto, forman la base técnica de MetaCashback, permitiendo la creación de un sistema descentralizado, seguro y fácil de usar para maximizar las recompensas de cashback en el ecosistema DeFi.

## 🔗 Enlaces

## 📄 Licencia

Distribuido bajo la **Licencia MIT**.

## 👥 Contribuciones

¡Las contribuciones son bienvenidas! No dudes en enviar un Pull Request.

1. Haz un "fork" del proyecto

2. Crea tu rama de característica (git checkout -b feature/amazing-feature)

3. Confirma tus cambios (git commit -m 'Add some amazing feature')

4. Envía a la rama (git push origin feature/amazing-feature)

5. Abre un Pull Request