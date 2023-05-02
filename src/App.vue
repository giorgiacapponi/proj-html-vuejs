<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import AppCard from './components/AppCard.vue';
export default {
components:{AppHeader,AppMain,AppFooter,AppCard},

}







</script>


<template>

  
      <AppHeader class="header"/>
      <AppMain/>
      <AppFooter/>
     
    
      
      
      






</template>


<style lang="scss">
@use "./style/general.scss";

.card-link,.card-latest{
      .card-body .card-title{
    font-size: 1.5rem;
    margin-top: 1rem;
}
}
.card-latest{
      .card-body button{
            border-color: transparent;
            
      }
     
}
.col-img :nth-of-type(1) .critics-card{
      background-color: black;
}





</style>