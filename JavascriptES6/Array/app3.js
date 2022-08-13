// Loop array
// for loop ,forEach,forof

const data = [10,20,30,40]
// for(let i = 0 ;i<data.length;i++){
//     if (data[i]>=30)      
//         break ;
//     console.log("ข้อมูลชุดที่ "+[i+1]+" คือ "+data[i])
// }

//for each
// data.forEach(Element=>{
//     if (Element>=30){
//         console.log("hello")
//     }
//     console.log(`สมาชิกในarrayคือ ${Element}`)
// }) // forEach วนลูปสมาชิกใน data โดยใช้ element

/*
let sum = 0
data.forEach(e=>{
    sum = sum+e
    console.log(`ผลรวมของตัวเลขใน Array แต่ละรอบ คือ ${sum}`)
})
console.log(`ผลรวมของตัวเลขใน Array คือ ${sum}`)
*/

for (const i of data){
    if (i >=20){
      
        break
    }
    console.log(i)
}