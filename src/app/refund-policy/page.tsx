import Link from "next/link";
export const metadata = {
  title: "Refund & Cancellation Policy | Course Unbox",
  description:
    "Read the Refund and Cancellation Policy of Course Unbox to understand our rules regarding order cancellation and refunds.",
};

export default function RefundPolicyPage() {
  const refundPolicySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",

    "name": "Refund Policy",
    "description":
      "This Refund Policy outlines the conditions, eligibility, and process for refunds at Course Unbox.",
    "url": "https://courseunbox.com/refund-policy",

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
          __html: JSON.stringify(refundPolicySchema)
        }}
      />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}

        <nav aria-label="Breadcrumb" className="text-sm text-gray-400 mb-6  bg-white max-w-sm -mt-9">
          <Link href="/" className="hover:text-blue-500 transition">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href={"/refund-policy"} className="text-gray-600 font-medium ">
            Refund Policy
          </Link>
        </nav>


        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Refund and Cancellation Policy
          </h1>
        </header>

        {/* Content */}
        <section className="space-y-8 text-gray-700 leading-relaxed text-sm md:text-base">
          {/* Cancellation by Company */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Cancellation by Course Unbox
            </h2>
            <p>
              There might be certain orders that Course Unbox cannot process and
              must subsequently cancel. Course Unbox retains the right to reject
              or annul any order for any reason.
            </p>
            <p className="mt-3">
              Situations that may result in cancellation include, but are not
              limited to, product unavailability or insufficient quantities,
              lack of service availability, errors in pricing information, or
              issues identified by our credit and fraud prevention team.
            </p>
            <p className="mt-3">
              Course Unbox may also request additional verification or
              information before approving an order. If all or part of your
              order is canceled, or if further details are required, you will be
              notified accordingly.
            </p>
          </div>

          {/* Cancellation by User */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Cancellation by the User
            </h2>
            <p>
              Course Unbox reserves the right to approve or deny any cancellation
              request at its sole discretion. Once an order has been processed,
              it cannot be canceled.
            </p>
            <p className="mt-3">
              The determination of whether an order has been processed rests
              entirely with Course Unbox. By agreeing to these terms, you accept
              and acknowledge Course Unbox’s decision regarding cancellations.
            </p>
          </div>

          {/* Refund Policy */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Refund Policy
            </h2>
            <p>
              Due to the nature of our business, Course Unbox does not offer a
              money-back guarantee for its products or services.
            </p>
            <p className="mt-3">
              If you are dissatisfied with any course, you must inform our
              customer support team within <strong>24 hours</strong> of receiving
              the product. Our Customer Service Team will evaluate the concern
              and make a decision based on their findings.
            </p>
            <p className="mt-3 font-semibold text-gray-900">
              Fees once paid are non-refundable under any circumstances.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
