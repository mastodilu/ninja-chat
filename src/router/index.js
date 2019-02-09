import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Chat from '@/components/Chat'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat,
      props: true, //questo route  si aspetta dei parametri
      // RouteGard chiamato beforeEnter. E' una funzione a freccia che prende 3 parametri:
      // to: informazioni sul component verso cui si sta andando
      // from: informazioni sul componente da cui si viene
      // next: funzione da chiamare
      beforeEnter: (to, from, next) => {
        if(to.params.name){ //if not null
          next() //vai al componente invocato (/chat)
        }else{
          console.log("ci hai provato...")
          next({name: 'Welcome'}) //invece di andare al componente invocato, vai alla homepage perchè il nome inserito è null
        }
      }
    }
  ]
})
