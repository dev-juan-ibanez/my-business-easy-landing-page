# MyBusinessEasy - Landing Page

Esta é a Landing Page oficial do **MyBusinessEasy** (Meu Empreendimento), uma plataforma SaaS focada em facilitar a gestão de pequenos e médios negócios. Com um sistema integrado de Ponto de Venda (PDV), controle de estoque, relatórios e calculadoras financeiras, a plataforma visa otimizar o tempo e aumentar o lucro dos empreendedores.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando tecnologias modernas voltadas para performance e tipagem estática:

- **React 19**
- **Vite** (Build Tool super rápido)
- **TypeScript**
- **CSS3** puro (Estilização com Glassmorphism e Dark Mode)
- Deploy otimizado para **GitHub Pages** (via `gh-pages`)

## 🎨 Funcionalidades em Destaque

- **Navegação Direta para o Sistema:** Links de "Acessar Sistema", "Começar Agora" e botões de Planos direcionam os interessados diretamente ao App Client no Vercel (`https://my-business-easy-client.vercel.app/`).
- **Vídeo de Demonstração em Destaque:** Exibe na prática o sistema funcionando.
- **Destaques das Ferramentas:** Cards modernos (Gestão de PDV, Controle Financeiro, Relatórios Inteligentes, Calculadora de Precificação) focados em evidenciar como a plataforma ajuda no negócio real.
- **Caso de Uso "Elas Store":** Uma vitrine (Showcase) interativa provando como o sistema funciona no dia a dia. Implementada como um Carrossel de rolagem horizontal em formato de álbum "Polaroid", permitindo ao usuário ampliar e ler os dados usando um Lightbox flutuante na tela (através do React `createPortal`).
- **Planos (Pricing):** Três opções de preços atualizadas estrategicamente (Trial, Pro Mensal e Pro Anual) visando guiar o lead para o melhor plano adequado à fase da empresa dele.

## 💻 Como rodar o projeto localmente

Para executar esta aplicação na sua máquina, siga as instruções:

1. Clone o repositório ou navegue até a pasta:
   ```bash
   cd my-business-easy-landing
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
O servidor estará rodando em `http://localhost:5173/`.

### Como compilar para Produção

Para gerar o build final minificado:
```bash
npm run build
```

## 🗺️ Ecossistema

Esta página compõe o ecossistema do **MyBusinessEasy**, no qual há a divisão entre:
- `my-business-easy-client` (Aplicação PDV/Gestão na nuvem)
- `my-business-easy-app` (Aplicativo Mobile)
- `my-business-easy-admin` (Painel Administrativo)
- `my-business-easy-landing` (Este projeto - Conversão de leads e apresentação)
