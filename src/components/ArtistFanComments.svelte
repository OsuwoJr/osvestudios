<script lang="ts">
    import { onMount } from "svelte";
    import { browser } from '$app/environment';
    
    // Define comment interface
    interface Comment {
        name: string;
        text: string;
        timestamp?: string;
    }
    
    // Pre-existing comments (these will always show)
    let initialComments: Comment[] = [
        { name: "Alex", text: "Love the new track! 🔥🔥", timestamp: "2 days ago" },
        { name: "Jay", text: "TheKenyanTroublers always delivering top-tier vibes!", timestamp: "1 day ago" },
        { name: "Sara", text: "Can't wait for the next release! 💯", timestamp: "5 hours ago" },
    ];
    
    // Session comments (added during current browsing session)
    let sessionComments: Comment[] = [];
    
    // Combined comments from both sources
    $: comments = [...initialComments, ...sessionComments];

    // Form state
    let name = "";
    let email = ""; // Added email field
    let text = "";
    let commentList: HTMLDivElement;
    
    // Submission state
    let isSubmitting = false;
    let submissionStatus = "";
    
    // Formspree endpoint - same as other forms
    const formspreeEndpoint = "https://formspree.io/f/xyzweeav";

    async function submitComment(e: SubmitEvent) {
        e.preventDefault();
        
        if (!browser) return; // Skip on server
        
        // Form validation
        if (!name.trim() || !text.trim() || !email.trim()) {
            submissionStatus = "Please fill all required fields";
            return;
        }
        
        // Basic email validation
        if (!email.includes('@') || !email.includes('.')) {
            submissionStatus = "Please enter a valid email address";
            return;
        }
        
        isSubmitting = true;
        submissionStatus = "";
        
        try {
            // Create form data
            const formData = new FormData();
            formData.append("name", name);
            formData.append("email", email);
            formData.append("comment", text);
            formData.append("formType", "Fan Comment");
            
            // Send to Formspree
            const response = await fetch(formspreeEndpoint, {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            });
            
            if (response.ok) {
                // Add to local session comments immediately
                addComment();
                
                // Success message
                submissionStatus = "Comment posted successfully!";
                
                // Clear success message after 3 seconds
                setTimeout(() => {
                    submissionStatus = "";
                }, 3000);
            } else {
                const errorData = await response.json().catch(e => ({ error: "Could not parse error response" }));
                console.error("Comment submission error:", response.status, response.statusText);
                console.error("Error details:", errorData);
                submissionStatus = "Something went wrong. Please try again.";
            }
        } catch (error) {
            console.error("Comment submission error:", error);
            submissionStatus = "Something went wrong. Please try again.";
        } finally {
            isSubmitting = false;
        }
    }

    // Add comment locally (called after successful form submission)
    function addComment() {
        if (name.trim() && text.trim()) {
            // Format current date for display
            const now = new Date();
            const timestamp = "Just now";
            
            // Add to session comments with proper type
            const newComment: Comment = { 
                name, 
                text, 
                timestamp 
            };
            sessionComments = [...sessionComments, newComment];
            
            // Reset form
            name = "";
            email = "";
            text = "";

            // Scroll to latest comment smoothly
            setTimeout(() => {
                if (commentList) {
                    commentList.scrollTop = commentList.scrollHeight;
                }
            }, 100);
        }
    }
    
    // Load stored session comments from localStorage (if any)
    onMount(() => {
        if (browser) {
            try {
                const stored = localStorage.getItem('sessionComments');
                if (stored) {
                    const parsedComments = JSON.parse(stored);
                    if (Array.isArray(parsedComments)) {
                        sessionComments = parsedComments as Comment[];
                    }
                }
            } catch (e) {
                console.error('Error loading comments from localStorage:', e);
            }
            
            // Update localStorage when session comments change
            return () => {
                try {
                    localStorage.setItem('sessionComments', JSON.stringify(sessionComments));
                } catch (e) {
                    console.error('Error saving comments to localStorage:', e);
                }
            };
        }
    });
</script>

<section class="fan-comments">
    <!-- Floating Messaging Icons -->
    <div class="floating-icons">
        {#each Array(30) as _, i}
            <i class="{['fas fa-comment-dots', 'fas fa-phone-alt', 'fas fa-pen-fancy'][Math.floor(Math.random() * 3)]} floating" 
               style="
                left: {Math.random() * 100}vw; 
                top: {Math.random() * 100}vh; 
                animation-duration: {Math.random() * 8 + 5}s;
                font-size: {Math.random() * 25 + 15}px;">
            </i>
        {/each}
    </div>

    <h2 class="title">🎤 Fan Comments</h2>
    
    <div class="comments-list" bind:this={commentList}>
        {#if comments.length === 0}
            <div class="empty-comments">
                <i class="fas fa-comment-slash"></i>
                <p>No comments yet. Be the first to comment!</p>
            </div>
        {:else}
            {#each comments as comment}
                <div class="comment fade-in">
                    <div class="comment-header">
                        <strong>{comment.name}</strong>
                        {#if comment.timestamp}
                            <span class="timestamp">{comment.timestamp}</span>
                        {/if}
                    </div>
                    <p>{comment.text}</p>
                </div>
            {/each}
        {/if}
    </div>

    <form class="comment-form" on:submit={submitComment} action={formspreeEndpoint} method="POST">
        <!-- Hidden field for form type -->
        <input type="hidden" name="formType" value="Fan Comment" />
        
        <!-- Honeypot field to prevent spam -->
        <div class="honeypot-field">
            <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" />
        </div>
        
        <div class="input-group">
            <input type="text" name="name" placeholder="Your Name" bind:value={name} required />
        </div>
        
        <div class="input-group">
            <input type="email" name="email" placeholder="Your Email" bind:value={email} required />
        </div>
        
        <div class="input-group">
            <textarea name="comment" placeholder="Drop a comment..." bind:value={text} required></textarea>
        </div>
        
        {#if submissionStatus}
            <div class="status-message {submissionStatus.includes('successfully') ? 'success' : 'error'}">
                {submissionStatus}
            </div>
        {/if}
        
        <button type="submit" disabled={isSubmitting}>
            {#if isSubmitting}
                <i class="fas fa-circle-notch fa-spin mr-2"></i> Posting...
            {:else}
                <i class="fas fa-paper-plane mr-2"></i> Post Comment
            {/if}
        </button>
    </form>
</section>

<style>
.title {
    font-size: 1.5rem;
    font-weight: 900;
    text-transform: uppercase;
    background: linear-gradient(90deg, #81C14B, #FFD700);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

/* Main Container */
.fan-comments {
    position: relative;
    background: rgba(0, 0, 0, 0.9);
    padding: 40px;
    text-align: center;
    border-radius: 15px;
    box-shadow: 0px 0px 15px rgba(129, 193, 75, 0.6);
    color: white;
    max-width: 600px;
    margin: auto;
    margin-bottom: 40px;
    overflow: hidden;
}

/* Floating Messaging Icons */
.floating-icons {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    pointer-events: none;
}

.floating {
    position: absolute;
    color: rgba(129, 193, 75, 0.5);
    animation: float 8s infinite ease-in-out alternate;
    text-shadow: 0 0 10px rgba(129, 193, 75, 0.8);
}

@keyframes float {
    0% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
    50% { transform: translateY(-20px) rotate(10deg); opacity: 1; }
    100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
}

/* Comment List */
.comments-list {
    max-height: 300px;
    overflow-y: auto;
    margin-bottom: 20px;
    padding: 15px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    box-shadow: inset 0px 0px 10px rgba(129, 193, 75, 0.5);
    scrollbar-width: thin;
    position: relative;
    z-index: 2;
    text-align: left;
}

/* Empty State */
.empty-comments {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    color: rgba(255, 255, 255, 0.6);
}

.empty-comments i {
    font-size: 2rem;
    margin-bottom: 10px;
}

/* Individual Comment */
.comment {
    background: rgba(255, 255, 255, 0.1);
    padding: 12px;
    border-radius: 8px;
    margin-bottom: 10px;
    transition: 0.3s;
    position: relative;
    z-index: 2;
}

.comment-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
}

.timestamp {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.5);
}

/* Smooth fade-in effect */
.fade-in {
    animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

/* Input Groups */
.input-group {
    margin-bottom: 10px;
}

/* Input Fields */
.comment-form input,
.comment-form textarea {
    width: 100%;
    padding: 12px;
    border: 2px solid transparent;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    font-size: 1rem;
    transition: border 0.3s ease-in-out;
    position: relative;
    z-index: 2;
}

/* Glow effect on focus */
.comment-form input:focus,
.comment-form textarea:focus {
    border: 2px solid #81C14B;
    outline: none;
}

/* Submit Button */
.comment-form button {
    background: #81C14B;
    color: black;
    font-size: 1.1rem;
    font-weight: bold;
    padding: 12px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    z-index: 2;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
}

.comment-form button:hover:not(:disabled) {
    background: #6A9A52;
    transform: scale(1.02);
}

.comment-form button:disabled {
    background: #4e7a31;
    cursor: not-allowed;
    opacity: 0.8;
}

/* Status Message */
.status-message {
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 15px;
    font-size: 0.9rem;
    text-align: center;
}

.success {
    background: rgba(129, 193, 75, 0.2);
    color: #81C14B;
    border: 1px solid rgba(129, 193, 75, 0.5);
}

.error {
    background: rgba(220, 53, 69, 0.2);
    color: #dc3545;
    border: 1px solid rgba(220, 53, 69, 0.5);
}

/* Honeypot field to prevent spam */
.honeypot-field {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    height: 0;
    width: 0;
    z-index: -1;
    overflow: hidden;
}

/* Custom scrollbar for WebKit browsers */
.comments-list::-webkit-scrollbar {
    width: 6px;
}

.comments-list::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
}

.comments-list::-webkit-scrollbar-thumb {
    background: #81C14B;
    border-radius: 10px;
}

/* Responsive adjustments */
@media (max-width: 500px) {
    .fan-comments {
        padding: 30px 20px;
    }
    
    .title {
        font-size: 1.3rem;
    }
    
    .comments-list {
        max-height: 250px;
    }
}
</style>
