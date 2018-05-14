<template>
    <div id="app">
        <img src="./common/icon/logo.png">
        <navigation>
            <router-view/>
        </navigation>
    </div>
</template>

<script>
export default {
    name: 'App',
    beforeMount () {
        console.log($conf)
    }
}
</script>

<style lang="stylus">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
