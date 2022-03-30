<template>
  <div class="topbar">
    <div class="top">
      <div class="tleft">
        <p class="icon" @click="changeisExpend"><span class="el-icon-s-fold" ></span></p>
      </div>
      <div class="tright">
        <p class="icon">
          <span class="el-icon-postcard"></span><span> 个人 </span>
        </p>
      </div>
      <div class="clear"></div>
    </div>
    <div class="bottom">
      <div class="bleft">
        <span class="el-icon-d-arrow-left" ></span>
      </div>
      <div class="bcenter">
        <p v-for="(item,key) in pathArr" :class="currentPath.title==item.title?'active':''" @click="toCurrentPath(item)">
         {{item.title}} <span class="el-icon-close" v-show="item.title!=='主页'" @click.stop="deleteCurrentPath({path:item,index:key})"></span>
        </p>
        <!-- <div class="clear"></div> -->
      </div>
      <div class="bright">
        <p class="bright-l"><span class="el-icon-d-arrow-right"></span></p>
        <p class="bright-c">
            <span>关闭操作</span> <span class="el-icon-caret-bottom"></span>
            <ul>
                <li>定位当前选项卡</li>
                <li @click="closeAlltab">关闭全部选项卡</li>
                <li @click="closeothertab">关闭其他选项卡</li>
            </ul>
        </p>
        <p class="bright-r"><span class="el-icon-error"></span> <span>退出</span></p>
        <div class="clear"></div>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>
<style scoped>
.topbar{
  position:sticky ;
  top:0;
  background: white;
  z-index: 999;
}
.top {
  width: 100%;
  font-size: 16px;

}
.tleft {
  float: left;
  overflow: hidden;
}
.tleft .icon {
  margin: 14px 5px 5px 20px;
  text-align: center;

  border: 1px solid #ccc;
  width: 38px;
  height: 30px;
}
.tleft .icon span {
  margin-top: 7px;
}

.tright {
  float: right;
  margin-right: 30px;
  height: 60px;
  cursor: pointer;
}
.tright:hover {
  background: #ccc;
}
.tright .icon {
  margin: 24px 5px 5px 20px;
}
.bottom {
  border-top: solid 2px rgb(190, 30, 35);
  height: 40px;
  color:#999;
box-shadow: 0 1px 2px 0 rgb(0 0 0 / 10%);
position: relative;
  
}
.bottom .bleft {
  position: absolute;
  top:0;
  left:0;
  background: white;
  width: 40px;
  height: 100%;
  line-height: 40px;
  padding-left:  6px;
  cursor: pointer;
  border-left: solid 1px #eee;
   border-right: solid 1px #eee;
}
.bottom .bleft:hover{
    background-color: #ccc;
    color:#777;
}
.bottom .bcenter {
  float: left;
  overflow: hidden;
  margin-left:40px;
 
}
.bottom .bcenter p{
  float:left;
  line-height: 40px;
  padding:0 15px;
}
.bottom .bcenter p:hover{
      color: #777;
    background: #f2f2f2;
    cursor: pointer;
}
.bottom .bcenter p.active{
    background: rgb(176,176,176);
    color: #000;
}
.bottom .bcenter p.active:hover{
    background: rgb(176,176,176);
    color: #fff;
}
.bottom .bright {
  /* float: right; */
  width: 225px;
  position: absolute;
  top:0;
  right: 0;
  background: white;
  height: 38px;
}
.bottom .bright .bright-l {
  width: 40px;
  height: 100%;
  line-height: 40px;
  text-align: center;
  float: left;
   border-left: solid 1px #eee;
   border-right: solid 1px #eee;
}
.bottom .bright >p{
    cursor: pointer;
}
.bottom .bright >p:hover{
    background-color: #ccc;
    color:#777;
}
.bottom .bright .bright-c {
  width: 105px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  float: left;
  font-size: 16px;
  position: relative;
  padding-left: 15px;
}
.bottom .bright .bright-c:hover ul{
    display: block;
}
.bottom .bright .bright-c ul {
  position: absolute;
  width: 150px;
  bottom: -120px;
  left: 0;
  display: none;
  list-style: none;
  z-index: 999;
  background: white;
  padding: 0 15px;
box-shadow: 0 2px 4px rgb(0 0 0 / 12%); 
border:1px solid #eee;
}
.bottom .bright .bright-c ul li:hover{
     color: #262626;
    text-decoration: none;
    background-color: #f5f5f5;
}

.bottom .bright .bright-r {
  width: 80px;
  height: 100%;
  line-height: 40px;
  text-align: center;
  float: left;
}
</style>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "Topbar",
  computed:{
    ...mapGetters("tab",{pathArr:"newPathArray",currentPath:"currentPath"})
  },
  methods:{
      ...mapMutations("tab",{changeCurrentPath:"changeCurrentPath",deletePath:"deletePath",deleteAllpath:"deleteAllpath",deleteotherpath:"deleteotherpath",changeisExpend:"changeisExpend"}),
      toCurrentPath(path){
        this.changeCurrentPath(path);
        this.$router.push(this.currentPath.path);
      },
      deleteCurrentPath(data){
        this.deletePath(data);
        this.$router.push(this.currentPath.path);
      },
      closeAlltab(){
        this.deleteAllpath();
        this.$router.push(this.currentPath.path);
      },
      closeothertab(){
        this.deleteotherpath();
      }

  }
};
</script>
