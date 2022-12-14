import { ImportCategoryUseCase } from "./ImportCategoryUseCase";
import { ImportCategoryController } from "./ImportCategoryController";
import { CategoriesRepository } from "../../repositories/CategoriesRepository";

const categoriesRepository = CategoriesRepository.getInstance();

const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);

export const importCategoryController = new ImportCategoryController(
  importCategoryUseCase
);
