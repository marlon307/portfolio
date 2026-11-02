<script lang="ts">
  import type { Project } from '#lib/data.ts';

  let { project }: { project: Project } = $props();
</script>

<a
  href={project.url}
  target="_blank"
  rel="noopener noreferrer"
  class="group block overflow-hidden rounded border border-line transition hover:border-accent"
>
  <div class="aspect-[16/9] overflow-hidden border-b border-line bg-line">
    <img
      src={project.image}
      alt="Captura de tela do projeto {project.name}"
      loading="lazy"
      class="h-full w-full object-cover object-top opacity-80 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
    />
  </div>
  <div class="p-5">
    <div class="flex items-center justify-between font-mono text-xs text-muted">
      <span>{project.slug}</span>
      <span class="transition group-hover:text-accent" aria-hidden="true">↗</span>
    </div>
    <h3 class="mt-3 font-medium text-white">{project.name}</h3>
    <p class="mt-1 text-sm text-text/70">{project.description}</p>
    {#if project.tags.length}
      <p class="mt-4 font-mono text-xs text-accent/80">{project.tags.join(' · ')}</p>
    {/if}
  </div>
</a>
