import type { Car } from "../../types/types"

interface GarageState {
  cars: Car[]
  totalCars: number
  currentPage: number
  loading: boolean
  error: string | null
}
