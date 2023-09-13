import createHttpError from "http-errors";
import logger from "../configs/logger.config.js";
import { searchUsers as searchUsersService } from "../services/user.service.js";
export const searchUsers = async (req, res, next) => {
  try {
    const keyword = req.query.search;
    if (!keyword) {
      logger.error("Please add a search query first");
      throw createHttpError.BadRequest("Oops...Something went wrong !");
    }
    const users = await searchUsersService(keyword, req.user.userId);
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
