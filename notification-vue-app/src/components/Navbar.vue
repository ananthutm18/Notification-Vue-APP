<template>
    <nav class="navbar">
        <div class="navbar-brand">
            <router-link to="/">
                <img src="../assets/logoo.jpg" alt="MyApp Logo" class="logo-image" />
            </router-link>
        </div>        <div class="nav-links">
            <router-link to="/" class="nav-link" active-class="active">Home</router-link>
            <router-link to="/about" class="nav-link" active-class="active">About</router-link>
            <router-link to="/contact" class="nav-link" active-class="active">Contact</router-link>
        </div>
                      <notification-bell :unreadCount="unreadCount" :notifications="notifications" @clear-unread-count="clearUnreadCount" />
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
        const unreadCount = ref(0);

            const addNotification = (notification) => {
                notifications.value.push(notification);
                unreadCount.value += 1; // Increment unread count
            console.log(unreadCount,"heloooooooooooooo")
            };

            const triggerNotification = () => {
                const bellIcon = document.querySelector('.bell-icon');
                bellIcon.classList.add('shake', 'glow');



                setTimeout(() => {
                    bellIcon.classList.remove('shake', 'glow');
                }, 500);
            };


        const clearUnreadCount = () => {
            unreadCount.value = 0; // Reset unread count
        };
       



            onMounted(async () => {
                SignalRService.onNewNotification((notification) => {
                    addNotification(notification);

                    triggerNotification();
                });

                try {
                    await SignalRService.start();
                } catch (error) {
                    console.error('SignalR connection error:', error);
                }
            });

            return {
                notifications,
                unreadCount,
            clearUnreadCount
            };
        }
    };
</script>


<style>
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
        display: flex;
        align-items: center;
    }

    .logo-image {
        height: 40px;
        width: auto;
    }

    .nav-links {
        display: flex;
        gap: 20px;
    }

    .nav-link {
        color: white;
        text-decoration: none;
        font-size: 16px;
        font-weight: 500;
        transition: color 0.3s ease;
    }

        .nav-link:hover {
            color: #ecf0f1;
        }

    .active {
        border-bottom: 2px solid #ecf0f1;
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


    @keyframes shake {
        0%, 100% {
            transform: translateX(0);
        }

        25% {
            transform: translateX(-5px);
        }

        50% {
            transform: translateX(5px);
        }

        75% {
            transform: translateX(-5px);
        }
    }

    .bell-icon.shake {
        animation: shake 0.5s ease-in-out;
    }


    @keyframes glow {
        0%, 100% {
            box-shadow: 0 0 5px #ffd700, 0 0 10px #ffd700, 0 0 15px #ffd700, 0 0 20px #ffd700;
        }

        50% {
            box-shadow: 0 0 20px #ffd700, 0 0 30px #ffd700, 0 0 40px #ffd700, 0 0 50px #ffd700;
        }
    }

    .bell-icon.glow {
        animation: glow 1.5s ease-in-out;
    }




    .navbar-links {
        display: flex;
        list-style: none;
        gap: 20px;
    }

        .navbar-links li {
            list-style: none;
        }

        .navbar-links a {
            color: white;
            text-decoration: none;
            font-size: 18px;
            transition: color 0.3s ease;
        }

            .navbar-links a:hover {
                color: #ecf0f1;

            }

</style>