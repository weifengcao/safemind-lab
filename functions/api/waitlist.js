/**
 * Cloudflare Pages Function to handle waitlist form submissions
 * 
 * This function receives form data and can be extended to:
 * - Store in Cloudflare D1 database
 * - Send to a webhook (Slack, Discord, etc.)
 * - Forward to an email service (SendGrid, Resend, etc.)
 */

export async function onRequestPost(context) {
    const { request, env } = context;

    // CORS headers
    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    };

    try {
        const formData = await request.formData();

        const submission = {
            email: formData.get('email'),
            company: formData.get('company') || '',
            role: formData.get('role') || '',
            message: formData.get('message') || '',
            timestamp: new Date().toISOString(),
            source: 'waitlist',
        };

        // Validate email
        if (!submission.email || !isValidEmail(submission.email)) {
            return new Response(
                JSON.stringify({ success: false, error: 'Valid email is required' }),
                {
                    status: 400,
                    headers: { 'Content-Type': 'application/json', ...corsHeaders }
                }
            );
        }

        // Log the submission (visible in Cloudflare dashboard)
        console.log('Waitlist submission:', JSON.stringify(submission));

        // TODO: Add your preferred storage/notification method here:
        // 
        // Option 1: Store in Cloudflare D1 (database)
        // await env.DB.prepare('INSERT INTO waitlist (email, company, role, message, timestamp) VALUES (?, ?, ?, ?, ?)')
        //   .bind(submission.email, submission.company, submission.role, submission.message, submission.timestamp)
        //   .run();
        //
        // Option 2: Send to webhook (Slack, Discord, etc.)
        // await fetch(env.WEBHOOK_URL, {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(submission)
        // });
        //
        // Option 3: Send email via Resend/SendGrid
        // await sendEmailNotification(env, submission);

        return new Response(
            JSON.stringify({
                success: true,
                message: 'Thank you for joining the waitlist! We will be in touch soon.'
            }),
            {
                status: 200,
                headers: { 'Content-Type': 'application/json', ...corsHeaders }
            }
        );

    } catch (error) {
        console.error('Waitlist submission error:', error);
        return new Response(
            JSON.stringify({ success: false, error: 'Something went wrong. Please try again.' }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json', ...corsHeaders }
            }
        );
    }
}

// Handle preflight requests
export async function onRequestOptions() {
    return new Response(null, {
        status: 204,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
