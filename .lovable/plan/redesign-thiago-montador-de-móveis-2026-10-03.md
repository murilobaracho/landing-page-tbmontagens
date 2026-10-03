# Redesign — Thiago Montador de Móveis

Site de página única, moderno e clean, usando só o conteúdo real de thiagomontador.com.br (textos, fotos, depoimentos, contatos). Nada inventado.

## Direção visual
- Fundo claro e quente (off-white), texto grafite profundo, cor de destaque laranja-âmbar (herdada dos ícones originais #f19e39, refinada), verde só no botão de WhatsApp.
- Tipografia: títulos em "Manrope" (geométrica, forte), corpo em "Figtree".
- Cantos arredondados moderados, sombras muito suaves, bastante espaço em branco, fotos grandes.
- Animações discretas: fade/slide ao entrar na tela, hover leve em cards e fotos.

## Seções (em ordem)
1. **Header fixo** — logo/nome, links (Início, Serviços, Diferenciais, Montagens, Avaliações, Contato) com rolagem suave, botão WhatsApp; menu hambúrguer no celular.
2. **Hero** — "Montador de móveis profissional. Qualidade Garantida para você.", selo "Montador de Móveis há 10 anos", "Baixada Santista", CTA principal WhatsApp + link "Avaliações" (Google). Foto grande do original ao lado; selo ★★★★★.
3. **Faixa de destaque** — os dois blocos originais: "Reserve o melhor horário pelo WhatsApp, sem burocracia" e "Montador mais bem avaliado da Baixada Santista".
4. **Diferenciais** — título e texto originais + 4 cards com ícone: Garantia de 1 ano, Montador 5 Estrelas, Aceitamos PIX, Rapidez e Praticidade (textos originais), ao lado da foto do Thiago.
5. **Serviços** — Armários de Cozinha, Guarda-Roupa, Painéis em grid de fotos com proporção uniforme e hover suave.
6. **Montagens realizadas** — galeria editorial (mosaico) com as fotos do site; vídeo do YouTube do canal incorporado.
7. **Avaliações** — ★★★★★ em destaque, os 2 depoimentos reais (Thuani Moreira, Angelo Gonçalves Junior) e link para as avaliações no Google.
8. **Contato / Orçamento** — cartões de WhatsApp (+55 13 99769-4239) e e-mail (ccsthii@gmail.com) + formulário (nome, e-mail, mensagem). Ao enviar, o formulário abre o WhatsApp com a mensagem preenchida (sem servidor).
9. **Footer** — nome, frase "O profissional que sua propriedade sempre precisou", contatos, Instagram, links, © Todos os direitos reservados.
10. **Botão flutuante de WhatsApp** no celular.

## Detalhes técnicos
- Tudo em `src/routes/index.tsx` + componentes em `src/components/site/*`; tokens de cor/fonte em `src/styles.css` (oklch); fontes via `<link>` no `__root.tsx`.
- Imagens servidas diretamente das URLs originais (assets.zyrosite.com); `og:image` com a foto do hero.
- head() com título/descrição em português; `lang="pt-BR"`.
- Animação de entrada com IntersectionObserver + classes CSS (sem biblioteca pesada).
- Verificação visual em desktop e celular via Playwright.
