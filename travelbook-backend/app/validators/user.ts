import vine from '@vinejs/vine'

export const signupUserValidator = vine.compile(
  vine.object({
    email: vine.string().trim().maxLength(64),
    password: vine.string().maxLength(32),
    firstname: vine.string().maxLength(32),
    lastname: vine.string().maxLength(32),
  })
)

export const loginUserValidator = vine.compile(
  vine.object({
    email: vine.string().trim().maxLength(64),
    password: vine.string().maxLength(32),
  })
)
