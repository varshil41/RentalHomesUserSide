<template>
<div>
  <menu1></menu1>
   <div class="row">
        <div @click="ontype(item)" class="item" v-for="(item,id) in typearr" v-bind:key="id">
            <p class="p">{{item}}</p>
        </div>
     </div>



     <div class="footer">
        <p>Email us : realestate@gamil.com <br>
            Call us : 9426085781 <br>
            All Copyrights are reserved | Terms of Use Privacy</p>
    </div>

</div>
</template>

<script>
export default {
  data:function(){
    return{
        typearr:["Bunglow","Flat","Tenament"]
    }
  },
  methods:{
    ontype:function(item){
        this.$router.push({path:'/properties/' + item});
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
        .container{
            display:flex;
            width:auto;
            height:auto;
            margin-top:10px;
            float: left;
        }
        .row {
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
        }

        .item{
            height:220px;
            width:300px;
            border:1px solid black;
            margin-top:10px;
            border-radius:20px;
            background-color:rgba(157, 221, 247,0.8);
           /*  background-color:rgb(208, 236, 236);
            */ margin:70px;
            transition:1s;
            cursor: pointer;;
        }
        .item:hover{
            transform:scale(1.1);
        }

        .p{
        font-size:32px;
        color:brown;
        text-align:center;
        position: relative;
        top:25%;
        text-transform:uppercase;
        font-weight:700;
        }
        a{
            text-decoration:none;
        }

        @media screen and (max-width: 700px) {

            .row {
                flex-direction: column;
                max-width:300px;
            }
        }

        @media screen and (max-width: 400px) {
            .navbar a {
                float: none;
                width: 100%;
            }
        }
</style>
