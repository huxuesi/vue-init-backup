<template>
    <div class="hello">
        {{msg}}<a @click="$goto({ path: '/'})" href="javascript:;">返回页面</a> <a @click="$goto({ name: $route.name})" href="javascript:;">刷新页面</a><br>
        {{num}}<br>
        <button @click="addNum">++</button><br>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            num: 1
        }
    },
    methods: {
        addNum() {
            this.num += 1
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
