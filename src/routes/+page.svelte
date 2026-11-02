<script lang="ts">
  import Section from '#lib/components/Section.svelte';
  import ProjectGrid from '#lib/components/ProjectGrid.svelte';
  import { site, profile, links, schools, projects, stack, services } from '#lib/data.ts';

  const year = new Date().getFullYear();
  const title = `${profile.name} — ${profile.role} | ${profile.handle}`;
  const description =
    'Portfólio de Marlon Ramos (marlon307), desenvolvedor full-stack especializado em TypeScript, React, Next.js, Svelte e Node.js. Veja projetos, experiência e serviços.';
  const canonical = `${site.url}/`;
  const ogImage = `${site.url}/og.png`;
  const linkedin = links.find((l) => l.label === 'linkedin')!.href;
  const sameAs = links.map((l) => l.href);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${canonical}#person`,
        name: profile.name,
        alternateName: profile.handle,
        jobTitle: profile.role,
        description: profile.summary,
        url: canonical,
        image: `${site.url}/image.png`,
        sameAs,
        address: { '@type': 'PostalAddress', addressCountry: 'BR' },
        knowsAbout: stack.flatMap((row) => row.items.split(', ')),
        alumniOf: schools.map((name) => ({ '@type': 'EducationalOrganization', name })),
      },
      {
        '@type': 'WebSite',
        '@id': `${canonical}#website`,
        url: canonical,
        name: `${profile.name} — Portfólio`,
        inLanguage: 'pt-BR',
        author: { '@id': `${canonical}#person` },
      },
      {
        '@type': 'ProfilePage',
        url: canonical,
        name: title,
        inLanguage: 'pt-BR',
        mainEntity: { '@id': `${canonical}#person` },
      },
    ],
  };
  const jsonLdTag = `<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, '\\u003c')}</` + 'script>';
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="author" content={profile.name} />
  <meta name="keywords" content={profile.keywords.join(', ')} />
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <link rel="canonical" href={canonical} />

  <meta property="og:type" content="profile" />
  <meta property="og:site_name" content="{profile.name} — Portfólio" />
  <meta property="og:locale" content={site.locale} />
  <meta property="og:url" content={canonical} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={ogImage} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="{profile.name} — {profile.headline}" />
  <meta property="profile:first_name" content="Marlon" />
  <meta property="profile:last_name" content="Ramos" />
  <meta property="profile:username" content={profile.handle} />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content={site.twitter} />
  <meta name="twitter:creator" content={site.twitter} />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={ogImage} />

  {@html jsonLdTag}
</svelte:head>

<main class="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-24">
  <!-- Cabeçalho -->
  <header class="font-mono">
    <p class="text-sm text-muted"><span class="text-accent">~</span> $ whoami</p>

    <h1 class="mt-4 text-4xl font-bold tracking-tight text-white sm:text-6xl">
      {profile.name}<span class="cursor text-accent">_</span>
    </h1>

    <p class="mt-4 text-base text-muted sm:text-lg">{profile.headline}</p>
    <p class="mt-1 text-sm text-muted/70">{profile.location}</p>

    <p class="mt-8 max-w-xl font-sans text-base leading-relaxed text-text/80">{profile.summary}</p>

    <div class="mt-8 inline-flex items-center gap-2 rounded border border-line px-3 py-1.5 text-xs text-muted">
      <span class="h-1.5 w-1.5 rounded-full bg-accent"></span>
      {profile.status}
    </div>

    <nav class="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm" aria-label="Links">
      {#each links as link (link.href)}
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          class="text-muted transition hover:text-accent">[{link.label}]</a
        >
      {/each}
    </nav>
  </header>

  <div class="mt-4 sm:mt-8">
    <Section index="01" title="sobre" id="sobre">
      <div class="space-y-4 leading-relaxed text-text/80">
        {#each profile.about as paragraph}
          <p>{paragraph}</p>
        {/each}
      </div>
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        class="mt-6 inline-block font-mono text-sm text-muted transition hover:text-accent"
      >
        → experiência e formação completas no linkedin
      </a>
    </Section>

    <Section index="02" title="projetos" id="projetos">
      <ProjectGrid {projects} />
      <a
        href="https://github.com/{profile.handle}"
        target="_blank"
        rel="noopener noreferrer"
        class="mt-4 flex items-center justify-center rounded border border-dashed border-line p-4 font-mono text-sm text-muted transition hover:border-accent hover:text-accent"
      >
        ver mais no github →
      </a>
    </Section>

    <Section index="03" title="stack" id="stack">
      <dl class="grid grid-cols-[110px_1fr] gap-y-3 font-mono text-sm sm:grid-cols-[140px_1fr]">
        {#each stack as row (row.group)}
          <dt class="text-muted">{row.group}</dt>
          <dd>{row.items}</dd>
        {/each}
      </dl>
    </Section>

    <Section index="04" title="serviços" id="servicos">
      <ul class="divide-y divide-line border-y border-line">
        {#each services as service (service.name)}
          <li class="flex flex-col gap-1 py-4 sm:flex-row sm:justify-between">
            <span class="text-white">{service.name}</span>
            <span class="text-sm text-muted">{service.detail}</span>
          </li>
        {/each}
      </ul>
    </Section>

    <Section index="05" title="contato" id="contato">
      <p class="text-text/80">Tem um projeto em mente ou uma oportunidade? Vamos conversar.</p>
      <a
        href="https://www.linkedin.com/in/{profile.handle}/"
        target="_blank"
        rel="noopener noreferrer"
        class="mt-6 inline-flex items-center gap-2 rounded border border-accent px-5 py-3 font-mono text-sm text-accent transition hover:bg-accent hover:text-bg"
      >
        $ falar no linkedin →
      </a>
    </Section>
  </div>

  <footer class="mt-24 flex justify-between border-t border-line pt-6 font-mono text-xs text-muted">
    <span>© {year} {profile.handle}</span>
    <span>svelte + tailwind</span>
  </footer>
</main>
