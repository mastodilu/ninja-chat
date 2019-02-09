<template>
  <div class="new-message">
    <form @submit.prevent="addMessage">
      <label for="new-message">New Message (enter to add)</label>
      <input type="text" name="new-message" v-model=newMessage>
      <span v-if=feedback class="red-text text-lighten-2 feedback">{{feedback}}</span>
    </form>
  </div>
</template>

<script>
import db from '@/firebase/init'
export default {
  name: 'NewMessage',
  props: ['name'], //receiving the property 'name' from parent component
  data(){
    return{
      feedback: null,
      newMessage: null
    }
  },
  methods:{
    addMessage(){
      if(this.newMessage){//if not null
        db.collection('messages') //crea la collezione perchè partiamo col db vuoto
        .add({
          content: this.newMessage,
          name: this.name,
          timestamp: Date.now()
        })
        .catch( (error) => {
          console.log(error)
        })
        
        this.newMessage = null
        this.feedback = null
      }else{//if null
        this.feedback = "you must enter a valid message"
      }
      console.log(this.newMessage, this.name, Date.now())
    }
  }
}
</script>

<style>
.new-message .feedback{
  font-size: 1em;
  display: block;
}
</style>

