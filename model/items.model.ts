/* eslint-disable camelcase */
// INTERFACE
import { IItem } from '@/interface/IItem'

export const itemConstructor = ({
  name,
  category,
  cost,
  fling_power,
  sprites,
}: any) =>
  ({
    name,
    image: sprites.default,
    category: category.name,
    cost,
    power: fling_power,
  } as IItem)
