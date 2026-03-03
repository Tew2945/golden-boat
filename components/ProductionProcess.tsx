const steps = [
  "SOY BEAN SELECTION",
  "STEAMING",
  "ADDING MOLD STARTER & ROAST WHEAT",
  "KOJI INCUBATION ROOM",
  "FERMENTATION (MOROMI)",
  "PRESSING / FILTRATION",
  "MIXING",
  "FILTERING",
  "PASTEURIZATION",
  "FILLING LINE & CARTON PACKING",
];

export default function ProductionProcess() {
  return (
    <section id="process" className="py-24 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-16">
          Production Process
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="border rounded-xl p-6 shadow-sm bg-white"
            >
              <div className="text-sm text-gray-500 mb-2">
                Step {index + 1}
              </div>
              <h3 className="font-semibold">
                {step}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}