/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Storefront API
 * OpenAPI spec version: 1.0.0
 */

/**
 * The type of the Condition
 */
export type DiscountConditionType =
  | "products"
  | "product_types"
  | "product_collections"
  | "product_tags"
  | "customer_groups"

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const DiscountConditionType = {
  products: "products" as DiscountConditionType,
  product_types: "product_types" as DiscountConditionType,
  product_collections: "product_collections" as DiscountConditionType,
  product_tags: "product_tags" as DiscountConditionType,
  customer_groups: "customer_groups" as DiscountConditionType,
}