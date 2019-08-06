import Vue from 'vue'
import App from './App.vue'
new Vue({
    el:'#app',
    render:h=>h(App)
    // render:function(createElement){
    //     return createElement(App)
    // }
    // render:(createElement)=>createElement(App)
})