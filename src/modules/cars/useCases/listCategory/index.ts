import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ListCategoryController } from "./ListCategoryController";
import { ListCategoriesUseCase } from "./ListCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstance();
export const listCategoriesUseCase = new ListCategoriesUseCase(
  categoriesRepository
);
export const listCategoriesController = new ListCategoryController(
  listCategoriesUseCase
);
