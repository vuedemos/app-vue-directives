import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


Vue.directive('my-show', {
  // 只调用一次，指令第一次绑定到元素时调用
  bind: function (el, binding, vnode) {
      console.log('bind钩子函数 =>el', el)
      console.log('bind钩子函数 =>binding', binding)
      console.log('bind钩子函数 =>vnode', vnode)
      
      el.style.display = binding.value ? 'block' : 'none'
      el.style.color = 'red'
  },

  // 被绑定元素插入父节点时调用
  inserted: function (el, binding, vnode) {
      console.log('inserted 钩子函数 =>el', el)
      console.log('inserted 钩子函数 =>binding', binding)
      console.log('inserted 钩子函数 =>vnode', vnode)
      el.style.color = 'green'
  },

  // 所在组件的 VNode 更新时调用
  update: function (el, binding, vnode, oldVnode) {
      console.log('update 钩子函数 el=>', el)
      console.log('update 钩子函数 binding=>', binding)
      console.log('update 钩子函数 vnode=>', vnode)
      console.log('update 钩子函数 oldVnode=>', oldVnode)

      el.style.display = binding.value ? 'block' : 'none'
      el.style.color = 'orange'
  },

  // 指令所在组件的 VNode 及其子 VNode 全部更新后调用
  componentUpdated: function (el, binding, vnode, oldVnode) {
      console.log('componentUpdated 钩子函数 el=>', el)
      console.log('componentUpdated 钩子函数 binding=>', binding)
      console.log('componentUpdated 钩子函数 vnode=>', vnode)
      console.log('componentUpdated 钩子函数 oldVnode=>', oldVnode)
      el.style.color = 'lime'
  },

  // 指令与元素解绑时调用
  unbind: function (el, binding, vnode) {
      console.log('unbind 钩子函数 el=>', el)
      console.log('unbind 钩子函数 binding=>', binding)
      console.log('unbind 钩子函数 vnode=>', vnode)
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
