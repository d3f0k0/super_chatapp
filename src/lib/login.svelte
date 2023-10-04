<script lang="ts">
    import db from './supabase'

    const handleLogin = async () => {
        await db.login()
    }
</script>

<svelte:head>
    <title>WIP CHAT| Login</title>
</svelte:head>

<button class = "sign-in" on:click={() => handleLogin()}>Sign In</button>