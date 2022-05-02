"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardsRoutes = void 0;
const common_routes_config_1 = require("../../common/common.routes.config");
const { getCards, getCard, createCard, putCard, patchCard, deleteCard, deleteCards, all, } = require("../controllers/cards");
class CardsRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, "CardsRoutes");
    }
    configureRoutes() {
        this.app
            .route("/cards/")
            .get(getCards)
            .post(createCard)
            .delete(deleteCards);
        this.app
            .route("/cards/:id")
            .all(all)
            .get(getCard)
            .patch(patchCard)
            .put(putCard)
            .delete(deleteCard);
        return this.app;
    }
}
exports.CardsRoutes = CardsRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZHMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jYXJkcy9yb3V0ZXMvY2FyZHMucm91dGVzLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw0RUFBdUU7QUFHdkUsTUFBTSxFQUNGLFFBQVEsRUFDUixPQUFPLEVBQ1AsVUFBVSxFQUNWLE9BQU8sRUFDUCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFdBQVcsRUFDWCxHQUFHLEdBQ04sR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUVwQyxNQUFhLFdBQVksU0FBUSx5Q0FBa0I7SUFDL0MsWUFBWSxHQUF3QjtRQUNoQyxLQUFLLENBQUMsR0FBRyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDRCxlQUFlO1FBQ1gsSUFBSSxDQUFDLEdBQUc7YUFDSCxLQUFLLENBQUMsU0FBUyxDQUFDO2FBQ2hCLEdBQUcsQ0FBQyxRQUFRLENBQUM7YUFDYixJQUFJLENBQUMsVUFBVSxDQUFDO2FBQ2hCLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsR0FBRzthQUNILEtBQUssQ0FBQyxZQUFZLENBQUM7YUFDbkIsR0FBRyxDQUFDLEdBQUcsQ0FBQzthQUNSLEdBQUcsQ0FBQyxPQUFPLENBQUM7YUFDWixLQUFLLENBQUMsU0FBUyxDQUFDO2FBQ2hCLEdBQUcsQ0FBQyxPQUFPLENBQUM7YUFDWixNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFeEIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ3BCLENBQUM7Q0FDSjtBQXBCRCxrQ0FvQkMifQ==