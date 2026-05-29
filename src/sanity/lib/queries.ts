import { client } from './client'

export type SanityActivity = {
  _id: string
  title: string
  ageGroup: 'nursery' | 'class1' | 'class3' | 'class5'
  skill: string
  time: string
  what: string
  materials: string
  connection: string
  questions: string[]
  order: number
  backgroundImage?: {
    asset: { _ref: string }
    hotspot?: { x: number; y: number }
    alt?: string
  }
  videoLink?: string
}

const ACTIVITIES_QUERY = `
  *[_type == "activity" && published == true]
  | order(ageGroup asc, order asc) {
    _id,
    title,
    ageGroup,
    skill,
    time,
    what,
    materials,
    connection,
    questions,
    order,
    backgroundImage {
      asset,
      hotspot,
      alt
    },
    videoLink
  }
`

export async function getAllActivities(): Promise<SanityActivity[]> {
  return client.fetch(ACTIVITIES_QUERY, {}, { next: { revalidate: 60 } })
}
