import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Committees = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const exampleCommittees = [
    { name: "Finance Committee", description: "Oversees government spending and financial policies." },
    { name: "Health Committee", description: "Focuses on healthcare policies and public health issues." },
    { name: "Education Committee", description: "Deals with educational policies and school systems." },
  ];

  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold">Committees</h1>
        <Input
          type="text"
          placeholder="Search committees..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mt-4"
        />
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {exampleCommittees.map((committee, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{committee.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{committee.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default Committees;