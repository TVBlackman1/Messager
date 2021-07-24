import serverHandler from "@/mixins/server-handlers/serverHandler";

export default {
    data() {
        return {
        }
    },
    methods: {
        async _srvGetTestMessage() {
            return await this._srvJsonRequest('test/')
        }
    },
    mixins: [serverHandler]
}