<template>
  <div class="slidebar">
    <div class="top" :style="isExpend?{'padding':'33px 25px'}:{'padding':'0'}">
      <div class="imgp">
        <img src="../../assets/img/favicon.ico" />
      </div>
      <h4>欢迎使用</h4>
      <h4>企业补充医疗保险</h4>
      <h4>信息管理平台</h4>
      <h4>（费用核销平台）</h4>
    </div>
    <div>
      <el-menu
        default-active="2"
        background-color="rgb(169,68,66)"
        text-color="white"
        class="menu"
        v-show="isExpend"
        :style="{'width':'100%'}">
        <el-submenu
          :index="key + ''"
          v-for="(item, key) in LeftTitle"
          :key="key"
        >
          <template slot="title">
            <span>{{ item.title }}</span>
          </template>
          <!-- <el-menu-item-group >
         
          <el-menu-item v-for="(subtitle,skey) in item.subtitle " :key="key+'-'+skey">
            {{subtitle.title}}
            </el-menu-item>
        </el-menu-item-group> -->
          <el-submenu
            v-for="(subtitle, skey) in item.subtitle"
            :key="skey"
            :index="key + '-' + skey"
          >
           <template slot="title">
            <span>{{ subtitle.title }}</span>
          </template>
            <el-menu-item
              v-for="(ctitle, ckey) in subtitle.subtitle"
              :key="key + '-' + skey + '-' + ckey"
             @click="topath({title:ctitle.title,path:ctitle.path})">
              {{ ctitle.title }}
            </el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>
<style scoped>
.slidebar {
  height: 100vh;
position: sticky;
top:0;
  z-index: 999;
  

}
.top {

  padding-bottom: 0;
  color: white;
   font-size: 16px;
    /* padding: 33px 25px; */
}
.top > h4 {
  text-align: center;
  font-weight: 400;
  line-height: 1.5;
}
.imgp {
  width: 70px;
  height: 70px;
  background: white;
  border-radius: 50%;
  text-align: center;
  overflow: hidden;
  margin: 0 auto;
}
.imgp > img {
  width: 50px;
  height: 50px;
  margin-top: 10px;
}
.menu {
  font-weight: 600;
  font-size: 14px;
 
}

.menu .el-menu-item:hover {
  background: rgb(190, 30, 35) !important;
}
</style>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "Sidebar",
  data() {
    return {
      str: "Slider",
      LeftTitle: [
        {
          title: "系统管理",
          path: "/",
          subtitle: [
            {
              title: "公告管理",
              path: "/",
               subtitle: [
                {
                  title: "公告管理1",
                  path: "/Announcementquery/",
                },
              ],
            },
          ],
        },
        {
          title: "系统管理",
          path: "/",
          subtitle: [
            {
              title: "公告管理",
              path: "/",
              subtitle: [
                {
                  title: "公告管理2",
                  path: "/Sickappointment/",
                },
              ],
            },
          ],
        },
        {
          title: "系统管理",
          path: "/",
          subtitle: [
            {
              title: "公告管理",
              path: "/",
               subtitle: [
                {
                  title: "公告管理3",
                  path: "/Reimburse/",
                },
              ],
            },
          ],
        },
        {
          title: "系统管理",
          path: "/",
          subtitle: [
            {
              title: "公告管理",
              path: "/",
               subtitle: [
                {
                  title: "公告管理4",
                  path: "/Informationquery/",
                },
              ],
            },
          ],
        },
        {
          title: "系统管理",
          path: "/",
          subtitle: [
            {
              title: "公告管理",
              path: "/",
               subtitle: [
                {
                  title: "公告管理5",
                  path: "/",
                },
                
              ],
            },
          ],
        },
      ],
    };
  },

  methods:{
    ...mapMutations("tab",{addPath:"addpath"}),
    topath(obj){
      this.addPath(obj),
      this.$router.push(obj.path);
    }
  },
    computed:{
    ...mapGetters("tab",{currentPath:"currentPath",isExpend:"isExpend"})
  },
};
</script>
