<template>
    <div class="login-container">
        <h1>Login</h1>
        <form @submit.prevent="handleLogin" class="login-form">
            <div class="form-group">
                <label for="email">Email:</label>
                <input class="form-control" v-model="email" type="email" id="email" name="email" />
                <div class="error" v-if="error">{{ error }}</div>
            </div>

            <div class="form-group">
                <label for="password">Password:</label>
                <input class="form-control" v-model="password" type="password" id="password" name="password" />
            </div>

            <button type="submit" class="btn-submit">Login</button>
        </form>
        <p class="register-link">Don't have an account? <router-link to="/register">Register here</router-link></p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                email: '',
                password: '',
                error: ''
            };
        },
        methods: {
            handleLogin() {
            this.error = ''; // Clear previous error

            const registrations = JSON.parse(localStorage.getItem('registrations')) || [];
            const user = registrations.find(user => user.email === this.email && user.password === this.password);

            if (user) {
                // Store the current user in localStorage
                localStorage.setItem('currentUser', this.email);
                this.$router.push('/');
            } else {
                this.error = 'Invalid email or password';
            }
            }
        }
    };
</script>

<style scoped>
    .login-container {
        width: 100%;
        max-width: 400px;
        margin: 0 auto;
        padding: 1rem;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        background-color: #fff;
    }

    .login-form {
        display: flex;
        flex-direction: column;
    }

    .form-group {
        margin-bottom: 1rem;
    }

    .form-control {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    .error {
        color: #dc3545;
        font-size: 0.875rem;
        margin-top: 0.25rem;
    }

    .btn-submit {
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
        color: #fff;
        background-color: #007bff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    .btn-submit:hover {
        background-color: #0056b3;
    }

    .register-link {
        margin-top: 1rem;
    }
</style>
