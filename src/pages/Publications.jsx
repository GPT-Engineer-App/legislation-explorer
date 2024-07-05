import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Publications = () => {
  const [searchTerm, setSearchTerm] = useState("");

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
        {/* Placeholder for publications items */}
        <Card>
          <CardHeader>
            <CardTitle>Publication Title</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Brief description of the publication.</p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Publications;