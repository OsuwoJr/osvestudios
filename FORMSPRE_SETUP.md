# Formspree Integration Setup

## Overview
This project uses Formspree for handling form submissions. All forms are now properly configured to work with Svelte.

## Form IDs
- **Artist Invitation Form**: `mnnzbyzb` (used in invitation form)
- **Contact Form**: `myzpagaa` (used in contact page)
- **Newsletter Subscription**: `mwpqjkev` (used in footer)

## Implementation Pattern
All forms follow this pattern for successful submission:

```javascript
const response = await fetch('https://formspree.io/f/FORM_ID', {
    method: 'POST',
    body: formData,
    redirect: 'manual'
});

// Formspree returns 302 redirect on success
if (response.status === 302) {
    // Success handling
} else {
    // Error handling
}
```

## Key Points
1. **Use `redirect: 'manual'`** - This prevents automatic redirects and allows proper status checking
2. **Check for 302 status** - Formspree returns 302 on successful submission
3. **Use FormData** - Always use FormData for proper form submission
4. **Error handling** - Always include try/catch blocks for network errors

## Components
- `InvitationForm.svelte` - Artist invitation form (endpoint: mnnzbyzb)
- `src/routes/contact/+page.svelte` - Contact form (endpoint: myzpagaa)
- `Footer.svelte` - Newsletter subscription (endpoint: mwpqjkev)
- `FormspreeForm.svelte` - Reusable component for future forms

## Testing
To test forms:
1. Fill out the form with valid data
2. Submit and check browser console for logs
3. Look for "Response status: 302" for success
4. Check Formspree dashboard for received submissions

## Troubleshooting
If forms aren't working:
1. Check browser console for errors
2. Verify Formspree form IDs are correct
3. Ensure network connectivity
4. Check Formspree dashboard for form status
