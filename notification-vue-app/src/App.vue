<template>
    <div id="app">
        <Navbar />
        <main>
            <div class="container">
                <h1>Welcome to Spartan World</h1>
                <p>This is not the end.... Time will heal..Go on Buddyy.....</p>
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

    background: url("https://t4.ftcdn.net/jpg/05/61/09/11/360_F_561091177_27MfuJDQ3fW3Q2RIPiap9eE6IN5HMmef.jpg");
    background-size: cover;

    }

    main {
        flex: 1;
        padding: 20px;
    }

    .container {
        max-width: 100%;

    text-align: center;
    color: white;

  
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
