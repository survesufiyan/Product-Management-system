import { SubCategory } from "./subCategory"


export interface Category {
    pc_id: number
    categoryName: string
    subCategories: Array<SubCategory>
}