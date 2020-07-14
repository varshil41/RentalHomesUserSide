<template>
<div>

    <div class="header">
       <h1>RentalHomes</h1>
       <p>Your <b>Gateway</b> to a <b>Richer</b>Life</p>
    </div>

    <div class="navbar">
        <router-link to="/" class="active">Home</router-link>
        <router-link to="/propertytype">Find property</router-link>
        <router-link v-if="flag && userTypeflag==1" to="/addproperty">Add property</router-link>
        <router-link v-if="flag && userTypeflag==2" to="/buyerproperties">Your Properties</router-link>
        <router-link v-if="flag" to="/profile">My Profile</router-link>
        <router-link to="/aboutus">About US</router-link>
        <router-link to="/contactus">Contact US</router-link>
        <router-link to="/sendfeedback">Send Feedback</router-link>
        <span v-if="flag" style="margin-top:15px;color:pink;float:right;margin-right:10px;margin-left:5px;">{{username}}</span>
        <img v-if="flag" v-bind:src="'http://localhost:3000/images/userImage/' + profile" style="margin-top:6px;height:30px;width:30px;border-radius:50px;float:right;">

        <a @click="onsignup" v-if="flag" class="right">Sign out</a>
        <router-link to="/login" class="right">Sign In</router-link>
   </div>

</div>
</template>

<script>
import user from '../services/userService'
import sellproperties from '../services/sellpropertyService'
export default {
  data:function(){
    return{
      flag:false,
      username:'',
      profile:'',
      userTypeflag:'',
    }
  },
  created(){
    if(localStorage.getItem("userId") != null){
      this.flag = true;
      user.getuserbyid(localStorage.getItem("userId")).then(doc=>{
        this.username = doc.data[0].userName;
        this.profile = doc.data[0].profilePic;
        if(doc.data[0].userType == 1){
            this.userTypeflag = 1;
        }
        else if(doc.data[0].userType == 2){
          this.userTypeflag = 2;
        }

      })


    }
    else{
      this.flag = false;
    }

  },
  methods:{
    onsignup:function(){
      alert("Succefully Signout")
      localStorage.removeItem('userId');
      this.flag = false;
      this.$router.push({path:"/"});
    }
  }
}
</script>

<style>
   * {
            box-sizing: border-box;
     }

     body {
            font-family: Arial, Helvetica, sans-serif;
            margin: 0;
     }
     .header {
            padding: 5px;
            text-align: left;
          	color: gainsboro;
            background-image: url("../assets/images/homeimg.png");
            background-size: cover;
      }
      .header h1 {
            font-size: 40px;
      }
      .navbar {
            overflow: hidden;
            background-color: #333;
            position: sticky;
            position: -webkit-sticky;
            top: 0;
      }
      .navbar a {
            float: left;
            display: block;
            color: white;
            text-align: center;
            padding: 14px 20px;
            text-decoration: none;
      }
      .navbar a.right {
            float: right;
      }
      .navbar a:hover {
            background-color: #ddd;
            color: black;
      }
      .navbar a.active {
            background-color: #666;
            color: white;
      }



</style>
