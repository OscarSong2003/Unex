import express from "express";
const router = express.Router();
import { NextFunction, Request, Response } from "express";
import { User } from "../models/User";
import { UserDTO } from "../types/User";
import { OverviewResponseDTO } from "../types/OverviewResponse";
/* GET users listing. */

// check to make sure the user exists
router.post('/check', async function(req: Request, res: Response, next: NextFunction) {
  const userEmail = req.body.email; 
  const userExists = await User.exists({ email: userEmail });
  const userData = {
    email: userEmail, 

  }
  if (!userExists) {
    const user = new User({ email: userEmail });
    await user.save((err: any) => {
      if (err) {
        console.log(err);
        res.send(err)
      } else {
        console.log("user created");
      }
    }); 
  }
});

router.get('/overview', async function(req: Request, res: Response, next: NextFunction) {
    const { email: userEmail } = req.query; 
    const foundUser = await User.findOne({ email: userEmail });
    if (foundUser) {
      const response: OverviewResponseDTO = {
        amountAvailable: foundUser.amountAvailable,
        amountSpent: foundUser.amountSpent
      }
      console.log("got it!");
      res.send(response);
    }
}); 

module.exports = router; 
