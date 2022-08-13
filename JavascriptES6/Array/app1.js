// array 
//push,pop,shift,unshift

//push การเพิ่มสมาชิกใน Array
/*
const data = [10,20,30]
data.push(40)  //เพิ่มทีละตัว
console.log(data)
data.push(50)
console.log(data)
data.push(...[60,70,80]) //เพิ่มหลายตัว
console.log(data)
*/

//pop ลบสมาชิกตัวท้ายออก
const data=[3,42,42,55]
data.pop()
console.log(data)

//shift ลบสมาชิกข้างหน้า
data.shift()
console.log(data)

//unshift เพิ่มสมาชิกเข้าไปข้างหน้า
data.unshift(99)
console.log(data)
