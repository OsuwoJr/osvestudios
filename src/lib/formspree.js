/**
 * Formspree submission utility with multiple fallback methods
 */

export async function submitToFormspree(formId, formData) {
    console.log('Attempting Formspree submission with form ID:', formId);
    
    // Method 1: Standard fetch with JSON headers
    try {
        const response = await fetch(`https://formspree.io/f/${formId}`, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        console.log('Method 1 - Response status:', response.status);
        console.log('Method 1 - Response ok:', response.ok);
        
        if (response.ok || response.status === 302) {
            console.log('Method 1 - Success!');
            return { success: true, method: 'fetch-json' };
        }
    } catch (error) {
        console.log('Method 1 failed:', error);
    }
    
    // Method 2: Standard fetch without special headers
    try {
        const response = await fetch(`https://formspree.io/f/${formId}`, {
            method: 'POST',
            body: formData
        });
        
        console.log('Method 2 - Response status:', response.status);
        console.log('Method 2 - Response ok:', response.ok);
        
        if (response.ok || response.status === 302) {
            console.log('Method 2 - Success!');
            return { success: true, method: 'fetch-standard' };
        }
    } catch (error) {
        console.log('Method 2 failed:', error);
    }
    
    // Method 3: XMLHttpRequest (fallback for older browsers)
    try {
        return new Promise((resolve) => {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', `https://formspree.io/f/${formId}`, true);
            xhr.setRequestHeader('Accept', 'application/json');
            
            xhr.onload = function() {
                console.log('Method 3 - Response status:', xhr.status);
                if (xhr.status === 200 || xhr.status === 302) {
                    console.log('Method 3 - Success!');
                    resolve({ success: true, method: 'xhr' });
                } else {
                    console.log('Method 3 failed with status:', xhr.status);
                    resolve({ success: false, method: 'xhr', status: xhr.status });
                }
            };
            
            xhr.onerror = function() {
                console.log('Method 3 - Network error');
                resolve({ success: false, method: 'xhr', error: 'network' });
            };
            
            xhr.send(formData);
        });
    } catch (error) {
        console.log('Method 3 failed:', error);
    }
    
    // All methods failed
    console.log('All Formspree submission methods failed');
    return { success: false, method: 'all-failed' };
}

/**
 * Alternative method using form submission (most reliable)
 */
export function submitFormViaForm(formId, formData) {
    return new Promise((resolve) => {
        // Create a temporary form
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = `https://formspree.io/f/${formId}`;
        form.style.display = 'none';
        
        // Add form data as hidden inputs
        for (const [key, value] of formData.entries()) {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = key;
            input.value = value;
            form.appendChild(input);
        }
        
        // Add form to page, submit, and remove
        document.body.appendChild(form);
        
        // Submit the form
        form.submit();
        
        // Remove the form after a short delay
        setTimeout(() => {
            document.body.removeChild(form);
            resolve({ success: true, method: 'form-submission' });
        }, 100);
    });
}
