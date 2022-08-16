import { Router } from "express";
import { v4 as uuidV4 } from "uuid";
import { Category } from "../model/Category";
import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

const categories: Array<Category> = [];

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  createCategoryService.execute({ name, description });

  return res.status(201).send();
});

categoriesRoutes.get("/", (_, res) => {
  const categories = categoriesRepository.list();

  res.json({ categories });
});

export { categoriesRoutes };
