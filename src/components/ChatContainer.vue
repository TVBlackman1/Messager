<template>
  <div class="chat_container">
    <input type="text" class="nick-handler" v-model="nick">
    <input type="text" class="add_message" v-model="yourMessage" @keydown.enter="onEnterDown">
    <button @click="getTestServerMessage"/>
    <template v-for="(message, index) in messages">
      <own-message
          :text="message.text"
          :key="index"
          v-if="message.sendBy === nick"/>
      <other-message
          :text="message.text"
          :key="index"
          v-else/>
    </template>
  </div>
</template>

<script>
import OwnMessage from "./OwnMessage";
import OtherMessage from "@/components/OtherMessage";
import serverHandlerTest from "@/mixins/server-handlers/serverHandlerTest";

import socketHandlerMessages from "@/mixins/server-handlers/socketHandlerMessages";

export default {
  name: "ChatContainer",
  data() {
    return {
      nick: "",
      yourMessage: "",
      messages: []
    }
  },
  created() {
    this.onNewMessage = this.showLastMessage

  },
  methods: {
    async getTestServerMessage() {
      let receivedData = await this._srvGetTestMessage()
      console.log(receivedData.message)

    },
    onEnterDown() {
      let data = {
        sendBy: this.nick,
        msg: this.yourMessage
      }
      this.sendMessage(data)
      this.yourMessage = ""
    },

    showLastMessage(data) {
      this.messages.push(
          {
            sendBy: data.sendBy,
            text: data.msg
          }
      )
    }
  },
  mixins: [serverHandlerTest, socketHandlerMessages],
  components: {OtherMessage, OwnMessage}
}
</script>

<style scoped>
.chat_container {
  border: 1px solid steelblue;
  border-radius: 6px;
  box-shadow: #2c3e50;

  width: 600px;
  height: 800px;
  padding: 1em 1.15em 2em;
  box-sizing: border-box;
}
</style>