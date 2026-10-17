# PixelForge — site de vendas de criação de sites

Landing page responsiva em HTML, CSS e JavaScript puro para apresentar serviços de desenvolvimento de sites e receber pedidos de orçamento pelo WhatsApp.

## Arquivos

- `index.html` — estrutura, conteúdo, planos, perguntas frequentes e formulário.
- `styles.css` — identidade visual, layout e adaptação para celulares.
- `script.js` — menu mobile, seleção de plano e formulário que prepara uma mensagem para o WhatsApp.

## Como visualizar

Abra o arquivo `index.html` no navegador. Para desenvolvimento local, também pode usar a extensão Live Server do VS Code.

## Configurar o WhatsApp

1. Abra `script.js`.
2. Localize `const WHATSAPP_NUMBER = "5511999999999";`.
3. Substitua pelo número comercial com código do país e DDD, somente números. Exemplo de formato: `55 + DDD + número`.
4. Salve e publique novamente.

O formulário abre o WhatsApp com a mensagem preenchida. O visitante precisa revisar e enviar a mensagem; o site não envia dados para um servidor.

## Personalizar antes de publicar

- Revise os preços de referência em `index.html` e ajuste-os à sua oferta real.
- Troque o nome PixelForge pelo nome da sua marca, se desejar.
- Atualize textos, serviços e condições comerciais.
- Os preços são indicativos; domínio, hospedagem, manutenção e serviços de terceiros podem ter cobrança separada.

## Publicar com GitHub Pages

1. No GitHub, abra **Settings → Pages**.
2. Em **Build and deployment**, escolha **Deploy from a branch**.
3. Selecione a branch `main` e a pasta `/(root)`, depois salve.
4. Aguarde a publicação e abra a URL informada na página Pages.

O projeto é estático e não exige instalação de dependências nem etapa de build.

## Tecnologias

HTML5 · CSS3 · JavaScript · Google Fonts
