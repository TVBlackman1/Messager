import io from "socket.io-client";

export default {
    data() {
        return {
            // socketAddress: "http://localhost:3000/",
            socket: io("http://localhost:3000/", {transports: ['websocket']}),
        }
    },
}