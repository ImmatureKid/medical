<template>
  <div class="Announcementquery">
    <div class="content">
      <div class="search">
        <p class="search-title">查询条件</p>
        <div class="search-area">
          <div>
            <span> 公告主题</span>
            <el-input placeholder="请输入内容" :value="111"></el-input>
          </div>
          <div>
            <span>公告状态</span>
            <el-select  placeholder="请选择" :value="'0-失效'">
              <el-option
                v-for="item in status"
                :key="item"
                :label="item"
                :value="item"
              >
              </el-option>
            </el-select>
          </div>
          <div>
            <el-button> 查询 </el-button>
          </div>
        </div>
      </div>
      <div class="list">
        <p class="list-title">公告列表</p>
        <div class="button-group">
          <div><el-button> 置为失效 </el-button></div>
          <div><el-button> +发布公告 </el-button></div>
        </div>
      <Table :Data="tableData" :ColumnData="columnData" :isCheckbox="ischeckbox"></Table>
      </div>
    </div>
  </div>
</template>
<style scoped>
.Announcementquery {
  background: #f2f2f2;
  padding: 15px;
  min-height: 100vh;
}
.Announcementquery .content {
  padding: 15px;
  background: white;
}
.Announcementquery .content .search {
  border-bottom: 1px solid #f6f6f6;
  padding-bottom: 15px;
}
.Announcementquery .content .search .search-title {
  font-size: 14px;
  color: #333;
  font-weight: bold;
}
.Announcementquery .content .search .search-area {
  width: 100%;
  display: flex;
  margin-top: 15px;
}
.Announcementquery .content .search .search-area > div {
  width: 30%;
  margin-left: 15px;
}
.Announcementquery .content .search .search-area > div .title-input {
  width: 80%;
}
.Announcementquery .content .list .list-title{
  font-size: 14px;
  color: #333;
  font-weight: bold;
}
.Announcementquery .content .list .button-group{
  display: flex;
  justify-content: space-between;
  padding: 10px;
}


</style>
<script>
import Table from "../commen/Table.vue";
// var exSlot = {
//     functional: true,
//     name:"",
//     props: {
//       row: Object,
//       render: Function,
//       index: Number,
//       column: {
//         type: Object,
//         default: null
//       }
//     },
//     render: (h, data) => {
//       const params = {
//         row: data.props.row,
//         index: data.props.index
//       }
//       if (data.props.column) params.column = data.props.column
//       return data.props.render(h, params)
//     }
//   }
export default {
  name: "Announcementquery",
  mounted(){
    window.totest=this.totest;
  },
  data() {
    return {
      str: "公告查询",
      status: ["0-失效", "1-有效"],
      tableData: [
        {
            sort:1,
            edit:"",
            name: "王小虎",
            age:40,
            sex:"男",
            phone:"13365222211",
            IDcard:"身份证",
            IDNumber:"111111111",
            isdoctor:true,
            yiyuan:"test",
            shouci:"2016-05-02",
            status:"平台待确诊",
            source:"app",
            date: "2016-05-02",

        },
        {
            sort:1,
            edit:"",
            name: "王小虎",
            age:40,
            sex:"男",
            phone:"13365222211",
            IDcard:"身份证",
            IDNumber:"111111111",
            isdoctor:true,
            yiyuan:"test",
            shouci:"2016-05-02",
            status:"平台待确诊",
            source:"app",
            date: "2016-05-02",

        },
        {
            sort:1,
            edit:"",
            name: "王小虎",
            age:40,
            sex:"男",
            phone:"13365222211",
            IDcard:"身份证",
            IDNumber:"111111111",
            isdoctor:true,
            yiyuan:"test",
            shouci:"2016-05-02",
            status:"平台待确诊",
            source:"app",
            date: "2016-05-02",

        },
        {
            sort:1,
            edit:"",
            name: "王小虎",
            age:40,
            sex:"男",
            phone:"13365222211",
            IDcard:"身份证",
            IDNumber:"111111111",
            isdoctor:true,
            yiyuan:"test",
            shouci:"2016-05-02",
            status:"平台待确诊",
            source:"app",
            date: "2016-05-02",

        },
        {
            sort:1,
            edit:"",
            name: "王小虎",
            age:40,
            sex:"男",
            phone:"13365222211",
            IDcard:"身份证",
            IDNumber:"111111111",
            isdoctor:true,
            yiyuan:"test",
            shouci:"2016-05-02",
            status:"平台待确诊",
            source:"app",
            date: "2016-05-02",

        },
        {
            sort:1,
            edit:"",
            name: "王小虎",
            age:40,
            sex:"男",
            phone:"13365222211",
            IDcard:"身份证",
            IDNumber:"111111111",
            isdoctor:true,
            yiyuan:"test",
            shouci:"2016-05-02",
            status:"平台待确诊",
            source:"app",
            date: "2016-05-02",

        },
        {
            sort:1,
            edit:"",
            name: "王小虎",
            age:40,
            sex:"男",
            phone:"13365222211",
            IDcard:"身份证",
            IDNumber:"111111111",
            isdoctor:true,
            yiyuan:"test",
            shouci:"2016-05-02",
            status:"平台待确诊",
            source:"app",
            date: "2016-05-02",

        },
        {
            sort:1,
            edit:"",
            name: "王小虎",
            age:40,
            sex:"男",
            phone:"13365222211",
            IDcard:"身份证",
            IDNumber:"111111111",
            isdoctor:true,
            yiyuan:"test",
            shouci:"2016-05-02",
            status:"平台待确诊",
            source:"app",
            date: "2016-05-02",

        },
        {
            sort:1,
            edit:"",
            name: "王小虎",
            age:40,
            sex:"男",
            phone:"13365222211",
            IDcard:"身份证",
            IDNumber:"111111111",
            isdoctor:true,
            yiyuan:"test",
            shouci:"2016-05-02",
            status:"平台待确诊",
            source:"app",
            date: "2016-05-02",

        },
        {
            sort:1,
            edit:"",
            name: "王小虎",
            age:40,
            sex:"男",
            phone:"13365222211",
            IDcard:"身份证",
            IDNumber:"111111111",
            isdoctor:true,
            yiyuan:"test",
            shouci:"2016-05-02",
            status:"平台待确诊",
            source:"app",
            date: "2016-05-02",

        },
        {
            sort:1,
            edit:"",
            name: "王小虎",
            age:40,
            sex:"男",
            phone:"13365222211",
            IDcard:"身份证",
            IDNumber:"111111111",
            isdoctor:true,
            yiyuan:"test",
            shouci:"2016-05-02",
            status:"平台待确诊",
            source:"app",
            date: "2016-05-02",

        },
        {
            sort:1,
            edit:"",
            name: "王小虎",
            age:40,
            sex:"男",
            phone:"13365222211",
            IDcard:"身份证",
            IDNumber:"111111111",
            isdoctor:true,
            yiyuan:"test",
            shouci:"2016-05-02",
            status:"平台待确诊",
            source:"app",
            date: "2016-05-02",

        },
        {
            sort:1,
            edit:"",
            name: "王小虎",
            age:40,
            sex:"男",
            phone:"13365222211",
            IDcard:"身份证",
            IDNumber:"111111111",
            isdoctor:true,
            yiyuan:"test",
            shouci:"2016-05-02",
            status:"平台待确诊",
            source:"app",
            date: "2016-05-02",

        },
      ],
      columnData: [
       
        {
          props: "sort",
          label: "排序",
        },
        {
          props: "name",
          label: "名字",
        },
        {
          props: "sex",
          label: "性别",
        },
        {
          props: "edit",
          label: "操作",
          render: (h, params) => { return `<el-button class="el-button el-button--default" onclick="totest()">更新</el-button>
                                           <el-button class="el-button el-button--default" onclick="totest()">详情</el-button>`}
        },{
            props:"phone",
            label:"电话"
        },{
            props:"IDcard",
            label:"身份类型"
        },
        {
            props:"IDNumber",
            label:"身份证号"
        },
        {
            props:"yiyuan",
            label:"医院"
        }
      ],
      ischeckbox:"checkbox",
      num:1
    };
  },
  components: {
      // exSlot,
      Table
  },
  methods:{
    totest(){
      console.log(this.num);
    }
  }
};
</script>
