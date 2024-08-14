import * as signalR from "@microsoft/signalr";

class SignalRService {
    constructor() {
        this.connection = new signalR.HubConnectionBuilder()
            .withUrl("http://localhost:81/notificationHub", {
                
                skipNegotiation: true,
                transport: signalR.HttpTransportType.WebSockets
            })

            .build();

        this.connection.onclose(async () => {
            console.log("Connection closed. Reconnecting...");
            await this.start();
        });
    }

    async start() {
        if (this.connection.state === signalR.HubConnectionState.Disconnected) {
            try {
                await this.connection.start();
                console.log("SignalR Connected.");
            } catch (err) {
                console.error("SignalR Connection Error: ", err);
                setTimeout(() => this.start(), 5000);
            }
        }
    }

    onNewNotification(callback) {
        this.connection.on("ReceiveNotification", callback);
    }
}

export default new SignalRService();






