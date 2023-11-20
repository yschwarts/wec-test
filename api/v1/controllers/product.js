module.exports={

getallproducts:(req, res)=>{
   res.status(200).json({msg:"all product"})
},
getproductsbyid:(req, res)=>{},
addnewproducts:(req, res)=>{
   console.log(req.body);
   return res.status(200).json({msg: `producr ${req.body.pid} added ceccessfuly`})
},
updateproducts:(req, res)=>{},
deleteproducts:(req, res)=>{}



}