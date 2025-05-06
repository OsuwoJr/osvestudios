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
    <title>Privacy Policy | OSVE STUDIOS</title>
    <meta name="description" content="Privacy Policy for OSVE STUDIOS website - information on how we collect, use, and protect your personal data.">
</svelte:head>

<div class="bg-black text-white min-h-screen">
    <div class="container mx-auto px-4 py-16 max-w-5xl">
        <h1 class="text-4xl md:text-5xl font-bold mb-6 neon-text text-center">Privacy Policy</h1>
        <p class="text-gray-400 text-center mb-12">Last Updated: {lastUpdated}</p>
        
        <!-- Table of Contents -->
        <div class="bg-black/80 border border-[#00BFFF]/30 rounded-lg p-6 mb-10">
            <h2 class="text-xl font-bold mb-4">Table of Contents</h2>
            <ul class="space-y-2">
                <li><a href="#introduction" class="text-[#00BFFF] hover:underline">1. Introduction</a></li>
                <li><a href="#info-collected" class="text-[#00BFFF] hover:underline">2. Information We Collect</a></li>
                <li><a href="#use-info" class="text-[#00BFFF] hover:underline">3. How We Use Your Information</a></li>
                <li><a href="#sharing" class="text-[#00BFFF] hover:underline">4. Information Sharing and Disclosure</a></li>
                <li><a href="#cookies" class="text-[#00BFFF] hover:underline">5. Cookies and Tracking Technologies</a></li>
                <li><a href="#data-security" class="text-[#00BFFF] hover:underline">6. Data Security</a></li>
                <li><a href="#data-retention" class="text-[#00BFFF] hover:underline">7. Data Retention</a></li>
                <li><a href="#children" class="text-[#00BFFF] hover:underline">8. Children's Privacy</a></li>
                <li><a href="#international" class="text-[#00BFFF] hover:underline">9. International Data Transfers</a></li>
                <li><a href="#your-rights" class="text-[#00BFFF] hover:underline">10. Your Rights and Choices</a></li>
                <li><a href="#changes" class="text-[#00BFFF] hover:underline">11. Changes to This Privacy Policy</a></li>
                <li><a href="#contact" class="text-[#00BFFF] hover:underline">12. Contact Us</a></li>
            </ul>
        </div>
        
        <!-- Main Content -->
        <div class="space-y-12 legal-content">
            <section id="introduction">
                <h2 class="text-2xl font-bold mb-4 section-title">1. Introduction</h2>
                <div class="space-y-4">
                    <p>OSVE STUDIOS ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website osvestudios.com, use our mobile application, purchase our products or services, attend our events, or otherwise interact with us (collectively, the "Services").</p>
                    
                    <p>We value your trust and are dedicated to handling your personal information with care and in accordance with applicable data protection laws, including the Data Protection Act of Kenya, 2019.</p>
                    
                    <p>Please read this Privacy Policy carefully. By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree with our policies and practices, please do not use our Services.</p>
                </div>
            </section>
            
            <section id="info-collected">
                <h2 class="text-2xl font-bold mb-4 section-title">2. Information We Collect</h2>
                <div class="space-y-4">
                    <p>We collect several types of information from and about users of our Services, including:</p>
                    
                    <h3 class="text-xl font-bold mt-6 mb-2">2.1 Personal Information</h3>
                    <p>Personal information refers to data that can be used to identify you as an individual. We may collect the following personal information:</p>
                    <ul class="list-disc pl-6 space-y-2">
                        <li><strong>Contact Information:</strong> Name, email address, postal address, phone number.</li>
                        <li><strong>Account Information:</strong> Username, password, account preferences, profile picture.</li>
                        <li><strong>Payment Information:</strong> Credit card details, billing address, transaction history. (Note: Full payment card details are processed by our payment service providers and not stored directly on our servers.)</li>
                        <li><strong>Identity Verification Information:</strong> Date of birth, ID numbers, or other information required to verify your identity for certain services or events.</li>
                        <li><strong>Communication Information:</strong> Records of your communications with us, including support inquiries and feedback.</li>
                        <li><strong>User-Generated Content:</strong> Photos, videos, comments, and other content you submit to our platform.</li>
                    </ul>
                    
                    <h3 class="text-xl font-bold mt-6 mb-2">2.2 Usage Information</h3>
                    <p>We automatically collect information about your interactions with our Services and the devices you use to access them, including:</p>
                    <ul class="list-disc pl-6 space-y-2">
                        <li><strong>Device Information:</strong> IP address, device type, operating system, browser type, mobile network information, device identifiers.</li>
                        <li><strong>Usage Data:</strong> Pages visited, time spent on pages, links clicked, features used, search queries, referring websites, and other actions taken within our Services.</li>
                        <li><strong>Location Information:</strong> General location based on IP address or more precise location if you grant permission for our Services to access your device's location services.</li>
                        <li><strong>Log Data:</strong> Error reports, performance data, and diagnostic information.</li>
                    </ul>
                    
                    <h3 class="text-xl font-bold mt-6 mb-2">2.3 Information from Third Parties</h3>
                    <p>We may receive information about you from third parties, including:</p>
                    <ul class="list-disc pl-6 space-y-2">
                        <li><strong>Social Media Platforms:</strong> If you connect your social media accounts to our Services or interact with us on social media.</li>
                        <li><strong>Business Partners:</strong> Event co-sponsors, artists, venues, and other partners may share information with us for marketing, operational, or other purposes related to our business relationship.</li>
                        <li><strong>Payment Processors:</strong> When you make a purchase, our payment processors provide us with transaction information.</li>
                        <li><strong>Public Sources:</strong> Publicly available information, such as social media profiles or public records.</li>
                    </ul>
                </div>
            </section>
            
            <section id="use-info">
                <h2 class="text-2xl font-bold mb-4 section-title">3. How We Use Your Information</h2>
                <div class="space-y-4">
                    <p>We use the information we collect for various purposes, including:</p>
                    
                    <h3 class="text-xl font-bold mt-6 mb-2">3.1 Providing and Improving Our Services</h3>
                    <ul class="list-disc pl-6 space-y-2">
                        <li>To create and manage your account</li>
                        <li>To process transactions and fulfill orders</li>
                        <li>To provide customer support and respond to inquiries</li>
                        <li>To maintain and improve our Services</li>
                        <li>To develop new products, services, and features</li>
                        <li>To verify your identity and prevent fraud</li>
                        <li>To personalize your experience with our Services</li>
                    </ul>
                    
                    <h3 class="text-xl font-bold mt-6 mb-2">3.2 Communications</h3>
                    <ul class="list-disc pl-6 space-y-2">
                        <li>To send administrative messages, such as confirmation emails, updates about changes to our Services, and security alerts</li>
                        <li>To send marketing communications, including newsletters, promotions, and information about events, if you have opted in to receive them</li>
                        <li>To respond to your comments, questions, and requests</li>
                        <li>To process and deliver contest entries and rewards</li>
                    </ul>
                    
                    <h3 class="text-xl font-bold mt-6 mb-2">3.3 Analytics and Research</h3>
                    <ul class="list-disc pl-6 space-y-2">
                        <li>To understand how users access and use our Services</li>
                        <li>To analyze trends, usage, and activities</li>
                        <li>To measure the effectiveness of marketing campaigns</li>
                        <li>To conduct research and analysis to improve our Services</li>
                    </ul>
                    
                    <h3 class="text-xl font-bold mt-6 mb-2">3.4 Legal and Safety Purposes</h3>
                    <ul class="list-disc pl-6 space-y-2">
                        <li>To comply with legal obligations</li>
                        <li>To enforce our terms, conditions, and policies</li>
                        <li>To protect our rights, privacy, safety, or property, and/or that of our affiliates, you, or others</li>
                        <li>To detect, prevent, or address fraud, security, or technical issues</li>
                    </ul>
                </div>
            </section>
            
            <section id="sharing">
                <h2 class="text-2xl font-bold mb-4 section-title">4. Information Sharing and Disclosure</h2>
                <div class="space-y-4">
                    <p>We may share your information in the following circumstances:</p>
                    
                    <h3 class="text-xl font-bold mt-6 mb-2">4.1 Service Providers</h3>
                    <p>We share information with third-party service providers who perform services on our behalf, such as:</p>
                    <ul class="list-disc pl-6 space-y-2">
                        <li>Payment processors</li>
                        <li>Cloud storage providers</li>
                        <li>Customer support services</li>
                        <li>Email and communication service providers</li>
                        <li>Analytics providers</li>
                        <li>Marketing and advertising partners</li>
                        <li>Event management and ticketing platforms</li>
                    </ul>
                    <p>These service providers are contractually bound to use personal information only as necessary to provide services to us and must maintain appropriate security measures.</p>
                    
                    <h3 class="text-xl font-bold mt-6 mb-2">4.2 Business Partners</h3>
                    <p>We may share information with our business partners, such as event co-sponsors, venues, and artists, to facilitate joint marketing activities, promotions, or services we offer together.</p>
                    
                    <h3 class="text-xl font-bold mt-6 mb-2">4.3 Legal Requirements</h3>
                    <p>We may disclose information if required to do so by law or in response to valid requests by public authorities (e.g., court orders, government requests).</p>
                    
                    <h3 class="text-xl font-bold mt-6 mb-2">4.4 Business Transfers</h3>
                    <p>If we are involved in a merger, acquisition, financing, or sale of business assets, your information may be transferred as part of that transaction. We will notify you via email and/or a prominent notice on our Services of any change in ownership or uses of your personal information.</p>
                    
                    <h3 class="text-xl font-bold mt-6 mb-2">4.5 With Your Consent</h3>
                    <p>We may share your information with third parties when you consent to such sharing.</p>
                    
                    <h3 class="text-xl font-bold mt-6 mb-2">4.6 Aggregated or De-identified Data</h3>
                    <p>We may share aggregated or de-identified information, which cannot reasonably be used to identify you, for various purposes, including marketing, analytics, and improving our Services.</p>
                </div>
            </section>
            
            <section id="cookies">
                <h2 class="text-2xl font-bold mb-4 section-title">5. Cookies and Tracking Technologies</h2>
                <div class="space-y-4">
                    <p>We use cookies, web beacons, pixels, and similar tracking technologies to collect information about your browsing activities and to distinguish you from other users of our Services.</p>
                    
                    <h3 class="text-xl font-bold mt-6 mb-2">5.1 Types of Cookies We Use</h3>
                    <ul class="list-disc pl-6 space-y-2">
                        <li><strong>Essential Cookies:</strong> Necessary for the operation of our Services, such as those used for logging in or processing payments.</li>
                        <li><strong>Analytical/Performance Cookies:</strong> Allow us to recognize and count the number of visitors and see how visitors move around our Services.</li>
                        <li><strong>Functionality Cookies:</strong> Used to recognize you when you return to our Services, enabling us to personalize content and remember your preferences.</li>
                        <li><strong>Targeting Cookies:</strong> Record your visit to our Services, the pages you have visited, and the links you have followed, which may be used to deliver advertisements more relevant to your interests.</li>
                    </ul>
                    
                    <h3 class="text-xl font-bold mt-6 mb-2">5.2 Your Cookie Choices</h3>
                    <p>Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience and/or lose the ability to access certain features of our Services.</p>
                    
                    <h3 class="text-xl font-bold mt-6 mb-2">5.3 Third-Party Analytics</h3>
                    <p>We use third-party analytics services like Google Analytics to help analyze how users use our Services. These tools use cookies to collect information such as how often users visit our site, what pages they visit, and what other sites they used prior to coming to our site. We use the information to compile reports and to help us improve our Services.</p>
                </div>
            </section>
            
            <section id="data-security">
                <h2 class="text-2xl font-bold mb-4 section-title">6. Data Security</h2>
                <div class="space-y-4">
                    <p>We implement reasonable administrative, technical, and physical safeguards designed to protect the personal information we collect and store. However, no security system is impenetrable, and we cannot guarantee the security of our systems or your information.</p>
                    
                    <p>Our security measures include:</p>
                    <ul class="list-disc pl-6 space-y-2">
                        <li>Encryption of sensitive data</li>
                        <li>Regular security assessments</li>
                        <li>Access controls for our systems</li>
                        <li>Secure network infrastructure</li>
                        <li>Employee training on data protection</li>
                    </ul>
                    
                    <p>In the event of a data breach that compromises your personal information, we will notify you in accordance with applicable laws.</p>
                </div>
            </section>
            
            <section id="data-retention">
                <h2 class="text-2xl font-bold mb-4 section-title">7. Data Retention</h2>
                <div class="space-y-4">
                    <p>We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. We determine the appropriate retention period based on:</p>
                    
                    <ul class="list-disc pl-6 space-y-2">
                        <li>The amount, nature, and sensitivity of the personal information</li>
                        <li>The potential risk of harm from unauthorized use or disclosure</li>
                        <li>The purposes for which we process the information and whether we can achieve those purposes through other means</li>
                        <li>The applicable legal, regulatory, or contractual requirements</li>
                    </ul>
                    
                    <p>When we no longer need your personal information, we will securely delete or anonymize it. If this is not possible, we will securely store your personal information and isolate it from any further processing until deletion is possible.</p>
                </div>
            </section>
            
            <section id="children">
                <h2 class="text-2xl font-bold mb-4 section-title">8. Children's Privacy</h2>
                <div class="space-y-4">
                    <p>Our Services are not directed to children under the age of 18. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us at privacy@osvestudios.com. If we become aware that we have collected personal information from children without verification of parental consent, we will take steps to remove that information from our servers.</p>
                </div>
            </section>
            
            <section id="international">
                <h2 class="text-2xl font-bold mb-4 section-title">9. International Data Transfers</h2>
                <div class="space-y-4">
                    <p>We are based in Kenya, but we may transfer, store, and process your information in countries other than your own. Whenever we transfer your personal information outside of Kenya, we ensure a similar degree of protection is afforded to it by ensuring at least one of the following safeguards is implemented:</p>
                    
                    <ul class="list-disc pl-6 space-y-2">
                        <li>We will only transfer your personal information to countries that have been deemed to provide an adequate level of protection for personal information.</li>
                        <li>Where we use certain service providers, we may use specific contracts which give personal information the same protection it has in Kenya.</li>
                        <li>We may use service providers based in the United States or other countries that participate in privacy frameworks that require them to provide similar protection to personal information shared from Kenya.</li>
                    </ul>
                    
                    <p>By using our Services, you consent to the international transfer of your information in accordance with this Privacy Policy.</p>
                </div>
            </section>
            
            <section id="your-rights">
                <h2 class="text-2xl font-bold mb-4 section-title">10. Your Rights and Choices</h2>
                <div class="space-y-4">
                    <p>Depending on your location and applicable laws, you may have certain rights regarding your personal information, including:</p>
                    
                    <ul class="list-disc pl-6 space-y-2">
                        <li><strong>Access:</strong> You have the right to request a copy of the personal information we hold about you.</li>
                        <li><strong>Rectification:</strong> You can request that we correct inaccurate or incomplete information about you.</li>
                        <li><strong>Deletion:</strong> You can request that we delete your personal information in certain circumstances.</li>
                        <li><strong>Restriction:</strong> You can request that we restrict the processing of your information in certain circumstances.</li>
                        <li><strong>Data Portability:</strong> You may have the right to receive a copy of your personal information in a structured, commonly used, and machine-readable format.</li>
                        <li><strong>Objection:</strong> You have the right to object to our processing of your personal information in certain circumstances.</li>
                        <li><strong>Withdrawal of Consent:</strong> If we process your information based on your consent, you have the right to withdraw that consent at any time.</li>
                    </ul>
                    
                    <p>To exercise any of these rights, please contact us using the contact details provided below. We may need to verify your identity before fulfilling your request.</p>
                    
                    <h3 class="text-xl font-bold mt-6 mb-2">10.1 Marketing Communications</h3>
                    <p>You can opt out of receiving marketing communications from us by clicking the "unsubscribe" link in our emails, updating your communication preferences in your account settings, or contacting us directly. Please note that you will continue to receive service-related communications that are necessary for the administration of your account.</p>
                </div>
            </section>
            
            <section id="changes">
                <h2 class="text-2xl font-bold mb-4 section-title">11. Changes to This Privacy Policy</h2>
                <div class="space-y-4">
                    <p>We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date at the top of this Privacy Policy. We encourage you to review this Privacy Policy frequently to be informed of how we are protecting your information.</p>
                    
                    <p>If we make material changes to this Privacy Policy, we will notify you either through the email address you have provided to us, or by placing a prominent notice on our website before the changes become effective.</p>
                </div>
            </section>
            
            <section id="contact">
                <h2 class="text-2xl font-bold mb-4 section-title">12. Contact Us</h2>
                <div class="space-y-4">
                    <p>If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us using the button below:</p>
                    
                    <div class="flex justify-center mt-6">
                        <a href="/contact" class="px-8 py-3 bg-[#00BFFF] hover:bg-[#0099FF] text-black font-bold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                            <i class="fas fa-envelope mr-2"></i>
                            Contact Our Data Protection Team
                        </a>
                    </div>
                    
                    <p class="text-center mt-6 text-gray-400">If you believe that your data protection rights have not been addressed to your satisfaction, you have the right to lodge a complaint with the Office of the Data Protection Commissioner of Kenya.</p>
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