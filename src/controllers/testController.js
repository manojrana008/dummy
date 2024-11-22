const express = require("express");
const { getUserDetails } = require("../services/testService");

const router = express.Router();

// sample
// router.get("")
// router.post("")
// router.patch("")
// router.delete("")

router.get("/get-user-details", async (req, res) => {
  try {
    const user = await getUserDetails(req);
    return res
      .status(200)
      .json({ message: "User fetched successfully.", data: user });
  } catch (error) {
    console.error(req.path, "Error while fetching data: ", error);
    return res.status(500).json({ message: "Error while fetching data." });
  }
});

module.exports = router;
