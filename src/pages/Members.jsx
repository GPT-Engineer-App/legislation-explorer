import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Members = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const exampleMembers = [
    { name: "John Doe", constituency: "Springfield", party: "Independent" },
    { name: "Jane Smith", constituency: "Shelbyville", party: "Democratic" },
    { name: "Jim Brown", constituency: "Ogdenville", party: "Republican" },
  ];

  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold">Members</h1>
        <Input
          type="text"
          placeholder="Search members..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mt-4"
        />
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {exampleMembers.map((member, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{member.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Constituency: {member.constituency}</p>
              <p>Party: {member.party}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default Members;