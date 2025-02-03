let list = document.getElementById("picture")
console.log(list)
const num = 52;
const titles = ["OTW to Watson's Bay","Valentine's to Watson's Bay"]

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
                            <p>${subtitle[i]}</p>
                        </div>
                    </div>
                </div>
            </li>
    `;
    list.appendChild(li)
}