<script>
export default {
    name: "AppCard",
    props:{
       
        cardTitle:String,
        cardSubTitle:String,
        cardText:String,
        linkBtn:String,
        cardImg:String,
        cardPrice:String,

    },
    data() {
        return {

        }
    }
}

</script>


<template> 
<div class="card ">
  <div class="card-body ">
    <img :src="cardImg" alt="">
    <h5 class="card-title ">{{ cardTitle }}</h5>
    <strong class="ms-5">{{ cardPrice }}</strong>
    <h6 class="card-subtitle mb-5  text-body-secondary">{{ cardSubTitle }}</h6>
    <p class="card-text mb-5">{{ cardText }}</p>
     <button>{{ linkBtn }}</button>
  </div>
</div>
</template>


<style scoped lang="scss">
.card-body{
    color:inherit;
    padding-top: 3rem;
    .card-title{
        font-size: 0.8rem;
        position: relative;
       
    }
    .card-subtitle{
            font-size: 3rem;
            
        }
        button{
            background-color: inherit;
            color:inherit;
            padding:.3rem 1rem;
            text-transform: uppercase;
            font-size: .8rem;
        }
}
// .card-title::after{
//     display:block;
//     width:3rem;
//     height:0.1rem;
//     background-color:rgb(101, 97, 97);
//     content:"";
//     position: absolute;
//     // top:50%;
//     left:40%;
//     top:3rem
    
// }


</style>