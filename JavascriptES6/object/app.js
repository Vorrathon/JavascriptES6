//Object

const customer = {
    cut_name:"Vorrathon",
    age : 26 ,
    tel : "084-300-2444",
    addres : "101/24",
    showdata(salary,email){
        return "เงินเดือนคือ "+salary+" อีเมลคือ "+email
    }
        
    

}
console.log(customer.cut_name)
console.log(customer.showdata(10000,"notzaa@hotmail.com"))