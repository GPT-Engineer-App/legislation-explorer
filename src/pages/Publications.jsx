import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Publications = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const examplePublications = [
    { title: "Annual Report 2022", description: "A comprehensive report on the activities and achievements of the year 2022." },
    { title: "Healthcare White Paper", description: "A detailed document outlining proposed healthcare reforms." },
    { title: "Education Policy Review", description: "An in-depth review of current education policies and recommendations for improvement." },
  ];

  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold">Publications</h1>
        <Input
          type="text"
          placeholder="Search publications..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mt-4"
        />
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {examplePublications.map((publication, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{publication.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{publication.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default Publications;