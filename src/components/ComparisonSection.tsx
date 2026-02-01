import { Check, X, Minus } from "lucide-react";

const comparisonData = [
  {
    feature: "Price",
    abook: { value: "$250", highlight: true },
    remarkable: "$299+",
    supernote: "$369+",
    goodnotes: "$9/year",
  },
  {
    feature: "Open Source",
    abook: { value: true, highlight: true },
    remarkable: false,
    supernote: false,
    goodnotes: false,
  },
  {
    feature: "Runs on Any Device",
    abook: { value: true, highlight: true },
    remarkable: false,
    supernote: false,
    goodnotes: "partial",
  },
  {
    feature: "OCR Support",
    abook: { value: true },
    remarkable: true,
    supernote: true,
    goodnotes: true,
  },
  {
    feature: "Offline Mode",
    abook: { value: true },
    remarkable: true,
    supernote: true,
    goodnotes: true,
  },
  {
    feature: "PDF Export",
    abook: { value: true },
    remarkable: true,
    supernote: true,
    goodnotes: true,
  },
  {
    feature: "Custom Templates",
    abook: { value: true },
    remarkable: "partial",
    supernote: true,
    goodnotes: true,
  },
  {
    feature: "Layer Support",
    abook: { value: true },
    remarkable: true,
    supernote: true,
    goodnotes: false,
  },
  {
    feature: "No Subscription",
    abook: { value: true, highlight: true },
    remarkable: false,
    supernote: true,
    goodnotes: false,
  },
];

const renderValue = (value: boolean | string | { value: boolean | string; highlight?: boolean }) => {
  const actualValue = typeof value === 'object' ? value.value : value;
  const highlight = typeof value === 'object' ? value.highlight : false;

  if (actualValue === true) {
    return (
      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${highlight ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'}`}>
        <Check className="w-4 h-4" />
      </div>
    );
  }
  if (actualValue === false) {
    return (
      <div className="w-6 h-6 rounded-full flex items-center justify-center bg-muted text-muted-foreground">
        <X className="w-4 h-4" />
      </div>
    );
  }
  if (actualValue === "partial") {
    return (
      <div className="w-6 h-6 rounded-full flex items-center justify-center bg-muted text-muted-foreground">
        <Minus className="w-4 h-4" />
      </div>
    );
  }
  return (
    <span className={`font-semibold ${highlight ? 'text-primary' : 'text-foreground'}`}>
      {actualValue}
    </span>
  );
};

const ComparisonSection = () => {
  return (
    <section id="comparison" className="py-24 bg-secondary/30">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Comparison
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            See how Abook compares
          </h2>
          <p className="text-lg text-muted-foreground">
            We stack up well against the most popular digital notebook solutions.
          </p>
        </div>

        {/* Comparison table */}
        <div className="max-w-5xl mx-auto overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 font-medium text-muted-foreground">
                  Feature
                </th>
                <th className="text-center py-4 px-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold">
                    Abook
                  </div>
                </th>
                <th className="text-center py-4 px-4 font-medium text-muted-foreground">
                  reMarkable
                </th>
                <th className="text-center py-4 px-4 font-medium text-muted-foreground">
                  Supernote
                </th>
                <th className="text-center py-4 px-4 font-medium text-muted-foreground">
                  GoodNotes
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr 
                  key={row.feature} 
                  className={`border-b border-border/50 ${index % 2 === 0 ? 'bg-card/50' : ''}`}
                >
                  <td className="py-4 px-4 font-medium text-foreground">
                    {row.feature}
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex justify-center">
                      {renderValue(row.abook)}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex justify-center">
                      {renderValue(row.remarkable)}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex justify-center">
                      {renderValue(row.supernote)}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex justify-center">
                      {renderValue(row.goodnotes)}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
