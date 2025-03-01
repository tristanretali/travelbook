import vine from '@vinejs/vine'

export const creationEntryValidator = vine.compile(
  vine.object({
    content: vine.string().trim().minLength(1),
  })
)
