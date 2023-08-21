// declaration part
let count = 1
let newprice = 0
let applyBtn = document.getElementById('apply-btn')
// product name get and add
function getProductName(id) {
    // get product 
    let products = document.getElementById(id)
    let getName = products.childNodes[3].children[1]
    // get product name
    let productName = getName.innerText
    let newlist = document.createElement('li')
    // insert product name
    let insertElement = document.getElementById('cart-list').appendChild(newlist)
    insertElement.innerText = count + '. ' + productName
    count++
    // get product price section
    let getPrice = products.childNodes[3].children[2]
    // get and calculate product price 
    let price = parseFloat(getPrice.innerText)
    newprice += price
    // convert main price to number and insert 
    let totalBox = document.getElementById('total')
    totalBox.innerText = newprice.toFixed(2)
    // convert after discount price to number and insert 
    let afterDiscount = document.getElementById('after-discount')
    afterDiscount.innerText = newprice.toFixed(2)
    // button show logic
    if (newprice >= 200) {
        applyBtn.removeAttribute('disabled')
    }
    else if (newprice > 0) {
        document.getElementById('purchaseBtn').removeAttribute('disabled')
    }

}
// price calculation
applyBtn.addEventListener('click', function () {
    // cupon field get
    let cupon = document.getElementById('cupon')
    let cuponValue = cupon.value
    // price calculation
    if (cuponValue === 'SELL200') {
        // error message hide
        document.getElementById('errorMsg').style.display = 'none'
        // discount logic
        let discount = document.getElementById('discount')
        let discountPrice = newprice * (20 / 100)
        // price insert
        discount.innerText = discountPrice.toFixed(2)
        // final price calculate
        let afterDiscount = document.getElementById('after-discount')
        let finalPrice = newprice - discountPrice
        // final price insert
        afterDiscount.innerText = finalPrice.toFixed(2)
        cupon.value = ''

    }
    // error message show
    else {
        cupon.value = ''
        document.getElementById('errorMsg').style.display = 'block'

    }
})
// refresh windows
document.getElementById('refresh').addEventListener('click',function(){
    window.location.reload()
})