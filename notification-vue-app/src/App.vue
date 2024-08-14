<template>
    <div id="app">
        <Navbar />
        <main>
            <div class="container">
                <h1>Welcome to MyApp</h1>
                <p>This is the home page content.</p>
            </div>
        </main>
    </div>
</template>

<script>
    import Navbar from './components/Navbar.vue';

    export default {
        components: {
            Navbar,
        },
    };
</script>


<style>
    #app {
        width:100%;
        font-family: Arial, sans-serif;
        color: #333;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    main {
        flex: 1;
        padding: 20px;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
    }

    h1 {
        font-size: 2.5em;
        margin-bottom: 20px;
    }

    p {
        font-size: 1.2em;
    }
</style>
