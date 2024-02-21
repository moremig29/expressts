import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"


const getOrders = (req: Request, res: Response) => {
  try {
    res.send({
      data: 'Esto solo se ve con jwt'
    })
  } catch (error) {
    handleHttp(res, 'ERROR_GET_BLOG')
  }
}

export {
  getOrders, 
}