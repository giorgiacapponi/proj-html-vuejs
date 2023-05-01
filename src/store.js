import { reactive } from 'vue';
export const store = reactive({
        navMenu: ["Home", "Culinary History", "Our Team", "Our Menu", "TakeOut", "Bulletin", "Reservations"],
        universalExperienceLink: [
                {
                        title: "the best table in town",
                        text: "Sed aenean esgestas ut aliquam turpis mauris,molestie. Vitae tellus tempor sem id tempus neque,tellus turpis turpis. Morbi id gravida aliquet.",
                        img: "sushi-1.png",
                        link: "explore the menu",
                },
                {
                        title: "perfect for groups",
                        text: "Quam eu proin sit massa condimentum. Volupat non pulvinar aliquet nunc. Orci elementum in aliquet a gravida vivamus aliquam turpis vitae.",
                        img: "sushi-2.png",
                        link: "make a reservation",
                },
                {
                        title: "fresh produce everyday",
                        text: " Hendreit amet,volutpat leo non,commodo maecenas scelerisque tincidunt. Morbi volupate morbi purus sit sagittis orgi elementum gravida.",
                        img: "sushi-3.png",
                        link: "learn more about us",
                },
        ],
        cardHeader: {
                title: "The best table in town",
                subtitle: "Fine dining experience",
                text: "Pellentesque vitae viverra risus,sagittis.Venenatis ridiculus scelerisque nisi in urna nulla.Sit tempor a et nisl,ac felis.",
                linkBtn: "Explore the menu",
        },
        critics: [
                {

                        name: "meggy stewart",
                        journal: "new york times",
                        text: "Non arcu maursi tortor ultrices mollis tellus euismod fermentum. Habitant amet tincidunt id sapien accumsan sed at.",
                },
                {
                        img: "info52x.jpg",
                        name: "mary maxey",
                        journal: "the guardian ",
                        text: "Non arcu maursi tortor ultrices mollis tellus euismod fermentum. Habitant amet tincidunt id sapien accumsan sed at.",
                }, {
                        img: "info22x.jpg",
                        name: "patrick monroe",
                        journal: "globe and mail",
                        text: "Non arcu maursi tortor ultrices mollis tellus euismod fermentum. Habitant amet tincidunt id sapien accumsan sed at.",
                },
        ],
        latestNews: [
                {
                        img: "blog92x.jpg",
                        title: "the best coffee in town",
                        text: " By admin|January 7th 2020|Categories:News"
                },
                {
                        img: "blog72x.jpg",
                        title: "discover our new menu",
                        text: " By admin|January 7th 2020|Categories:News"
                },
                {
                        img: "blog82x.jpg",
                        title: "we now accept square!",
                        text: " By admin|January 7th 2020|Categories:News"
                }
        ],
        menuHors: [{
                name: "ahi salmoni nigiri",
                description: "eget vulputate quis rutrum blandit sed. quam nulla sit lacinia.",
                price: "$48",
        },
        {
                name: "umi masu salad",
                description: "Mollis ornare sit sapien,sodales.Cursus duis proin semper.",
                price: "$21",
        },
        {
                name: "temaki with crab",
                description: "ac vel,risus ornare senectus placerat duis amet dictumst tellus",
                price: "$32",
        },
        {
                name: "california rolls",
                description: "ac vel,risus ornare senectus placerat duis amet dictumst tellus",
                price: "$22",
        },
        ],
        mainCourse:[
                {
                        name: "braised abalone",
                        description: "ac vel,risus ornare senectus placerat duis amet dictumst tellus",
                        price: "$52",
                },
                {
                        name: "twice cooked pork",
                        description: "Mollis ornare sit sapien,sodales.Cursus duis proin semper.",
                        price: "$21",
                },
                {
                        name: "kung pao chicken",
                        description: "ac vel,risus ornare senectus placerat duis amet dictumst tellus",
                        price: "$32",
                },
                {
                        name: "char siu & sushis",
                        description: "Mollis ornare sit sapien,sodales.Cursus duis proin semper.",
                        price: "$48",
                },
        ],
        desserts:[
                {
                        name: "chocolate ball cake",
                        description: "ac vel,risus ornare senectus placerat duis amet dictumst tellus",
                        price: "$12",
                },
                {
                        name: "lime pie with crust",
                        description: "Mollis ornare sit sapien,sodales.Cursus duis proin semper.",
                        price: "$21",
                },
                {
                        name: "rasperry cake",
                        description: "ac vel,risus ornare senectus placerat duis amet dictumst tellus",
                        price: "$32",
                },
                {
                        name:"cafe au lat",
                        description: "Mollis ornare sit sapien,sodales.Cursus duis proin semper.",
                        price: "$6",
                },
        ]


});
