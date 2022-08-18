import { Category } from "../modules/cars/model/Category";

interface ICreateCategoryDTO extends Omit<Category, "id" | "created_at"> {}

interface ICategoryRepository {
  findByName(name: string): Category;
  list(): Array<Category>;
  create({ description, name }: ICreateCategoryDTO): void;
}

export { ICategoryRepository, ICreateCategoryDTO };
