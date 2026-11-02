<script lang="ts">
  import type { TimelineItem } from '#lib/data.ts';

  let {
    items,
    offset = 0,
    isFinal = true,
    highlightFirst = false,
  }: { items: TimelineItem[]; offset?: number; isFinal?: boolean; highlightFirst?: boolean } = $props();
</script>

<ol class="border-l border-line" start={offset + 1}>
  {#each items as item, i (item.place + item.period)}
    <li class="relative pl-6 {isFinal && i === items.length - 1 ? '' : 'pb-8'}">
      <span
        class="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full {highlightFirst && offset + i === 0
          ? 'bg-accent'
          : 'border border-muted bg-line'}"
      ></span>
      <p class="font-mono text-xs text-muted">{item.period}</p>
      <h3 class="mt-1 font-medium text-white">{item.title} · {item.place}</h3>
      <p class="mt-1 text-sm leading-relaxed text-text/70">{item.description}</p>
    </li>
  {/each}
</ol>
