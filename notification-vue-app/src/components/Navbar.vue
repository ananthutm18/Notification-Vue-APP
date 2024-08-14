<template>
    <nav class="navbar">
        <div class="navbar-brand">MyApp</div>
        <notification-bell :unreadCount="notifications.length" :notifications="notifications" />
    </nav>
</template>

<script>
    import { ref, onMounted } from 'vue';
    import SignalRService from '../services/signalrService';
    import NotificationBell from './NotificationBell.vue';
    export default {
        components: {
            NotificationBell,
        },
        setup() {
            const notifications = ref([]);

            const addNotification = (notification) => {
                notifications.value.push(notification);
            };

            onMounted(async () => {
                SignalRService.onNewNotification((notification) => {
                    addNotification(notification);
                });

                try {
                    await SignalRService.start();
                } catch (error) {
                    console.error('SignalR connection error:', error);
                }
            });

            return {
                notifications
            };
        }
    };
</script>


<style >
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        background-color: #2c3e50;
        color: white;
        height: 60px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .navbar-brand {
        font-size: 24px;
        font-weight: bold;
    }

    .notification-bell {
        display: flex;
        align-items: center;
        position: relative;
    }

        .notification-bell .bell-icon {
            font-size: 24px;
            cursor: pointer;
            transition: color 0.3s ease;
        }

            .notification-bell .bell-icon:hover {
                color: #ecf0f1;
            }

    .notification-count {
        position: absolute;
        top: -10px;
        right: -10px;
        background-color: #e74c3c;
        color: white;
        border-radius: 50%;
        padding: 4px 8px;
        font-size: 12px;
        font-weight: bold;
        min-width: 20px;
        text-align: center;
    }
</style>
