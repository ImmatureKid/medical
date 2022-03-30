<template>
  <div class="common">
    <div class="scrollFont">
      <div class="sleft">
        <span class="el-icon-phone-outline"></span>
      </div>
      <div class="sright">
        <div id="sright" @mouseenter="clearIntervel" @mouseleave="ScrollFont">
          <div
            class="scroll"
            :style="{ left: number + 'px' }"
            ref="scroll"
            id="scroll"
          >
            <p v-for="(item, key) in scrollNews" >
              {{ item }}
            </p>
           

            <!-- <div class="clear"></div> -->
          </div>
        </div>
      </div>
      <div class="clear"></div>
    </div>
    <div class="content">
      <el-row :gutter="20">
        <el-col :xl="12" :lg="12" :md="12">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>服务中心</span>
            </div>
           <div class="cardcontent">
              <div v-for="o in scrollNews"  class="text item">
               <a href="javascript:"> {{ o }} </a> <el-button class="button">下载</el-button>
               
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :xl="12" :lg="12" :md="12">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>服务中心</span>
            </div>
           <div class="cardcontent">
              <div v-for="o in scrollNews"  class="text item">
                 <a href="javascript:"> {{ o }} </a> <el-button class="button">下载</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :xl="12" :lg="12" :md="12">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>服务中心</span>
            </div>
           <div class="cardcontent">
              <div v-for="o in scrollNews"  class="text item">
                 <a href="javascript:"> {{ o }} </a> <el-button class="button">下载</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :xl="12" :lg="12" :md="12">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>服务中心</span>
            </div>
            <div class="cardcontent">
              <div v-for="o in scrollNews"  class="text item">
               <a href="javascript:"> {{ o }} </a> <el-button class="button">下载</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<style scoped>
.common {
  padding: 35px;
  font-size: 14px;
}
.common .scrollFont {
  overflow: hidden;
}
.common .scrollFont .sleft {
  float: left;
  width: 28px;
  height: 28px;
  color: rgb(169, 68, 66);
}
.common .scrollFont .sright {
  /* float:left; */
  position: relative;
  overflow: hidden;
  height: 26px;
}
.common .scrollFont .sright .scroll {
  position: absolute;
  left: 0;
  top: 0;
}
.common .scrollFont .sright .scroll p {
  float: left;
  width: 200px;
}

#sright {
  overflow: hidden;
}
.el-col {
  border-radius: 8px;
}
.el-row {
  margin-top: 20px;
}
.clearfix {
  font-weight: 700;
  border-left: #0000ff 3px solid;
  padding-left: 10px;
}
.el-card__header {
  border-bottom: 1px solid #ebeef5;
}
.box-card{
  padding: 10px 15px;
  font-size: 16px;
}
.box-card .cardcontent{
  height: 320px;
  overflow-y: scroll;

 
}
.box-card .cardcontent .button{
  position:absolute;
  top:3px;
  right:10px;
display: inline-block;
  width: 15%;
  line-height: 26px!important;
  height: 26px !important;
  padding: 0;

}
.box-card .cardcontent::-webkit-scrollbar{width:4px;margin-left: 0px;}
.box-card .cardcontent::-webkit-scrollbar-thumb{background-color: #999;}
.box-card .cardcontent::-webkit-scrollbar-button{display: block;}
.box-card .item {
padding: 6px 70px 6px 0;
    border-bottom: 1px solid #DDDDDD;
    position: relative;
    cursor: pointer;
}
.box-card .item a{
  width: 95%;
  display: inline-block;
  word-wrap: break-word;
  padding-left: 12px;
  text-decoration: none;
  color:#333;

}
.box-card .item::before{
      content: "\2022";
    color: #FFBB00;
    font-size: 16px;
    margin-left: 10px;
    position: absolute;
    top: 6px;
    left: -12px;

}

.box-card .item .d{
  color:#ffbb00;
}
</style>
<script>
export default {
  name: "Common",
  data() {
    return {
      str: "Common",
      scrollNews: [
        "1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
        "111111",
        "111111",
        "11111",
        "1111111",
        "1111111",
        "111111",
        "111111",
        "11111",
        "1111111",
         "1111111",
        "111111",
        "111111",
        "11111",
        "1111111",
        "1111111",
        "111111",
        "111111",
        "11111",
        "1111111",
      ],
      timer: null,
      number: 0,
    };
  },
  mounted() {
    var sright = document.getElementById("sright");
    var scroll = document.getElementById("scroll");

    scroll.innerHTML += scroll.innerHTML;
    var allp = document.getElementById("scroll").getElementsByTagName("p");
    scroll.style.width = allp.length * 200 + "px";
    sright.style.width = this.scrollNews.length * 200 + "px";
    this.ScrollFont();
    console.log(this.$refs.scroll.clientWidth);
  },
  destroyed() {
    window.clearInterval(this.timer);
  },
  methods: {
    ScrollFont() {
      this.timer = setInterval(() => {
        this.number--;
        if (-this.number >= this.$refs.scroll.clientWidth / 2) {
          this.number = 0;
        }
      },30);
    },
    clearIntervel() {
      window.clearInterval(this.timer);
      this.timer = null;
    },
  },
};
</script>
