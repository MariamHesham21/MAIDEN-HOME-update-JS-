let allProducts = document.querySelector("#products-row")
let products =[
    {
        id:1,
        title:"The Mercer Chair",
        des:"From $160",
        category:"Chairs",
        imgUrl:"https://i.shgcdn.com/76bf936c-e8f4-4cf9-bbec-12dc2088894a/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
        price:160
    },
    {
        id:2,
        title:"The Jones sofa",
        des:"From $360",
        category:"Sofas",
        imgUrl:"https://i.shgcdn.com/cec3b7d0-48ca-45ba-a86c-cbb9d9314f5e/-/format/auto/-/preview/3000x3000/-/quality/best/",
        price:360
    },
    {
        id:3,
        title:"The Chrystie Chair",
        des:"From $180",
        category:"Chairs",
        imgUrl:"https://i.shgcdn.com/83d2d2e4-2b27-453f-9a6c-ee7a472490db/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
        price:180
    },
    {
        id:4,
        title:"The Kent Bed",
        des:"From $270",
        category:"Beds",
        imgUrl:"https://i.shgcdn.com/b0444b7d-18f6-401c-a656-aaf8c747f0c2/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
        price:270
    },
    {
        id:5,
        title:"The Vestry Nesting Tables",
        des:"From $150",
        category:"Tables",
        imgUrl:"https://i.shgcdn.com/a107cd73-a06e-4318-abee-74034374a895/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
        price:150
    },
    {
        id:6,
        title:"The Perry Ottoman",
        des:"From $100",
        category:"Sofas",
        imgUrl:"https://i.shgcdn.com/157ec2ac-4199-4772-9e02-2d51e389feb3/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
        price:100
    },
    {
        id:7,
        title:"The Mercer Chair",
        des:"From $160",
        category:"Chairs",
        imgUrl:"https://i.shgcdn.com/76bf936c-e8f4-4cf9-bbec-12dc2088894a/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
        price:160
    },
]
function showData (){
    let productItem = products.map((item)=>{
        return(`
            <div class="col-md-3 col-12 bg-light p-0 my-2" id="product-col">
                <img src=${item.imgUrl} alt="products-img" style="width:100%; height: 250px;"/>
                <div class="product-text">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <h3 class="product-title">${item.title}</h3>
                    <p>${item.des}</p>
                    <h3> Category: <span>${item.category}</span></h3>
                    <div class="product-btns">
                        <button class="btn" onClick="addToCart(${item.id})">Add To Cart</button>
                        <i class="fa-solid fa-heart" id="heart-icon"></i>
                    </div>
                </div>
            </div>
            `
        )
    })
    allProducts.innerHTML = productItem
}
showData ()
////////////////////////////////////////////////////////////////////////
// function check(){
//     if(localStorage.getItem = ("userName")){
//         window.location = "cart.html"
//     }else{
//         window.location="login.html"
//     }
// }
let badgeNum = document.querySelector(".badge")
let cartContanier = document.querySelector(".cart-middle")
let spanPrice = document.querySelector(".spanPrice")
let total = 0

// if( localStorage.getItem = ("userName")){
//     function addToCart(id){
//         let choosenItem = products.find((item)=> item.id === id)
//         cartContanier.innerHTML += `
//             <div class="cart-hiegt">
//             <img src=${choosenItem.imgUrl} alt="cart-img" style="width:150px; height:150px; border-radius: 10px;"/>
//                 <div class="cart-title">
//                     <h5>${choosenItem.title}</h5>
//                     <h6>${choosenItem.des}</h6>
//                     <div class="d-flex">
//                         <div class="btn-space">
//                             <button>+</button>
//                             <span class="span-space">0</span>
//                             <button>-</button>
//                         </div>
//                         <i class="fa-solid fa-trash delete-icon"></i>
//                     </div>
//                 </div>
//                 <p class="cart-price">$${choosenItem.price}</p>
//             <//div>
//         `
//         let carProductLength = document.querySelectorAll(".cart-middle .cart-hiegt")
//         badgeNum.innerHTML = carProductLength.length
//         addItem = [...addItem , choosenItem]
//         localStorage.setItem("ProductsInCart" , JSON.stringify(addItem))
//         console.log("if fun")
//     }
//     console.log("if")
// }else{
//     window.location = "/login.html"
//     console.log("else")
// }
let getName = localStorage.getItem("userName")
console.log(getName)

// let addItem = [];
let addItem = localStorage.getItem("ProductsInCart") ? JSON.parse(localStorage.getItem("ProductsInCart")) : [];
let itemQuantity = 1
function increacePrice (){

    itemQuantity = itemQuantity + 1
    console.log(itemQuantity)
}
if(addItem){
    addItem.map(item => {
        cartContanier.innerHTML += `
            <div class="cart-hiegt">
            <img src=${item.imgUrl} alt="cart-img" style="width:150px; height:150px; border-radius: 10px;"/>
                <div class="cart-title">
                    <h5>${item.title}</h5>
                    <h6>${item.des}</h6>
                    <div class="d-flex">
                        <div class="btn-space">
                            <button onClick={increacePrice()}>+</button>
                            <span class="span-space">${itemQuantity}</span>
                            <button>-</button>
                        </div>
                    </div>
                </div>
                <p class="cart-price">$${item.price}</p>
            <//div>
        `
    })
    badgeNum.innerHTML = addItem.length
}


function addToCart(id){
    if( getName != null){
        let choosenItem = products.find((item)=> item.id === id)
        cartContanier.innerHTML += `
            <div class="cart-hiegt">
            <img src=${choosenItem.imgUrl} alt="cart-img" style="width:150px; height:150px; border-radius: 10px;"/>
                <div class="cart-title">
                    <h5>${choosenItem.title}</h5>
                    <h6>${choosenItem.des}</h6>
                    <div class="d-flex">
                        <div class="btn-space">
                            <button onClick={increacePrice()}>+</button>
                            <span class="span-space">1</span>
                            <button>-</button>
                        </div>
                    </div>
                </div>
                <p class="cart-price">$${choosenItem.price}</p>
            <//div>
        `
        let carProductLength = document.querySelectorAll(".cart-middle .cart-hiegt")
        badgeNum.innerHTML = carProductLength.length
        addItem = [...addItem , choosenItem]
        localStorage.setItem("ProductsInCart",JSON.stringify(addItem))
        total += parseInt(choosenItem.price)
        spanPrice.innerHTML = total
    }
    else{
        window.location = "/login.html"
    }
}

////////////////////////////////////////////////////////////////////////
let cartshoping = document.querySelector("#cart-shoping")
let cartPage = document.querySelector(".cart-page")
let closePage = document.querySelector("#x-icon")

cartshoping.addEventListener("click" , openCart)
function openCart (){
    if(cartshoping.innerHTML != ""){
        cartPage.style.display = "block"
    }
}
closePage.addEventListener("click" , closeCart)
function closeCart(){
    if(cartPage.style.display == "block"){
        cartPage.style.display = "none"
    }
}

/*function openCart (){
    if(cartshoping.innerHTML != ""){
        if(cartPage.style.display == "block"){
            cartPage.style.display = "none"
        }else{
            cartPage.style.display = "block"
        }
    }
}*/
/////////////////////////////////////////////////////////////////////
