<template>
    <div class="Informationquery">
        <div class="form">
      <el-row :gutter="10">
        <el-col :span="4" :xs="24" :sm="12" :md="6" :lg="4" class="label"
          >年度</el-col
        >
        <el-col :span="4" :xs="24" :sm="12" :md="6" :lg="4"
          ><el-date-picker v-model="year" type="year" placeholder="选择年">
          </el-date-picker></el-col>
        <el-col :span="4" :xs="24" :sm="12" :md="6" :lg="4" class="label"
          >开始日期</el-col
        >
        <el-col :span="4" :xs="24" :sm="12" :md="6" :lg="4">
         <el-date-picker
            v-model="startDate"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker></el-col>
        <el-col :span="4" :xs="24" :sm="12" :md="6" :lg="4" class="label"
          >结束日期</el-col
        >
        <el-col :span="4" :xs="24" :sm="12" :md="6" :lg="4"
          ><el-date-picker v-model="EndDate" type="date" placeholder="选择日期">
          </el-date-picker></el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="4" :xs="24" :sm="12" :md="6" :lg="4" class="label"
          >姓名</el-col
        >
        <el-col :span="4" :xs="24" :sm="12" :md="6" :lg="4"
          ><el-input v-model="name" placeholder="请输入内容"></el-input
        ></el-col>
        <el-col :span="4" :xs="24" :sm="12" :md="6" :lg="4" class="label"
          >手机号码</el-col
        >
        <el-col :span="4" :xs="24" :sm="12" :md="6" :lg="4"
          ><el-input v-model="phoneNumber" placeholder="请输入内容"></el-input
        ></el-col>
        <el-col :span="4" :xs="24" :sm="12" :md="6" :lg="4" class="label"
          >证件类型</el-col
        >
        <el-col :span="4" :xs="24" :sm="12" :md="6" :lg="4"
          ><el-select v-model="IDtype" placeholder="请选择">
          <el-option
            v-for="item in IDtypeOptions"
            :key="item"
            :label="item"
            :value="item"
          >
          </el-option>
        </el-select></el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="4" :xs="24" :sm="12" :md="6" :lg="4" class="label"
          >证件号码</el-col
        >
        <el-col :span="4" :xs="24" :sm="12" :md="6" :lg="4"
          ><el-input v-model="IDNumber" placeholder="请输入内容"></el-input></el-input></el-col>
        <el-col :span="4" :xs="24" :sm="12" :md="6" :lg="4" class="label"
          >审核状态</el-col
        >
        <el-col :span="4" :xs="24" :sm="12" :md="6" :lg="4"
          ><el-select v-model="ApprovalStatus" placeholder="请选择" clearable>
            <el-option
            v-for="item in Statusoptions"
            :key="item"
            :label="item"
            :value="item"
          >
            </el-option>
          </el-select></el-col
        >
        <el-col :span="4" :xs="24" :sm="12" :md="6" :lg="4" class="label"
          >预约状态</el-col
        >
        <el-col :span="4" :xs="24" :sm="12" :md="6" :lg="4"
          ><el-select v-model="AppointmentStatus" placeholder="请选择" clearable>
            <el-option
            v-for="item in AppointmentStatusoptions"
            :key="item"
            :label="item"
            :value="item"
          >
            </el-option>
          </el-select></el-col
        >
      </el-row>
      <el-row :gutter="10">
        <el-col :span="4" :xs="24" :sm="12" :md="6" :lg="4" class="label"
          :xl="4">尤迈审核状态</el-col
        >
        <el-col :span="4" :xs="24" :sm="12" :md="6" :lg="4"
          :xl="4"><el-select v-model="YumaiReviewStatus" filterable placeholder="请选择" clearable>
            <el-option
              v-for="item in YumaiReviewStatusoptions"
              :key="item"
              :label="item"
              :value="item"
            >
            </el-option> 
            </el-select></el-col>
 
      </el-row>
     <el-row :gutter="10" align="center">
           <el-col :span="4" :xs="24" :sm="12" :md="4" :lg="4" class="label"
          :xl="4" :offset="8"><el-button>查询</el-button></el-col
        >
      </el-row>
    </div>
    <div class="table">
        <Table :ColumnData="columnData" :Data="tableData" :isCheckbox="ischeckbox"></Table>
    </div>
    </div>
</template>
<style scoped>
.Informationquery {
  background: #f2f2f2;
  padding: 15px;
  min-height: 100vh;
}
.Informationquery .form {
  width: 100%;
  background: white;
  padding: 40px 30px;
  line-height: 40px;
}
.Informationquery .form > div {
  margin-top: 10px;
}
</style>
<script>
import Table from "../commen/Table.vue";
export default {
  name: "Informationquery",
  data() {
    return {
      year: "",
      startDate: "",
      EndDate: "",
      name: "",
      phoneNumber: "",
      IDType: "",
      IDNumber: "",
      ApprovalStatus: "",
      AppointmentStatus: "",
      YumaiReviewStatus: "",
      IDtypeOptions: ["全部", "身份证", "医保卡", "就诊卡"],
      Statusoptions: ["平台待审核", "平台审核通过"],
      AppointmentStatusoptions: ["预约成功", "未按时预约", "未按时就诊"],
      YumaiReviewStatusoptions: ["带通过", "审核未通过", "审核已通过"],
      tableData: [
        {
          sort: 1,
          edit: "",
          name: "王小虎",
          age: 40,
          sex: "男",
          phone: "13365222211",
          IDcard: "身份证",
          IDNumber: "111111111",
          isdoctor: true,
          yiyuan: "test",
          shouci: "2016-05-02",
          status: "平台待确诊",
          source: "app",
          date: "2016-05-02",
        },
        {
          sort: 1,
          edit: "",
          name: "王小虎",
          age: 40,
          sex: "男",
          phone: "13365222211",
          IDcard: "身份证",
          IDNumber: "111111111",
          isdoctor: true,
          yiyuan: "test",
          shouci: "2016-05-02",
          status: "平台待确诊",
          source: "app",
          date: "2016-05-02",
        },
        {
          sort: 1,
          edit: "",
          name: "王小虎",
          age: 40,
          sex: "男",
          phone: "13365222211",
          IDcard: "身份证",
          IDNumber: "111111111",
          isdoctor: true,
          yiyuan: "test",
          shouci: "2016-05-02",
          status: "平台待确诊",
          source: "app",
          date: "2016-05-02",
        },
        {
          sort: 1,
          edit: "",
          name: "王小虎",
          age: 40,
          sex: "男",
          phone: "13365222211",
          IDcard: "身份证",
          IDNumber: "111111111",
          isdoctor: true,
          yiyuan: "test",
          shouci: "2016-05-02",
          status: "平台待确诊",
          source: "app",
          date: "2016-05-02",
        },
        {
          sort: 1,
          edit: "",
          name: "王小虎",
          age: 40,
          sex: "男",
          phone: "13365222211",
          IDcard: "身份证",
          IDNumber: "111111111",
          isdoctor: true,
          yiyuan: "test",
          shouci: "2016-05-02",
          status: "平台待确诊",
          source: "app",
          date: "2016-05-02",
        },
        {
          sort: 1,
          edit: "",
          name: "王小虎",
          age: 40,
          sex: "男",
          phone: "13365222211",
          IDcard: "身份证",
          IDNumber: "111111111",
          isdoctor: true,
          yiyuan: "test",
          shouci: "2016-05-02",
          status: "平台待确诊",
          source: "app",
          date: "2016-05-02",
        },
        {
          sort: 1,
          edit: "",
          name: "王小虎",
          age: 40,
          sex: "男",
          phone: "13365222211",
          IDcard: "身份证",
          IDNumber: "111111111",
          isdoctor: true,
          yiyuan: "test",
          shouci: "2016-05-02",
          status: "平台待确诊",
          source: "app",
          date: "2016-05-02",
        },
        {
          sort: 1,
          edit: "",
          name: "王小虎",
          age: 40,
          sex: "男",
          phone: "13365222211",
          IDcard: "身份证",
          IDNumber: "111111111",
          isdoctor: true,
          yiyuan: "test",
          shouci: "2016-05-02",
          status: "平台待确诊",
          source: "app",
          date: "2016-05-02",
        },
        {
          sort: 1,
          edit: "",
          name: "王小虎",
          age: 40,
          sex: "男",
          phone: "13365222211",
          IDcard: "身份证",
          IDNumber: "111111111",
          isdoctor: true,
          yiyuan: "test",
          shouci: "2016-05-02",
          status: "平台待确诊",
          source: "app",
          date: "2016-05-02",
        },
        {
          sort: 1,
          edit: "",
          name: "王小虎",
          age: 40,
          sex: "男",
          phone: "13365222211",
          IDcard: "身份证",
          IDNumber: "111111111",
          isdoctor: true,
          yiyuan: "test",
          shouci: "2016-05-02",
          status: "平台待确诊",
          source: "app",
          date: "2016-05-02",
        },
        {
          sort: 1,
          edit: "",
          name: "王小虎",
          age: 40,
          sex: "男",
          phone: "13365222211",
          IDcard: "身份证",
          IDNumber: "111111111",
          isdoctor: true,
          yiyuan: "test",
          shouci: "2016-05-02",
          status: "平台待确诊",
          source: "app",
          date: "2016-05-02",
        },
        {
          sort: 1,
          edit: "",
          name: "王小虎",
          age: 40,
          sex: "男",
          phone: "13365222211",
          IDcard: "身份证",
          IDNumber: "111111111",
          isdoctor: true,
          yiyuan: "test",
          shouci: "2016-05-02",
          status: "平台待确诊",
          source: "app",
          date: "2016-05-02",
        },
        {
          sort: 1,
          edit: "",
          name: "王小虎",
          age: 40,
          sex: "男",
          phone: "13365222211",
          IDcard: "身份证",
          IDNumber: "111111111",
          isdoctor: true,
          yiyuan: "test",
          shouci: "2016-05-02",
          status: "平台待确诊",
          source: "app",
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
          render: (h, params) => {
            return `<el-button class="el-button el-button--default" onclick="totest()">更新</el-button>
                                           <el-button class="el-button el-button--default" onclick="totest()">详情</el-button>`;
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
    };
  },
  components: {
    Table,
  },
};
</script>
