# Havaianas × Stanley — experiência de verão

Projeto demonstrativo responsivo feito com React + Vite.

## Como abrir no Cursor
1. Extraia o arquivo ZIP.
2. No Cursor, clique em **File > Open Folder** e selecione a pasta `havaianas-stanley-site`.
3. Abra o terminal integrado (**Terminal > New Terminal**).
4. Execute:

```bash
npm install
npm run dev
```

5. Abra o endereço local que o Vite mostrar (normalmente `http://localhost:5173`).

## Estrutura
- `/` — página principal da campanha.
- `/montar-kit` — página separada para montar o kit.
- `public/images/` — imagens originais fornecidas para os chinelos, copos, ecobag e paleta.

## Antes de publicar
- O QR Code da página inicial usa o endereço atual do site. Depois de publicar, confira se ele aponta para o domínio público definitivo.
- A seleção e o resumo do kit funcionam no navegador, mas ainda não há checkout, pagamento, estoque ou envio de pedidos.
- Os adesivos são representações gráficas temporárias com as descrições recebidas; substituir por fotos/arquivos finais quando forem enviados.
- A numeração do chinelo e preços ainda precisam ser definidos. O site deixa a numeração como confirmação posterior para não inventar tamanhos disponíveis.
- A página é um conceito de collab; só usar marcas/logotipos e publicar comercialmente com as autorizações necessárias.

## Publicação
Pode ser publicado no Vercel ou em outro serviço compatível com Vite. Configure o projeto como Vite e use `npm run build` como comando de build e `dist` como pasta de saída.
