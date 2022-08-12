// Spread Operator
//คือการกระจายสมาชิกใน Array โดยใช้ ... หน้า Array

const Custname = ["Vorrathon","Nitipon","Panyapon"]
const Num = [100,122,323,...Custname] //กระจาย Array
newdata =["CPU","RAM"]

Num.push(...newdata) //push การยัด array
console.log(Num)