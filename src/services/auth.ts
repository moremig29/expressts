import { Auth } from "../interface/auth.interface";
import { User } from "../interface/user.interface";
import UserModel from "../models/user";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async ({email, password, name}: User) => {
  const checkIs = await UserModel.findOne({ email })

  if (checkIs) return "ALREADY_USER";

  const passHash = await encrypt(password)

  const registerNewUser = await UserModel.create({email, password: passHash, name})

  return registerNewUser;
};

const loginUser = async ( {email, password}: Auth ) => {
  const checkIs = await UserModel.findOne({ email })
  if (!checkIs) return "USER_NOT_FOUND"

  const passHash = checkIs.password
  const isCorrect = await verified( password, passHash )

  if (!isCorrect) return "PASSWORD_INCORRECT'";

  const token = generateToken( String(checkIs._id) );

  const data = {
    token,
    user: checkIs
  }

  return data
};

export { registerNewUser, loginUser }