<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted(){
    window.onpopstate = () => {
      if(this.allowBack&&!this.allowBack){
        history.go(-1);
      }
    }
  }
}
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
  }

  .toolbar {
    background: #f2f2f2;
    padding: 10px;
    //border:1px solid #dfe6ec;
    margin: 10px 0px;
    .el-form-item {
      margin-bottom: 10px;
    }
  }

  .mod-menu {
    .menu-list__input {
      > .el-input__inner {
        cursor: pointer;
      }
    }
    .icon-tips {
      font-size: 18px;
      text-align: center;
      color: #e6a23c;
      cursor: pointer;
    }
  }
</style>
