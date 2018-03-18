<template>
  <div class="login">
    <div class="login-bg">
      <div class="login-header">
        <span class="item_icon" @click="$router.replace('/home')">
          <i class="iconfont icon-fanhui"></i>
        </span>
        <span @click="setShow">注册</span>
      </div>
      <div class="login-logo">
        <img src="./images/logo.png" alt="">
      </div>
      <div class="login-bottom">
        <span @click="isPwd=true">普通登录</span>
        <span @click="isPwd=false">手机动态密码登陆</span>
        <p :class="isPwd?'left':'right'"></p>
      </div>
      <div class="pwd-code">
        <div class="login-pwd" v-if="isPwd">
          <div>
            <span class="item_icon">
              <i class="iconfont icon-xingmingyonghumingnicheng"></i>
             </span>
            <input type="text" placeholder="手机号/邮箱/用户名" v-model="name">
          </div>
          <div>
            <span class="item_icon">
              <i class="iconfont icon-mima"></i>
            </span>
            <input type='password' placeholder="输入密码" v-model="pwd">
          </div>
          <div>
            <p>忘记密码?</p>
          </div>
          <div>
            <button @click="submitForm">登录</button>
          </div>
        </div>
        <div class="login-code" v-else>
          <div>
            <span class="item_icon">
              <i class="iconfont icon-shouji"></i>
            </span>
            <input type="text" maxlength="11" placeholder="已注册的手机号" v-model="phone">
          </div>
          <div>
            <span class="item_icon">
              <i class="iconfont icon-mima"></i>
            </span>
            <input type='text' maxlength="4" placeholder="请输入图片内容" v-model="captcha">
            <span style="display:block;position: absolute;top:52px;right:20px;">
              <img @click="change($event)" src="https://wap.epet.com/share/seccode.html?hash=5157&amp;height=30&amp;width=85" >
            </span>
          </div>
          <div>
            <span class="item_icon">
              <i class="iconfont icon-mima"></i>
            </span>
            <input type="password" maxlength="6" placeholder="动态密码" v-model="code">
            <a style="position: absolute;width:100px;font-size: 14px;color: red;
                      height: 30px; line-height:30px;top:95px;right:20px;border: 1px solid black"
               href="javascript:;" @click="getCode">获取动态验证码</a>
          </div>
          <div>
            <p>忘记密码?</p>
          </div>
          <div>
            <button @click="submitForm">登录</button>
          </div>
        </div>
      </div>
      <div class="login-pay-qq">
        <p>合作网站登录</p>
        <div>
          <img src="./images/login_ico2.png" alt="">
          <img src="./images/login_ico4.png" alt="">
        </div>
      </div>
      <div class="register" :class="{on:isShow}">
        <span class="item_icon">
          <i class="iconfont icon-shouji"></i>
        </span>
        <input type="text" maxlength="11" placeholder="请输入手机号码" v-model="iphone" >
        <p :class="{on:iphone}">下一步</p>
        <br>
        <p class="on" style="background-color: olivedrab" @click="setShow">返回</p>
      </div>
    </div>
  </div>
</template>

<script>
  import {MessageBox} from 'mint-ui'
  export default {
    data(){
      return {
        isPwd:true, //密码登录
        isShow:false,
        iphone:'',
        phone: '', //手机号
        code: '', //短信验证码
        name: '', //用户名
        pwd: '', // 密码
        captcha: '', // 图片验证码
      }
    },
    methods:{
      setShow(){
        this.isShow = !this.isShow
      },
      change(event){
        event.target.src='https://wap.epet.com/share/seccode.html?amp;height=30&amp;width=85&_='+Math.random()
      },
      submitForm(){

        if(this.isPwd){
          //密码登录
          const {name,pwd} = this
          if(!name.trim()){
            MessageBox('警告', '请输入用户名');
            return
          }else if(!pwd.trim()){
            MessageBox('警告', '请输入密码');
            return
          }
          MessageBox.alert('登录成功').then(action => {
            this.$router.replace('/home')
          });
        }else{
          //验证码登录
          const {phone,code,captcha} = this
          if(!/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/.test(phone)){
            MessageBox('警告', '请输入正确的手机号');
            return
          } else if(!captcha.trim()){
            MessageBox('警告', '请输入图片验证码');
            return
          }else if(!code.trim()){
            MessageBox('警告', '请输入短信验证码');
            return
          }
          MessageBox.alert('登录成功').then(action => {
            this.$router.replace('/home')
          });
        }

      },
      getCode(){
        const {phone} = this
        if(!/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/.test(phone)){
          MessageBox('警告', '请输入正确的手机号');
          return
        }else{
          MessageBox('警告', '该手机号已停机');
          return
        }
      }


    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .login
    width 100%
    height 100%
    position relative
    .login-bg
      width 100%
      height 175px
      background-image url("./images/bg.png")
      background-size 100%
      .login-header
        width 94%
        margin 0 auto
        color white
        font-size 16px
        display flex
        height 30px
        line-height 30px
        justify-content space-between
      .login-logo
        width 80px
        height 80px
        margin 0 auto
        position absolute
        top 60px
        left 120px
        >img
          width 100%
      .login-bottom
        position absolute
        left 0
        right 0
        height 50px
        background-color rgba(220, 220, 220, 0.53)
        top 125px
        line-height 50px
        display flex
        justify-content space-around
        font-size 16px
        color white
        p
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-bottom: 10px solid #fff;
          position: absolute;
          left 54px
          bottom 0
          &.left
            left 54px
          &.right
            left 213px
      .pwd-code
        >div
          position absolute
          width 100%
          height 250px
          top 185px
          >div
            width 100%
            text-align center
            height 45px
            line-height 45px
            >input
              width 80%
              border-bottom 1px solid #E2E2E2
              outline none
              height 40px
              padding-left 20px
            >span
              position absolute
            >p
              color #898989
              float right
              margin-right 20px
            >button
              width 80%
              border none
              border-radius 5px
              height 40px
              color white
              background-color #2EC975
      .login-pay-qq
        width 100%
        position absolute
        bottom 50px
        display flex
        flex-direction column
        align-items center
        >p
          font-size 14px
          color #999
          height 30px
        >div
          width 130px
          display flex
          justify-content space-between
          align-items center
          >img
            width 50px
      .register
        position absolute
        left 0
        right 0
        bottom 0
        top 0
        background-color white
        display none
        text-align center
        &.on
          display block
          >span
            position absolute
            top 12px
          >input
            width 80%
            height 40px
            border-bottom 1px solid #E2E2E2
            outline none
            padding-left 20px
            margin-bottom  10px
          >p
            width 80%
            border-radius 5px
            height 30px
            line-height 30px
            color white
            margin 0 auto
            background-color #d7d7d7
            &.on
              background-color red
              color white

</style>
