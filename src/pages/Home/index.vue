<template>
  <div>
    <TypeNav/>
    <ListContainer/>
    <Recomend/>
    <Rank/>
    <Like/>
    <Floor v-for="(floor) in floorList" :key="floor.id" :list="floor"/>
    <Brand/>
  </div>
</template>

<script>
//引入组件
import ListContainer from "./ListContainer";
import Recomend from "./Recomend";
import Rank from "./Rank";
import Like from "./Like";
import Floor from "./Floor";
import Brand from "./Brand";
import {mapState} from "vuex";
export default {
  components:{
    ListContainer,
    Recomend,
    Rank,
    Like,
    Floor,
    Brand
  },
  mounted() {
    this.$store.dispatch("getFloorList");
    this.$store.dispatch('getUserInfo');
  },
  computed:{
    ...mapState({
      floorList:state=>state.home.floorList,
    })
  }
}
</script>

<style>

</style>