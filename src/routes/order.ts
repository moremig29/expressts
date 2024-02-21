import { Request, Response, Router } from 'express';
import { getOrders } from '../controllers/order';
import { checkJwt } from '../middleware/session';

const router = Router();

router.get('/', checkJwt, getOrders)

export { router };
