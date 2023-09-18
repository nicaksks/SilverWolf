export interface Stamina {
  stamina: number,
  max: number,
  time: number
  reserve: Reserve
}

export interface Reserve {
  stamina: number,
  reserve_full: boolean
}