<template>
  <div class="chat container">
    <h2 class="center teal-text">Chat</h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages" v-chat-scroll>
            <li v-for="message in messages" :key="message.id">
              <span class="teal-text">{{message.name}}</span>
              <span class="grey-text text-darken-3">{{message.content}}</span>
              <span class="grey-text time">{{message.timestamp}}</span>
            </li>
          </ul>
        </div>
        <div class="card-action">
          <NewMessage :name="name" />
          <!-- also passing the property name to NewMessage -->
        </div>
      </div>
  </div>
</template>

<script>
import NewMessage from "@/components/NewMessage"
import db from '@/firebase/init'
import moment from 'moment'

export default {
  name: "Chat",
  props: ["name"],
  components: {
    NewMessage
  },
  data() {
    return {
      messages: []
    }
  },
  created(){
    //listen for DB changes
    let ref = db.collection('messages').orderBy('timestamp')

    ref.onSnapshot(//listen for realtime changes in collection 'messages'
      snapshot => {
        snapshot.docChanges().forEach(
          change => {
            if(change.type == 'added'){
              let doc = change.doc
              this.messages.push({
                id: doc.id,
                name: doc.data().name,
                content: doc.data().content,
                timestamp: moment(doc.data().timestamp).format('lll')
              })
            }
          })
    })
  }
};
</script>

<style>
.chat h2 {
  font-size: 2.6em;
  margin-bottom: 10%;
}
.chat span {
  font-size: 1.4em;
}

.chat .time {
  display: block;
  font-size: 1em;
}

.chat .message {
  display: block;
}

.messages{
  max-height: 50vh;
  overflow: auto;
}

.messages::-webkit-scrollbar{
  width: 3px;
}
.messages::-webkit-scrollbaar-track{
  background: #ddd;
}
.messages::-webkit-scrollbar-thumb{
  background: #aaa;
}

</style>
