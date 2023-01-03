type FieldRulesType = {
  [key: string]: (value: string) => boolean
}

const fieldsRules: FieldRulesType = {
  name: (value: string) => !!value && /([a-zA-Z]+\s?\b){2,}/.test(value),
  email: (value: string) => !!value && /^(.+)@(.+)$/.test(value),
  maritalStatus: (value: string) => !!value,
  genre: (value: string) => !!value,
}

const valid = (fieldName: string, value: string): boolean => {
  const fnValidate = fieldsRules[fieldName]
  return fnValidate ? fnValidate(value) : false
}

export const Validator = { valid } 