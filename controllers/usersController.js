import User from "../models/User.js";
import bcrypt from "bcrypt";
// import transport from "../config/nodemailerConfig.js";
// import jwt from "jsonwebtoken";

async function createUser(req, res) {
  try {
    let { name, email, password } = req.body;
    let salt = await bcrypt.genSalt(10);
    let hash = await bcrypt.hash(password, salt);
    let result = await User.create({
      name,
      email,
      password: hash,
    });

    const mailData = {
      from: "srrajputanaas@gmail.com",
      to: req.body.email,
      subject: "Account Verification",
      html: "<p>hello</p>",
    };
    await transport.sendMail(mailData);

    res.status(201).send({
      sucess: true,
      result: {
        name: result.name,
        email: result.email,
      },
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
}
export { createUser };
