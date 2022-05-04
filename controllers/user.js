const User = require("../models/user");

exports.getUser = (req, res) => {
  res.json({ message: "hi" });
};

exports.createUser = (req, res) => {
  const user = new User({ name: "please work" });

  user.save((err, user) => {
    if (err) {
      console.log(err);
      return res.status(400).json({
        error: "not able to save user in db",
      });
    }
    res.json(user);
  });
};
