<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <div class="notification-bell" @click="toggleDropdown">


        <span class="bell-icon">
            <i class="fas fa-bell"></i>
        </span>

        <span v-if="unreadCount > 0" class="notification-count">{{ unreadCount }}</span>

      
        <div v-if="showDropdown" class="dropdown-container">
            <transition name="slide">
                <div v-show="showDropdown" class="dropdown">
                    <div v-if="notifications.length === 0" class="dropdown-item">No notifications</div>
                    <div v-for="(notification, index) in notifications" :key="index" class="dropdown-item">
                        <strong>{{ notification.title }}</strong>: {{ notification.message }}
                    </div>
                </div>
            </transition>
        </div>



    </div>
</template>

<script>
    export default {
        props: {
            unreadCount: {
                type: Number,
                default: 0,
            },
            notifications: {
                type: Array,
                default: () => [],
            },
        },

        data() {
            return {
                showDropdown: false
            };
        },
        methods: {
            toggleDropdown() {
                console.log("hello");
                this.showDropdown = !this.showDropdown;
            }
        }
        }
    
</script>

<style scoped>
    /* Add your styles here */
    .notification-bell {
        position: relative;
    }

    .notification-count {
        position: absolute;
        top: -5px;
        right: -5px;
        background-color: red;
        color: white;
        border-radius: 50%;
        padding: 2px 6px;
        font-size: 12px;
    }



    /* Dropdown Container Styles */
    .dropdown-container {
        position: relative;
    }

    /* Slide Transition */
    .slide-enter-active, .slide-leave-active {
        transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
        overflow: hidden;
    }

    .slide-enter, .slide-leave-to {
        max-height: 0;
        opacity: 0;
    }

    .dropdown {
        color:black;
        max-height: 200px;
        opacity: 1;
        background-color: white;
        border: 1px solid #ddd;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        position: absolute;
        top: 100%;
        right: 0;
        z-index: 1000;
        width: 300px; 
    }

</style>
