"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Building2, DollarSign } from "lucide-react";

const tenders = [
  {
    id: "TND001",
    title: "Road Infrastructure Maintenance",
    department: "Transportation",
    budget: "$12M",
    deadline: "2024-04-30",
    status: "open",
    requirements: "Minimum 10 years experience in road construction",
    description: "Annual maintenance contract for city highways and main roads",
  },
  {
    id: "TND002",
    title: "Medical Equipment Supply",
    department: "Healthcare",
    budget: "$5M",
    deadline: "2024-04-15",
    status: "closing-soon",
    requirements: "ISO 13485 certification required",
    description: "Supply and installation of advanced medical imaging equipment",
  },
  {
    id: "TND003",
    title: "Smart City Implementation",
    department: "Technology",
    budget: "$28M",
    deadline: "2024-05-30",
    status: "open",
    requirements: "Previous smart city project experience",
    description: "Implementation of smart city solutions including IoT sensors and data analytics",
  },
];

interface TenderListProps {
  search: string;
  status: string;
}

export function TenderList({ search, status }: TenderListProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "default";
      case "closing-soon":
        return "destructive";
      case "under-review":
        return "secondary";
      case "awarded":
        return "success";
      default:
        return "default";
    }
  };

  const filteredTenders = tenders.filter((tender) => {
    const matchesSearch = 
      tender.title.toLowerCase().includes(search.toLowerCase()) ||
      tender.id.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = 
      status === "all" || 
      tender.status === status;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {filteredTenders.map((tender) => (
        <Card key={tender.id} className="hover:shadow-lg transition-shadow">
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Badge variant={getStatusColor(tender.status)}>
                    {tender.status.replace("-", " ").toUpperCase()}
                  </Badge>
                  <span className="text-sm text-muted-foreground">ID: {tender.id}</span>
                </div>
                <h3 className="font-semibold text-lg">{tender.title}</h3>
                <p className="text-sm text-muted-foreground">{tender.description}</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <Building2 className="h-4 w-4 mr-2 text-muted-foreground" />
                  {tender.department}
                </div>
                <div className="flex items-center text-sm">
                  <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                  Deadline: {tender.deadline}
                </div>
                <div className="flex items-center text-sm">
                  <DollarSign className="h-4 w-4 mr-2 text-muted-foreground" />
                  Estimated Budget: {tender.budget}
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium">Requirements:</p>
                <p className="text-sm text-muted-foreground">{tender.requirements}</p>
              </div>

              <Button className="w-full">View Details</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}