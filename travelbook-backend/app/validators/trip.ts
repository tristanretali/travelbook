import vine from '@vinejs/vine'

export const creationTripValidator = vine.compile(
  vine.object({
    tripName: vine.string().trim().maxLength(120),
  })
)
