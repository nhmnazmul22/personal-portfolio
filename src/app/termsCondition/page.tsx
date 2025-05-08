import PageHeading from "@/components/PageHeading";

const TermsConditionPage = () => {
  return (
    <section className="container py-5">
      <PageHeading
        title="Terms & Conditions"
        subTitle="Effective Date: 06 May 2025"
      />
      <div className="bg-secondary p-8 mt-5 rounded-md shadow">
        <p className="text-center text-muted-foreground text-base">
          By accessing and using this website, you accept and agree to be bound
          by the terms and conditions below. If you do not agree with any part
          of these terms, please do not use this website.
        </p>
        <div className="my-3">
          <h2 className="text-xl">1. Use of This Website</h2>
          <p className="text-base text-muted-foreground">
            You agree to use this website only for lawful purposes. You may not
            use this site:
          </p>
          <ul className="list-disc ms-8 mt-3 text-muted-foreground">
            <li>In any way that violates applicable laws or regulations</li>
            <li>To send unsolicited promotional content (spam)</li>
            <li>
              To attempt to gain unauthorized access to the site or its systems
            </li>
          </ul>
        </div>
        <div className="my-3">
          <h2 className="text-xl">2. Intellectual Property</h2>
          <p className="text-base text-muted-foreground">
            All content on this website—including text, images, code, design,
            and layout—is the property of [Your Name] unless otherwise stated.
            You may not reproduce, copy, or redistribute any content without
            prior written permission.
          </p>
        </div>
        <div className="my-3">
          <h2 className="text-xl">3. Services & Communication</h2>
          <p className="text-base text-muted-foreground">
            If you contact me through the contact form, you agree to provide
            accurate and complete information. I reserve the right to refuse
            service or respond to any request at my discretion.
          </p>
        </div>
        <div className="my-3">
          <h2 className="text-xl">4. Limitation of Liability</h2>
          <p className="text-base text-muted-foreground">
            {`This website is provided "as is" without warranties of any kind. I
            am not responsible for any damages or losses resulting from the use
            of this website, including technical issues or inaccuracies.`}
          </p>
        </div>
        <div className="my-3">
          <h2 className="text-xl">5. External Links</h2>
          <p className="text-base text-muted-foreground">
            This website may contain links to third-party websites. I am not
            responsible for the content or practices of any linked site.
          </p>
        </div>
        <div className="my-3">
          <h2 className="text-xl">6. Changes to Terms</h2>
          <p className="text-base text-muted-foreground">
            I may update these Terms & Conditions at any time without notice.
            Continued use of this site after changes means you accept the
            updated terms.
          </p>
        </div>
        <div className="my-3">
          <h2 className="text-xl">Contact</h2>
          <p className="text-base text-muted-foreground">
            If you have any questions about these Terms & Conditions, please
            contact me at:{" "}
            <strong className="underline">nhmnazmul22@gmail.com</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsConditionPage;
