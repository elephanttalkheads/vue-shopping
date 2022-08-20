<template>
  <div>
    <TypeNav></TypeNav>

    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="(floor) in floorlist" :key="floor.id" :list="floor"></Floor>


    <Brand></Brand>
  </div>


</template>

<script>
import ListContainer from "@/pages/Home/ListContainer";
import Recommend from "@/pages/Home/Recommend";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";
import {mapState} from "vuex";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {Recommend,Rank,Like,Floor,Brand,ListContainer},
  computed: { ...mapState({floorlist:state => state.home.floorList,
      bannerList:state=> state.home.bannerList,

    })},
  methods:{
    // ...mapActions(['getFloorList','getBannerList'])
async getUserInfo() {
  try{
    await this.$store.dispatch('getUserInfo')
  }catch (e){
    console.log('未登录，请先的登录');
  }

}

  },
  mounted() {
    // this.getFloorList()
    // this.getBannerList()

      this.$store.dispatch('getFloorList')
    this.getUserInfo()




    // ...mapActions(['getFloorList','getBannerList'])
    // ...mapActions([])



  }

}
</script>

<style scoped>

</style>
