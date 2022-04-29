/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Admin API
 * OpenAPI spec version: 1.0.0
 */
import { rest } from "msw"
import { faker } from "@faker-js/faker"

export const getPostShippingProfilesMock = () => ({
  shipping_profile: faker.helpers.randomize([{}, undefined]),
})

export const getGetShippingProfilesMock = () => ({
  shipping_profiles: faker.helpers.randomize([
    [...Array(faker.datatype.number({ min: 1, max: 10 }))].map(() => ({})),
    undefined,
  ]),
})

export const getDeleteShippingProfilesProfileMock = () => ({
  id: faker.helpers.randomize([faker.random.word(), undefined]),
  object: faker.helpers.randomize([faker.random.word(), undefined]),
  deleted: faker.helpers.randomize([faker.datatype.boolean(), undefined]),
})

export const getGetShippingProfilesProfileMock = () => ({
  shipping_profile: faker.helpers.randomize([{}, undefined]),
})

export const getPostShippingProfilesProfileMock = () => ({
  shipping_profiles: faker.helpers.randomize([{}, undefined]),
})

export const getShippingProfileMSW = () => [
  rest.post("*/admin/shipping-profiles", (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, "Mocked status"),
      ctx.json(getPostShippingProfilesMock())
    )
  }),
  rest.get("*/admin/shipping-profiles", (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, "Mocked status"),
      ctx.json(getGetShippingProfilesMock())
    )
  }),
  rest.delete("*/admin/shipping-profiles/:id", (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, "Mocked status"),
      ctx.json(getDeleteShippingProfilesProfileMock())
    )
  }),
  rest.get("*/admin/shipping-profiles/:id", (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, "Mocked status"),
      ctx.json(getGetShippingProfilesProfileMock())
    )
  }),
  rest.post("*/admin/shipping-profiles/:id", (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, "Mocked status"),
      ctx.json(getPostShippingProfilesProfileMock())
    )
  }),
]