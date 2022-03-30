<template>
  <div class="content Sickappointment">
    <div class="form">
        <el-row :gutter="10">
            <el-col :span="4" :xs="24" :sm="12" :md="6" :lg="4" class="label">年度</el-col>
            <el-col :span="4" :xs="24" :sm="12" :md="6" :lg="4"><el-date-picker v-model="year" type="year" placeholder="选择年">
          </el-date-picker></el-col>
            <el-col :span="4" :xs="24" :sm="12" :md="6" :lg="4" class="label">开始日期</el-col>
            <el-col :span="4" :xs="24" :sm="12" :md="6" :lg="4"> <el-date-picker
            v-model="startDate"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker></el-col>
            <el-col :span="4" :xs="24" :sm="12" :md="6" :lg="4" class="label">结束日期</el-col>
            <el-col :span="4" :xs="24" :sm="12" :md="6" :lg="4"><el-date-picker v-model="EndDate" type="date" placeholder="选择日期">
          </el-date-picker></el-col>
        </el-row>
         <el-row :gutter="10">
            <el-col :span="4" :xs="24" :sm="12" :md="6" :lg="4" class="label">姓名</el-col>
            <el-col :span="4" :xs="24" :sm="12" :md="6" :lg="4"><el-input v-model="name" placeholder="请输入内容" ></el-input>
          </el-col>
            <el-col :span="4" :xs="24" :sm="12" :md="6" :lg="4" class="label">手机号码</el-col>
            <el-col :span="4" :xs="24" :sm="12" :md="6" :lg="4">  <el-input v-model="PhoneNumber" placeholder="请输入内容"></el-input></el-col>
             <el-col :span="4" :xs="24" :sm="12" :md="6" :lg="4"></el-col>
             <el-col :span="4" :xs="24" :sm="12" :md="6" :lg="4"></el-col>
        </el-row>
        <el-row :gutter="10">
            <el-col :span="4" :xs="24" :sm="12" :md="6" :lg="4" class="label">证件类型</el-col>
            <el-col :span="4" :xs="24" :sm="12" :md="6" :lg="4"><el-select v-model="IDtype" placeholder="请选择">
          <el-option
            v-for="item in IDtypeOptions"
            :key="item"
            :label="item"
            :value="item"
          >
          </el-option>
        </el-select></el-col>
          <!-- </el-date-picker></el-col> -->
            <el-col :span="4" :xs="24" :sm="12" :md="6" :lg="4" class="label">证件号码</el-col>
            <el-col :span="4" :xs="24" :sm="12" :md="6" :lg="4">  <el-input v-model="IDNumber" placeholder="请输入内容"></el-input></el-input></el-col>
            <el-col :span="4" :xs="24" :sm="12" :md="6" :lg="4"></el-col>
            <el-col :span="4" :xs="24" :sm="12" :md="6" :lg="4"></el-col>
        </el-row>

    <div>
        <div class="button"><el-button> 查询 </el-button></div> 
    </div>
    </div>
    <div class="table">
        <Table :ColumnData="columnData" :Data="tableData" :isCheckbox="ischeckbox" @showdiglog="showdiglog"></Table>
    </div>
    <Diglog :title="DiglogTitle" :visible="Diglogvisitable" @closediglog="closediglog"></Diglog>
    </div>
  </div>
</template>
<style scoped>
.content {
  background: #f2f2f2;
  padding: 15px;
  min-height: 100vh;
}
.content .form {
  width: 100%;
  background: white;
  padding: 40px 30px;
  line-height: 40px;
}
 .content .form > div{
     margin-top:6px;
    
 }

/* .content .form > div {
  display: flex;
  margin-bottom: 6px;
}
.content .form > div > div {
  display: flex;
  width: 30%;
}
.content .form > div > div > span {
  width: 100px;
  line-height: 40px;
}
.content .form > div > div > .input {
  width: 220px;
}

 */
.content .form > div .button {
  width: 220px;
  margin: 0 auto;
}
.content .form > div .button .el-button {
  width: 220px;
}
.content .table {
  background: white;
  margin-top: 10px;
  padding: 40px 30px;
}
</style>
<script>
import Table from "../commen/Table.vue";
import Diglog from "../commen/Diglog.vue";
export default {
  name: "Sickappointment",
  mounted(){
      window.showdiglog=this.showdiglog;
  },
  data() {
    return {
      year: "",
      startDate: "",
      EndDate: "",
      name: "",
      PhoneNumber: "",
      IDtype: "全部",
      IDNumber: "",
      IDtypeOptions: ["全部", "身份证", "医保卡", "就诊卡"],
      tableData: [
      
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
          render: (h, params) => {
            let obj = JSON.stringify(h);
            return '<el-button class="el-button el-button--default">更新</el-button><el-button class="el-button el-button--default">详情</el-button>';
          },
        },
        {
          props: "phone",
          label: "电话",
        },
        {
          props: "IDcard",
          label: "身份类型",
        },
        {
          props: "IDNumber",
          label: "身份证号",
        },
        {
          props: "yiyuan",
          label: "医院",
        },
      ],
      ischeckbox: "radio",
      DiglogTitle:"大病再诊断预约信息审核详细内容",
      Diglogvisitable:false
      
    };
  },
  components: {
    Table,
    Diglog
  },
  methods:{
    showdiglog(obj){
      console.log(obj);
      this.Diglogvisitable=true;
    },
    closediglog(){
      this.Diglogvisitable=false
    }
  }
};
</script>
