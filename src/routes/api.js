const express = require('express');
const router = express.Router();
const ProductsController=require("../controllers/ProductsController")

//API Routing End Point
// C=Create
router.post("/CreateProduct",ProductsController.CreateProduct);

// R=Read
router.get("/ReadProduct",ProductsController.ReadProduct);
router.get("/ReadProductByID/:id",ProductsController.ReadProductByID);

// U=Update
router.post("/UpdateProduct/:id",ProductsController.UpdateProduct);

// Delete
router.get("/DeleteProduct/:id",ProductsController.DeleteProduct);





module.exports = router;