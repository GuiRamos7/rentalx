import {
  ICategoryRepository,
  ICreateCategoryDTO,
} from "../../../interfaces/ICategoriesRepository";
import { Category } from "../model/Category";

const categories: Array<Category> = [];

class CategoriesRepository implements ICategoryRepository {
  private categories: Array<Category>;

  private static INSTACE: CategoriesRepository;

  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTACE) {
      CategoriesRepository.INSTACE = new CategoriesRepository();
    }

    return CategoriesRepository.INSTACE;
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
