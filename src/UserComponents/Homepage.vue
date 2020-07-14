<template>
  <div>
    <menu1></menu1>
        <div class="row">
        <div class="card">
            <router-link v-if="flag==1 && usertypeflag==1" to="/addproperty">
            <img src="../assets/images/img6.png" alt="John" class="img1">
            <p class="title"><h3>List your home</h3>
            <p>list your home to find best tenant and best price contact us now...</p>
            </router-link>

            <router-link v-if="flag==1 && usertypeflag==0" to="/buyerproperties">
            <img src="../assets/images/img6.png" alt="John" class="img1">
            <p class="title"><h3>List your home</h3>
            <p>list your home to find best tenant and best price contact us now...</p>
            </router-link>

            <router-link v-if="flag==0" to="/login">
            <img src="../assets/images/img6.png" alt="John" class="img1">
            <p class="title"><h3>List your home</h3>
            <p>list your home to find best tenant and best price contact us now...</p>
            </router-link>


        </div>

        <div class="card">
            <router-link to="/propertytype">
            <img src="../assets/images/img7.png" alt="John" class="img1">
            <p class="title"><h3>Find your home</h3>
            <p>Your luxury life is waiting for your contact us now...</p>
           </router-link>
        </div>

    </div>
          <h1 style="text-align: center;"><i> Featured listings<i style="font-size:20px; color:grey;">(Top properties)</i></i></h1>

    <div class="row">
            <div class="card" v-for="(item,id) in propertyArr" v-bind:key="id">
            <router-link v-bind:to="'/propertyDetails/' + item.propertyId">
            <img v-bind:src="'http://localhost:3000/images/propertyImage/' + item.mainImage " alt="John" style="width:270px;height:250px;transition:1s;">
            <p class="title"><h3>{{item.propertyName}}</h3>
            <p>{{item.city}},{{item.area}}</p>
            <p>&#8377 {{item.rent}}(per month)</p>
            </router-link>
        </div>
 </div>

    <br>
    <br>
    <div class="row">
        <div class="card">
            <router-link to="/sendfeedback">
            <img src="../assets/images/client1.png" alt="John" class="img1">
            <p class="title"><h3>Clients Feedback</h3>
            </router-link>
        </div>

        <div class="card">
            <router-link to="/propertytype">
            <img src="../assets/images/app1.png" alt="John" class="img1">
            <p class="title"><h3>Set Appointemnt</h3>
            </router-link>
        </div>

    </div>
    <br><br>
    <div class="footer">
        <p>Email us : realestate@gamil.com <br>
            Call us : 9426085781 <br>
            All Copyrights are reserved | Terms of Use Privacy</p>
    </div>
  </div>
</template>

<script>
import property from '../services/propertyService'
import user from'../services/userService'
export default {
  data:function(){
    return{
      propertyArr:[{}],
      flag:0,
      usertypeflag:0,
    }
  },
  created(){

    if(localStorage.getItem('userId') != null){
        this.flag=1;
        user.getuserbyid(localStorage.getItem("userId")).then(doc=>{
            if(doc.data[0].userType == 1){
                this.usertypeflag = 1;
            }
            else if(doc.data[0].userType == 2){
              this.usertypeflag = 0;
            }
        })
    }

    property.propertymaxrent().then(doc=>{
      this.propertyArr = doc.data;
      console.log(this.propertyArr);
    })
  },
  methods:{
    onclick:function(){

    }
  }
}
</script>

<style scoped>
       .container {
            padding: 2px 16px;
        }
        .container2 {
            padding: 2px 16px;
        }
        .more {
            height: 50px;
            width: 200px;
            margin-left: 570px;
            text-align: center;
            background-color: #333;
            font-size: large;
            color: white;
        }

        .row {
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
        }


        .main {
            -ms-flex: 70%;
            flex: 70%;
            background-color: white;
            padding: 20px;
        }

        .fakeimg {
            background-image: url("../assets/images/mapp.png");
            background-size: cover;
            width: 100%;
            padding: 20px;
        }

        .card {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            max-width:auto;
            text-align: center;
            font-family: arial;
            margin-top:50px;
            float: left;
            margin-left:50px;
        }

        .title {
        color: grey;
        font-size: 20px;
        }


        button{
            font-size:20px;
            text-align:center;
            margin-left:43%;
            background-color:lightgray
        }
        .img1{
            width:600px;height:500px;transition:1s;
        }
        .footer {
            padding: 3px;
            text-align: center;
            background-color: #333;
            color: white;
        }
        .row {
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
        }
        a{
            text-decoration:none;
        }
        @media screen and (max-width: 700px) {
            .row {
                flex-direction: column;
                margin-left:-10px;
            }
            .card{
                width:350px;
            }
            .img1{
                width:350px;
                height:250px;
            }
            button{
                margin-left:33%;
            }
            .mySlides{
                height:400px;
            }

        }

        @media screen and (max-width: 400px) {
            .navbar a {
                float: none;
                width: 100%;
                padding: 3px 3px;
            }
            .card{
                width:270px;
			          margin-left:50px;
            }

		        .img1{
                width:270px;
                height:250px;
            }

        }




</style>
