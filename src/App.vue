<template>
  <div id="app">
    <div class="box">
      <h1>Vue插值语法：{{}}</h1>
      <div>{{ message }}</div>
    </div>

    <div class="box">
      <h1>v-text</h1>
      <div v-text="message"></div>
    </div>

    <div class="box">
      <h1>v-html</h1>
      <div>{{ rawHtml }}</div>
      <div v-html="rawHtml"></div>
    </div>

    <div class="box">
      <h1>v-once</h1>
      <div>{{ message }}</div>
      <div v-once>{{ message }}</div>
      <button @click="changeMessage">修改消息</button>
    </div>

    <div class="box">
      <h1>v-bind</h1>
      <div>
        <a :href="url">{{ linkText }}</a>
      </div>
    </div>

    <div class="box">
      <h1>v-model</h1>
      <input v-model="message" placeholder="输入一个信息" />
      <div>你输入的信息：{{ message }}</div>

      <select v-model="selected">
          <option disabled value="">选择你想要的选项</option>
          <option>CSS</option>
          <option>JavaScript</option>
          <option>Node</option>
          <option>HTML</option>
      </select>
      <div>你喜欢选项：{{ selected }}</div>
    </div>

    <div class="box">
      <h1>v-show</h1>
      <div v-show="isTrue">{{ message }}</div>
      <button @click="toggleShow">{{ isTrue ? '隐藏' : '显示' }}</button>
    </div>

    <div class="box">
      <h1>v-if/v-else-if/v-else</h1>
      <div v-if="isTrue">Hello, {{ message }} !</div>
      <div v-else>Hi, {{ message }} !</div>
      <button @click="toggleShow">切换</button>
    </div>

    <div class="box">
      <h1>v-for</h1>
      <ul>
        <li v-for="item in items">{{ item }}</li>
      </ul>
    </div>

    <div class="box">
      <h1>v-pre</h1>
      <div v-pre>{{ message }}</div>
    </div>

    <div class="box">
      <h1>v-cloak</h1>
      <div v-cloak>{{ message }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      message: 'Hello Vue (^_^)',
      rawHtml: 'Hello, <strong>Vue (^_^) </strong>',
      url: '//www.w3cplus.com',
      linkText: 'W3cplus.com',
      selected: '',
      isTrue: true,
      items: ['CSS', 'JavaScript', 'HTML', 'TypeScript']
    }
  },
  methods: {
    changeMessage () {
      this.message = 'Hello, 大漠 !'
    },
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
