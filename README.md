# marlon307 — portfólio

Portfólio pessoal feito com [SvelteKit](https://svelte.dev/docs/kit) e [Tailwind CSS](https://tailwindcss.com).

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:5173](http://localhost:5173).

## Editando o conteúdo

Todo o texto do site (perfil, experiências, formação, projetos, stack e serviços) está em
[`src/lib/data.ts`](src/lib/data.ts). As imagens dos projetos ficam em `static/projects/`.

## Build e deploy

```bash
npm run build
```

O projeto usa `@sveltejs/adapter-vercel` e a página é pré-renderizada como HTML estático.
