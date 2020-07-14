<template>
<div>
  <menu1></menu1>
    <h3 style="color:blue; text-align:center; border:1px solid black;">Your Buying Properties</h3>
    <h2 style="text-align:center;" v-if="propertyArr.length == 0">No Properties</h2>

    <div class="row">
    <div class="card" v-for="(item,id) in propertyArr" v-bind:key="id">
        <img v-bind:src="'http://localhost:3000/images/propertyImage/' + item.mainImage" class="img1" alt="John">
        <h1>{{item.propertyName}}</h1>
        <p class="title">{{item.city}},{{item.area}}</p>
        <p class="title">{{item.bhk}},{{item.propertyType}}</p>
        <p class="title">{{item.status}}</p>
        <p class="title">&#8377 {{item.rent}}(per month)</p>
        <p><router-link v-bind:to="'/propertyDetails/' + item.propertyId"><button class="button1">More Info</button></router-link></p>
    </div>
    </div>
    <br>
    <br>

</div>
</template>

<script>
import propertySell from '../services/sellpropertyService'
import property from '../services/propertyService'
export default {
    data:function(){
      return{
        propertyArr:[{}]
      }
    },
    created(){
        propertySell.getpropertybyuserid(localStorage.getItem("userId")).then(doc=>{
          for(let i=0;i<doc.data.length;i++){
            property.getpropertybyid(doc.data[i].propertyId).then(doc=>{
                this.propertyArr.push(doc.data[0]);
            })
          }
          this.propertyArr.splice(0,1);
        })
    }
}
</script>

<style scoped>
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


		  .img1{
               width:300px;height:200px;transition:1s;
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
        .card{
                width:270px;
				margin-left:50px;
            }
			  .img1{
                width:270px;
            }

        table {
            font-family: arial, sans-serif;
            width: 90%;
            margin-left:25px;
            border:1px solid black;
            border-radius:50px;
          }

        td, th {
          border: 0px solid #dddddd;
          text-align: left;
          padding: 8px;
          text-align: center;
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
        font-size: 18px;
        }

        .button1 {
        border: none;
        outline: 0;
        display: inline-block;
        padding: 8px;
        color: white;
        background-color: #000;
        text-align: center;
        cursor: pointer;
        width: 100%;
        font-size: 18px;
        }


        .button1:hover, a:hover {
        opacity: 0.7;
        }

        .card img:hover{
            transform:scale(0.8);
        }

        .row {
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
        }



</style>
