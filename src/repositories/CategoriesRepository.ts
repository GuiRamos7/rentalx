import { Category } from "../model/Category";

const categories: Array<Category> = [];

interface ICreateCategoryDTO extends Omit<Category, "id" | "created_at"> {}

class CategoriesRepository {
  private categories: Array<Category>;

  constructor() {
    this.categories = [];
  }

  create({ description, name }: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  list(): Array<Category> {
    return this.categories;
  }

  findByName(name: string): Category {
    const hasCategory = this.categories.find((ct) => ct.name === name);

    return hasCategory;
  }
}

export { CategoriesRepository };
