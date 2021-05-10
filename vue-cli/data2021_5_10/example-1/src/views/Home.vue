<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ShowBox :msg='msg'/>
  </div>
</template>

<script>
// @ is an alias to /src
import ShowBox from '@/components/ShowBox.vue'

export default {
  name: 'Home',
  data: function(){
    return {
      msg: {
        title: 'Welcome to My Project',
        article: 'This project is used to show message about me'
      }
    }
  },
  components: {
    ShowBox
  }
}
</script>
