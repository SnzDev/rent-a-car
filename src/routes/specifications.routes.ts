import { Router } from 'express';

import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const specificationsRoutes = Router();
const specificationsRepository = new CategoriesRepository();

specificationsRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const createSpecificationService = new CreateSpecificationService(specificationsRepository);

  createSpecificationService.execute({ name, description });

  return response.status(201).send();
});

export { specificationsRoutes };
