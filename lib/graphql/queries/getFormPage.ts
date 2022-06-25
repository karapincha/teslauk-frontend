import { fetchAPI } from '../../api'

export async function getFormPage(slug: any, optionalQuery?: string, secondaryQuery?: string) {
  const data = await fetchAPI(`
  {
    form(id: "${slug}", idType: SLUG) {
      id
      title
      form {
        description
        heading
        submissionEmail
        fields {
          field
          isRequired
          placeholder
          label
        }
        successMessage
        successRedirectUrl
        submitButtonText
        submittingButtonText
        emailSubject
      }
      ${optionalQuery ? optionalQuery : ''}
    }
    ${secondaryQuery ? secondaryQuery : ''}
  }
  `)
  return data
}
