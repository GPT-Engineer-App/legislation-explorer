import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, FileText, Users, Briefcase, MessageSquare, BookOpen } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar"; // Use the sidebar layout
import Index from "./pages/Index.jsx";
import Legislation from "./pages/Legislation.jsx";
import Members from "./pages/Members.jsx";
import Committees from "./pages/Committees.jsx";
import Debates from "./pages/Debates.jsx";
import Publications from "./pages/Publications.jsx";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Legislation",
    to: "/legislation",
    icon: <FileText className="h-4 w-4" />,
  },
  {
    title: "Members",
    to: "/members",
    icon: <Users className="h-4 w-4" />,
  },
  {
    title: "Committees",
    to: "/committees",
    icon: <Briefcase className="h-4 w-4" />,
  },
  {
    title: "Debates",
    to: "/debates",
    icon: <MessageSquare className="h-4 w-4" />,
  },
  {
    title: "Publications",
    to: "/publications",
    icon: <BookOpen className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="legislation" element={<Legislation />} />
              <Route path="members" element={<Members />} />
              <Route path="committees" element={<Committees />} />
              <Route path="debates" element={<Debates />} />
              <Route path="publications" element={<Publications />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;