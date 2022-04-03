import apiRoutes from "./api/itemsRoutes";
import categoryRoutes from "./api/categoryRoutes";
import filmCategory from "./api/filmCategoryRoutes";

export default [
    ...apiRoutes,
    ...categoryRoutes,
    ...filmCategory
];
