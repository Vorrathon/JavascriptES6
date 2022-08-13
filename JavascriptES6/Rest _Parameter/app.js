//Rest_Parameter
//คือการใช้ ... ใน parameter เพื่อให้ใช้ parameter ได้หลายตัว
/*
summation = (x,y) => x+y
console.log(summation(2,3))
console.log(summation(500,600))
*/  

summation = (...NumArr) =>{
    total = 0
    for (let number of NumArr) 
    total=total+number
    return total

}
console.log(summation(20,44,55,334))  //สามารถส่งค่าให้ fucntion กี่ตัวก็ได้ โดยไม่จำกัด Parameter