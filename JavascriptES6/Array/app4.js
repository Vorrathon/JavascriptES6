// ค้นหาข้อมูลใน Array
//indexof(ข้อมูล) => ผลการค้นหาข้อมูลได้ตำแหน่ง [index] ที่จะค้นเจอ ถ้าค้นไม่เจอจะได้ -1
//find(ข้อมูล) => ผลการค้นหาจะได้ข้อมูลที่ค้นเจอ ถ้าค้นไม่เจอจะได้ undefind
//findIndex(ข้อมูล)=> ผลการค้นหาจะได้ตำแหน่ง index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1

const colors = ["red","green","blue","purple","white"]
//indexOf()
console.log(colors)
console.log(colors.indexOf("red"))  

//find()
found=colors.find(Element=>Element==="blue")
console.log(found)

//findIndex()
foundIn=colors.findIndex(e=>e==="white")
console.log(foundIn)
