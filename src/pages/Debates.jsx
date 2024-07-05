import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Debates = () => {
  const [searchTerm, setSearchTerm] = useState("");

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
        {/* Placeholder for debates items */}
        <Card>
          <CardHeader>
            <CardTitle>Debate Title</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Brief description of the debate.</p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Debates;