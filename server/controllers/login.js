import User from "../models/User.js";

export const login = async (req, res) => {
  try {
    console.log('in login');
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      if (password === user.password) {
        res.status(200).json("exists");
      } else {
        res.status(404).json("notexist");
      }
    } else {
      res.status(404).json("notexist");
    }
  } catch (err) {
    res.status(500).json({err});
  }
};