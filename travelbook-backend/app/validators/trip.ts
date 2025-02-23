import vine from '@vinejs/vine'

export const creationTripValidator = vine.compile(
  vine.object({
    tripName: vine.string().trim().minLength(1).maxLength(50),
    coverImage: vine.string().trim(),
  })
)

export const modifyTripValidator = vine.compile(
  vine.object({
    tripName: vine.string().trim().minLength(1).maxLength(50).optional(),
    coverImage: vine.string().trim().optional(),
  })
)
