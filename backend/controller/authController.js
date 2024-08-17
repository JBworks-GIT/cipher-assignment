const signup = (req,res)=>{
        const {name , email, password } = req.body;
        if (!name || !email || !password) {
          res.status(400).json({
            status: "fail",
            message: "Invalid password or email",
            data: {},
          });
          return;
        }
        console.log(name +" " + email + " " + password);
 

    // console.log("in progress. by signup controller");
    // res.send("in progress. by signup controller");
}

module.exports ={signup};