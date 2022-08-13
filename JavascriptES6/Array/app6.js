//Array filter 
//การคัดกรอก array
/*
const data =[10,22,55,42]
const result =data.filter(e=>e>20)
console.log(result)
*/

const data = [
    {NAME:"alonemanz",salary:25000,department:"Programmer"},
    {NAME:"ERROR",salary:50000,department:"Fullstack"},
    {NAME:"Chopper",salary:15000,department:"Cloth Shop"},
    {NAME:"Choabii",salary:15000,department:"IT SUPPORT"},
    {NAME:"MOOMAK",salary:30000,department:"Lawyer"}
]
showdata = data.filter(e=>{
     return e.salary >= 30000 && e.department =="Fullstack"
})
console.log(showdata)