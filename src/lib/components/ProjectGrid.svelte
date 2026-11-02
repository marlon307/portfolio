<script lang="ts">
  import { tick } from 'svelte';
  import type { Project } from '#lib/data.ts';
  import ProjectCard from './ProjectCard.svelte';

  let {
    projects,
    visibleMobile = 2,
    visibleDesktop = 4,
    peek = 112,
  }: {
    projects: Project[];
    /** Projetos inteiros visíveis em telas pequenas (1 coluna) */
    visibleMobile?: number;
    /** Projetos inteiros visíveis em telas maiores (2 colunas) */
    visibleDesktop?: number;
    /** Altura (px) da prévia dos projetos seguintes */
    peek?: number;
  } = $props();

  let expanded = $state(false);
  // Altura máxima recolhida; até o JS medir, usa um valor aproximado via CSS.
  let maxHeight = $state<number | null>(null);
  let overflowing = $state(true);
  let wrapper: HTMLElement;
  let grid: HTMLElement;

  function measure() {
    if (!grid) return;
    const desktop = window.matchMedia('(min-width: 640px)').matches;
    const visible = desktop ? visibleDesktop : visibleMobile;
    const cards = Array.from(grid.children) as HTMLElement[];
    if (cards.length <= visible) {
      overflowing = false;
      maxHeight = null;
      return;
    }
    overflowing = true;
    const top = grid.getBoundingClientRect().top;
    const lastVisible = cards[visible - 1].getBoundingClientRect().bottom;
    maxHeight = Math.round(lastVisible - top + 16 + peek);
  }

  $effect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(grid);
    return () => ro.disconnect();
  });

  async function toggle() {
    expanded = !expanded;
    if (!expanded) {
      await tick();
      if (wrapper.getBoundingClientRect().top < 0) {
        wrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  const collapsed = $derived(!expanded && overflowing);
</script>

<div bind:this={wrapper} class="scroll-mt-8">
  <div
    class="relative {collapsed ? 'overflow-y-clip' : ''} {collapsed && maxHeight === null
      ? 'max-h-[56rem]'
      : ''}"
    style:max-height={collapsed && maxHeight !== null ? `${maxHeight}px` : null}
  >
    <div bind:this={grid} class="grid gap-4 sm:grid-cols-2">
      {#each projects as project (project.slug)}
        <ProjectCard {project} />
      {/each}
    </div>
    {#if collapsed}
      <div
        class="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-b from-bg/0 via-bg/70 to-bg"
        style:height="{peek}px"
      ></div>
    {/if}
  </div>

  {#if overflowing}
    <button
      type="button"
      onclick={toggle}
      aria-expanded={expanded}
      class="group mt-3 flex w-full items-center gap-3 font-mono text-sm text-muted transition hover:text-accent"
    >
      <span class="h-px flex-1 bg-line transition group-hover:bg-accent/40"></span>
      <span>{expanded ? '↑ mostrar menos' : `↓ ver todos os ${projects.length} projetos`}</span>
      <span class="h-px flex-1 bg-line transition group-hover:bg-accent/40"></span>
    </button>
  {/if}
</div>
