<script lang="ts">
  import type { Snippet } from 'svelte';

  let { index, title, id, children }: { index: string; title: string; id?: string; children: Snippet } = $props();
</script>

<section {id} class="mt-16 scroll-mt-8">
  <h2 class="font-mono text-sm text-accent">{index}. <span class="text-white">{title}</span></h2>
  <div class="mt-5">
    {@render children()}
  </div>
</section>
