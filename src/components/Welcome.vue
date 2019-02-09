<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-container center-align">
        <h2 class="teal-text">Welcome</h2>
        <form @submit.prevent="enterChat">
          <label for="name">Enter your name</label>
          <input type="text" name="name" v-model=name>
          <button class="btn teal">Enter chat</button>
          <p v-if=feedback class="red-text">{{feedback}}</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      name: null,
      feedback: null
    }
  },
  methods:{
    enterChat(){
      if(this.name){ //if not null
        this.$router.push({name: 'Chat', params:{name: this.name}})
      }else{ //if null
        this.feedback = 'you must enter a name to join'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.welcome{
  margin-top: 10%;
}

.welcome h2{
  font-size: 4em;
}

.welcome .btn{
  margin: 30px auto;
}

.welcome .card{
  padding: 10%;
}

</style>