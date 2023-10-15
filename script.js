let table = document.querySelector("table");

emojiList.forEach(ele => {

    let row = document.createElement("tr");
    row.setAttribute("class", "data")
    let emoji = document.createElement("td");
    emoji.innerText = ele.emoji;

    let description = document.createElement("td");
    description.innerText = ele.description;

    row.appendChild(emoji);
    row.appendChild(description);

    table.appendChild(row);

})

let search = document.querySelector("input");
search.addEventListener("input", () => {
    let inp = search.value;

    let arr = emojiList.filter(check);
    checklist(arr);
})


// to get list of element 
function check(val) {
    return (val.description.toLowerCase().includes(document.querySelector("input").value) || val.aliases[0].toLowerCase().includes(document.querySelector("input").value));
}


// result to  display on screen 
function checklist(arr) {
    let div = document.createElement("div");
    arr.forEach(ele => {

        let row = document.createElement("tr");
        row.setAttribute("class", "data")
        let name = document.createElement("td");
        name.innerText = ele.emoji;

        let country = document.createElement("td");
        country.innerText = ele.description;

        row.appendChild(name);
        row.appendChild(country);

        div.appendChild(row);
        //    console.log(div)

    })
    table.innerHTML = `${div.innerHTML}`;
}


// sorting
function updateTable() {
    let table = document.querySelectorAll(".data");
    table.forEach((row, index) => {
        let data = row.querySelectorAll("td");

        data[0].innerText = Country[index].emoji;
        data[1].innerText = Country[index].description;

        // data[2].innerText = Country[index]["High Score"];

        // data[3].innerText = Country[index].score;

        // row[0].innerText=Country.name;

    })
}

function sorting() {
    let basedOn = document.querySelector("select");
    // if (basedOn.value == "score") {
    //     Country.sort((a, b) => b.score - a.score);
    //     console.log(Country);
    //     updateTable();
    // } else 
    if (basedOn.value == "name") {

        Country.sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }


            return 0;
        });
        updateTable();
    }
    else {
        Country.sort((a, b) => {
            const nameA = a.country.toUpperCase();
            const nameB = b.country.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }


            return 0;
        });
    }
    updateTable();

}


// let btn = document.querySelector("button");
// btn.addEventListener("click", () => {
//     sorting();
// });
