import { ICategoryRepository } from "interfaces/ICategoriesRepository";
import { Category } from "modules/cars/model/Category";

export class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoryRepository) {}

  execute(): Array<Category> {
    const categories = this.categoriesRepository.list();

    return categories;
  }
}
