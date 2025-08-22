export default function ContactPage({ searchParams }: { searchParams: { type?: string } }) {
  const type = searchParams?.type;
  const heading = type === 'trial' ? 'Request a Free Trial' : type === 'quote' ? 'Get a Quote' : 'Contact Us';
  const googleFormEmbedUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdv9PvEIco1ZJ_eeQ-cJKOfdjJadMZ_H408RNIP4cxMWxEsvQ/viewform?usp=dialog";

  return (
    <section className="min-h-[80vh] text-black">
      <div className="section-container">
        <h1 className="text-4xl font-extrabold mb-2">{heading}</h1>
        {type === 'trial' && (
          <div className="mb-6 text-sm text-gray-700 bg-red-50 border border-red-100 p-3 rounded-md">We offer a short trial deployment so you can assess guard discipline, punctuality, and reporting. Fill the form and mention your preferred dates and timings.</div>
        )}
        {type === 'quote' && (
          <div className="mb-6 text-sm text-gray-700 bg-blue-50 border border-blue-100 p-3 rounded-md">Tell us your site type, number of posts, shift timings, and start date. We’ll send a tailored proposal with transparent pricing.</div>
        )}
        {!type && (
          <div className="mb-6 text-sm text-gray-700 bg-gray-50 border border-gray-200 p-3 rounded-md">For general inquiries, please fill the form below. We will respond promptly.</div>
        )}
        <div className="responsive-iframe rounded-lg overflow-hidden bg-white shadow">
          <iframe
            src={googleFormEmbedUrl}
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Inquiry Form"
          >
            Loading…
          </iframe>
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-6 text-sm">
          <div className="rounded-lg bg-white p-4 shadow border">
            <p className="font-semibold mb-1">Call/WhatsApp</p>
            <p className="text-gray-700">+91 92844 90400</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow border">
            <p className="font-semibold mb-1">Email</p>
            <p className="text-gray-700">info@hyennasecurity.com</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow border">
            <p className="font-semibold mb-1">Location</p>
            <p className="text-gray-700">Pune, Maharashtra</p>
          </div>
        </div>
      </div>
    </section>
  );
}