/* ================== START: Imports ================== */
import emailjs from '@emailjs/browser';
import { IContactForm } from './types';
/* ================== END: Imports ================== */

/* ================== START: Send Email Function ================== */
export const sendEmail = async (data: IContactForm): Promise<{ success: boolean; message: string }> => {
  const { firstName, lastName, email, message } = data;

  try {
    // Send email using EmailJS
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        firstName,
        lastName,
        email,
        message,
        name: import.meta.env.VITE_FROM_NAME,
        time: new Date().toLocaleString(),
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    if (response.status === 200) {
      return {
        success: true,
        message: "Email sent successfully! ✅"
      };
    } else {
      throw new Error("Failed to send email");
    }
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "Failed to send email. Please try again later."
    };
  }
};
/* ================== END: Send Email Function ================== */
