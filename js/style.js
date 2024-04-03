var cartIcon = document.querySelector(".cart-icon")
var cartDiv = document.querySelector(".cart-section")
var cartClose = document.querySelector(".cart-close-icon")
var favIcon = document.querySelectorAll(".fav-icon-con")
var favIcon2 = document.querySelectorAll(".fav-icon-con2")
var productCart = document.querySelectorAll(".product-cart-icon")
var productCart2 = document.querySelector(".product-cart-icon2")
let userInfo = document.querySelector(".user-con")
let userInfoName = document.querySelector(".user-name")
let links = document.querySelector(".register-box")
var cartName = document.querySelector(".incart-name")
let incart = document.querySelector(".product-area")
var incartBtn = document.querySelector(".product-btn-con2")

cartIcon.onclick = function (){
    cartDiv.style.opacity = "1"
    cartDiv.style.transition = ".3s"
}
cartClose.onclick = function closecart(){
    cartDiv.style.opacity = "0"                              
    cartDiv.style.transition = ".3s"
}
favIcon.forEach(function(item2){
    item2.onclick = function(){
        favIcon.style.opacity = '0'
        favIcon.style.transition = ".4s"
    }
})
favIcon.ondblclick = function(){
    favIcon.style.opacity = '1'
    favIcon.style.transition = ".4s"
}

if(localStorage.getItem("username")){
    links.remove()
    userInfo.style.display = "block"
    userInfoName.innerHTML = localStorage.getItem("username")
}
//////////////////////////////////////////////////////////
let allproducts = document.querySelector(".product-con1")
let products = [
    {
        id: 1 ,
        title : "iPhone 15 Pro 256GB Natural Titanium 5G With FaceTime - ",
        newPrice : "4699",
        oldPrice : "4300" ,
        dicount : "8$",
        imgUrl: "img/iphon15promax.webp",
        rate : "4.6",
        numberOfRate : "(14k)",
        color1 : "black",
        color2 : "Blue",
        color3 : "Titanium",
    },
    {
        id: 2 ,
        title : "iPhone 15 Plus 256GB Mate Blue 5G With FaceTime - ",
        newPrice : "3299",
        oldPrice : "3700" ,
        dicount : "15%",
        imgUrl: "img/iphone 15 plus.jpeg",
        rate : "3.9",
        numberOfRate : "(34k)",
        color1 : "black",
        color2 : "Blue",
        color3 : "Purple",
    },
    {
        id: 3 ,
        title : "iPhone 14 256GB White color 5G With FaceTime - ",
        newPrice : "2450",
        oldPrice : "3399" ,
        dicount : "27%",
        imgUrl: "img/14 white.jpeg",
        rate : "3.4",
        numberOfRate : "(13k)",
        color1 : "black",
        color2 : "Blue",
        color3 : "Green",
    },
    {
        id: 4 ,
        title : "Galaxy Note20 Ultra Dual SIM Mystic Bronze",
        newPrice : "2070",
        oldPrice : "4899" ,
        dicount : "57%",
        imgUrl: "img/note20white2.jpg",
        rate : "4.8",
        numberOfRate : "(22k)",
        color1 : "black",
        color2 : "Blue",
        color3 : "Green",
    },
    {
        id: 5 ,
        title : "Galaxy Z Flip 4 5G Single SIM Graphite 8GB ",
        newPrice : "1399",
        oldPrice : "3799" ,
        dicount : "63%",
        imgUrl: "img/z-flip.jpg",
        rate : "4.7",
        numberOfRate : "(2.4k)",
        color1 : "black",
        color2 : "Blue",
        color3 : "Green",
    },
    {
        id: 6 ,
        title : "iPhone 15  128GB luxary Black 5G With FaceTime - ",
        newPrice : "3000",
        oldPrice : "2700" ,
        dicount : "6%",
        imgUrl: "img/iphon15.webp",
        rate : "5.0",
        numberOfRate : "(2k)",
        color1 : "black",
        color2 : "Blue",
        color3 : "White",
    },
    {
        id: 7 ,
        title : "PS 5 Gost dF Game 2 GG 2CELLS",
        newPrice : "3000",
        oldPrice : "2700" ,
        dicount : "6%",
        imgUrl: "img/ps5_ghost_of_tsushima_directors_cut9.jpg",
        rate : "5.0",
        numberOfRate : "(2k)",
        color1 : "PS 4",
        color2 : "PS 5",
        color3 : "X box",
    },
    {
        id: 8 ,
        title : "iPhone 15  128GB luxary Black 5G With FaceTime - ",
        newPrice : "3000",
        oldPrice : "2700" ,
        dicount : "6%",
        imgUrl: "img/iphon15.webp",
        rate : "5.0",
        numberOfRate : "(2k)",
        color1 : "black",
        color2 : "Blue",
        color3 : "White",
    },
    {
        id: 9 ,
        title : "A. Watch Ultra Uimit 234s 33 high rights ",
        newPrice : "2926",
        oldPrice : "3199" ,
        dicount : "7%",
        imgUrl: "img/watchs.webp",
        rate : "36",
        numberOfRate : "(436)",
        color1 : "Orang",
        color2 : "Blue",
        color3 : "Black",
    },
    {
        id: 10 ,
        title : "Watch Ultra 2 GPS + Cellular, 49mm Titanium - ",
        newPrice : "2926",
        oldPrice : "3199" ,
        dicount : "7%",
        imgUrl: "img/w4.jpg",
        rate : "36",
        numberOfRate : "(436)",
        color1 : "Orang",
        color2 : "Blue",
        color3 : "Black",
    },
    {
        id: 11 ,
        title : "iPhone 15  128GB luxary Black 5G With FaceTime - ",
        newPrice : "3000",
        oldPrice : "2700" ,
        dicount : "6%",
        imgUrl: "img/iphon15.webp",
        rate : "5.0",
        numberOfRate : "(2k)",
        color1 : "black",
        color2 : "Blue",
        color3 : "White",
    },
    {
        id: 12 ,
        title : "iPhone 15  128GB luxary Black 5G With FaceTime - ",
        newPrice : "3000",
        oldPrice : "2700" ,
        dicount : "6%",
        imgUrl: "img/iphon15.webp",
        rate : "5.0",
        numberOfRate : "(2k)",
        color1 : "black",
        color2 : "Blue",
        color3 : "White",
    }
];
function drawitem (){
    let xxx = products.map((item) =>{
        const xx = `
        <div class="home-product1">
        <div class="product-img1-con">
            <div class="product-fav">
                <div class="fav-icon-con">
                    <i class="fa-regular fa-heart fav-icon1"></i>
                </div>
                <div class="fav-icon-con2">
                    <i class="fa-solid fa-heart fav-icon2"></i>
                </div>
            </div>
            <img src="${item.imgUrl}" class="product-img1">
            <div class="product-cart">
                <div class="rating-con">
                    <span class="rating-con-title"><b>${item.rate}</b></span>
                    <i class="fa-solid fa-star rating-icon"></i>
                    <span class="rating-con-title">${item.numberOfRate}</span>
                </div>
                    <div class="product-cart-icon">
                        <button class="add-btn"  onClick="addToCart(${item.id})">Add Cart</button>
                    </div>
                    <div class="product-cart-icon2">
                        <p class="product-cart-title">Added</p>
                    </div> 
            </div>
        </div>
        <div class="card-footer">
            <p class="card-footer-title">${item.title} - <span class="cart-price">AED <B>${item.newPrice}</B><small><del>${item.oldPrice}</del></small><span class="price-dis">${item.dicount}</span></span></p>
        </div>
        <div class="card-copyright">
            <h6 class="card-copyright1">Mentpress</h6>
        </div>
    </div> 
    `
    allproducts.innerHTML += xx ;
    })

}
drawitem()
let showbtn = document.querySelector(".product-btn-con2")
let badge = document.querySelector(".cart-item-number")
let counter = document.querySelector(".cart-title2")

let additem = [];

if(localStorage.getItem=("username")){
    function addToCart(id){
        let chosenItem = products.find((item) => item.id === id);
        let cartItemLenght = document.querySelectorAll(".product-area .cart-item1")
        if(incart != ""){
            counter.style.display = "block"
            showbtn.style.display = "block"
        }
            badge.innerHTML = cartItemLenght.length
            incart.innerHTML += `
            <div class="cart-item1">
            <div class="cart-img-con">
                <img src="${chosenItem.imgUrl}" class="cart-item2-img">
            </div> <!-- cart-img-con -->
            <p class="discrip">${chosenItem.title}</p>
            <div class="item-colors">
                <div class="color1">
                    <div class="color"></div>
                    <span>${chosenItem.color1}</span>
                </div> <!-- color1 -->
                <div class="color1">
                    <div class="color11"></div>
                    <span>${chosenItem.color2}</span>
                </div> <!-- color1 -->
                <div class="color1">
                    <div class="color111"></div>
                    <span>${chosenItem.color3}</span>
                </div> <!-- color1 -->
            </div> <!-- item-colors -->
            <div class="delete-con">
                <i class="fa-solid fa-trash delete-icon"></i>
            </div> <!-- delete-con -->
        </div><!-- cart-item1 -->`
}
}else{
    window.location = "login.html"
}
var logout = document.querySelector(".logout-icon ")
        logout.addEventListener("click" , function (){
            localStorage.clear();
            setTimeout(()=>{
                window.location = "login.html"
            } , 1500)
        })
    let cartDiv2 = document.querySelector(".product-area")
        function drawCartItem(){
            let cartItem = products.map((item2) => {
                const yy = `
                
                `
                cartDiv.innerHTML += yy ;
                })
            }