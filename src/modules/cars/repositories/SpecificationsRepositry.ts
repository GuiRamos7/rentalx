import {
  ISpecificationRepository,
  ICreateSpecificationDTO,
} from "interfaces/ISpecificationRepository";
import { Specification } from "../model/Specification";

class SpecificationsRepository implements ISpecificationRepository {
  private specifications: Array<Specification>;

  constructor() {
    this.specifications = [];
  }

  create({ description, name }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find(
      (spec) => spec.name === name
    );

    return specification;
  }
}

export { SpecificationsRepository };
