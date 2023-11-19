import express from "express";
import { GetAllProperties, registerProperties, getProperty } from "../controllers/propertiescontroller.js";
const router = express.Router();

router.post('/registerproperties',registerProperties);
router.get('/allproperties',GetAllProperties);
router.get('/:id',getProperty);


export {router as propertiesRoute}