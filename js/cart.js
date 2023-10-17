// let AllproductContainer = document.querySelector(".Allproduct-container")
// let getAllProudcts = localStorage.getItem("ProductsInCart")
// let allProducts = document.querySelector("#products-row")
 
// if(getAllProudcts){
//     let items = JSON.parse(getAllProudcts)
//     drawCsrtProduct(items)
// }
// function drawCsrtProduct(items){
//     let AllproductContainer = items.map((item)=>{
//         return(`
//             <div class="col-md-3 col-12 bg-light p-0 my-2" id="product-col">
//                 <img src=${item.imgUrl} alt="products-img" style="width:100%; height: 250px;"/>
//                 <div class="product-text">
//                     <i class="fa-solid fa-star"></i>
//                     <i class="fa-solid fa-star"></i>
//                     <i class="fa-solid fa-star"></i>
//                     <i class="fa-solid fa-star"></i>
//                     <i class="fa-regular fa-star"></i>
//                     <h3 class="product-title">${item.title}</h3>
//                     <p>${item.des}</p>
//                     <h3> Category: <span>${item.category}</span></h3>
//                     <div class="product-btns">
//                         <button class="btn" onClick="removeFromCart(${item.id})">remove From Cart</button>
//                         <i class="fa-solid fa-heart" id="heart-icon"></i>
//                     </div>
//                 </div>
//             </div>
//         `
//         )
//     })
//     allProducts.innerHTML = AllproductContainer
// }

/////////////////////////////////////////////////////////////////////////////

let AllproductContainer = document.querySelector(".Allproduct-container")
let getAllProudcts = localStorage.getItem("ProductsInCart")
if(getAllProudcts){
    let items = JSON.parse(getAllProudcts)
    function drawItems (){
        let mapData = items.map((item)=>{
            return(
                `<div class="cheackOut-Container">
                    <img src=${item.imgUrl} alt="" class="cheackOut-img"/>
                    <div>
                        <h4>${item.title}</h4>
                        <p>${item.des}</p>
                        <p>Category: ${item.category}</p>
                        <i class="fa-solid fa-trash delete-icon" onClick="removeItems()"></i>
                    </div>
                    
                </div>`
            )
        })

        AllproductContainer.innerHTML = mapData
    }
    drawItems ()

    function removeItems(id){
                const Itemproduct = items.find((item)=>item.id === id)
        localStorage.removeItem("ProductsInCart",Itemproduct)
        // const Itemproduct = items.find((item)=>item.id === id)
        // console.log(Itemproduct)
    }
}




// const handleRemovItems =(pro)=>{
//     const product = cartItems.find((item)=>item.id === pro.id)
//     if(product.quantity ===1){
//       setCartItems(cartItems.filter((item)=> item.id !==pro.id))
//     }else{
//       setCartItems(cartItems.map((item)=>item.id === pro.id ? {...product, quantity:product.quantity -1}:item))
//     }
//   }