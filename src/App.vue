<template>
  <div id="app">
     Title: {{title}}
     <input v-model="title">
     <button id="btn" type="button" @click="setTitle">Set</button>
     <button id="btn2" type="button" @click="saveContent">Save</button>
     <button id="btn3" type="button" @click="loadContent">Load</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data:() => ({
      title: 'Vue.js'
  }),
  methods: {
    setTitle:function() {
      // this.title="pressed"
      // console.log('pressed')
      // window.electronAPI.setTitle(this.title)
    },
    saveContent:function (){
      console.log('save')
      window.electronAPI.saveContent(this.title)
    },
    loadContent:async function (){
      const content = await window.electronAPI.content()
      console.log(content)
    }    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
