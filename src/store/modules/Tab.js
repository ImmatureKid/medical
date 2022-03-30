export default{
    namespaced: true,
  // 局部状态
  state: {
    PathArray:[{title:"主页",path:"/"}],
    currentPath:{title:"主页",path:"/"},
    isExpend:true
  },
  // 局部读取
  getters: {
    newPathArray: state => state.PathArray,
    currentPath:state=>state.currentPath,
    isExpend:state=>state.isExpend
  },
  // 局部变化
  mutations: {
    changeisExpend(state){
      console.log(state);
      state.isExpend=!state.isExpend;
    },
    addpath(state,pathobj){
    
      const arrpath =state.PathArray.filter((item)=>item.title===pathobj.title);
   
      if(arrpath.length<=0){
        
        state.PathArray.push(pathobj);
      }
        
        state.currentPath=pathobj
    },
    changeCurrentPath(state,pathobj){
      state.currentPath=pathobj
    },
    deletePath(state,path){
      console.log(path);
      state.PathArray=state.PathArray.filter((item=>item.title!=path.path.title));
      if(path.path.title===state.currentPath.title){
        state.currentPath=state.PathArray[path.index-1];
      }
      
    },
    deleteAllpath(state){
        state.PathArray=state.PathArray.filter((item)=>item.title=='主页');
        state.currentPath={title:"主页",path:"/"};
    },
    deleteotherpath(state){
      state.PathArray=state.PathArray.filter((item)=>item.title=='主页'||item.title==state.currentPath.title);
      
    }
  },
  // 局部动作
  actions: {
    
  }
}