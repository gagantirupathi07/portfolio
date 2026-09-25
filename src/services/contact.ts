import {
  WEB3FORMS_ACCESS_KEY,
} from "../config/contact"

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

interface Web3FormsResponse {
  success: boolean
  message?: string
}

export const submitContactForm = async (
  formData: ContactFormData,
): Promise<Web3FormsResponse> => {
  if (!WEB3FORMS_ACCESS_KEY) {
    throw new Error(
      "Web3Forms access key is not configured.",
    )
  }

  const response = await fetch(
    "https://api.web3forms.com/submit",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,

        from_name: "Gagan Tirupathi Portfolio",

        botcheck: "",
      }),
    },
  )

  const result: Web3FormsResponse =
    await response.json()

  if (!response.ok || !result.success) {
    throw new Error(
      result.message ||
        "Unable to send your message.",
    )
  }

  return result
}