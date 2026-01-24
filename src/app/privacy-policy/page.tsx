import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Course Unbox",
  description:
    "Read the Privacy Policy of Course Unbox to understand how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  const privacyPolicySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy",
    "description":
      "This Privacy Policy explains how Course Unbox collects, uses, and protects user data.",
    "url": "https://courseunbox.com/privacy-policy",
    "inLanguage": "en-IN",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Course Unbox",
      "url": "https://courseunbox.com"
    }
  };
  return (

    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(privacyPolicySchema)
        }}
      />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}

        <nav aria-label="Breadcrumb" className="text-sm text-gray-400 mb-6  bg-white max-w-sm -mt-9">
          <Link href="/" className="hover:text-blue-500 transition">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href={"/privacy-policy"} className="text-gray-600 font-medium ">
            Privacy Policy
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Last updated: January 17th, 2025
          </p>
        </header>

        {/* Content */}
        <section className="space-y-8 text-gray-700 leading-relaxed text-sm md:text-base">
          <p>
            This Privacy Policy describes Our policies and procedures on the
            collection, use and disclosure of Your information when You use the
            Service and tells You about Your privacy rights and how the law
            protects You.
          </p>

          <p>
            We use Your Personal Data to provide and improve the Service. By using
            the Service, You agree to the collection and use of information in
            accordance with this Privacy Policy.
          </p>

          {/* Interpretation */}
          <h2 className="text-xl font-semibold text-gray-900">
            Interpretation and Definitions
          </h2>

          <h3 className="font-semibold text-gray-900">Interpretation</h3>
          <p>
            The words of which the initial letter is capitalized have meanings
            defined under the following conditions. The following definitions
            shall have the same meaning regardless of whether they appear in
            singular or in plural.
          </p>

          {/* Definitions */}
          <h3 className="font-semibold text-gray-900">Definitions</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Account</strong> means a unique account created for You to
              access our Service.
            </li>
            <li>
              <strong>Affiliate</strong> means an entity that controls, is
              controlled by or is under common control with a party.
            </li>
            <li>
              <strong>Company</strong> refers to Course Unbox.
            </li>
            <li>
              <strong>Cookies</strong> are small files placed on Your device.
            </li>
            <li>
              <strong>Country</strong> refers to Delhi, India.
            </li>
            <li>
              <strong>Device</strong> means any device that can access the Service.
            </li>
            <li>
              <strong>Personal Data</strong> is any information relating to an
              identifiable individual.
            </li>
            <li>
              <strong>Service</strong> refers to the Website.
            </li>
            <li>
              <strong>Service Provider</strong> means any third party that
              processes data on behalf of the Company.
            </li>
            <li>
              <strong>Usage Data</strong> refers to data collected automatically.
            </li>
            <li>
              <strong>Website</strong> refers to Course Unbox.
            </li>
            <li>
              <strong>You</strong> means the individual accessing or using the
              Service.
            </li>
          </ul>

          {/* Data Collection */}
          <h2 className="text-xl font-semibold text-gray-900">
            Collecting and Using Your Personal Data
          </h2>

          <h3 className="font-semibold text-gray-900">
            Types of Data Collected
          </h3>

          <h4 className="font-semibold text-gray-900">Personal Data</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Phone number</li>
            <li>Address, State, ZIP/Postal code, City</li>
          </ul>

          <h4 className="font-semibold text-gray-900">Usage Data</h4>
          <p>
            Usage Data is collected automatically when using the Service and may
            include IP address, browser type, visited pages, time spent, and other
            diagnostic data.
          </p>

          {/* Cookies */}
          <h2 className="text-xl font-semibold text-gray-900">
            Tracking Technologies and Cookies
          </h2>

          <p>
            We use Cookies and similar tracking technologies to track activity on
            Our Service and store certain information.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Necessary Cookies:</strong> Required for core functionality
            </li>
            <li>
              <strong>Acceptance Cookies:</strong> Identify cookie consent
            </li>
            <li>
              <strong>Functionality Cookies:</strong> Remember user preferences
            </li>
          </ul>

          {/* Usage */}
          <h2 className="text-xl font-semibold text-gray-900">
            Use of Your Personal Data
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>To provide and maintain the Service</li>
            <li>To manage Your Account</li>
            <li>To contact You regarding updates and services</li>
            <li>For business transfers and analytics</li>
            <li>To manage requests and support</li>
          </ul>

          {/* Retention */}
          <h2 className="text-xl font-semibold text-gray-900">
            Retention of Your Personal Data
          </h2>
          <p>
            We retain Personal Data only as long as necessary for the purposes set
            out in this Privacy Policy.
          </p>

          {/* Security */}
          <h2 className="text-xl font-semibold text-gray-900">
            Security of Your Personal Data
          </h2>
          <p>
            While We strive to protect Your Personal Data, no method of
            transmission over the Internet is 100% secure.
          </p>

          {/* Children */}
          <h2 className="text-xl font-semibold text-gray-900">
            Children’s Privacy
          </h2>
          <p>
            Our Service does not address anyone under the age of 13, and we do not
            knowingly collect personal data from children.
          </p>

          {/* Links */}
          <h2 className="text-xl font-semibold text-gray-900">
            Links to Other Websites
          </h2>
          <p>
            We are not responsible for the privacy practices of third-party
            websites.
          </p>

          {/* Updates */}
          <h2 className="text-xl font-semibold text-gray-900">
            Changes to this Privacy Policy
          </h2>
          <p>
            We may update Our Privacy Policy from time to time. Changes are
            effective when posted on this page.
          </p>

          {/* Contact */}
          <h2 className="text-xl font-semibold text-gray-900">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, contact us at:
          </p>
          <p className="font-medium text-gray-900">
            📧 support@courseunbox.com
          </p>
        </section>
      </main>

    </>
  );
}
