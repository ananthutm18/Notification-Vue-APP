<template>
    <div class="registration-container">
        <my-header></my-header>
        
        <div class="form-wrapper">
            <h1>Join With Spartans Today</h1>
            <form @submit.prevent="handleSubmit" class="registration-form">
                <h2>Register</h2>

                <div class="form-group">
                    <label for="fname">First name:</label>
                    <input class="form-control" v-model="form.fname" type="text" id="fname" name="fname" />
                    <div class="error-message" v-if="errors.fname">{{ errors.fname }}</div>
                </div>

                <div class="form-group">
                    <label for="lname">Last name:</label>
                    <input class="form-control" v-model="form.lname" type="text" id="lname" name="lname" />
                    <div class="error-message" v-if="errors.lname">{{ errors.lname }}</div>
                </div>

                <div class="form-group">
                    <label for="email">Email:</label>
                    <input class="form-control" v-model="form.email" type="email" id="email" name="email" />
                    <div class="error-message" v-if="errors.email">{{ errors.email }}</div>
                </div>

                <div class="form-group">
                    <label for="username">User name:</label>
                    <input class="form-control" v-model="form.username" type="text" id="username" name="username" readonly />
                </div>

                <div class="form-group">
                    <label for="password">Password:</label>
                    <input class="form-control" v-model="form.password" type="password" id="password" name="password" />
                    <div class="error-message" v-if="errors.password">{{ errors.password }}</div>
                </div>

                <div class="form-group">
                    <label for="confirm-password">Confirm password:</label>
                    <input class="form-control" v-model="form.confirmPassword" type="password" id="confirm-password" name="confirmPassword" />
                    <div class="error-message" v-if="errors.confirmPassword">{{ errors.confirmPassword }}</div>
                </div>

                <div class="form-group">
                    <label for="dob">Date of birth:</label>
                    <input class="form-control" v-model="form.dob" type="date" id="dob" name="dob" @change="calculateAge" />
                    <div class="error-message" v-if="errors.dob">{{ errors.dob }}</div>
                </div>

                <div class="form-group">
                    <label for="age">Age:</label>
                    <input class="form-control" v-model="form.age" type="number" id="age" name="age" min="15" max="60" readonly />
                </div>

                <div class="form-group">
                    <label for="state">State:</label>
                    <select class="form-control" v-model="form.state" id="state" name="state" @change="setCities">
                        <option value="">Select Your state</option>
                        <option v-for="state in states" :key="state" :value="state">{{ state }}</option>
                    </select>
                    <div class="error-message" v-if="errors.state">{{ errors.state }}</div>
                </div>

                <div class="form-group">
                    <label for="city">City:</label>
                    <select class="form-control" v-model="form.city" id="city" name="city">
                        <option v-for="city in cities" :key="city" :value="city">{{ city }}</option>
                    </select>
                    <div class="error-message" v-if="errors.city">{{ errors.city }}</div>
                </div>

                <div class="form-group">
                    <label for="phone">Phone:</label>
                    <input class="form-control" v-model="form.phone" type="tel" id="phone" name="phone" />
                    <div class="error-message" v-if="errors.phone">{{ errors.phone }}</div>
                </div>

                <div class="form-group">
                    <label for="address">Address:</label>
                    <textarea class="form-control" v-model="form.address" id="address" name="address" rows="4" placeholder="Enter your address here..."></textarea>
                </div>

                <button type="submit" class="btn-submit">Register</button>
            </form>
            <p class="login-link">Back to Login? <a href="../Pages/login.html">Login to see the world</a></p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isDarkMode: false,
                form: {
                    fname: '',
                    lname: '',
                    email: '',
                    username: '',
                    password: '',
                    confirmPassword: '',
                    dob: '',
                    age: '',
                    state: '',
                    city: '',
                    phone: '',
                    address: ''
                },
                errors: {},
                states: ['Kerala', 'TamilNadu', 'Karnataka', 'Maharashtra'],
                cities: []
            };
        },
        methods: {
            toggleTheme() {
                this.isDarkMode = !this.isDarkMode;
            },
            handleSubmit() {
                this.errors = {}; // Clear previous errors
            this.errors = {}; // Clear previous errors
            if (this.validateForm()) {
                const registrations = JSON.parse(localStorage.getItem('registrations')) || [];
                registrations.push(this.form);
                localStorage.setItem('registrations', JSON.stringify(registrations));
                this.$router.push('/login');
            }
            },
            validateForm() {
                let isValid = true;
                // Basic validation example
                if (!this.form.fname) {
                    this.errors.fname = 'First name is required';
                    isValid = false;
                }
                if (!this.form.lname) {
                    this.errors.lname = 'Last name is required';
                    isValid = false;
                }
                if (!this.form.email) {
                    this.errors.email = 'Email is required';
                    isValid = false;
                }
                if (this.form.password !== this.form.confirmPassword) {
                    this.errors.confirmPassword = 'Passwords do not match';
                    isValid = false;
                }
                return isValid;
            },
            calculateAge() {
                const dob = new Date(this.form.dob);
                const ageDifMs = Date.now() - dob.getTime();
                const ageDate = new Date(ageDifMs);
                const age = Math.abs(ageDate.getUTCFullYear() - 1970);
                this.form.age = age;
            },
            setCities() {
                // Example cities based on state
                const cityOptions = {
                    Kerala: ['Kochi', 'Thiruvananthapuram'],
                    TamilNadu: ['Chennai', 'Coimbatore'],
                    Karnataka: ['Bengaluru', 'Mysuru'],
                    Maharashtra: ['Mumbai', 'Pune']
                };
                this.cities = cityOptions[this.form.state] || [];
            }
        }
    };
</script>


<style scoped>
    /* Center the registration container */
    .registration-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        padding: 2rem;
        background-color: #f4f4f9;
    }

    /* Theme toggle button */
    .theme-section {
        text-align: right;
        width: 100%;
        margin-bottom: 1rem;
    }

    .theme-mode-btn {
        padding: 0.5rem 1rem;
        font-size: 1rem;
        color: #fff;
        background-color: #007bff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

        .theme-mode-btn:hover {
            background-color: #0056b3;
        }

    /* Form container styling */
    .form-wrapper {
        width: 100%;
        max-width: 600px;
        padding: 2rem;
        border: 1px solid #ddd;
        border-radius: 8px;
        background-color: #ffffff;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    h1 {
        text-align: center;
        margin-bottom: 1.5rem;
        color: #333;
    }

    .registration-form {
        display: flex;
        flex-direction: column;
    }

    h2 {
        margin-bottom: 1.5rem;
        color: #444;
    }

    /* Form groups */
    .form-group {
        margin-bottom: 1.5rem;
    }

    label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: bold;
        color: #555;
    }

    .form-control {
        width: 100%;
        padding: 0.75rem;
        height: 2.5rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 1rem;
        box-sizing: border-box;
    }

    textarea.form-control {
        height: 100px;
        resize: vertical;
    }

    .error-message {
        color: #dc3545;
        font-size: 0.875rem;
        margin-top: 0.25rem;
    }

    .btn-submit {
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
        color: #fff;
        background-color: #28a745;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

        .btn-submit:hover {
            background-color: #218838;
        }

    .login-link {
        text-align: center;
        margin-top: 1rem;
    }

        .login-link a {
            color: #007bff;
            text-decoration: none;
        }

            .login-link a:hover {
                text-decoration: underline;
            }
</style>