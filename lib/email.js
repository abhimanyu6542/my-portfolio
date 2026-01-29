export async function sendContactEmail(data) {
  // This is a placeholder function for email integration
  // In a real application, you would integrate with a service like:
  // - SendGrid
  // - Nodemailer
  // - AWS SES
  // - Resend
  
  console.log('Contact form submission:', data);
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Return success response
  return {
    success: true,
    message: 'Email sent successfully',
    data: {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
    },
  };
}

export function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export function validatePhone(phone) {
  const re = /^[\+]?[1-9][\d]{0,15}$/;
  return re.test(phone);
}