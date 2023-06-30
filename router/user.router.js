const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const verifyToken = require("../middleware/verifyToken");
const authorization = require("../middleware/authorization");

// create and get a user
router.route("/").get(userController.getUser).post(userController.createUser);

// jwt
router.get("/jwt", userController.getToken);

//getAllUser)
router.get("/all", userController.getAllUser);

// update a user role
router.patch("/update-role", userController.updateUser);
router.patch("/update-bio", userController.updateBio);

router.get("/map", userController.getMap);

// Function to calculate the distance between two coordinates using the Haversine formula
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the Earth in km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return distance;
}

// Function to convert degrees to radians
function toRad(degrees) {
  return degrees * (Math.PI / 180);
}

// delete a user
router.delete(
  "/:id",
  verifyToken,
  authorization("admin"),
  userController.deleteUser
);

module.exports = router;
