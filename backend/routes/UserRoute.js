import express from "express"
import { signup ,login, allUsers } from "../controller/UserController.js";
import secureRoute from "../middleware/secureRoute.js";



const router=express.Router();


router.post("/signup",signup)

router.post("/login",login)
router.get("/allusers",secureRoute,allUsers);
export default router;
