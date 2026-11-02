<script lang="ts">
  import Section from '#lib/components/Section.svelte';
  import Timeline from '#lib/components/Timeline.svelte';
  import ProjectCard from '#lib/components/ProjectCard.svelte';
  import { profile, links, experience, education, projects, stack, services } from '#lib/data.ts';

  const year = new Date().getFullYear();
  const description = `${profile.name} — ${profile.role}. Experiência, projetos e serviços.`;
</script>

<svelte:head>
  <title>{profile.name} — {profile.role}</title>
  <meta name="description" content={description} />
  <meta name="author" content={profile.name} />
  <meta property="og:title" content={profile.name} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content="https://marlon307.vercel.app/" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="/image.png" />
</svelte:head>

<main class="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-24">
  <!-- Cabeçalho -->
  <header class="font-mono">
    <p class="text-sm text-muted"><span class="text-accent">~</span> $ whoami</p>

    <h1 class="mt-4 text-4xl font-bold tracking-tight text-white sm:text-6xl">
      {profile.name}<span class="cursor text-accent">_</span>
    </h1>

    <p class="mt-4 text-base text-muted sm:text-lg">
      {profile.role}
      <span class="mx-2 text-line">|</span>
      {profile.location}
    </p>

    <p class="mt-8 max-w-xl font-sans text-base leading-relaxed text-text/80">{profile.summary}</p>

    <div class="mt-8 inline-flex items-center gap-2 rounded border border-line px-3 py-1.5 text-xs text-muted">
      <span class="h-1.5 w-1.5 rounded-full bg-accent"></span>
      {profile.status}
    </div>

    <nav class="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm" aria-label="Links">
      {#each links as link (link.href)}
        <a
          href={link.href}
          target={link.download ? undefined : '_blank'}
          rel="noopener noreferrer"
          download={link.download || undefined}
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
    </Section>

    <Section index="02" title="projetos" id="projetos">
      <div class="grid gap-4 sm:grid-cols-2">
        {#each projects as project (project.slug)}
          <ProjectCard {project} />
        {/each}
      </div>
      <a
        href="https://github.com/{profile.handle}"
        target="_blank"
        rel="noopener noreferrer"
        class="mt-4 flex items-center justify-center rounded border border-dashed border-line p-4 font-mono text-sm text-muted transition hover:border-accent hover:text-accent"
      >
        ver mais no github →
      </a>
    </Section>

    <Section index="03" title="experiência" id="experiencia">
      <Timeline items={experience} highlightFirst />
    </Section>

    <Section index="04" title="formação" id="formacao">
      <Timeline items={education} />
    </Section>

    <Section index="05" title="stack" id="stack">
      <dl class="grid grid-cols-[110px_1fr] gap-y-3 font-mono text-sm sm:grid-cols-[140px_1fr]">
        {#each stack as row (row.group)}
          <dt class="text-muted">{row.group}</dt>
          <dd>{row.items}</dd>
        {/each}
      </dl>
    </Section>

    <Section index="06" title="serviços" id="servicos">
      <ul class="divide-y divide-line border-y border-line">
        {#each services as service (service.name)}
          <li class="flex flex-col gap-1 py-4 sm:flex-row sm:justify-between">
            <span class="text-white">{service.name}</span>
            <span class="text-sm text-muted">{service.detail}</span>
          </li>
        {/each}
      </ul>
    </Section>

    <Section index="07" title="contato" id="contato">
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
