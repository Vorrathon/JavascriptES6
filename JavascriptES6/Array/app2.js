//array
//splice & slice

//splice #ลบข้อมูลแบบกำหนดช่วงใน Array
//splice(ตำแหน่งที่จะลบ,จำนวนที่จะลบ)
/*
const data = [23,45,555,634,34,55]
console.log(data)
data.splice(1,4,444) //ช่วงที่ 1-4 จะทำการลบ ใน [index] (ช่วง,จำนวน,แทรกสมาชิก)
console.log(data)
*/

//slice การดึงสมาชิกมาใช้งาน
const data = [23,45,555,634,34,55]
newdata=data.slice(1,5)  //กำหนดช่วงเริ่มต้น ถึง สุดท้าย-1 จากนั้นเอามาเก็บที่ตัวแปรเพราะมันจะไม่กระทบกับ array ตัวหลัก
console.log(newdata)
