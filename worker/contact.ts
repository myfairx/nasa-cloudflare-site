interface Env {
  TURNSTILE_SECRET: string;
  RESEND_API_KEY: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    // Only allow POST
    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }

    try {
      const formData = await request.formData();
      const name = formData.get('name') as string;
      const email = formData.get('email') as string;
      const phone = formData.get('phone') as string;
      const message = formData.get('message') as string;
      const turnstileToken = formData.get('cf-turnstile-response') as string;

      // 1. Validate required fields
      if (!name || !email || !message || !turnstileToken) {
        return new Response(
          JSON.stringify({ error: 'Missing required fields' }),
          {
            status: 400,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          }
        );
      }

      // 2. Verify Turnstile
      const turnstileUrl =
        'https://challenges.cloudflare.com/turnstile/v0/siteverify';
      const turnstileBody = new URLSearchParams();
      turnstileBody.set('secret', env.TURNSTILE_SECRET);
      turnstileBody.set('response', turnstileToken);

      const turnstileResponse = await fetch(turnstileUrl, {
        method: 'POST',
        body: turnstileBody,
      });
      const turnstileResult = await turnstileResponse.json();

      if (!turnstileResult.success) {
        return new Response(
          JSON.stringify({ error: 'Turnstile verification failed' }),
          {
            status: 403,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          }
        );
      }

      // 3. Send email via Resend
      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'NS Land Contact <contact@nslandconsultant.com>',
          to: ['info@nslandconsultant.com'],
          subject: `New Contact Form Submission from ${name}`,
          html: `
            <h3>New Contact Form Submission</h3>
            <table style="border-collapse: collapse; width: 100%;">
              <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Name</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${name}</td></tr>
              <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Email</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${email}</td></tr>
              <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${phone || 'N/A'}</td></tr>
              <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Message</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${message.replace(/\n/g, '<br>')}</td></tr>
            </table>
            <p style="margin-top: 16px; color: #666; font-size: 12px;">Submitted at: ${new Date().toISOString()}</p>
          `,
        }),
      });

      if (!resendResponse.ok) {
        const resendError = await resendResponse.json();
        console.error('Resend error:', resendError);
        return new Response(JSON.stringify({ error: 'Failed to send email' }), {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });
      }

      return new Response(JSON.stringify({ status: 'success' }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    } catch (error) {
      console.error('Contact form error:', error);
      return new Response(JSON.stringify({ error: 'Internal server error' }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }
  },
};
