import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function login(req, res) {
  try {
    let result = await User.findOne({ email: req.body.email });
    if (!result) return res.status(404).send("User not found");

    let authResult = await bcrypt.compare(req.body.password, result.password);
    if (!authResult) return res.status(401).send("Incorrect Password");

    //  JWT CREATION

    // let token = jwt.sign(
    //   {
    //     id: result.id,
    //     email: result.email,
    //     isVerified: result.isVerified,
    //   },
    //   process.env.JWT_SECRET_KEY
    // );

    // res.status(200).send({ success: true, token });
    res.status(200).send("login success");
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export { login };
