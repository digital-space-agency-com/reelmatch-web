
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-reelmatch-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-sm">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Introduction</h2>
            <p className="mb-3 text-reelmatch-gray">
              This Privacy Policy explains how ReelMatch ("we", "us", or "our") collects, uses, and shares your information when you use our mobile application and website at www.reelmatch.app ("Services").
            </p>
            <p className="text-reelmatch-gray">
              By using our Services, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>
            <div className="ml-4">
              <h3 className="font-medium mb-2">Personal Information</h3>
              <p className="mb-3 text-reelmatch-gray">
                When you create an account, we may collect information such as:
              </p>
              <ul className="list-disc ml-6 mb-4 text-reelmatch-gray">
                <li>Name</li>
                <li>Email address</li>
                <li>Profile information</li>
                <li>Account preferences</li>
              </ul>

              <h3 className="font-medium mb-2">Usage Information</h3>
              <p className="mb-3 text-reelmatch-gray">
                We collect information about how you use our Services, including:
              </p>
              <ul className="list-disc ml-6 mb-4 text-reelmatch-gray">
                <li>Movies and shows you view, like, or dislike</li>
                <li>Features you use</li>
                <li>Time spent on the app</li>
                <li>Device information</li>
              </ul>

              <h3 className="font-medium mb-2">Cookies and Similar Technologies</h3>
              <p className="text-reelmatch-gray">
                We use cookies and similar tracking technologies to track activity on our Services and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">How We Use Your Information</h2>
            <p className="mb-3 text-reelmatch-gray">
              We use the information we collect to:
            </p>
            <ul className="list-disc ml-6 mb-4 text-reelmatch-gray">
              <li>Provide, maintain, and improve our Services</li>
              <li>Personalize your experience</li>
              <li>Understand how users access and use our Services</li>
              <li>Develop new features and services</li>
              <li>Communicate with you about updates and promotions</li>
              <li>Protect against fraudulent or illegal activity</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Cookie Policy</h2>
            <p className="mb-3 text-reelmatch-gray">
              Our website uses the following types of cookies:
            </p>
            <div className="ml-4">
              <h3 className="font-medium mb-2">Necessary Cookies</h3>
              <p className="mb-3 text-reelmatch-gray">
                These cookies are essential for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.
              </p>

              <h3 className="font-medium mb-2">Analytics Cookies</h3>
              <p className="mb-3 text-reelmatch-gray">
                These cookies help us understand how visitors interact with our website. They provide information about metrics such as the number of visitors, bounce rate, traffic source, etc.
              </p>

              <h3 className="font-medium mb-2">Marketing Cookies</h3>
              <p className="mb-3 text-reelmatch-gray">
                These cookies are used to track visitors across websites to display relevant advertisements. They help make advertising more engaging to users and more valuable to publishers and advertisers.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Your Rights</h2>
            <p className="mb-3 text-reelmatch-gray">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc ml-6 text-reelmatch-gray">
              <li>Access to your personal information</li>
              <li>Correction of inaccurate or incomplete information</li>
              <li>Deletion of your personal information</li>
              <li>Restriction or objection to processing</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
            <p className="text-reelmatch-gray">
              If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:privacy@reelmatch.app" className="text-reelmatch-primary hover:underline">privacy@reelmatch.app</a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
