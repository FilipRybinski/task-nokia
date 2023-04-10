export interface Summary {
    Global: Global
    Countries: Country[]
    Date: string
  }
  
  export interface Global {
    NewConfirmed: number
    TotalConfirmed: number
    NewDeaths: number
    TotalDeaths: number
    NewRecovered: number
    TotalRecovered: number
  }
  
  export interface Country {
    Country: string
    CountryCode: string
    Slug: string
    NewConfirmed: number
    TotalConfirmed: number
    NewDeaths: number
    TotalDeaths: number
    NewRecovered: number
    TotalRecovered: number
    Date: string
  }
  