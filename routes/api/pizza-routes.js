const router = require('express').Router();
const { getAllPizza, getPizzaById, createPizza, updatePizza, deletePizza } = require('../../controllers/pizza-controller');
// GET all and POST at /api/pizzas
router
    .route('/')
    .get(getAllPizza)
    .post(createPizza);

// Get one, PUT, and DElETE /api/pizzas/:id
router
    .route('/:id')
    .get(getPizzaById)
    .put(updatePizza)
    .delete(deletePizza);

module.exports = router;