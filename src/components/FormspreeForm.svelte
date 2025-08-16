<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    
    const dispatch = createEventDispatcher();
    
    export let formId: string = 'mnnzbyzb'; // Default Formspree form ID
    export let fields: Record<string, string> = {};
    export let submitButtonText: string = 'Submit';
    export let loadingText: string = 'Sending...';
    export let successMessage: string = 'Form submitted successfully!';
    export let errorMessage: string = 'Something went wrong. Please try again.';
    
    let isSubmitting = false;
    let submitStatus = '';
    
    async function handleSubmit() {
        isSubmitting = true;
        submitStatus = '';
        
        try {
            // Create FormData object for proper Formspree submission
            const formDataToSend = new FormData();
            
            // Add all fields to FormData
            Object.entries(fields).forEach(([key, value]) => {
                if (value) {
                    formDataToSend.append(key, value);
                }
            });
            
            console.log('Submitting form data to Formspree...');
            
            // Submit to Formspree
            const response = await fetch(`https://formspree.io/f/${formId}`, {
                method: 'POST',
                body: formDataToSend,
                redirect: 'manual'
            });
            
            console.log('Response status:', response.status);
            
            // Formspree returns 302 redirect on success
            if (response.status === 302) {
                console.log('Form submitted successfully!');
                submitStatus = 'success';
                dispatch('success', { fields });
            } else {
                console.error('Form submission failed:', response.status, response.statusText);
                submitStatus = 'error';
                dispatch('error', { status: response.status, statusText: response.statusText });
            }
        } catch (error) {
            console.error('Form submission error:', error);
            submitStatus = 'error';
            dispatch('error', { error });
        } finally {
            isSubmitting = false;
        }
    }
</script>

<form on:submit|preventDefault={handleSubmit} class="space-y-4">
    <slot />
    
    <!-- Submit Button -->
    <button
        type="submit"
        disabled={isSubmitting}
        class="w-full bg-[#00BFFF] hover:bg-[#0099CC] disabled:bg-gray-400 text-white font-semibold py-3 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#00BFFF] focus:ring-offset-2"
    >
        {#if isSubmitting}
            <i class="fas fa-spinner fa-spin mr-2"></i>{loadingText}
        {:else}
            {submitButtonText}
        {/if}
    </button>
    
    <!-- Status Messages -->
    {#if submitStatus === 'success'}
        <div class="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-md">
            <i class="fas fa-check-circle mr-2"></i>
            {successMessage}
        </div>
    {/if}
    
    {#if submitStatus === 'error'}
        <div class="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-md">
            <i class="fas fa-exclamation-circle mr-2"></i>
            {errorMessage}
            <br><small class="text-red-600">If the issue persists, please contact us directly at info@osvestudios.com</small>
        </div>
    {/if}
</form>
