export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
        <div className="space-y-8">
          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="text-xl font-semibold">Digital Marketing Specialist</h3>
            <p className="text-gray-600">Company Name • 2021 - Present</p>
            <ul className="list-disc list-inside mt-2">
              <li>Led social media campaigns resulting in 30% increase in engagement</li>
              <li>Developed and implemented SEO strategies improving organic traffic by 25%</li>
              <li>Managed PPC campaigns with a 20% increase in ROI</li>
            </ul>
          </div>
          {/* Add more experience items here */}
        </div>
      </div>
    </section>
  );
}