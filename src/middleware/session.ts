import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { RequestExt } from "../interface/req-ext";

const checkJwt = async (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || '';
    const jwt = jwtByUser.split(' ').pop();

    const isUser = (await verifyToken(`${jwt}`)) as { id: string };

    if (!isUser) {
      res.status(401).send('TOKEN_INVALID');
    } else {
      req.user = isUser;
      next();
    }
  } catch (error) {
    res.status(400).send('SESSION_INVALID');
  }
};

export { checkJwt }