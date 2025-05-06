<script>
    import { onMount } from 'svelte';
    
    let currentYear = new Date().getFullYear();
    let lastUpdated = "December 1, 2023";
    
    onMount(() => {
        // Scroll to specific section if hash is in URL
        if (window.location.hash) {
            const id = window.location.hash.substring(1);
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView();
            }
        }
    });
</script>

<svelte:head>
    <title>Terms of Service | OSVE STUDIOS</title>
    <meta name="description" content="Terms of Service and legal information for OSVE STUDIOS website, events, music, and merchandise.">
</svelte:head>

<div class="bg-black text-white min-h-screen">
    <div class="container mx-auto px-4 py-16 max-w-5xl">
        <h1 class="text-4xl md:text-5xl font-bold mb-6 neon-text text-center">Terms of Service</h1>
        <p class="text-gray-400 text-center mb-12">Last Updated: {lastUpdated}</p>
        
        <!-- Table of Contents -->
        <div class="bg-black/80 border border-[#00BFFF]/30 rounded-lg p-6 mb-10">
            <h2 class="text-xl font-bold mb-4">Table of Contents</h2>
            <ul class="space-y-2">
                <li><a href="#introduction" class="text-[#00BFFF] hover:underline">1. Introduction</a></li>
                <li><a href="#definitions" class="text-[#00BFFF] hover:underline">2. Definitions</a></li>
                <li><a href="#account" class="text-[#00BFFF] hover:underline">3. Account Registration and Requirements</a></li>
                <li><a href="#content" class="text-[#00BFFF] hover:underline">4. User Content and Conduct</a></li>
                <li><a href="#ip" class="text-[#00BFFF] hover:underline">5. Intellectual Property Rights</a></li>
                <li><a href="#payments" class="text-[#00BFFF] hover:underline">6. Payments, Subscriptions, and Refunds</a></li>
                <li><a href="#events" class="text-[#00BFFF] hover:underline">7. Events and Ticket Purchases</a></li>
                <li><a href="#nft" class="text-[#00BFFF] hover:underline">8. NFT Memberships and Digital Assets</a></li>
                <li><a href="#warranties" class="text-[#00BFFF] hover:underline">9. Disclaimers and Warranties</a></li>
                <li><a href="#liability" class="text-[#00BFFF] hover:underline">10. Limitation of Liability</a></li>
                <li><a href="#indemnification" class="text-[#00BFFF] hover:underline">11. Indemnification</a></li>
                <li><a href="#termination" class="text-[#00BFFF] hover:underline">12. Term and Termination</a></li>
                <li><a href="#governing-law" class="text-[#00BFFF] hover:underline">13. Governing Law</a></li>
                <li><a href="#changes" class="text-[#00BFFF] hover:underline">14. Changes to Terms</a></li>
                <li><a href="#contact" class="text-[#00BFFF] hover:underline">15. Contact Information</a></li>
            </ul>
        </div>
        
        <!-- Main Content -->
        <div class="space-y-12 legal-content">
            <section id="introduction">
                <h2 class="text-2xl font-bold mb-4 section-title">1. Introduction</h2>
                <div class="space-y-4">
                    <p>Welcome to OSVE STUDIOS website and platform. These Terms of Service ("Terms") govern your access to and use of osvestudios.com, including any content, functionality, events, and services offered on or through the site (the "Service").</p>
                    
                    <p>These Terms constitute a legally binding agreement between you and OSVE STUDIOS ("we," "us," or "our"). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, please do not access or use the Service.</p>
                    
                    <p>The Service is intended for users who are at least 18 years of age. By using the Service, you represent and warrant that you are at least 18 years old and have the legal capacity to enter into these Terms.</p>
                    
                    <p>When accessing and using the Service, you must comply with these Terms and all applicable laws and regulations in the Republic of Kenya and any other jurisdiction from which you access the Service.</p>
                </div>
            </section>
            
            <section id="definitions">
                <h2 class="text-2xl font-bold mb-4 section-title">2. Definitions</h2>
                <div class="space-y-4">
                    <p>Throughout these Terms, the following definitions apply:</p>
                    
                    <ul class="list-disc pl-6 space-y-2">
                        <li><strong>"Content"</strong> means any text, graphics, images, music, audio, video, information, or other materials that are displayed, performed, or distributed on or through the Service.</li>
                        <li><strong>"User"</strong> means any individual who accesses or uses the Service, including registered and unregistered visitors.</li>
                        <li><strong>"User Content"</strong> means all content that you submit, post, or display on the Service.</li>
                        <li><strong>"Subscription"</strong> means the paid service offered by OSVE STUDIOS that provides access to premium features, content, and benefits.</li>
                        <li><strong>"NFT"</strong> means a non-fungible token, which is a unique digital identifier recorded on a blockchain that certifies ownership of a specific digital asset.</li>
                        <li><strong>"User Account"</strong> means the account you create to access certain features of the Service.</li>
                        <li><strong>"Event"</strong> means any concert, performance, workshop, or other gathering organized or promoted by OSVE STUDIOS.</li>
                    </ul>
                </div>
            </section>
            
            <section id="account">
                <h2 class="text-2xl font-bold mb-4 section-title">3. Account Registration and Requirements</h2>
                <div class="space-y-4">
                    <p>To access certain features of the Service, you may be required to register for an account. When you register, you agree to provide accurate, current, and complete information about yourself as prompted by the registration form.</p>
                    
                    <p>You are responsible for safeguarding your account credentials and for all activities that occur under your account. You agree to immediately notify us of any unauthorized use of your account or any other breach of security.</p>
                    
                    <p>We reserve the right to suspend or terminate your account if any information provided during the registration process or thereafter proves to be inaccurate, not current, or incomplete.</p>
                    
                    <p>You may not create multiple accounts or transfer your account to another person. We reserve the right to reclaim usernames that violate the rights of others or are inactive for extended periods.</p>
                    
                    <p>By creating an account, you consent to receive communications from us regarding your account, the Service, promotions, and events. You may opt out of non-essential communications.</p>
                </div>
            </section>
            
            <section id="content">
                <h2 class="text-2xl font-bold mb-4 section-title">4. User Content and Conduct</h2>
                <div class="space-y-4">
                    <p>By posting, uploading, or otherwise submitting User Content on or through the Service, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, distribute, and display such User Content for the purpose of providing and promoting the Service.</p>
                    
                    <p>You represent and warrant that: (i) you own the User Content or have the right to use and grant us the rights and license as provided in these Terms, and (ii) the posting of your User Content does not violate the privacy rights, publicity rights, copyrights, contract rights, intellectual property rights, or any other rights of any person or entity.</p>
                    
                    <p>You agree not to post, upload, or otherwise share User Content that:</p>
                    
                    <ul class="list-disc pl-6 space-y-2">
                        <li>Is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable</li>
                        <li>Incites, encourages, or threatens physical harm or violence against another person</li>
                        <li>Promotes discrimination, bigotry, racism, hatred, or harm against any individual or group</li>
                        <li>Violates intellectual property rights or any other proprietary rights of any party</li>
                        <li>Contains viruses, malware, or other malicious code</li>
                        <li>Impersonates any person or entity or falsely states or misrepresents your affiliation with a person or entity</li>
                        <li>Involves commercial activities such as contests, sweepstakes, or other sales promotions without our prior written consent</li>
                    </ul>
                    
                    <p>We reserve the right to remove any User Content that violates these Terms or that we find objectionable for any reason, without prior notice. We also reserve the right to terminate a user's access to the Service for posting such content or engaging in such activity, at our sole discretion.</p>
                </div>
            </section>
            
            <section id="ip">
                <h2 class="text-2xl font-bold mb-4 section-title">5. Intellectual Property Rights</h2>
                <div class="space-y-4">
                    <p>The Service and its original content, features, and functionality are owned by OSVE STUDIOS and are protected by copyright, trademark, and other intellectual property laws of Kenya and international conventions. You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Service, except as follows:</p>
                    
                    <ul class="list-disc pl-6 space-y-2">
                        <li>Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials</li>
                        <li>You may store files that are automatically cached by your web browser for display enhancement purposes</li>
                        <li>You may print or download one copy of a reasonable number of pages of the Service for your own personal, non-commercial use and not for further reproduction, publication, or distribution</li>
                        <li>If we provide social media features with certain content, you may take such actions as are enabled by such features</li>
                    </ul>
                    
                    <p>You must not:</p>
                    
                    <ul class="list-disc pl-6 space-y-2">
                        <li>Modify copies of any materials from the Service</li>
                        <li>Use any illustrations, photographs, video or audio sequences, or any graphics separately from the accompanying text</li>
                        <li>Delete or alter any copyright, trademark, or other proprietary rights notices from copies of materials from the Service</li>
                        <li>Access or use for any commercial purposes any part of the Service or any services or materials available through the Service</li>
                    </ul>
                    
                    <p>If you print, copy, modify, download, or otherwise use or provide any other person with access to any part of the Service in breach of the Terms, your right to use the Service will stop immediately and you must, at our option, return or destroy any copies of the materials you have made.</p>
                    
                    <p>OSVE STUDIOS name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of OSVE STUDIOS or its affiliates or licensors. You may not use such marks without the prior written permission of OSVE STUDIOS. All other names, logos, product and service names, designs, and slogans on the Service are the trademarks of their respective owners.</p>
                </div>
            </section>
            
            <section id="payments">
                <h2 class="text-2xl font-bold mb-4 section-title">6. Payments, Subscriptions, and Refunds</h2>
                <div class="space-y-4">
                    <p>The Service offers various subscription plans and may charge fees for certain features, content, products, or services. You agree to pay all fees and charges incurred in connection with your account.</p>
                    
                    <p>All payments are processed through third-party payment processors. By providing your payment information, you represent and warrant that you are authorized to use the designated payment method and authorize us to charge your payment method for the total amount of your purchase, including any applicable taxes and fees.</p>
                    
                    <p>Subscription plans automatically renew for successive periods equal to your initial subscription period unless you cancel before the renewal date. You can cancel your subscription at any time through your account settings or by contacting our customer support team.</p>
                    
                    <p>For security purposes, all payment information is encrypted and stored by our payment processors in accordance with industry standards. We do not store your full payment card details on our servers.</p>
                    
                    <p>All prices are in Kenyan Shillings (KES) unless otherwise specified and are inclusive of applicable value-added tax (VAT) and other government-imposed taxes and fees.</p>
                    
                    <p><strong>Refund Policy:</strong> All sales are final and non-refundable unless otherwise specified or required by applicable law. In exceptional circumstances, we may, at our sole discretion, offer a refund. Requests for refunds must be submitted within 7 days of purchase to our customer support team.</p>
                </div>
            </section>
            
            <section id="events">
                <h2 class="text-2xl font-bold mb-4 section-title">7. Events and Ticket Purchases</h2>
                <div class="space-y-4">
                    <p>OSVE STUDIOS organizes and promotes various events, including concerts, workshops, and other gatherings. By purchasing tickets to these events, you agree to the following terms:</p>
                    
                    <p><strong>Ticket Purchase:</strong> Tickets are sold subject to availability and are non-transferable unless explicitly stated otherwise. Tickets may be limited to a specified number per person or per credit card. We reserve the right to cancel tickets purchased in excess of these limits.</p>
                    
                    <p><strong>Event Cancellation and Rescheduling:</strong> In the event of cancellation, we will use reasonable efforts to notify you using the contact details provided during the booking process. If an event is canceled, you will be offered a refund of the ticket price (excluding booking fees). If an event is rescheduled, your tickets will be valid for the new date, or you may request a refund within 14 days of the announcement of the new date.</p>
                    
                    <p><strong>Entry and Conduct:</strong> Admission to an event is subject to the venue's terms and conditions. We reserve the right to refuse admission or to eject you from the event without refund if, in our reasonable opinion, you represent a security risk, nuisance, or annoyance to the staging of the event, or if you fail to comply with reasonable instructions from event staff.</p>
                    
                    <p><strong>Recording and Photography:</strong> By attending an event, you consent to being photographed, filmed, or recorded, and grant us the right to use such materials, which may include your likeness or voice, for promotional purposes related to OSVE STUDIOS.</p>
                    
                    <p><strong>Liability:</strong> We are not responsible for any loss, injury, or damage to any person or property at an event, unless caused by our negligence. You attend events at your own risk.</p>
                    
                    <p><strong>COVID-19 and Public Health:</strong> Attendance at events may be subject to compliance with health and safety requirements, including but not limited to vaccination requirements, health screenings, and mask mandates, as required by local authorities or venue policies.</p>
                </div>
            </section>
            
            <section id="nft">
                <h2 class="text-2xl font-bold mb-4 section-title">8. NFT Memberships and Digital Assets</h2>
                <div class="space-y-4">
                    <p>OSVE STUDIOS offers NFT (Non-Fungible Token) memberships and other digital assets. By purchasing, acquiring, or using NFTs, you agree to the following terms:</p>
                    
                    <p><strong>NFT Ownership:</strong> When you purchase an NFT, you own the NFT (the unique token) but not the underlying content or intellectual property rights to the content, which remain with OSVE STUDIOS or the original creator. Your purchase of an NFT grants you a limited, non-exclusive, non-transferable license to use, display, and resell the NFT.</p>
                    
                    <p><strong>Blockchain Transactions:</strong> NFT transactions occur on third-party blockchains that we do not control. You are responsible for understanding how blockchain transactions work, including gas fees, transaction delays, and the risks associated with blockchain technology.</p>
                    
                    <p><strong>Digital Wallet:</strong> To purchase, store, or transfer NFTs, you need a compatible digital wallet. You are solely responsible for the security of your digital wallet and private keys. We are not responsible for any loss of NFTs resulting from lost or compromised digital wallet credentials.</p>
                    
                    <p><strong>No Guaranteed Value:</strong> NFTs are speculative digital assets. We do not guarantee that any NFT will retain its original value or that you will be able to resell your NFT. Market value depends on consumer demand, which can fluctuate.</p>
                    
                    <p><strong>Benefits and Utilities:</strong> Certain NFTs may come with additional benefits or utilities, such as access to exclusive content, events, or merchandise. These benefits are subject to change at our discretion. We will make reasonable efforts to notify NFT holders of any significant changes.</p>
                    
                    <p><strong>Taxes:</strong> You are solely responsible for determining what, if any, taxes apply to your NFT transactions. We are not responsible for determining the taxes that apply to your transactions.</p>
                    
                    <p><strong>Risk of Regulatory Action:</strong> The regulatory landscape for blockchain technology and NFTs is evolving. Future regulations may impact the legality, usability, or transferability of NFTs. We are not liable for any regulatory actions affecting NFTs.</p>
                </div>
            </section>
            
            <section id="warranties">
                <h2 class="text-2xl font-bold mb-4 section-title">9. Disclaimers and Warranties</h2>
                <div class="space-y-4">
                    <p>THE SERVICE AND ALL CONTENT, FUNCTIONS, AND MATERIALS PROVIDED THROUGH THE SERVICE ARE PROVIDED "AS IS," WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED.</p>
                    
                    <p>WITHOUT LIMITING THE FOREGOING, WE EXPLICITLY DISCLAIM ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, QUIET ENJOYMENT, OR NON-INFRINGEMENT, AND ANY WARRANTIES ARISING OUT OF COURSE OF DEALING OR USAGE OF TRADE.</p>
                    
                    <p>WE MAKE NO WARRANTY THAT THE SERVICE WILL MEET YOUR REQUIREMENTS OR BE AVAILABLE ON AN UNINTERRUPTED, SECURE, OR ERROR-FREE BASIS. WE MAKE NO WARRANTY REGARDING THE QUALITY, ACCURACY, TIMELINESS, TRUTHFULNESS, COMPLETENESS, OR RELIABILITY OF ANY CONTENT AVAILABLE THROUGH THE SERVICE.</p>
                    
                    <p>NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED FROM US OR THROUGH THE SERVICE, WILL CREATE ANY WARRANTY NOT EXPRESSLY MADE HEREIN.</p>
                    
                    <p>SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES, SO THE ABOVE EXCLUSION MAY NOT APPLY TO YOU.</p>
                </div>
            </section>
            
            <section id="liability">
                <h2 class="text-2xl font-bold mb-4 section-title">10. Limitation of Liability</h2>
                <div class="space-y-4">
                    <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT WILL OSVE STUDIOS, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:</p>
                    
                    <ul class="list-disc pl-6 space-y-2">
                        <li>YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE</li>
                        <li>ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICE</li>
                        <li>ANY CONTENT OBTAINED FROM THE SERVICE</li>
                        <li>UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT</li>
                        <li>THE PURCHASE, SALE, OR TRANSFER OF ANY NFT OR DIGITAL ASSET</li>
                        <li>ATTENDANCE AT OR PARTICIPATION IN ANY EVENT</li>
                    </ul>
                    
                    <p>NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US FOR THE SERVICE DURING THE 12-MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING.</p>
                    
                    <p>SOME JURISDICTIONS DO NOT ALLOW THE LIMITATION OF LIABILITY FOR PERSONAL INJURY OR DEATH, OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES, SO THIS LIMITATION MAY NOT APPLY TO YOU.</p>
                </div>
            </section>
            
            <section id="indemnification">
                <h2 class="text-2xl font-bold mb-4 section-title">11. Indemnification</h2>
                <div class="space-y-4">
                    <p>You agree to defend, indemnify, and hold harmless OSVE STUDIOS, its parent company, affiliates, subsidiaries, officers, directors, employees, and agents, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees) arising from:</p>
                    
                    <ul class="list-disc pl-6 space-y-2">
                        <li>Your use of and access to the Service;</li>
                        <li>Your violation of any term of these Terms;</li>
                        <li>Your violation of any third-party right, including without limitation any copyright, property, or privacy right;</li>
                        <li>Any claim that your User Content caused damage to a third party.</li>
                    </ul>
                    
                    <p>This defense and indemnification obligation will survive these Terms and your use of the Service.</p>
                </div>
            </section>
            
            <section id="termination">
                <h2 class="text-2xl font-bold mb-4 section-title">12. Term and Termination</h2>
                <div class="space-y-4">
                    <p>These Terms will remain in full force and effect while you use the Service. We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
                    
                    <p>Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service or contact us to request account deletion.</p>
                    
                    <p>All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.</p>
                    
                    <p>Upon termination, we have no obligation to maintain or provide any of your data or User Content and may delete all such data and User Content in our systems or otherwise in our possession or under our control.</p>
                </div>
            </section>
            
            <section id="governing-law">
                <h2 class="text-2xl font-bold mb-4 section-title">13. Governing Law</h2>
                <div class="space-y-4">
                    <p>These Terms and your use of the Service shall be governed by and construed in accordance with the laws of the Republic of Kenya, without regard to its conflict of law provisions.</p>
                    
                    <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.</p>
                    
                    <p>Any disputes arising out of or relating to these Terms or the Service shall be resolved through arbitration in accordance with the Arbitration Rules of the Nairobi Centre for International Arbitration (NCIA). The arbitration shall take place in Nairobi, Kenya, and the language of the arbitration shall be English.</p>
                    
                    <p>Notwithstanding the foregoing, we reserve the right to seek injunctive or other equitable relief in any court of competent jurisdiction to protect our intellectual property rights.</p>
                </div>
            </section>
            
            <section id="changes">
                <h2 class="text-2xl font-bold mb-4 section-title">14. Changes to Terms</h2>
                <div class="space-y-4">
                    <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on the Service, updating the "Last Updated" date at the top of these Terms, and/or sending you an email or other notification.</p>
                    
                    <p>Your continued use of the Service after any such changes constitutes your acceptance of the new Terms. If you do not agree to the new Terms, you must stop using the Service.</p>
                    
                    <p>It is your responsibility to review these Terms periodically for changes. We encourage you to review the Terms whenever you access the Service.</p>
                </div>
            </section>
            
            <section id="contact">
                <h2 class="text-2xl font-bold mb-4 section-title">15. Contact Information</h2>
                <div class="space-y-4">
                    <p>If you have any questions about these Terms, please contact us using the button below:</p>
                    
                    <div class="flex justify-center mt-6">
                        <a href="/contact" class="px-8 py-3 bg-[#00BFFF] hover:bg-[#0099FF] text-black font-bold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                            <i class="fas fa-envelope mr-2"></i>
                            Contact Us
                        </a>
                    </div>
                </div>
            </section>
        </div>
        
        <!-- Footer -->
        <div class="mt-16 text-center text-gray-400 text-sm">
            <p>&copy; {currentYear} OSVE STUDIOS. All rights reserved.</p>
        </div>
    </div>
</div>

<style>
    .neon-text {
        text-shadow: 0 0 15px #00BFFF, 0 0 25px #00BFFF, 0 0 40px #00BFFF;
    }
    
    .section-title {
        color: #00BFFF;
        position: relative;
        display: inline-block;
    }
    
    .section-title::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, #00BFFF, transparent);
    }
    
    .legal-content p, .legal-content li {
        color: #d1d5db;
        line-height: 1.7;
    }
    
    .legal-content section {
        padding: 1.5rem;
        background-color: rgba(0, 0, 0, 0.5);
        border: 1px solid rgba(0, 191, 255, 0.1);
        border-radius: 0.5rem;
    }
    
    .legal-content section:hover {
        border-color: rgba(0, 191, 255, 0.3);
        box-shadow: 0 0 15px rgba(0, 191, 255, 0.1);
    }
</style> 