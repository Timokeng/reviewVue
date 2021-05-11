<template>
  <div id="app">
    <div class="show">
      <el-row :gutter="10">
        <el-col :span="12"><div class="example-1"></div></el-col>
        <el-col :span="12"><div class="example-1"></div></el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="6"><div class="example-1"></div></el-col>
        <el-col :span="6"><div class="example-1"></div></el-col>
        <el-col :span="6" :offset="6"><div class="example-1"></div></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.el-row {
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
}

.show{
  padding: 10px;
  background-color: blue;
}

.example-1 {
  min-height: 50px;
  background-color: blueviolet;
  border: black 1px solid;
  border-radius: 5px;
}

</style>
