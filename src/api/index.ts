import Api from "../services/Api"

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function contactSubmit(formData: ContactFormData) {
  console.log("Submitting contact form:", formData);

  const contactEntry = {
    name: formData.name,
    email: formData.email,
    subject: formData.subject,
    message: formData.message
  };

  try {
    const response = await Api.post("/mustafa-kamal-users", {
      body: contactEntry,
    });

    console.log("Contact form submitted successfully:", response);
    return response;
  } catch (error) {
    console.error("Error submitting contact form:", error);
    throw error;
  }
}