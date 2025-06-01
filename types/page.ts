
export interface ModuleCollection {
  id: number
  name: string
  alias: string
}

export interface Module {
  id: number
  value: string
  field_type: string
  collection: ModuleCollection
}

export interface NameField {
  id: number
  value: string
  field_type: string
}

export interface SlugField {
  id: number
  value: string
  field_type: string
}

export interface PageContentValues {
  modules: Module[]
  name: NameField
  slug: SlugField
}

export interface PageContentItem {
  id: number
  created_at: string
  updated_at: string
  values: PageContentValues
}

export interface PageContentMeta {
  timestamp: string
}

export interface PageContentPagination {
  page: number
  per_page: number
}

export interface PageContentResponse {
  success: boolean
  data: PageContentItem[]
  meta: PageContentMeta
  pagination: PageContentPagination
}
