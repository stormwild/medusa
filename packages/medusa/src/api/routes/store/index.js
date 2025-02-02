import cors from "cors"
import { Router } from "express"
import middlewares from "../../middlewares"
import productTypesRoutes from "../admin/product-types"
import authRoutes from "./auth"
import cartRoutes from "./carts"
import collectionRoutes from "./collections"
import customerRoutes from "./customers"
import giftCardRoutes from "./gift-cards"
import orderEditRoutes from "./order-edits"
import orderRoutes from "./orders"
import productRoutes from "./products"
import regionRoutes from "./regions"
import returnReasonRoutes from "./return-reasons"
import returnRoutes from "./returns"
import shippingOptionRoutes from "./shipping-options"
import swapRoutes from "./swaps"
import variantRoutes from "./variants"

const route = Router()

export default (app, container, config) => {
  app.use("/store", route)

  const storeCors = config.store_cors || ""
  route.use(
    cors({
      origin: storeCors.split(","),
      credentials: true,
    })
  )

  route.use(middlewares.authenticateCustomer())

  authRoutes(route)
  collectionRoutes(route)
  customerRoutes(route, container)
  productRoutes(route)
  productTypesRoutes(route)
  orderRoutes(route)
  orderEditRoutes(route)
  cartRoutes(route, container)
  shippingOptionRoutes(route)
  regionRoutes(route)
  swapRoutes(route)
  variantRoutes(route)
  returnRoutes(route)
  giftCardRoutes(route)
  returnReasonRoutes(route)

  return app
}
