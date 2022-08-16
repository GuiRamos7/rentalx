import {
  ICategoryRepository,
  ICreateCategoryDTO,
} from "../interfaces/ICategoriesRepository";
import { Category } from "../model/Category";

class PostgresCategoriesRepository implements ICategoryRepository {
  findByName(name: string): Category {
    return {} as Category;
  }
  list(): Category[] {
    return [];
  }
  create({ name, description }: ICreateCategoryDTO): void {}
}

export { PostgresCategoriesRepository };
