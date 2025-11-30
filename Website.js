const product = [
    {
        id: 0,
        image: 'main/Pacifica.jpg',
        title: 'Yamaha Pacifica 612VIIFMX',
        price: 699,
    },
    {
        id: 1,
        image: 'main/PRSSE.jpg',
        title: 'PRS SE Pauls Guitar',
        price: 799,
    },
    {
        id: 2,
        image: 'main/Gibson.jpg',
        title: 'Gibson Les Paul Custom EB GH',
        price: 1999,
    },
    {
        id: 3,
        image: 'main/Stratocaster.jpg',
        title: 'Fender Limited Edition Player Stratocaster',
        price: 1499,
    },
    {
        id: 4,
        image: 'main/Telecaster.jpg',
        title: 'Fender American Original 50s Telecaster',
        price: 1199,
    },
    {
        id: 5,
        image: 'main/Revstar.jpg',
        title: 'Yamaha Revstar RSE20 Red Copper',
        price: 999,
    },
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i = 0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1),
    displaycart();
}
function displaycart(a){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                    "<i class='fa-solid fa-trash' onclick='delElement("+(j++) + ")'></i></div>"
            );
        }).join('');
    }

}

