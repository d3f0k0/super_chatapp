<script lang="ts">
  import {store} from './lib/supabase' 
  import Login from './lib/login.svelte';
</script>

<main>
  <h2> WIP Super chat</h2>
  {#if $store.user}
  <body>you are sign in</body>
    {:else}
    <Login/>
  {/if}
</main>