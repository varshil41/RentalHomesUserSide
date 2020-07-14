<template>
<div>
  <menu1></menu1>
   <button @click="oncity('Gandhinagar')" type="button" class="button-log" style="background-color: #3377ff; width:120px; float:left;">Gandhinagar</button>
   <button @click="oncity('Ahmedabad')" type="button" class="button-log" style="background-color: #3377ff; width:120px; margin-left:-10px;">Ahmedabad</button>
   <div class="row">
    <div v-if="propertyArr.length == 0">
    <h3 style="margin-left:400px; font-size:100px; color:blue; font-style:italic;">No Properties</h3>
    </div>
    <div v-else class="card" v-for="(item,id) in propertyArr" v-bind:key="id">
        <img v-bind:src="'http://localhost:3000/images/propertyImage/' + item.mainImage" class="img1" alt="John">
        <h1>{{item.propertyName}}</h1>
        <p class="title">{{item.city}},{{item.area}}</p>
        <p class="title">{{item.bhk}},{{item.propertyType}}</p>
        <p class="title">{{item.status}}</p>
        <p class="title">&#8377 {{item.rent}}(per month)</p>
        <p><router-link v-bind:to="'/propertyDetails/ ' + item.propertyId"><button class="button">More Info</button></router-link></p>

    </div>
    </div>

</div>
</template>

<script>
import property from '../services/propertyService'
export default {
    data:function(){
      return{
        propertyArr:[{}]
      }
    },
    created(){
        property.propertybystatusandcity("Unsold","Gandhinagar",this.$route.params.type).then(doc=>{
            this.propertyArr = doc.data;
        })
    },
    methods:{
      oncity:function(status){
      this.propertyArr = [{}];
       property.propertybystatusandcity("Unsold",status,this.$route.params.type).then(doc=>{
            this.propertyArr = doc.data;
        })
      }
    }
}
</script>

<style lang="scss" scoped>
        .card {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            max-width:auto;
            text-align: center;
            font-family: arial;
            margin-top:10px;
            float: left;
            margin-left:20px;
        }
        .title {
        color: grey;
        font-size: 18px;
        }

        .button {
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


        .button:hover, a:hover {
        opacity: 0.7;
        }
        .card img:hover{
            transform:scale(0.8);
        }

        .footer {
            padding: 3px;
            text-align: center;
            background-color: #333;
            color: white;
            bottom:0;
            width:100%;
        }
        .row {
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
        }

        @media screen and (max-width: 700px) {
            .row {
                flex-direction: column;
            }
            .card{
                width:300px;
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
			  .card{
                width:270px;
				margin-left:50px;
            }
			  .img1{
                width:270px;
            }
        }
</style>
