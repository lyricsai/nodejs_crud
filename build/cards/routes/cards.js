"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const { getTasks, getTask, createTask, putTask, patchTask, deleteTask, deleteTasks, all, } = require("../controllers/cards");
router.route("/").get(getTasks).post(createTask).delete(deleteTasks);
router
    .route("/:id")
    .all(all)
    .get(getTask)
    .patch(patchTask)
    .put(putTask)
    .delete(deleteTask);
module.exports = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY2FyZHMvcm91dGVzL2NhcmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsc0RBQThCO0FBQzlCLE1BQU0sTUFBTSxHQUFHLGlCQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDaEMsTUFBTSxFQUNGLFFBQVEsRUFDUixPQUFPLEVBQ1AsVUFBVSxFQUNWLE9BQU8sRUFDUCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFdBQVcsRUFDWCxHQUFHLEdBQ04sR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUVwQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRXJFLE1BQU07S0FDRCxLQUFLLENBQUMsTUFBTSxDQUFDO0tBQ2IsR0FBRyxDQUFDLEdBQUcsQ0FBQztLQUNSLEdBQUcsQ0FBQyxPQUFPLENBQUM7S0FDWixLQUFLLENBQUMsU0FBUyxDQUFDO0tBQ2hCLEdBQUcsQ0FBQyxPQUFPLENBQUM7S0FDWixNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7QUFFeEIsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMifQ==