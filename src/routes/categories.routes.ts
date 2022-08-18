import { Router } from "express";
import { Category } from "../modules/cars/model/Category";
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { createCategoryController } from "../modules/cars/useCases/createCategory";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

const categories: Array<Category> = [];

categoriesRoutes.post("/", (req, res) => {
  return createCategoryController.handle(req, res);
});

categoriesRoutes.get("/", (_, res) => {
  const categories = categoriesRepository.list();

  res.json({ categories });
});

export { categoriesRoutes };
