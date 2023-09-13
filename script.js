
const nameInput = document.getElementById('name-input')
const priceInput = document.getElementById('price-input')
const addBtn = document.getElementById('add-btn')
const listArea = document.getElementById('list')
const statusCheckBox = document.getElementById('status-check')
const sumInfo = document.getElementById('sum-info')
const deleteBtn = document.getElementById('delete')
const editBtn = document.getElementById('edit')
const userInfo = document.getElementById('user-input')
const select = document.getElementById('select')


//updateSum Function
let sum = 0;
function updateSum(price) {
    sum += Number(price)
    sumInfo.innerText = sum

}

//addExpense Function
const addExpense = (event) => {
    event.preventDefault()
    if (!nameInput.value || !priceInput.value) {
        alert("Product and Price input must be filled.")
        return
    }
    const expenseDiv = document.createElement('div')
    expenseDiv.classList.add("expense")
    if (statusCheckBox.checked) {
        expenseDiv.classList.add("paid")
    }
    expenseDiv.innerHTML = `
    <h2 class="name">${nameInput.value}</h2>
    <h2 class="name xprice" style="color:red;">${priceInput.value}</h2>
    <div class="btns">
        <img id="edit" src="/images/empty.svg"/>
        <img id="delete" src="/images/delete.svg"/>
    </div>
    `
    listArea.appendChild(expenseDiv)

    //---
    updateSum(priceInput.value)
    nameInput.value = ""
    priceInput.value = ""
    statusCheckBox.checked = false
}
//handleUpdate Function
const handleUpdate = (e) => {
    const item = e.target
    const parent = item.parentElement.parentElement

    //Delete
    if (item.id == "delete") {

        //---
        const price = parent.querySelector(".xprice").innerText
        updateSum(Number(price) * -1)
        parent.remove()
    }
    //Edit
    if (item.id == "edit") {
        parent.classList.toggle("paid")

        let imgElement = parent.querySelector("img")
        if (imgElement.src == "http://127.0.0.1:5500/images/empty.svg") {
            imgElement.src = "/images/checked.svg"
        } else {
            imgElement.src = "/images/empty.svg"
        }
    }
}

//Local Storage
function saveUser(event) {
    localStorage.setItem("user", event.target.value)

}
function getUser() {
    const username = localStorage.getItem("user") || ""
    userInfo.value.username
}




addBtn.addEventListener("click", addExpense)
listArea.addEventListener("click", handleUpdate)










