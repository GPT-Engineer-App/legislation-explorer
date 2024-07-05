import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Debates = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const exampleDebates = [
    { title: "Climate Change Debate", description: "Discussion on the impacts of climate change and mitigation strategies." },
    { title: "Education Reform Debate", description: "Debate on proposed changes to the education system." },
    { title: "Healthcare Funding Debate", description: "Debate on the allocation of funds for healthcare services." },
  ];

  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold">Debates</h1>
        <Input
          type="text"
          placeholder="Search debates..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mt-4"
        />
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {exampleDebates.map((debate, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{debate.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{debate.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default Debates;