"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardsRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const { getTasks, getTask, createTask, putTask, patchTask, deleteTask, deleteTasks, } = require("../controllers/cards");
class CardsRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, "CardsRoutes");
    }
    configureRoutes() {
        return this.app;
    }
}
exports.CardsRoutes = CardsRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZHMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jYXJkcy9jYXJkcy5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlFQUFvRTtBQUVwRSxNQUFNLEVBQ0YsUUFBUSxFQUNSLE9BQU8sRUFDUCxVQUFVLEVBQ1YsT0FBTyxFQUNQLFNBQVMsRUFDVCxVQUFVLEVBQ1YsV0FBVyxHQUNkLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFFcEMsTUFBYSxXQUFZLFNBQVEseUNBQWtCO0lBQy9DLFlBQVksR0FBd0I7UUFDaEMsS0FBSyxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ0QsZUFBZTtRQUNYLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNwQixDQUFDO0NBQ0o7QUFQRCxrQ0FPQyJ9