<template>
<div>
 <form @submit.prevent="onLogin">
        <section class="main-log-section">
		        <header>
                <h1 style="text-align: center;"> SignIn </h1>
            </header>

            <label for="uname" style="margin-left: 24px;"><b>&nbsp;Username</b></label>

            <input class="login-input" id="email" @input="onemail" type="email" placeholder="Enter EmailId" v-model="emailid" autocomplete="off">

            <label for="pwd" style="margin-left: 24px;"><b>&nbsp;Password</b></label>

            <input type="password" id="password" @input="onpassword" minlength="8" maxlength="15" class="login-input" placeholder="Enter Password" name="psw" v-model="password">
            <div id="passworderror" class="error-message"></div>

            <button type="submit" class="button-log">Login</button>


            <span class="psws"><router-link to="/register">RegisterNow</router-link></span>
            <span class="psw"><router-link to="/forgetpage">ForgetPassword?</router-link></span>
        </section>
    </form>
</div>
</template>

<script>
import login from '../services/userService.js'
export default {
    data:function(){
        return{
            emailid:'',
            password:''
        }
    },
    methods:{
        onLogin:function(){
            if(this.emailid == ""){
                document.getElementById("email").style = "border:2px solid red;"
            }
            else if(this.password == ""){
                document.getElementById("password").style = "border:2px solid red;"
            }
            else{
            login.login(this.emailid,this.password).then(doc=>{
                if(doc.data.length > 0){
                    alert("Succefully login")
                    localStorage.setItem('userId',JSON.stringify(doc.data[0].userId));
                     this.$router.push({path:'/'});

              }
                else{
                    alert("EmailId and Password does not exist")
                }
            })
            }
        },
        onemail:function(){
            document.getElementById("email").style = "border-color:lightgrey;"
        },
        onpassword:function(){
            document.getElementById("password").style = "border-color:lightgrey;"
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
.error-message {
  color: #cc0033;
  display: inline-block;
  font-size: 12px;
  line-height: 15px;
  margin: 5px 0 0;
}
</style>
