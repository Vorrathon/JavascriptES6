//Array join,concat

const data = [100,222,455]
console.log(data)

const result = data.join("*")  //join() คือการเแปลง array เป็น String สามารถขั้นstringด้วย ตัวอักษรที่เรากำหนดได้
console.log(result)

const data1 = ["123","rr"]
const data2 = ["123",true]

// concat การต่อ array
const data3=data1.concat(data2)

