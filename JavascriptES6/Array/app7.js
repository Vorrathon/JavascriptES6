// Array Reduce


const data = [10,23,45,55]
//map
const mapData= data.map(e=>100)
//filter
const filterdata = data.filter(e=>e>20)

//array.reduce((ค่าที่ถูกประมวลผล,e)=>{},ค่าเริ่มต้น) value = 0
reduceData=data.reduce((value,e)=>{
    const total = e+value
    return total

},0)
// เขียนแบบย่อ data.reduce((value,e)=>e+value,0)
console.log(reduceData)
//value เริ่มต้น คือ 0
//total = 10+0 สมาชิก 1
//value ต่อไป คือ 10
//total = 23+10 สมาชิก 2
//value ต่อไป คือ 33
//total = 45+33 สมาชิก 3
//value ต่อไป คือ 78
//total = 55+ 78 สมาชิก 4
//value ต่อไปคือ 133

const cart = [
    {Name:"กระเป๋า",price:1500},
    {Name:"เสื้อ",price:1000},
    {Name:"กางเกง",price:800}
]

//เขียนแบบเต็ม
// const sum=cart.reduce((value,e)=>{
//     const total = e.price+value
//     return total
// },0)

//เขียนแบบย่อ
const sum =cart.reduce((value,e)=>e.price+value,0)
console.log(`ผลรวมสินค้าคือ ${sum}`)
