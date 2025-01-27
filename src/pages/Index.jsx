import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold">Welcome to the House of Commons</h1>
        <p className="text-lg mt-2">Explore legislation, members, committees, and more.</p>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link to="/legislation">
          <Card>
            <CardHeader>
              <CardTitle>Legislation</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Explore recent and past legislation.</p>
            </CardContent>
          </Card>
        </Link>
        <Link to="/members">
          <Card>
            <CardHeader>
              <CardTitle>Members</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Find information about members of the House.</p>
            </CardContent>
          </Card>
        </Link>
        <Link to="/committees">
          <Card>
            <CardHeader>
              <CardTitle>Committees</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Learn about various committees and their work.</p>
            </CardContent>
          </Card>
        </Link>
        <Link to="/debates">
          <Card>
            <CardHeader>
              <CardTitle>Debates</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Read transcripts of recent debates.</p>
            </CardContent>
          </Card>
        </Link>
        <Link to="/publications">
          <Card>
            <CardHeader>
              <CardTitle>Publications</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Access official publications and reports.</p>
            </CardContent>
          </Card>
        </Link>
      </section>
    </div>
  );
};

export default Index;