import { Request, Response, response } from "express";
import { loginUser, registerNewUser } from "../services/auth";

const registerCtrl = async ( { body }: Request, res: Response ) => {
  
  const responseUser = await registerNewUser( body )
  res.send(responseUser)
}

const loginCtrl = async ({body}: Request, res: Response) => {
  const { email, password } = body
  const responseUser = await loginUser( {email, password} )
  res.send(responseUser)
};

export { registerCtrl, loginCtrl }