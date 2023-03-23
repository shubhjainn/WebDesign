const router = require("express").Router();
const bcrypt = require("bcryptjs");
const User = require("./model/user");


//get request
router.get('/getAll', async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    }
    catch (error) {
      res.status(500).json({ err: error.message });
    }
  });
  

//post request
router.post("/create", async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    //checking if all fields have been entered
    if (!fullName || !email || !password) {
      return res.status(400).json({ msg: "All fields have not been entered" });
    }

    //checking if fullname matches the regex
    if (!(fullName.match(/^([\w]{3,})+\s+([\w\s]{3,})+$/))) {
      return res
        .status(400).json({ msg: "First name should be of length>=3 & Lastname also should be of length>=3. There should be space in between them." });
    }


    //checking if password matches the regex
    if (!password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)) {
        return res
          .status(400)
          .json({ msg: "Password should be 6-16 characters long & must contain atleast 1 single character and atleast 1 number" });
      }


      //checking if email matches the regex
    if (!(email.match(/(\W|^)[\w.+\-]*@northeastern\.edu(\W|$)/))) {
      return res
        .status(400).json({ msg: "Please enter the email in @northeastern.edu format" });
    }

    // Checking database and running an email check to ensure no duplicate emails upon register 
    const existingEmail = await User.findOne({ email: email });
    if (existingEmail) {
      return res
        .status(400)
        .json({ msg: "An account with this email already exists" });
    }

    // using Bcrypt to hash passwords for security
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    // creating out new user notice password value is passwordHash not password
    const newUser = new User({
      fullName: fullName,
      email: email,
      password: passwordHash,
    });
    const savedUser = await newUser.save();
    res.send("New user has been successfully added");

  }

  catch (error) {
    res.status(500).json({ err: error.message });
  }

});


//put request
router.put('/edit/:email', async (req, res) => {
    try {
      //finding email from the query and fullname,password from request body and updating only the fullname & password
      let users = await User.findOneAndUpdate(
        { email: req.params.email },
      { fullName: req.body.fullName, password: req.body.password }
      );
      if (!users) {
        return res.status(404).send("User having email " + req.params.email + " not found");
      }
      if (req.body.fullName) users.fullName = req.body.fullName;
  
      if (req.body.password) {
        password = req.body.password;
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
        users.password = passwordHash;
      }
  
      const u1 = await users.save();
      return res.send("User Details having email " + req.params.email + " has been updated");
    }
    catch (error) {
      res.status(500).json({ err: error.message });
    }
  
  })


//delete request
router.delete('/delete/:email', async (req, res) => {
  
  const emailExists = await User.findOne({ email: req.params.email });
  if (emailExists) {
    User
      .findOneAndRemove(req.params.email)
      .exec()
      .then(doc => {
        if (!doc) { return res.status(404).end(); }
        return res.send("User having email " + req.params.email + " has been deleted");
      })
  }
  else {
    return res.send("User having email " + req.params.email + " does not exist");
  }


});




module.exports = router;