//Array Map
//คือการเปลี่ยนแปลง ค่าใน Array แล้ว สร้าง array ก้อนใหม่


/*
const Num =[3,4,5,40]
const MapNum = Num.map(e=>{
          const a=e*2    //คือการนำเอาสมาชิกแต่ละตัวคูณ 2
          return a
        })
console.log(Num)
console.log(MapNum)
*/

//แบบลดรูป MapNum = Num.map(e=>e*2)

/*
const data = ["ฝนตก","หนาว","ร้อน","พายุ","หมอก","ชื้น"]
const Mapdata=data.map((e,i)=>`วันที่ ${i+1} สภาพอากาศ ${e}`) //i เลข index e คือ ค่าข้อมูลใน index
console.log(data)
console.log(Mapdata)
*/

// array แบบ object
const data =[
    {day:"12/08/2565",
     weather:"แดดร้อน",
     temp:34
    },
    {day:"13/08/2565",
     weather:"ฝนตก",
     temp:23
    },
    {day:"14/08/2565",
     weather:"หมอก",
     temp:18
    }
]
console.log(data)

const Newdata = data.map(e=>{
  return e.temp
})
console.log(Newdata)
