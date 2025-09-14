# 📧 Web3Forms Setup Guide for Contact Form

## 🎯 What This Does
Your contact form will now send emails directly to **mahim.naoe@gmail.com** when visitors submit the form using Web3Forms - a simple, free email service.

## 📋 Setup Steps (2 minutes)

### Step 1: Get Your Web3Forms Access Key
1. Go to [https://web3forms.com/](https://web3forms.com/)
2. Click **"Create Access Key"**
3. Enter your email: **mahim.naoe@gmail.com**
4. Click **"Get Access Key"**
5. Copy the access key (looks like: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`)

### Step 2: Update Your Website Code
1. Open `index.html`
2. Find this line:
   ```html
   <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY">
   ```
3. Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual access key:
   ```html
   <input type="hidden" name="access_key" value="a1b2c3d4-e5f6-7890-abcd-ef1234567890">
   ```

### Step 3: Test Your Form
1. Fill out your contact form on your website
2. Submit it
3. Check **mahim.naoe@gmail.com** for the email (including spam folder)

## ✅ What Visitors See
- **Loading**: "Sending..." with spinner 🔄
- **Success**: "Message Sent!" with checkmark ✅
- **Error**: "Failed to Send" with warning ⚠️

## 📧 Email Format
When someone submits your form, you'll receive an email with:

```
Subject: New Contact Form Submission from Portfolio

From: visitor@email.com

Name: John Doe
Email: visitor@email.com
Company: ABC Corp
Inquiry Type: Project Discussion
Organization: Tech University
Message: Hello, I'm interested in your naval architecture projects...
```

## 🎨 Features Included
- **Spam Protection**: Built-in security
- **Mobile Friendly**: Works on all devices
- **Real-time Validation**: Form validates before sending
- **Professional UI**: Loading states and success/error messages
- **No Backend Required**: Pure frontend solution

## 💰 Pricing
- **FREE**: Up to 1000 submissions/month
- **Perfect for**: Personal portfolios and small businesses

## 🔧 Troubleshooting

### No emails received?
- Check spam/junk folder
- Verify access key is correct
- Make sure you used the email you registered with

### Form shows "Failed to Send"?
- Check internet connection
- Verify access key in HTML
- Check browser console for errors

### Want to customize the email?
- Web3Forms automatically formats the email
- All form fields are included
- Subject line can be customized in HTML

## 🔒 Security Features
- **Spam Protection**: Built-in bot detection
- **Rate Limiting**: Prevents abuse
- **Secure HTTPS**: All communications encrypted

## 📞 Support
- Documentation: [https://docs.web3forms.com/](https://docs.web3forms.com/)
- Contact: [https://web3forms.com/contact](https://web3forms.com/contact)

---

## 🚀 That's It!
Once you add your access key, your contact form will be fully functional and sending emails to **mahim.naoe@gmail.com**!

**No account creation, no complex setup, just add your access key and go!** ✨