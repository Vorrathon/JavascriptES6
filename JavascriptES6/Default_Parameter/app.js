//Default_Parameter
getDataCustomer = (customerName,customerAddress="กรุงเทพ",)=>{ //กรณีกรอกค่า Parameter ไม่ครบ จะให้ค่า default ตามที่ตั้งไว้
    const address = `ชื่อลูกค้า : ${customerName}
    ที่อยู่ : ${customerAddress}`
    return address
}
// เรียกใช้ ฟังก์ชั่น
console.log((getDataCustomer("Vorrathon","กรุงเทพ")))
console.log((getDataCustomer("Panyapon")))