let list = document.getElementById("picture")
console.log(list)
const num = 52;
const titles = ["OTW to Watson's Bay","Valentine's to Watson's Bay","Our first stop at during our first Trip",
    "Silhouette Pic","Temple Selfie","Temple Selfie 2","With Bababooey",
    "Wollonggong Beach","Before our dinner date at Wollongong","Night Heart","Weird Mouth","Smileyss Data",
    "Miniso?","Split Face","Tongue","First eat out with the kids","Family Dinnerrrrrrrrr"," Cat Day","OTW Cafe",
    "Cat 1", "Cat 2","Opera Views","Octopussyyy",
    "Lunch with Dad :)","After lunch Walk","Boyfriend Day","Big spending","Golf Vibes","Winnerrrssss","Gardens",
    "To ETTALONG BEACH","DUCK", "Teahouse","Trauma","Pre Date","New Day Walks","Matching Watches","Merry Christmas",
    "Two Teas","Martin's Place Tree","Japan Shrine","Your Name","Your Name 2","Shibuya","Team Lab Vibes","No 2","Final Market",
    "Family Trip Painting", "Your Fav Pic","On the way backk","Yumchaa"," CHINESE NEW YEAR"
]

const subtitle = ["Our first freey ride together","I made us go on a hike during fire weather"]
for(let i = 0; i<num; i++){
    const li = document.createElement("li");
    let type = i % 2 === 1 ? "odds" : "evens";
    li.innerHTML = `
               <li class="${type}">
                <div class="container">
                    <div class="textbox">
                        <h2>${titles[i]}</h2>
                        <div class="desc">
                            <img class="portrait" src="images/${i+2}.JPG">
                        </div>
                    </div>
                </div>
            </li>
    `;
    list.appendChild(li)
}