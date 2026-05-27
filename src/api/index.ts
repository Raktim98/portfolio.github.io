import axios from 'axios';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const API_URL = 'https://portfolio-github-io-npwu.onrender.com/api/contact';

export async function contactSubmit(formData: ContactFormData) {
  try {
    const response = await axios.post(API_URL, formData);
    return response.data;
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
}
