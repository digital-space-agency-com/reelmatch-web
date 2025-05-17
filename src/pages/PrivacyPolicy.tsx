import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  // Add useEffect to scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  useEffect(() => {
    // Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "ReelMatch Privacy Policy",
      "description": "Privacy Policy for the ReelMatch mobile application",
      "publisher": {
        "@type": "Organization",
        "name": "Digital Space Agency UG",
        "url": "https://reelmatch.app"
      },
      "lastReviewed": "2025-05-17"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-reelmatch-background">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-center">Privacy Policy</h1>
          
          <div className="text-sm text-gray-500 text-center mb-12">
            Last updated: May 17, 2025
          </div>

          <div className="space-y-4">
            <section className="bg-gray-50">
              <p className="text-xl text-gray-900 mb-4">
                Welcome to ReelMatch, a freemium app developed by Digital Space Agency UG. While our core services are 
                available at no cost, we want to be transparent about how we handle your information.
              </p>

              <div className="space-y-4">
                <p>
                  This Privacy Policy outlines our practices regarding the collection, use, and protection of your 
                  Personal Information when you use our Service. By choosing to use ReelMatch, you agree to these 
                  practices as described below.
                </p>

                <p>
                  We are committed to protecting your privacy and will only use your information to enhance your 
                  experience and improve our Service. Any information shared with us will be handled as described 
                  in this Privacy Policy and will not be shared with third parties except as outlined here.
                </p>
              </div>
            </section>

            <section>
              <h2>Information We Collect</h2>
              <div className="space-y-4">
                <p>
                  To provide you with the best possible experience, we collect certain personally identifiable 
                  information, including:
                </p>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name</li>
                  <li>Email Address</li>
                </ul>

                <p>
                  Additionally, our app utilizes trusted third-party services that may collect information 
                  to help us improve and secure our service. These partners include:
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <a 
                    href="https://www.google.com/policies/privacy/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-reelmatch-primary">Google Play Services</span>
                  </a>
                  <a 
                    href="https://firebase.google.com/policies/analytics" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-reelmatch-primary">Google Analytics for Firebase</span>
                  </a>
                  <a 
                    href="https://firebase.google.com/support/privacy/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-reelmatch-primary">Firebase Crashlytics</span>
                  </a>
                  <a 
                    href="https://www.revenuecat.com/privacy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-reelmatch-primary">RevenueCat</span>
                  </a>
                </div>
              </div>
            </section>

            <section>
              <h2>Log Data</h2>
              <p>
                We want to inform you that whenever you use our Service, in a case of an error in the app we collect 
                data and information (through third-party products) on your phone called Log Data. This Log Data may 
                include information such as your device Internet Protocol ("IP") address, device name, operating 
                system version, the configuration of the app when utilizing our Service, the time and date of your 
                use of the Service, and other statistics.
              </p>
            </section>

            <section>
              <h2>Cookies</h2>
              <p>
                Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. 
                These are sent to your browser from the websites that you visit and are stored on your device's 
                internal memory.
              </p>

              <p>
                This Service does not use these "cookies" explicitly. However, the app may use third-party code and 
                libraries that use "cookies" to collect information and improve their services. You have the option 
                to either accept or refuse these cookies and know when a cookie is being sent to your device. If you 
                choose to refuse our cookies, you may not be able to use some portions of this Service.
              </p>
            </section>

            <section>
              <h2>Service Providers</h2>
              <p>We may employ third-party companies and individuals due to the following reasons:</p>
              <ul>
                <li>To facilitate our Service;</li>
                <li>To provide the Service on our behalf;</li>
                <li>To perform Service-related services; or</li>
                <li>To assist us in analyzing how our Service is used.</li>
              </ul>
            </section>

            <section>
              <h2>Security</h2>
              <p>
                We value your trust in providing us your Personal Information, thus we are striving to use 
                commercially acceptable means of protecting it. But remember that no method of transmission over 
                the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee 
                its absolute security.
              </p>
            </section>

            <section>
              <h2>Children's Privacy</h2>
              <p>
                These Services do not address anyone under the age of 13. We do not knowingly collect personally 
                identifiable information from children under 13 years of age. In the case we discover that a child 
                under 13 has provided us with personal information, we immediately delete this from our servers. If 
                you are a parent or guardian and you are aware that your child has provided us with personal 
                information, please contact us so that we will be able to do the necessary actions.
              </p>
            </section>

            <section>
              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. Thus, you are advised to review this page 
                periodically for any changes. We will notify you of any changes by posting the new Privacy Policy 
                on this page.
              </p>

              <p>This policy is effective as of 2023-03-27</p>
            </section>

            <section>
              <h2>Contact Us</h2>
              <p>
                If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at{" "}
                <a 
                  href="mailto:hey@reelmatch.app"
                  className="text-reelmatch-primary hover:underline"
                >
                  hey@reelmatch.app
                </a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
