import { CategoryTC } from "../../models";

export const createCategory = CategoryTC.getResolver("createOne");
export const updateCategoryById = CategoryTC.getResolver("updateById");
export const removeCategoryById = CategoryTC.getResolver("removeById");
