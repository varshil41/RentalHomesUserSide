<template>
<div>
    <form @submit.prevent="onforget">
        <section class="main-log-section">
    <br>
                    <h1 for="uname" style="text-align:center;">&nbsp;Forgot Your Password ?</h1>

            <br>
            <label for="uname" style="margin-left: 24px;"><b>&nbsp;Email Address</b></label>

                    <input @input="onemail" id="email" v-model="emailid" class="login-input" type="email" placeholder="Enter Email Address" name="uname" autocomplete="off">

                        <button type="submit" class="button-log">Send</button>
                        <button type="button" @click="oncancel" class="button-log" style="background-color: #3377ff; margin-top:-5px;">Cancel</button>

            </section>
    </form>
</div>
</template>

<script>
import user from '../services/userService'
export default {
    data:function(){
      return{
          emailid:'',
          mail:{
            to:'',
            subject:'',
            message:''
          }
      }
    },
    methods:{
      onforget:function(){
          if(this.emailid == ""){
            document.getElementById("email").style = "border:2px solid red;"
          }
          else{
          user.getpassword(this.emailid).then(doc=>{
              if(doc.data.length > 0){
                  this.mail.to = this.emailid;
                  this.mail.subject = "Password";
                  this.mail.message = "Your password is :- " + doc.data[0].userPassword;
                  user.sendmail(this.mail).then(doc=>{
                  })
                    alert("Password will send in your mail");
                    this.$router.push({path:"/login"});

              }
              else{
                alert("Invalid Email");
              }
          })
          }
      },
      oncancel:function(){
      this.$router.push({path:"/login"});
      },
      onemail:function(){
        document.getElementById("email").style = "border-color:lightgrey;"
      }

    }
}
</script>

<style scoped>
@media only screen and (max-width: 700px) {

            .main-log-section{
             height: 50%;
             width: 300px;
            }
        }

</style>
