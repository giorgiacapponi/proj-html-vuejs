<script>
import AppCard from './AppCard.vue';
import { store } from '../store';


export default {
    name: "AppMain",
    components: { AppCard },
    data() {
        return {
            store,
            showedPhoto:"slider32x.jpg",
            infoPhoto:{
                name: "ahi salmoni nigiri",
                description: "eget vulputate quis rutrum blandit sed. quam nulla sit lacinia.",
                price: "$48",
            },
            indexSlider:0,
        };
    },
    mounted(){
        setInterval(this.showNext,3000)
    },
        methods: {
        getimagePath: function (img) {
            return new URL(`../assets/img/${img}`, import.meta.url).href;
        },
        showPhoto(item,index) {
           this.showedPhoto=item.img;
           console.log(this.showedPhoto);
           this.infoPhoto=item;
           console.log(this.infoPhoto);
            
        },
        showNext(){
            if(this.indexSlider<store.sliderPhoto.length -1){
                this.store.sliderPhoto[this.indexSlider]=this.store.sliderPhoto[this.indexSlider++];
            }else{
                this.indexSlider=0;
            }
   
       
        }
    },
}

</script>


<template>
    <main >
        <!-- section universal experience -->
        <section class="container py-5 universal-experience">
            <div class="row row-cols-2 gx-5 universal-experience-top ">
                <div class="col py-5">
                    <p><strong>HAC TELLUS,FELIS RISUS AT,</strong>mattis mattis.Eget euismod semper eget tortor,donee
                        amet,blandit.Tristique facilis faucibs elementum feugiat in nam feugiat.Ipsum odio etiam duis
                        facilisis amet vulputate.</p>
                    <h2 class="my-5">Food is our common ground,a universal experience.</h2>
                    <p>Tristique tempus condimentum ullamcorpore sit elementum hendrerit mi nulla in
                        consequat,ut.metus,nullam scelerique netus viverra dui.</p>
                    <img src="../assets/img/signature.jpg" alt="" class="signature mt-3">


                </div>
                <div class="col">
                    <img src="../assets/img/info22x.jpg" alt="" class="rolls">
                </div>
            </div>
            <div class="universal-experience-link">
                <div class="row row-cols-3 gx-5">
                    <div class="col" v-for="card in store.universalExperienceLink">
                        <AppCard class="card-link" :cardTitle="card.title" :linkBtn="card.link" :cardText="card.text"
                            :cardImg="getimagePath(card.img)" />
                    </div>
                </div>
            </div>
        </section>
        <!-- /universal experience -->

        <!-- section  the best table in town-->
        <section class="best-in-town d-flex">
            <div class="col-7 section-left">
                <img src="../assets/img/slider32x.jpg" alt="">
                
            </div>
            <div class="col-5 section-right">
                <AppCard class="black-card  " :cardTitle="store.cardHeader.subtitle" :cardSubTitle="store.cardHeader.title"
                    :linkBtn="store.cardHeader.linkBtn" :cardText="store.cardHeader.text" />

            </div>

        </section>

        <!-- section critics -->
        <section class="container critics py-5">
            <h3 class="text-center mb-5">what critics are saying about us</h3>
            <div class="row row-cols-2 gy-5">
                <div class="col">
                    <img src="../assets/img/blog72x.jpg" alt="">
                </div>
                <div class="col col-img" v-for="article in store.critics">
                    <img :src="getimagePath(article.img)" alt="">
                    <AppCard class="critics-card " :cardTitle="article.name" :cardSubTitle="article.journal" :cardText="article.text" linkBtn="read full article"  />
                </div>
            </div>
        </section>

        <!-- section slider -->
        <section class="slider">
            <img :src="getimagePath(store.sliderPhoto[indexSlider])" alt="" @click="showNext()" >
        </section>

        <!-- section latest news -->
        <section class="container latest-news py-5">
            <h3 class="text-center">latest news & promotions</h3>
            <div class="row row-cols-3 gx-3 mt-5 ">
                <div class="col" v-for="card in store.latestNews">
                    <AppCard class="card-latest" :cardImg="getimagePath(card.img)" :cardTitle="card.title" :cardText="card.text"/>
                </div>
            </div>
        </section>
        <!-- section takeout -->
        <section class="takeout d-flex" >
            <div class="col-7 section-left">
                <img src="../assets/img/slider32x.jpg" alt="">
                
            </div>
            <div class="col-5 section-right">
                <AppCard class="black-card  " cardTitle="enjoy your meal at home" cardSubTitle="takeout now available"
                    linkBtn="view take out menu" :cardText="store.cardHeader.text" />

            </div>

        
        </section>
        <!-- section menu -->
        <div class="container py-5">
            <div class="row row-cols-3">
                <section class="container py-5 hors" >
                <h2 class="mb-5">hors d'oeuvres</h2>
                <ul>
                    <li v-for="item,index in store.menuHors" @click="showPhoto(item,index)">
                     
                      <div class="d-flex justify-content-between" >
                        <h3>{{ item.name }}</h3>
                        <strong>{{ item.price }}</strong>
                      </div>
                      <p>{{ item.description }}</p>
                    </li>
                </ul>
            </section>
            <section class="container py-5 main" >
                <h2 class="mb-5">hors d'oeuvres</h2>
                <ul>
                    <li v-for="item,index in store.mainCourse" @click="showPhoto(item,index)">
                     
                      <div class="d-flex justify-content-between" >
                        <h3>{{ item.name }}</h3>
                        <strong>{{ item.price }}</strong>
                      </div>
                      <p>{{ item.description }}</p>
                    </li>
                </ul>
            </section>
            <section class="container py-5 dessert" >
                <h2 class="mb-5">dessert</h2>
                <ul>
                    <li v-for="item,index in store.desserts" @click="showPhoto(item,index)">
                     
                      <div class="d-flex justify-content-between" >
                        <h3>{{ item.name }}</h3>
                        <strong>{{ item.price }}</strong>
                      </div>
                      <p>{{ item.description }}</p>
                    </li>
                </ul>
            </section>

            </div>
            
        </div>
        <!-- slider menu -->
        <div class="slider-menu">
            <img :src="getimagePath(showedPhoto)" alt="">
            <AppCard class="card-slider-menu" :cardTitle="infoPhoto.name" :cardText="infoPhoto.description" :cardPrice="infoPhoto.price" linkBtn="view in the menu"/>
        </div>

    </main>
</template>


<style scoped lang="scss">
// universal-experience-top
.universal-experience {
    .universal-experience-top {
        height: 600px;

        .col {
            height: 100%;

            .rolls {
                width: 100%;

            }

            .signature {
                width: 100px;
            }


        }
    }
}

// universal-experience-link
.universal-experience-link {
    padding: 6rem 0;
}

.card-link {

    text-align: center;
    height: 400px;
    border-color: transparent;



}

.card-link::after {
    display: block;
    width: 3rem;
    height: 0.1rem;
    background-color: rgb(101, 97, 97);
    content: "";
    position: absolute;
    top: 12rem;
    left: 50%;
    transform: translate(-50%, 0)
}
// section the best table in town
.best-in-town{
height: 500px;
 img{
    width: 100%;
 }
 .section-right{
    background-color: black;
    .black-card{
        color: white;
        background-color: inherit;
        padding:0 7rem;
       
        
        
    }
    .black-card::after{
    display:inline-block;
    width:3rem;
    height:0.1rem;
    background-color: white;
    content:"";
    position: absolute;
    top:5rem;
    left:3rem;
    
    
}
 }

}
// section critics
.critics-card{
    padding:4rem 5rem;
}
.critics .col{
    height: 600px;
    img{
        width: 100%;
        height: 100%;
    }
}
.col-img{
    position: relative;
    height: 100%;
    .critics-card{
        position: absolute;
        z-index:1;
        top:0;
        left:0;
        background-color: rgba(0, 0, 0, 0.696);
        color:white;
        height: 100%;    
    } 
}
.critics .col[data-v-e56908e2]{
    padding: 0;
}
.col-img[data-v-e56908e2]{
    padding: 0;
    
}

// section slider
.slider{
    width: 100%;
    height: 400px;
    // background-image: url(../assets/img/mm-2.jpg);
    // background-size: cover;
    // background-position: center;
    img{width: 100%;
        height: 100%;
}
}
// section latest
.card-latest{
    border-color: transparent;
   
}

// section takeout
.takeout{
height: 500px;
 img{
    width: 100%;
 }
 .section-right{
    background-color: black;
    .black-card{
        color: white;
        background-color: inherit;
        padding:0 8rem
    }
 }

}
// section menu
.hors{
    margin-top: 3rem;
    background-color: lightgray;
}
.main{
    background-image: url(../assets/img/mm-4.jpg);
    color: white;
}
.dessert{
    margin-top: 3rem;
    background-color: lightgray;
}

.slider-menu{
    height: 500px;
    width: 100%;
    position: relative;
    img{
        width: 100%;
    }
.card-slider-menu{
    background-color: black;
    color: white;
    width: 300px;
    height: 350px;
    position: absolute;
    left: 200px;
    bottom:100px;
    z-index:1
}

}


</style>