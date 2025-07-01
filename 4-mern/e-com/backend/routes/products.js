
import express from "express";
import { getProducts,newProduct ,getProductDetails, updateProduct, deleteProduct,createProductReview, getProductReview, canUserReview, getAdminProducts} from "../controllers/productControllers.js";
import { isAuthenticatedUser,authorizeRoles } from "../middlewares/auth.js";

const router = express.Router();

router.route("/products").get(getProducts);

router.route("/admin/products")
.post(isAuthenticatedUser, authorizeRoles("admin"), newProduct)
.get(isAuthenticatedUser,authorizeRoles("admin"), getAdminProducts)

router.route("/products/:id").get(getProductDetails);
router.route("admin/products/:id").put(isAuthenticatedUser, authorizeRoles("admin"),updateProduct);
router.route("admin/products/:id").delete(isAuthenticatedUser, authorizeRoles("admin"),deleteProduct);
router.route("/reviews")
.get(isAuthenticatedUser,getProductReview)
.put(isAuthenticatedUser,createProductReview);

router.route("/can_review")
.get(isAuthenticatedUser,canUserReview)

export default router;