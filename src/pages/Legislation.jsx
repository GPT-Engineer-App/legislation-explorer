import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Legislation = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const exampleLegislation = [
    { title: "Climate Change Act", description: "An act to set targets for reducing greenhouse gas emissions." },
    { title: "Education Reform Act", description: "An act to improve the quality of education in public schools." },
    { title: "Healthcare Improvement Act", description: "An act to enhance the healthcare system and services." },
  ];

  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold">Legislation</h1>
        <Input
          type="text"
          placeholder="Search legislation..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mt-4"
        />
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {exampleLegislation.map((legislation, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{legislation.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{legislation.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default Legislation;