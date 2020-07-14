<template>
  <div>
    <menu1></menu1>
      <form @submit.prevent="onupdate">
        <section class="main-log-section">

            <header>
                <h1 style="text-align: center;"> Profile Details </h1>
            </header>

           <label for="uname" style="margin-left: 24px;"><b>&nbsp;User Name</b></label>
           <input  v-model="user.userName" class="login-input" type="text" placeholder="Enter Username" id="uname" name="uname" autocomplete="off">

           <label for="psw" style="margin-left: 24px;"><b>&nbsp;Password</b></label>
           <input disabled v-model="user.userPassword" id="psw" type="text" class="login-input" placeholder="Enter Password" name="psw">

            <label for="psw" style="margin-left: 24px;"><b>&nbsp;Email</b></label>
            <input disabled v-model="user.userEmail" type="email" id="email" class="login-input" placeholder="Enter Email Address" name="email" autocomplete="off">


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

            <input @click="ongender" id="male" type="radio" value="male" name="r1" ><span>&nbsp;Male</span>
            <input @click="ongender" id="female" type="radio" name="r1" value="female"><span>&nbsp;Female</span>
            <br>
            <br>
            <label for="psw" style="margin-left: 24px; "><b>&nbsp;Enroll as : </b></label>

            <input @click="ontype" id="seller" name="r2" type="radio" value="1" ><span>&nbsp;Seller</span>
            <input @click="ontype" id="buyer" name="r2" type="radio" value="2"><span>&nbsp;Buyer</span>
            <br>
            <br>
            <label for="psw" style="margin-left: 24px;"><b>&nbsp;Profile Pic</b></label>
            <br>
            <input v-if="!showpicflag" @change="onfile" type="file" class="login-input" name="pic">
            <img v-if="showpicflag" v-bind:src="'http://localhost:3000/images/userImage/' + user.profilePic" style="height:50px;width:50px;border-radius:50px;margin-left:30px;margin-top:10px;">
            <br>
            <button v-if="showpicflag" type="button" @click="showpicflag=false" style="margin-left:26px;border-radius:20px;">Change Profile</button>

            <button type="submit" class="button-log">Update</button>

        </section>
    </form>
    <div class="footer">
        <p>Email us : realestate@gamil.com <br>
            Call us : 9426085781 <br>
            All Copyrights are reserved | Terms of Use Privacy</p>
    </div>
  </div>
</template>

<script>
import user from '../services/userService'
export default {
  data:function(){
    return{
        user:{
        },
        selectedfile:File,
        showpicflag:true,
        updateflag:0
    }
  },
  created(){
    user.getuserbyid(localStorage.getItem("userId")).then(doc=>{
      this.user = doc.data[0];
      console.log(this.selectedfile);
      if(this.user.gender == "male"){
          document.getElementById("male").checked = true;
      }
      else{
          document.getElementById("female").checked = true;
      }
      if(this.user.userType == 1){
          document.getElementById("seller").checked = true;
      }
      else{
          document.getElementById("buyer").checked = true;
      }
    })
  },
  methods:{
    onupdate:function(){
         if(this.user.userName == ""){
            document.getElementById("uname").focus();
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
                if(this.updateflag == 1){
                fd.append('profilePic',this.selectedfile,this.selectedfile.name);
                }
                fd.append('userType',this.user.userType);
                fd.append('userStatus',this.user.userStatus);
                fd.append('flag',this.updateflag);
                if(this.updateflag == 1){
                user.deleteimage(this.user.profilePic).then(doc=>{
                })
                }
                user.updateuser(fd).then(doc=>{
                  alert("Successfully updated");
                  this.$router.push({path:"/"})
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
          this.updateflag = 1;
          this.selectedfile = event.target.files[0];
    }

  }
}
</script>

<style lang="scss" scoped>
 .footer {
            padding: 3px;
            text-align: center;
            background-color: #333;
            color: white;
            bottom:0;
            width:100%;
        }

        @media screen and (max-width: 700px) {
            .row {
                flex-direction: column;
            }
            .main-log-section{
                width:400px;
            }
        }

        @media screen and (max-width: 400px) {
            .navbar a {
                float: none;
                width: 100%;
                padding: 3px 3px;

            }
			    .main-log-section{
                width:350px;
            }
        }
</style>
