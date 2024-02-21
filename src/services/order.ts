import { Car } from "../interface/car.interface"
import ItemModel from "../models/item"

const getOrder = async () => {
  const responseItems = await ItemModel.find({});
  return responseItems;
};



export { getOrder };