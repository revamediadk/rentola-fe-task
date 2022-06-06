export type PropertyDetails = {
  bathrooms: number,
  bedrooms: number,
  type: string,
}

export type PropertyItemType = PropertyDetails & {
  id: string,
  price: number,
  type: string,
  city: string,
  address: string,
  isVerified: boolean,
  location: {
    latitude: number,
    longitude: number
  },
  summary: string,
  area: number,
  image: string[],
  caseNumber: number
}
