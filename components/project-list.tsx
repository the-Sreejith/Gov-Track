"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MapPin, Calendar, DollarSign } from "lucide-react";

const projects = [
  {
    id: "PRJ001",
    name: "City Metro Extension",
    department: "Transportation",
    location: "Downtown Metro Area",
    budget: "$234M",
    progress: 45,
    status: "In Progress",
    startDate: "2024-01-15",
    endDate: "2025-06-30",
    description: "Extension of the city metro line to connect suburban areas",
  },
  {
    id: "PRJ002",
    name: "Public Hospital Renovation",
    department: "Healthcare",
    location: "Central District",
    budget: "$56M",
    progress: 72,
    status: "In Progress",
    startDate: "2023-11-01",
    endDate: "2024-12-31",
    description: "Complete renovation and modernization of the central public hospital",
  },
  {
    id: "PRJ003",
    name: "Solar Power Plant",
    department: "Energy",
    location: "Southern Industrial Zone",
    budget: "$189M",
    progress: 12,
    status: "Planning",
    startDate: "2024-03-01",
    endDate: "2026-02-28",
    description: "Construction of a 500MW solar power plant",
  },
];

interface ProjectListProps {
  search: string;
  department: string;
}

export function ProjectList({ search, department }: ProjectListProps) {
  const filteredProjects = projects.filter((project) => {
    const matchesSearch = 
      project.name.toLowerCase().includes(search.toLowerCase()) ||
      project.id.toLowerCase().includes(search.toLowerCase());
    const matchesDepartment = 
      department === "all" || 
      project.department.toLowerCase() === department.toLowerCase();
    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {filteredProjects.map((project) => (
        <Card key={project.id} className="hover:shadow-lg transition-shadow">
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Badge variant={project.status === "Planning" ? "secondary" : "default"}>
                    {project.status}
                  </Badge>
                  <span className="text-sm text-muted-foreground">ID: {project.id}</span>
                </div>
                <h3 className="font-semibold text-lg">{project.name}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                  {project.location}
                </div>
                <div className="flex items-center text-sm">
                  <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                  {project.startDate} - {project.endDate}
                </div>
                <div className="flex items-center text-sm">
                  <DollarSign className="h-4 w-4 mr-2 text-muted-foreground" />
                  {project.budget}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <Progress value={project.progress} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}