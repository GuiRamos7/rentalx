import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoryUseCase";

export class ListCategoryController {
  constructor(private listCategoryUseCase: ListCategoriesUseCase) {}

  handle(req: Request, res: Response): Response {
    const categories = this.listCategoryUseCase.execute();

    return res.json({ categories });
  }
}
