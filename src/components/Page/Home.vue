<template>
<div>
<el-row >
  <el-col :xs="4"  :xl="isExpend?3:1" :lg="isExpend?4:2" :md="isExpend?4:2" :sm="isExpend?4:2" class="slidebar"><div class="grid-content bg-purple red" >
       <Sidebar/></div></el-col>
  <el-col :xs="20"  :xl="isExpend?20:22" class="white" :lg="isExpend?20:22" :md="isExpend?20:22" :sm="isExpend?20:22" :style="{minHeight:'100vh'}" ><div class="grid-content bg-purple-light">
      <Topbar></Topbar>
      <keep-alive><router-view/></keep-alive>
       <Footer/>
    </div></el-col>
  
</el-row>

 </div>
</template>
<style scoped>
.slidebar{
  position: sticky;
  top:0;
  overflow-y: scroll;
}
.slidebar::-webkit-scrollbar{width:4px;margin-left: 0px;}
.slidebar::-webkit-scrollbar-thumb{background-color: #999;}
.slidebar::-webkit-scrollbar-button{display: block;}
.red{
   background: rgb(169,68,66);
}
.white{
  background: white;
}

</style>
<script>
import Sidebar from "../commen/Sidebar.vue";
import Topbar from '../commen/Topbar.vue';
import Footer from '../commen/footer.vue';
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      str: "Home",
    
    };
  },
  computed:{
    ...mapGetters("tab",{currentPath:"currentPath",isExpend:"isExpend"})
  },
  methods: {
    gotoLogin() {
      this.$router.push("/Login");
    },
  },
  components:{
      Sidebar,
    Topbar,
    Footer
  }
};
</script>
