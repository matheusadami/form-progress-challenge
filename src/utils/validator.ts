type FieldRulesType = {
  [key: string]: (value: string) => boolean
}

const fieldsRules: FieldRulesType = {
  name: (value: string) => !!value && value.length >= 3,
  email: (value: string) => !!value && /^(.+)@(.+)$/.test(value),
  maritalStatus: (value: string) => !!value,
  genre: (value: string) => !!value,
}

const valid = (fieldName: string, value: string): boolean => {
  const fnValidate = fieldsRules[fieldName]
  return fnValidate ? fnValidate(value) : false
}

export const Validator = { valid } 