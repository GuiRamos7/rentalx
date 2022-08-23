import { Request, Response } from "express";

class ImportCategoryUseCase {
  execute(file: any) {
    console.log("file", file);
  }
}

export { ImportCategoryUseCase };
