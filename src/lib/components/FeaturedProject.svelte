<script lang="ts">
  import type { Project } from '#lib/data.ts';

  let { project }: { project: Project } = $props();
</script>

<a
  href={project.url}
  target="_blank"
  rel="noopener noreferrer"
  class="group grid overflow-hidden rounded border border-line transition hover:border-accent sm:grid-cols-[1.15fr_1fr]"
>
  <div class="relative aspect-[16/10] overflow-hidden border-b border-line bg-line sm:aspect-auto sm:min-h-64 sm:border-r sm:border-b-0">
    <img
      src={project.image}
      alt="Captura de tela do projeto {project.name}"
      loading="lazy"
      class="absolute inset-0 h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
    />
  </div>
  <div class="flex flex-col p-6">
    <div class="flex items-center justify-between font-mono text-xs">
      <span class="rounded border border-accent/40 px-2 py-0.5 text-accent">destaque</span>
      <span class="text-muted transition group-hover:text-accent" aria-hidden="true">↗</span>
    </div>
    <h3 class="mt-5 text-xl font-medium text-white">{project.name}</h3>
    <p class="mt-2 text-sm leading-relaxed text-text/70">{project.description}</p>
    {#if project.tags.length}
      <p class="mt-auto pt-6 font-mono text-xs text-accent/80">{project.tags.join(' · ')}</p>
    {/if}
    <p class="mt-3 font-mono text-xs text-muted transition group-hover:text-accent">
      {project.url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
    </p>
  </div>
</a>
