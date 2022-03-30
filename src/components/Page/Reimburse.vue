<template>
  <div class="Reimburse">
    <div class="form">
      <el-row :gutter="10">
        <el-col :span="4" :xs="24" :sm="12" :md="6" :lg="4" class="label"
          >预审核单号</el-col
        >
        <el-col :span="4" :xs="24" :sm="12" :md="6" :lg="4"><el-input
            v-model="Auditordernumber"
            placeholder="请输入内容"
          ></el-input
        ></el-col>
        <el-col :span="4" :xs="24" :sm="12" :md="6" :lg="4" class="label"
          >申请时间起期</el-col
        >
        <el-col :span="4" :xs="24" :sm="12" :md="6" :lg="4">
          <el-date-picker
            v-model="RequestDateStart"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker
        ></el-col>
        <el-col :span="4" :xs="24" :sm="12" :md="6" :lg="4" class="label"
          >申请时间止期</el-col
        >
        <el-col :span="4" :xs="24" :sm="12" :md="6" :lg="4"
          ><el-date-picker
            v-model="RequestDateEnd"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker
        ></el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="4" :xs="24" :sm="12" :md="6" :lg="4" class="label"
          >姓名</el-col
        >
        <el-col :span="4" :xs="24" :sm="12" :md="6" :lg="4"
          ><el-input v-model="name" placeholder="请输入内容"></el-input
        ></el-col>
        <el-col :span="4" :xs="24" :sm="12" :md="6" :lg="4" class="label"
          >证件号码</el-col
        >
        <el-col :span="4" :xs="24" :sm="12" :md="6" :lg="4"
          ><el-input v-model="IDnumber" placeholder="请输入内容"></el-input
        ></el-col>
        <el-col :span="4" :xs="24" :sm="12" :md="6" :lg="4" class="label"
          >HR系统人员编码</el-col
        >
        <el-col :span="4" :xs="24" :sm="12" :md="6" :lg="4"
          ><el-input v-model="HRNumber" placeholder="请输入内容"></el-input
        ></el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="4" :xs="24" :sm="12" :md="6" :lg="4" class="label"
          >发票年度</el-col
        >
        <el-col :span="4" :xs="24" :sm="12" :md="6" :lg="4"
          ><el-date-picker
            v-model="InvoiceYear"
            type="year"
            placeholder="选择年"
          >
          </el-date-picker
        ></el-col>
        <el-col :span="4" :xs="24" :sm="12" :md="6" :lg="4" class="label"
          >状态</el-col
        >
        <el-col :span="4" :xs="24" :sm="12" :md="6" :lg="4"
          ><el-select v-model="Status" placeholder="请选择" clearable>
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
          >是否已重新发起</el-col
        >
        <el-col :span="4" :xs="24" :sm="12" :md="6" :lg="4"
          ><el-select v-model="Isreset" placeholder="请选择" clearable>
            <el-option
            v-for="item in Isresetoptions"
            :key="item"
            :label="item"
            :value="item"
          >
            </el-option>
          </el-select></el-col
        >
      </el-row>
      <el-row :gutter="10">
        <el-col :span="4" :xs="24" :sm="12" :md="4" :lg="4" class="label"
          :xl="4">补充医疗单位一级</el-col
        >
        <el-col :span="4" :xs="24" :sm="12" :md="12" :lg="12"
          :xl="12"><el-select v-model="Level1medical" filterable placeholder="请选择" clearable>
            <el-option
              v-for="item in Level1medicaloptions"
              :key="item"
              :label="item"
              :value="item"
            >
            </el-option> 
            </el-select></el-col>
        <el-col :span="4" :xs="24" :sm="12" :md="4" :lg="4" class="label"
          >案件号</el-col
        >
        <el-col :span="4" :xs="24" :sm="12" :md="4" :lg="4"
          ><el-input v-model="CaseNumber" placeholder="请输入内容"></el-input
        ></el-col>
      </el-row>
       <el-row :gutter="10">
        <el-col :span="4" :xs="24" :sm="12" :md="4" :lg="4" class="label"
          :xl="4">补充医疗单位二级</el-col
        >
        <el-col :span="4" :xs="24" :sm="12" :md="12" :lg="12"
          :xl="12"><el-select v-model="Level2medical" filterable placeholder="请选择" clearable>
            <el-option
              v-for="item in  Level2medicaloptions"
              :key="item"
              :label="item"
              :value="item"
            >
            </el-option> 
            </el-select></el-col>
        <el-col :span="4" :xs="24" :sm="12" :md="4" :lg="4" class="label"
          >参保类型</el-col
        >
        <el-col :span="4" :xs="24" :sm="12" :md="4" :lg="4"
          ><el-select v-model="TypeOfinsurance"  placeholder="请选择" clearable>
            <el-option
              v-for="item in TypeOfinsuranceoptions"
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
         <el-col :span="4" :xs="24" :sm="12" :md="4" :lg="4" class="label"
          :xl="4"><el-button>预约下载</el-button></el-col
        >
      </el-row>
    </div>
     <div class="table">
        <Table :ColumnData="columnData" :Data="tableData" :isCheckbox="ischeckbox"></Table>
    </div>
  </div>
</template>
<style scoped>
.Reimburse {
  background: #f2f2f2;
  padding: 15px;
  min-height: 100vh;
}
.Reimburse .form {
  width: 100%;
  background: white;
  padding: 40px 30px;
  line-height: 40px;
}
.Reimburse .form>div{
    margin-top:10px;
}
</style>
<script>
import Table from "../commen/Table.vue";
export default {
  name: "Reimburse",
  data() {
    return {
      Auditordernumber: "",
      RequestDateStart: "",
      RequestDateEnd: "",
      name: "",
      IDnumber: "",
      HRNumber: "",
      InvoiceYear: "",
      Status: "",
      Isreset: "",
      Level1medical: "",
      Level2medical: "",
      CaseNumber: "",
      TypeOfinsurance: "",
      Statusoptions:["<全部>","1-受理中","2-审核中","3-中意已付款","4-内审驳回","5-异常","6-系统驳回","7-审核驳回已确认","12-中意审核通过","13-中意驳回","99-中意支付失败"],
      Isresetoptions:["<全部>","1-是","2-否"],
      Level1medicaloptions:["<全部>"],
      Level2medicaloptions:["<全部>","50058799-东方地球物理公司矿区服务事业部公司社会保险中心医疗（工伤、生育）保险科站","50069204-中国石油天然气第六建设有限公司"],
      TypeOfinsuranceoptions:["<全部>","统一投保","单独投保"],
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
