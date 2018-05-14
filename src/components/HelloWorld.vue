<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2 class="ellipsis2">Essential LinksEssential LinksEssential LinksEssential LinksEssential LinksEssential LinksEssential LinksEssential LinksEssential LinksEssential LinksEssential LinksEssential LinksEssential LinksEssential LinksEssential LinksEssential LinksEssential LinksEssential LinksEssential LinksEssential LinksEssential LinksEssential LinksEssential LinksEssential LinksEssential LinksEssential LinksEssential LinksEssential LinksEssential LinksEssential LinksEssential LinksEssential LinksEssential LinksEssential LinksEssential LinksEssential LinksEssential LinksEssential LinksEssential LinksEssential LinksEssential LinksEssential LinksEssential LinksEssential LinksEssential LinksEssential LinksEssential LinksEssential LinksEssential LinksEssential LinksEssential Links</h2>
        <ul>
            <li><a @click="$goto({ name: 'hello'})" href="javascript:;">去新页面</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
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
