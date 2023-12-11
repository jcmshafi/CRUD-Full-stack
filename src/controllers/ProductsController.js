const ProductsModel=require('../models/ProductsModel');

//! Create Product
exports.CreateProduct = (req, res) => {
    let reqBody = req.body;
    ProductsModel.create(reqBody)
        .then(data => {
            res.status(200).json({ status: "success", data: data });
        })
        .catch(err => {
            res.status(400).json({ status: "fail", data: err });
        });
};



 //! Read All worked 
// exports.ReadProduct = async (req, res) => {
//     try {
//         const data = await ProductsModel.find();
//         res.status(200).json({ status: "success", data: data });
//     } catch (err) {
//         console.error("Error in finding products:", err); // Log the error for debugging
//         res.status(400).json({ status: "fail", error: err.message });
//     }
// };
exports.ReadProduct = (req, res) => {
    ProductsModel.find()
        .then(data => {
            res.status(200).json({ status: "success", data: data });
        })
        .catch(err => {
            res.status(400).json({ status: "fail", data: err });
        });
}




//! R=Read By ID worked properly
// module.exports.ReadProductByID = async (req, res) => {
//     try {
//       const id = req.params.id;
      
//       const result = await ProductsModel.findById(id);
      
//       return res.status(200).send({ status: "ok", data: result });
//     } catch (error) {
//       return res.status(500).send({ status: "fail", message: error.message });
//     }
//   };
exports.ReadProductByID = (req, res) => {
    let id = req.params.id;
    let Query = { _id: id };
    ProductsModel.find(Query)
        .then(data => {
            res.status(200).json({ status: "success", data: data });
        })
        .catch(err => {
            res.status(400).json({ status: "fail", data: err });
        });
}




//! U=Update
exports.UpdateProduct = (req, res) => {
    const id = req.params.id;
    let Query = { _id: id };
    let reqBody = req.body;
    ProductsModel.updateOne(Query, reqBody)
        .then((data) => {
            res.status(200).json({ status: "success", data: data });
        })
        .catch((err) => {
            res.status(400).json({ status: "fail", data: err });
        });
};

//! D=Delete
exports.DeleteProduct = (req, res) => {
    const id = req.params.id;
    // let Query = { _id: id };
    ProductsModel.findByIdAndDelete(id)
        .then((data) => {
            res.status(200).json({ status: "success", data: data });
        })
        .catch((err) => {
            res.status(400).json({ status: "fail", data: err });
        });
};




