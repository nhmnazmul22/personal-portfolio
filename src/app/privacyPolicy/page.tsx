import PageHeading from "@/components/PageHeading";

const PrivacyPolicyPage = () => {
  return (
    <section className="container py-5">
      <PageHeading
        title="Privacy Policy"
        subTitle="Effective Date: 06 May 2025"
      />
      <div className="bg-secondary p-8 mt-5 rounded-md shadow">
        <p className="text-center text-muted-foreground text-base">
          Thank you for visiting my website. This Privacy Policy explains how I
          collect, use, and protect your information when you contact me through
          the form on this site.
        </p>
        <div className="my-3">
          <h2 className="text-xl">1. Information I Collect</h2>
          <p className="text-base text-muted-foreground">
            When you fill out the contact form on this website, I may collect
            the following personal information:
          </p>
          <ul className="list-disc ms-8 mt-3 text-muted-foreground">
            <li>Full Name</li>
            <li>Email Address</li>
            <li>Phone Number</li>
            <li>Service Interested In</li>
            <li>Message Content</li>
          </ul>
        </div>
        <div className="my-3">
          <h2 className="text-xl">2. How I Use Your Information</h2>
          <p className="text-base text-muted-foreground">
            The information you provide is used solely for the following
            purposes:
          </p>
          <ul className="list-disc ms-8 mt-3 text-muted-foreground">
            <li>To respond to your inquiries or requests</li>
            <li>To understand your service needs</li>
            <li>
              To communicate with you about relevant updates or information
            </li>
          </ul>
        </div>
        <div className="my-3">
          <h2 className="text-xl">3. Data Protection</h2>
          <p className="text-base text-muted-foreground">
            I take appropriate security measures to protect your personal
            information from unauthorized access, disclosure, or destruction.
            Your data is not stored in a database unless required for further
            communication.
          </p>
        </div>
        <div className="my-3">
          <h2 className="text-xl">4. Sharing of Information</h2>
          <p className="text-base text-muted-foreground">
            I do not sell, trade, or rent your personal information to third
            parties. Your information will only be used by me to respond to your
            inquiries.
          </p>
        </div>
        <div className="my-3">
          <h2 className="text-xl">5. Your Rights</h2>
          <p className="text-base text-muted-foreground">
            You have the right to:
          </p>
          <ul className="list-disc ms-8 mt-3 text-muted-foreground">
            <li>Request access to the personal information I have about you</li>
            <li>Ask for corrections or updates</li>
            <li>Request deletion of your personal data</li>
          </ul>
          <p className="text-base text-muted-foreground">
            To exercise any of these rights, please contact me at:
            <strong className="underline"> nhmnazmul22@gmail.com</strong>
          </p>
        </div>
        <div className="my-3">
          <h2 className="text-xl">6. Changes to This Policy</h2>
          <p className="text-base text-muted-foreground">
            I may update this Privacy Policy from time to time. Any changes will
            be posted on this page with a new effective date.
          </p>
        </div>
        <div className="my-3">
          <h2 className="text-xl">Contact</h2>
          <p className="text-base text-muted-foreground">
            If you have any questions about this Privacy Policy, please reach
            out at: <strong className="underline">nhmnazmul22@gmail.com</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;
