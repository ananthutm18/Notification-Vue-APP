<template>
    <div class="notification-bell" @click="toggleDropdown">
        <span class="bell-icon">Bell</span>
        <span v-if="unreadCount > 0" class="notification-count">{{ unreadCount }}</span>

        <!-- Dropdown for notifications -->
        <div v-if="showDropdown" class="dropdown">
            <div v-if="notifications.length === 0" class="dropdown-item">No notifications</div>
            <div v-for="(notification, index) in notifications" :key="index" class="dropdown-item">
                <strong>{{ notification.title }}</strong>: {{ notification.message }}
            </div>
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
</style>
