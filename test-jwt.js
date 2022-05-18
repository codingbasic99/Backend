import transport from "./config/nodemailerConfig.js";

const message = {
  from: "srrajputanaas@gmail.com",
  to: "codingbasic99@gmail.com",
  subject: "User Auth message",
  text: "Test Mailing ",
  html: "<p>HTML version of mesage</p>",
};

async function sendingMail() {
  let result = await transport.sendMail(message);
  console.log(result);
}

sendingMail();
