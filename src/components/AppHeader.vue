<script>
import {store} from "../store";
import AppCard from "./AppCard.vue";
export default {
    name: "AppHeader",
    components:{AppCard,},
    data() {
        return {
            store,
            cardHeader:{
                title:"The best table in town",
                subtitle:"Fine dining experience",
                text:"Pellentesque vitae viverra risus,sagittis.Venenatis ridiculus scelerisque nisi in urna nulla.Sit tempor a et nisl,ac felis.",
                linkBtn:"Explore the menu",
            }
           

        }
    }
}

</script>


<template> 
 <!-- nav bar header sarà in z-index? -->
 
<header class="d-flex">
    <div class="container nav-bar">
        <nav class="d-flex align-items-center ">
            <div class="col-5 me-5">
                <img src="../assets/img/logo-restaurant.png" alt="" >
            </div>
            <div class="col-7 ms-5 ">
                <ul class="d-flex  justify-content-between mb-0 px-0 " >
                <li v-for="link in store.navMenu">
                  <a href="">  {{ link }}</a>
                </li>
                <li>
                    <a href="">cia</a>
                </li>
            </ul>
            </div>
           
        </nav>
    </div>
   

    <div class="col-5 header-left">
       <AppCard class="header-card  " :cardTitle="cardHeader.title" :cardSubTitle="cardHeader.subtitle" :linkBtn="cardHeader.linkBtn" :cardText="cardHeader.text"/>

    </div>
    <div class="col-7 header-right">

    </div>
   
</header>
</template>


<style scoped lang="scss">

header{height: 100vh;
    position:relative;
    color: white;
    .nav-bar{
        position:absolute;
        top:1.5rem;
        left:3rem;
        z-index: 1;
        padding-left: 0;
        
    }
   
    .header-left{
        background-color: black;
        padding-top: 5rem;
       
          .header-card{
            background-color: black;
            height: 100%;
            width: 100%;
            position:relative;
            padding:5rem 6rem


          }
          .header-card::after{
    display:inline-block;
    width:3rem;
    height:0.1rem;
    background-color: white;
    content:"";
    position: absolute;
    top:10rem;
    left:3rem;
    
    
}
        }
    .header-right{
        background-image: url("../assets/img/slider52x.jpg");
        background-size: contain;
    }
}


</style>