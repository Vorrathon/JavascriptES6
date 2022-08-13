//Destructuring
//การดึง Array มาเก็บไว้ในตัวแปร

const color =["น้ำเงิน","แดง","ขาว"]

//การใช้งาน
const [a,,c] = color
console.log(a,c)

//object
const product = {
    productName : "คอมพิวเตอร์",
    price:30000,
    stock:10
}

const {"productName":productName,"price":price,"stock":stock} = product  //const {"Property":ตัวแปร}
console.log(productName)
console.log(price)
console.log(stock)
