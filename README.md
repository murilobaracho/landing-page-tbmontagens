# TB Montagens — Landing Page

Landing page da **TB Montagens**, serviço de montagem profissional de móveis na Baixada Santista, com 10 anos de experiência e 1 ano de garantia. O objetivo do site é converter visitantes em orçamentos pelo WhatsApp.

## Seções

- **Início**: apresentação e chamada para agendar pelo WhatsApp
- **Serviços**: armários de cozinha, guarda-roupa e painéis
- **Diferenciais**: garantia, avaliações 5 estrelas, PIX, rapidez e vídeo de apresentação
- **Montagens realizadas**: galeria de portfólio com chamada para orçamento
- **Avaliações**: depoimentos de clientes e link para o Google
- **Contato**: formulário que abre o WhatsApp com a mensagem preenchida

## Tecnologias

- [TanStack Start](https://tanstack.com/start) + [TanStack Router](https://tanstack.com/router)
- [React 19](https://react.dev) e TypeScript
- [Tailwind CSS 4](https://tailwindcss.com) e componentes shadcn/ui
- [Vite](https://vite.dev)

## Como rodar localmente

Requer Node.js 20 ou superior.

```sh
git clone <url-do-repositorio>
cd <nome-do-repositorio>
npm install
npm run dev
```

O site abre em `http://localhost:5173`.

### Outros comandos

| Comando | O que faz |
|---|---|
| `npm run build` | Gera o build de produção |
| `npm run preview` | Serve o build localmente |
| `npm run lint` | Verifica o código com ESLint |
| `npm test` | Roda os testes |

## Estrutura

```
src/
├── routes/index.tsx   # página principal (todas as seções)
├── assets/            # logo e fotos da galeria
├── components/        # componentes de UI e animação (Reveal)
└── styles.css         # tema e cores
public/                # favicon e robots.txt
```

## Personalização

- **Número do WhatsApp e mensagens**: constantes `WA` e `WA_ORC` no início de `src/routes/index.tsx`.
- **Fotos do portfólio**: lista `GALERIA` em `src/routes/index.tsx`. Coloque os arquivos em `src/assets/`.
- **Cores**: variáveis em `src/styles.css`.

## Publicação

O projeto foi criado no [Lovable](https://lovable.dev) e é publicado por lá. O domínio próprio é conectado em *Project Settings → Domains*, com os registros DNS configurados no provedor do domínio.

As alterações enviadas ao branch `main` sincronizam com o Lovable, então evite reescrever o histórico já publicado (force push, rebase ou amend de commits enviados).
