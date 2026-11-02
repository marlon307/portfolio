<script lang="ts" generics="T">
  import type { Snippet } from 'svelte';
  import { tick } from 'svelte';

  let {
    items,
    initial = 2,
    peek = 1,
    peekHeight = '6rem',
    gapClass = '',
    noun = ['item', 'itens'],
    list,
  }: {
    items: T[];
    /** Quantos itens aparecem por completo antes de expandir */
    initial?: number;
    /** Quantos itens aparecem "cortados" como prévia */
    peek?: number;
    /** Altura visível da prévia */
    peekHeight?: string;
    /** Espaço entre os grupos (ex.: 'mt-4' em grades) */
    gapClass?: string;
    /** [singular, plural] */
    noun?: [string, string];
    /** Renderiza uma lista: (itens, índice inicial, é o último grupo) */
    list: Snippet<[T[], number, boolean]>;
  } = $props();

  let expanded = $state(false);
  let section: HTMLElement;

  const first = $derived(items.slice(0, initial));
  const preview = $derived(items.slice(initial, initial + peek));
  const rest = $derived(items.slice(initial + peek));
  const remaining = $derived(items.length - initial);

  async function toggle() {
    expanded = !expanded;
    if (!expanded) {
      await tick();
      const top = section.getBoundingClientRect().top;
      if (top < 0) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
</script>

<div bind:this={section} class="scroll-mt-8">
  {@render list(first, 0, remaining <= 0)}

  {#if preview.length}
    <div
      class="relative {gapClass} {expanded ? '' : 'overflow-y-clip'}"
      style:max-height={expanded ? null : peekHeight}
      inert={!expanded}
      aria-hidden={!expanded}
    >
      {@render list(preview, initial, rest.length === 0)}
      {#if !expanded}
        <div class="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg/0 via-bg/60 to-bg"></div>
      {/if}
    </div>
  {/if}

  {#if rest.length}
    <div class={gapClass} hidden={!expanded}>
      {@render list(rest, initial + peek, true)}
    </div>
  {/if}

  {#if remaining > 0}
    <button
      type="button"
      onclick={toggle}
      aria-expanded={expanded}
      class="group mt-3 flex w-full items-center gap-3 font-mono text-sm text-muted transition hover:text-accent"
    >
      <span class="h-px flex-1 bg-line transition group-hover:bg-accent/40"></span>
      <span>
        {#if expanded}
          ↑ mostrar menos
        {:else}
          ↓ mostrar mais {remaining} {remaining === 1 ? noun[0] : noun[1]}
        {/if}
      </span>
      <span class="h-px flex-1 bg-line transition group-hover:bg-accent/40"></span>
    </button>
  {/if}
</div>
