<template>
  <div id="app">
    <h2>Shift Illuminator</h2>
    <div>
      <el-button @click="startHacking">Start</el-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    startHacking () {
      this.$notify({
        title: 'ShiftIlluminator',
        type: 'success',
        message: 'Let\'s illuminate awesome things!',
        duration: 3000
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
</style>
