let count = 0

let countEl = document.getElementById("count-El")
let saveEl = document.getElementById("saved")
function increment() {
    count += 1
    countEl.innerText = count
     
}

function save() {
    savecount = count
    
    saveEl.innerText += ", " + savecount

    countEl.innerText = 0

    count = 0

}