<template>
  <div id="app">
    <div class="box">
      <h1>自定义指令 my-show</h1>
      <div v-my-show="isTrue">{{ message }}</div>
      <button @click="toggleShow">{{ isTrue ? '隐藏' : '显示'}}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      message: '自定义指令my-show',
      isTrue: true,
    }
  },
  methods: {
    toggleShow () {
      this.isTrue = !this.isTrue
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  padding: 10px;
}

.box {
  border: 1px solid #cecece;
  box-shadow: 1px 1px 2px rgba(0,0,0,.25);
  border-radius: 4px;
  height: 30vh;
  padding: 15px;
}

div >>> strong {
  color: red;
}

div /deep/ strong {
  color: red;
}

input {
    min-width: 50%;
    border-radius: 6px;
    min-height: 40px;
    border: 0;
    padding: 5px 10px;
    font-size: 0;
    background: #1566BB;
    transition: background .3s ease;
    color: #fff;
}

input:focus {
    background: #065CB7;
    font-size: 23px;
    outline: none 0;
}
button {
  border-radius: 5px;
  padding: 5px 15px;
  text-decoration: none;
  margin: 5px 0;
  border: none;
  color: #fff;
  position: relative;
  display: inline-block;
  background-color: #55acee;
  box-shadow: 0px 5px 0px 0px #3C93D5;
}
button:hover {
  background-color: #6FC6FF;
}
button:active {
  transform: translate(0px, 5px);
  box-shadow: 0px 1px 0px 0px;
  outline: none 0;
}
[v-cloak] {
  display: none
}
</style>
