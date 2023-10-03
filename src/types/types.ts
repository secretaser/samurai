export type postType = {
   id: number
   authorID: number
   likes: number
   text: string
}
export type contactsType = {
   github: string | null
   vk: string | null
   facebook: string | null
   instagram: string | null
   twitter: string | null
   website: string | null
   youtube: string | null
   mainLink: string | null
}
export type photosType = {
   small: string | null
   large: string | null
}
export type profileType = {
   userId: number
   lookingForAJob: boolean
   lookingForAJobDescription: string | null
   fullName: string
   contacts: contactsType
   photos: photosType
}
export type userType = {
   name: string
   id: number
   photos: photosType
   status: string | null
   followed: boolean
}
export type dialogsDataType = Array<dialogType>
export type meType = {
   name: string
   id: number
}
export type dialogType = {
   name: string
   id: number
   avaLink: string
   mesData: Array<messageType>
}
export type messageType = {
   id: number
   authorID: number
   text: string
}
