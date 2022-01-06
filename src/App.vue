<template>
  <!-- Singn in -->
  <div v-if="Object.keys(user).length === 0" class="signin">
    <h1>A-rin chan Messenger</h1>
    <img src='@/assets/img/google_signin.png' @click='login'/>
  </div>
  <!-- Chat -->
  <Chat v-else :user="user"/>
</template>

<script>
import Chat from '@/components/Chat.vue'
import { signin } from '@/assets/js/firebase-init.js'

export default {
  name: 'App',
  components: {
    Chat,
  },
  data() {
    return {
      user: {},
    }
  },
  methods: {
    async login() {
      const result = await signin()
      this.user = result.user
      console.log(this.user)
    }
  }
}
</script>

<style>

.signin {
  width: 350px;
  padding: 32px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0px 0px 8px #3B3A39;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

img {
  width: 200px;
  cursor: pointer;
}

</style>
