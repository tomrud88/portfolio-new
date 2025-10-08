# EmailJS Setup Guide

## Step 1: Create EmailJS Account

1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service

1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## Step 3: Create Email Template

1. Go to "Email Templates" in dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Portfolio Contact: {{subject}}

Hello,

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

4. Save the template and note down your **Template ID**

## Step 4: Get Public Key

1. Go to "Account" > "General"
2. Find your **Public Key**

## Step 5: Update Environment Variables

Update the `.env.local` file with your actual values:

```
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## Step 6: Test

1. Restart your development server: `npm run dev`
2. Fill out the contact form on your portfolio
3. Check your email inbox for the message

## Security Notes

- ✅ Public Key is safe to expose in frontend code
- ✅ Service ID and Template ID are safe to expose
- ❌ Never put your private API key in frontend code
- ✅ EmailJS handles all email authentication securely

## Free Tier Limits

- 200 emails per month
- No credit card required for setup
- Upgrade available if you need more emails

## Troubleshooting

- Make sure environment variables start with `VITE_`
- Restart dev server after changing `.env.local`
- Check browser console for error messages
- Verify all IDs are correct in EmailJS dashboard
