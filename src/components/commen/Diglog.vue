<template>
    <div>
        <el-dialog :title="title" :visible="visible"  @close="gettclose" >

        </el-dialog>
    </div>
</template>
<style scoped>

</style>
<script>


export default{
    name:"Diglog",
    props:["title","visible"],
    data(){
       return{

       }
    },
    methods:{
        gettclose(){
           this.$emit("closediglog");
        }
    
    }

}
</script>
