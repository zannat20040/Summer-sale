let count = 1
let newprice = 0
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

    let discount = document.getElementById('discount')
    let discountPrice = newprice * (20 / 100)

    discount.innerText = discountPrice.toFixed(2)
    // console.log(discountPrice)

    let afterDiscount = document.getElementById('after-discount')
    let finalPrice = newprice - discountPrice

    afterDiscount.innerText = finalPrice.toFixed(2)
    // console.log(discountPrice)


}