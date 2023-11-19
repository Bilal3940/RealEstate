import express from "express";
import {
  createUser,
  bookingProperty,
  allBookings,
  cancelBookings,
  addToFavorites,
  getFavorites,
} from "../controllers/usercontroller.js";

const router = express.Router();

router.post("/register", createUser);
router.post("/booking/:id", bookingProperty);
router.post("/allbookings", allBookings);
router.post("/cancelbooking/:id", cancelBookings);
router.post("/addtofavorites/:pid", addToFavorites);
router.get("/allfavorites", getFavorites);
export { router as userRoute };
