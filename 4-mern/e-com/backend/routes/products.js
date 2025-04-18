
import express from "express";
import { getProducts,newProduct ,getProductDetails, updateProduct, deleteProduct,createProductReview, getProductReview} from "../controllers/productControllers.js";
import { isAuthenticatedUser,authorizeRoles } from "../middlewares/auth.js";

const router = express.Router();

router.route("/products").get(getProducts);

router.route("/admin/products").post(isAuthenticatedUser, authorizeRoles("admin"), newProduct)
.get(isAuthenticatedUser,authorizeRoles("admin"))

router.route("/products/:id").get(getProductDetails);
router.route("admin/products/:id").put(isAuthenticatedUser, authorizeRoles("admin"),updateProduct);
router.route("admin/products/:id").delete(isAuthenticatedUser, authorizeRoles("admin"),deleteProduct);
router.route("/reviews")
.get(isAuthenticatedUser,getProductReview)
.put(isAuthenticatedUser,createProductReview);

export default router;