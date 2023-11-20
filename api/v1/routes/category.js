const router = require("express").Router();
const categorycontroller = require("../controllers/category");

//all category
router.get('/', categorycontroller.getallcategory);
//one category
router.get('/:id', categorycontroller.getcategorybyid);
//upddate category
router.patch('/:id', categorycontroller.updatecategory);
//delete category
router.delete('/:id', categorycontroller.deletecategory);
//add new category
router.post('/', categorycontroller.addnewcategory);

module.exports=router;
