import express from "express"
import postController from "../controllers/postController.js";

const router = express.Router();

//INDEX
// lettura di tutti gli elementi 
router.get("/", postController.index)


//SHOW 
//lettura di un elemento singolo
router.get("/:id", postController.show)


//STORE
//inserisco un nuovo elemento
router.post('/', postController.store)


//UPDATE
//modifico un elemento
router.put("/:id", postController.update)


//DELETE
//elimino un elemento
router.delete("/:id", postController.destroy)


export default router;