<template>
<div>
   <form @submit.prevent="onadduser">
        <section class="main-log-section">

            <header>
                <h1 style="text-align: center;"> CreateAccount </h1>
            </header>

            <label for="uname" style="margin-left: 24px;"><b>&nbsp;User Name</b></label>
            <input  v-model="user.userName" class="login-input" type="text" placeholder="Enter Username" id="uname" name="uname" autocomplete="off">

            <label for="psw" style="margin-left: 24px;"><b>&nbsp;Password</b></label>
            <input  v-model="user.userPassword" id="psw" type="password" class="login-input" placeholder="Enter Password" name="psw">

            <label for="psw" style="margin-left: 24px;"><b>&nbsp;Email</b></label>
            <input  v-model="user.userEmail" type="email" id="email" class="login-input" placeholder="Enter Email Address" name="email" autocomplete="off">


            <label for="psw" style="margin-left: 24px;"><b>&nbsp;Contact No</b></label>
            <input  v-model="user.contactNo" type="text" id="cno" maxlength="10" class="login-input" placeholder="Enter Contactno" name="cno" autocomplete="off">

            <label for="uaddress1" style="margin-left: 24px;"><b>&nbsp;AddressLine1</b></label>
            <input  v-model="user.addressLine1" id="uaddress1" class="login-input" type="text" placeholder="Enter AddressLine1" name="uaddress1" autocomplete="off">

            <label for="uaddress2" style="margin-left: 24px;"><b>&nbsp;AddressLine2</b></label>
            <input  v-model="user.addressLine2" id="uaddress2" class="login-input" type="text" placeholder="Enter Area" name="uaddress2" autocomplete="off">

            <label for="ucity" style="margin-left: 24px;"><b>&nbsp;City</b></label>
            <input  id="ucity" v-model="user.city" class="login-input" type="text" placeholder="Enter City" name="ucity" autocomplete="off">

            <label for="upincode" style="margin-left: 24px;"><b>&nbsp;Pincode</b></label>
            <input id="upincode" v-model="user.pincode" class="login-input" type="number" placeholder="Enter Pincode" name="upincode" autocomplete="off">


            <label for="psw" style="margin-left: 24px;"><b>&nbsp;Gender : &nbsp;</b></label>

            <input @click="ongender" type="radio" value="male" name="r1" checked><span>&nbsp;Male</span>
            <input @click="ongender" type="radio" name="r1" value="female"><span>&nbsp;Female</span>
            <br>
            <br>
            <label for="psw" style="margin-left: 24px; "><b>&nbsp;Enroll as : </b></label>

            <input @click="ontype" name="r2" type="radio" value="1" checked><span>&nbsp;Seller</span>
            <input @click="ontype" name="r2" type="radio" value="2"><span>&nbsp;Buyer</span>
            <br>
            <br>
            <label for="psw" style="margin-left: 24px;"><b>&nbsp;Profile Pic</b></label>

            <input @change="onfile" type="file" class="login-input" name="pic">

            <button type="submit" class="button-log">Create</button>
            <button type="button" @click="oncancel" class="button-log" style="margin-top:-5px; background-color: #3377ff;">Cancle</button>

        </section>
    </form>
</div>
</template>

<script>
import user from '../services/userService'
export default {
  data:function(){
    return{
        user:{
          userId:'',
          userName:'',
          userPassword:'',
          userEmail:'',
          contactNo:'',
          gender:'male',
          addressLine1:'',
          addressLine2:'',
          city:'',
          pincode:'',
          profilePic:'pic1',
          userType:1,
          userStatus:0
        },
        selectedfile:File,

    }
  },
  methods:{
    oncancel:function(){
      this.$router.push({path:"/login"});
    },
    onadduser:function(){
          if(this.user.userName == ""){
            document.getElementById("uname").focus();
          }
          else if(this.user.userPassword == ""){
            document.getElementById("psw").focus();
          }
          else if(this.user.userEmail == ""){
            document.getElementById("email").focus();
          }
          else if(this.user.contactNo == ""){
            document.getElementById("cno").focus();
          }
          else if(this.user.addressLine1 == ""){
            document.getElementById("uaddress1").focus();
          }
          else if(this.user.addressLine2 == ""){
            document.getElementById("uaddress2").focus();
          }
          else if(this.user.city == ""){
            document.getElementById("ucity").focus();
          }
          else if(this.user.pincode == ""){
            document.getElementById("upincode").focus();
          }
          else{
                const fd = new FormData();
                var flag = 0;
                user.getalluser().then(doc=>{
                for(let i=0;i<doc.data.length;i++){
                  this.user.userId = doc.data[i].userId;
                  if(this.user.userEmail == doc.data[i].userEmail){
                    flag = 1;
                  }
                }
                this.user.userId++;
                if(flag == 0){
                fd.append('userId',this.user.userId);
                fd.append('userName',this.user.userName);
                fd.append('userPassword',this.user.userPassword);
                fd.append('userEmail',this.user.userEmail);
                fd.append('contactNo',this.user.contactNo);
                fd.append('gender',this.user.gender);
                fd.append('addressLine1',this.user.addressLine1);
                fd.append('addressLine2',this.user.addressLine2);
                fd.append('city',this.user.city);
                fd.append('pincode',this.user.pincode);
                fd.append('profilePic',this.selectedfile,this.selectedfile.name);
                fd.append('userType',this.user.userType);
                fd.append('userStatus',this.user.userStatus);


                user.adduser(fd).then(doc=>{
                  alert("Successfully registered");
                })
                this.$router.push({path:"/login/"})
                }
                else{
                  alert("Email already registerd");
                }
          })
          }
     },
    ongender:function(event){
      this.user.gender = event.target.value;
    },
    ontype:function(event){
      this.user.userType = event.target.value;
    },
    onfile:function(event){
        this.selectedfile = event.target.files[0];
    }
  }
}
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 700px) {

            .main-log-section{
             height: 50%;
             width: 300px;
            }
}
</style>
