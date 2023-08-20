let count = 1
let newprice = 0
let applyBtn = document.getElementById('apply-btn')


function getProductName(id) {
    let products = document.getElementById(id)
    let getName = products.childNodes[3].children[1]

    let productName = getName.innerText
    // console.log(productName)
    let newlist = document.createElement('li')

    let insertElement = document.getElementById('cart-list').appendChild(newlist)
    insertElement.innerText = count + '. ' + productName
    count++

    let getPrice = products.childNodes[3].children[2]

    let price = parseFloat(getPrice.innerText)
    // console.log(price)

    newprice += price

    let totalBox = document.getElementById('total')
    totalBox.innerText = newprice.toFixed(2)
    // console.log(newprice)

    let afterDiscount = document.getElementById('after-discount')
        
    
        afterDiscount.innerText = newprice.toFixed(2)
        // console.log(discountPrice)

    if (newprice >= 200) {
        applyBtn.removeAttribute('disabled')
    }

}

document.getElementById('Refresh').addEventListener('click',function(){
    window.onload
})


applyBtn.addEventListener('click',function(){

    let cupon = document.getElementById('cupon')
    let cuponValue = cupon.value
    console.log(cuponValue)
   

    if(cuponValue==='SELL20'){
        let discount = document.getElementById('discount')
        let discountPrice = newprice * (20 / 100)
    
        discount.innerText = discountPrice.toFixed(2)
        // console.log(discountPrice)
    
        let afterDiscount = document.getElementById('after-discount')
        let finalPrice = newprice - discountPrice
    
        afterDiscount.innerText = finalPrice.toFixed(2)
        // console.log(discountPrice)
        cupon.value =''
    
    }
})