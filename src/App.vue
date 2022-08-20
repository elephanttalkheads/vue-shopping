<template>
  <div>
    <Header></Header>
<!--    路由出口-->
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
<!--    -->
<!--    <Footer v-show="$route.path=='/path' ||$route.path=='/search'"></Footer>-->
  </div>

</template>

<script>

import Header from'./components/Header'
import Footer from'./components/Footer'


export default {
  name: 'App',
  components: {
    Header,
    Footer,


  },
  mounted () {
    this.$store.dispatch('categoryList')

  }
}
</script>

<style>

</style>
