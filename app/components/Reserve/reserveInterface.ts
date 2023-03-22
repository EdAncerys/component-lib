export interface ReserveProps {
  reservePrice?: string
  reserveDay?: string
  rentedByImage?: any
  rentedByName?: string
  rentedByJoined?: string
  rating?: string | number
  ratingCount?: string | number
  height?: number
  width?: number
  fromDate?: string
  setFromDate?: React.Dispatch<React.SetStateAction<string>>
  tillDate?: string
  setTillDate?: React.Dispatch<React.SetStateAction<string>>
  handleReserveData?: (fromDate: string, tillDate: string) => void
}
