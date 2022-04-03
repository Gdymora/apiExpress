import apiRoutes from "./api/itemsRoutes";
import categoryRoutes from "./api/categoryRoutes";
import filmCategoryRoutes from "./api/filmCategoryRoutes";
import filmRoutes from "./api/filmRoutes";

export default [
    ...apiRoutes,
    ...categoryRoutes,
    ...filmCategoryRoutes,
    ...filmRoutes
];
