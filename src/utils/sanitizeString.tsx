/* Remove spaces and special chars from a string */
export const sanitizeString = (str: any) => {
  return str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
}

export default sanitizeString
