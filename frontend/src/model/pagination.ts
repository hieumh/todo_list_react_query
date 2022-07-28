export type Meta = {
  currentPage: number
  totalPage: number
}

export type Paginate<T> = {
  items: T[]
  meta: Meta
}
