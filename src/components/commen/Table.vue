<template>
  <div>
     <el-table :data="CurrentData" style="width: 100%" border :highlight-current-row="isCheckbox=='radio'?true:false">
            <el-table-column
      type="selection"
      width="55"  v-if="isCheckbox=='checkbox'">
      </el-table-column>
    </el-table-column>
          <el-table-column  v-for="(item,key) in ColumnData" :prop="item.props"
    :label="item.label"
    :key="key" :type="item.type" :show-overflow-tooltip="true">
             <template slot-scope="scope" >
        <!-- <ex-slot v-if="item.render" :render="item.render" :row="scope.row" :index="scope.$index" :column="item" /> -->
         <template v-if="item.render">
    <span v-html="item.render(scope.row, item)" @click="click($event,scope.row)"></span>
    </template>
        <span v-else>{{ scope.row[item.props] || '-' }}</span>
      </template>
          </el-table-column>
         
        </el-table>
        <el-pagination
         @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="CurrentPage"
      :page-sizes="PageSizes"
      :page-size="PageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="Total">
    </el-pagination>
  </div>
</template>
<style scoped>
</style>
<script>
var exSlot = {
    functional: true,
    name:"",
    props: {
      row: Object,
      render: Function,
      index: Number,
      column: {
        type: Object,
        default: null
      }
    },
    render: (h, data) => {
      const params = {
        row: data.props.row,
        index: data.props.index
      }
      if (data.props.column) params.column = data.props.column
      return data.props.render(h, params)
    }
  }
export default {
    name:"Table",
    props:["Data","ColumnData","isCheckbox"],
    beforeMount(){
      console.log(this.Data);
     this.GetCurrentData()
    },
    data(){
        return{
          CurrentPage:1,
          PageSizes:[10,20,50,100,200],
          PageSize:10,
          Total:this.Data.length,
          CurrentData:[]
        }
    },
    
    methods:{
       handleSizeChange(val) {
        this.PageSize=val;
        this.GetCurrentData()
      },
      handleCurrentChange(val) {
        this.CurrentPage=val;
        this.GetCurrentData()
      },
      GetCurrentData(){
           this.CurrentData=this.Data.slice((this.CurrentPage-1)*this.PageSize,((this.CurrentPage-1)*this.PageSize)+this.PageSize)
      },
      click(e,obj){
        if(e.target.innerText=="详情"){
          this.$emit("showdiglog",obj);
        }
      }
    },
    
    components:{
      exSlot
    }
};
</script>
