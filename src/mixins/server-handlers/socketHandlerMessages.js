import socketHandler from "@/mixins/server-handlers/socketHandler";

export default {
    data() {
        return {
            onNewMessage: () => {}
        }
    },
    created() {
        this.socket.on('new-message', (data) => {
            this.onNewMessage(data)
        })
    },
    methods: {
        sendMessage(data) {
            this.socket.emit('new-message', data)
        }
    },
    mixins: [socketHandler]
}