<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules"  class="login-form" auto-complete="on" label-position="left">
      <div class="title-container">
        <h3 class="title">{{ $t('login.title') }}</h3>
        <lang-select class="set-language"/>
      </div>
      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          v-model="loginForm.username"
          :placeholder="$t('login.username')"
          name="username"
          type="text"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          :type="passwordType"
          v-model="loginForm.password"
          :placeholder="$t('login.password')"
          name="password"
          auto-complete="on"
          @keyup.enter.native="submit" />
        <span class="show-pwd" @click="showPwd">
          <svg-icon icon-class="eye" />
        </span>
      </el-form-item>
      <el-form-item prop="code">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          v-model="loginForm.code"
          :placeholder="$t('login.code')"
          name="code"
          type="text"
          auto-complete="on"
        />
      </el-form-item>
      <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">{{ $t('login.logIn') }}</el-button>

      <el-button style="width:45%;margin-bottom:30px;" type="primary" @click="showDialog=true">{{ $t('login.thirdparty') }}</el-button>
      <el-button style="width:45%;margin-bottom:30px;" type="primary" @click="showD=true">{{ $t('login.ffind') }}</el-button>
    </el-form>
    <el-dialog :title="$t('login.thirdparty')" :visible.sync="showDialog" append-to-body>
    <br>
    <el-form ref="rForm" :model="rForm" :rules="rRules"  class="login-form" auto-complete="on" label-position="left">
      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          v-model="rForm.username"
          :placeholder="$t('login.username')"
          name="rusername"
          type="text"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          :type="passwordType"
          v-model="rForm.password"
          :placeholder="$t('login.password')"
          name="rpassword"
          auto-complete="on"
        />
        <span class="show-pwd" @click="showPwd">
          <svg-icon icon-class="eye" />
        </span>
      </el-form-item>
      <el-form-item prop="mobilephone">
        <span class="svg-container">
          <svg-icon icon-class="bug" />
        </span>
        <el-input
          v-model="rForm.mobilephone"
          :placeholder="$t('login.mobilephone')"
          name="rmobilephone"
          type="text"
          auto-complete="on"
        />
      </el-form-item>
      <el-form-item prop="email">
        <span class="svg-container">
          <svg-icon icon-class="email" />
        </span>
        <el-input
          v-model="rForm.email"
          :placeholder="$t('login.email')"
          name="remail"
          type="text"
          auto-complete="on"
        />
      </el-form-item>
      <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleRe">{{ $t('login.thirdparty') }}</el-button>
    </el-form>
    <span>请在手机谷歌认证器上添加对应密钥或直接扫描下面二维码</span><br>
    <span>密钥</span><el-input v-model="ccode"/>
    <span>二维码如下</span>
    <vue-qr :text="imageur" :logoScale="50" :size="500"></vue-qr>
  </el-dialog>
    <el-dialog :title="$t('login.ffind')" :visible.sync="showD" append-to-body>
      <br>
      <el-form ref="forgetForm" :model="forgetForm" :rules="fRules"  class="login-form" auto-complete="on" label-position="left">
        <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
          <el-input
            v-model="forgetForm.username"
            :placeholder="$t('login.username')"
            name="fusername"
            type="text"
            auto-complete="on"
          />
        </el-form-item>

        <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
          <el-input
            :type="passwordType"
            v-model="forgetForm.password"
            :placeholder="$t('login.lpass')"
            name="fpassword"
            auto-complete="on"
          />
          <span class="show-pwd" @click="showPwd">
          <svg-icon icon-class="eye" />
        </span>
        </el-form-item>
        <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
          <el-input
            :type="passwordType"
            v-model="forgetForm.newpassword"
            :placeholder="$t('login.llpass')"
            name="rpassword"
            auto-complete="on"
          />
          <span class="show-pwd" @click="showPwd">
          <svg-icon icon-class="eye" />
        </span>
        </el-form-item>
        <el-form-item prop="email">
        <span class="svg-container">
          <svg-icon icon-class="email" />
        </span>
          <el-input
            v-model="forgetForm.code"
            :placeholder="$t('login.ccode')"
            name="fccode"
            type="text"
            auto-complete="on"
          />
        </el-form-item>
        <el-button @click="sendMsg" type="primary" :disabled="isDisabled">{{buttonName}}</el-button>
        <br>
        <br>
        <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handlefr">{{ $t('login.thirdparty') }}</el-button>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
  import LangSelect from '@/components/LangSelect'
  import API from '@/api'
  import VueQr from 'vue-qr'
  export default{
    name: 'login',
    components:{LangSelect,VueQr},
    data(){
      return{
        defaulttime:'',
        buttonName: "发送邮箱验证码",
        loginForm: {
          username: '',
          password: '',
          code: ''
        },
        rForm:{
          username: '',
          password: '',
          mobilephone: '',
          email: ''
        },
        forgetForm:{
          username: '',
          password: '',
          newpassword: '',
          code: ''
        },
        fRules:{
          username:[{required: true,trigger: 'blur'}],
          password: [{required:true,trigger: 'blur'}],
          newpassword: [{required:true,trigger: 'blur'}],
          code: [{required:true,trigger: 'blur'}]
        },
        rRules: {
          username: [{required: true,trigger: 'blur'}],
          password: [{required:true,trigger: 'blur'}],
          mobilephone: [{required:true,trigger: 'blur'}],
          email:[{required:true,trigger: 'blur'}]
        },
        imageur:'',
        ccode:'',
        loginRules: {
          username: [{required: true,trigger: 'blur'}],
          password: [{required:true,trigger: 'blur'}],
          code:[{required:true,trigger: 'blur'}]
        },
        isDisabled: false,
        passwordType: 'password',
        loading: false,
        showDialog: false,
        redirect: undefined,
        showD: false,
        time: 200
      }
    },
    methods: {
      showPwd() {
        if (this.passwordType === 'password') {
          this.passwordType = ''
        } else {
          this.passwordType = 'password'
        }
      },
      handlefr(){
      API.loginc.forget(this.forgetForm).then((res)=>{
        console.log(res);
      });
      },
      sendMsg(){
        var tmp=new FormData();
        tmp.append("username",this.forgetForm.username);
        API.loginc.sendE(tmp).then((res)=>{
          if(res.data.code==0){
            let me=this;
            me.isDisabled=true;
            let interval=window.setInterval(function(){
              me.buttonName='('+me.time+'秒)后重新发送';
              --me.time;
              if(me.time<0){
                me.buttonName="重新发送";
                me.time=10;
                me.isDisabled=false;
                window.clearInterval(interval);
              }
            },1000);
          }else{
            this.$message({
              "message": res.data.msg,
              "type": "error"
            });
          }
        });
      },
      handleRe(){
        API.loginc.addOne(this.rForm).then((res)=>{
          console.log(res);
          if(res.data.code==0){
            this.ccode=res.data.key;
            this.imageur=res.data.url;
          }else{
            this.$message({
              "message": res.data.msg,
              "type": "error"
            });
          }
        })
      },
      handleLogin(){
        API.loginc.login(this.loginForm).then((res)=>{
          if(res.data.code==0){
            this.$message({
              "message":"登录成功",
              "type":"success"
            });
            this.$router.push({path:"/hello"})
          }else{
            this.defaulttime++;
            if(this.defaulttime>5) {
              this.$message({
                "message": "错误次数过多，请找回密码！"
              });
            }
            else{
              this.$message({
                "message": res.data.msg,
                "type": "error"
              });
            }
          }

        })
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  /* 修复input 背景不协调 和光标变色 */
  /* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

  $bg:#283443;
  $light_gray:#eee;
  $cursor: #fff;

  @supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
    .login-container .el-input input{
      color: $cursor;
      &::first-line {
        color: $light_gray;
      }
    }
  }

  /* reset element-ui css */
  .login-container {
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
        &:-webkit-autofill {
          -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
          -webkit-text-fill-color: $cursor !important;
        }
      }
    }
    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
  }
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
  $bg:#2d3a4b;
  $dark_gray:#889aa4;
  $light_gray:#eee;

  .login-container {
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: $bg;
    .login-form {
      position: absolute;
      left: 0;
      right: 0;
      width: 520px;
      max-width: 100%;
      padding: 35px 35px 15px 35px;
      margin: 120px auto;
    }
    .tips {
      font-size: 14px;
      color: #fff;
      margin-bottom: 10px;
      span {
        &:first-of-type {
          margin-right: 16px;
        }
      }
    }
    .svg-container {
      padding: 6px 5px 6px 15px;
      color: $dark_gray;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
    }
    .title-container {
      position: relative;
      .title {
        font-size: 26px;
        color: $light_gray;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: bold;
      }
      .set-language {
        color: #fff;
        position: absolute;
        top: 5px;
        right: 0px;
      }
    }
    .show-pwd {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: $dark_gray;
      cursor: pointer;
      user-select: none;
    }
    .thirdparty-button {
      position: absolute;
      right: 35px;
      bottom: 28px;
    }
  }
</style>
