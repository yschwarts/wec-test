const router = require("express").Router();
const productcontroller = require("../controllers/product");

//all product
router.get('/', productcontroller.getallproducts);
//one product
router.get('/:id', productcontroller.getproductsbyid);
//upddate product
router.patch('/:id', productcontroller.updateproducts);
//delete product
router.delete('/:id', productcontroller.deleteproducts);
//add new product
router.post('/', productcontroller.addnewproducts);

module.exports=router;
