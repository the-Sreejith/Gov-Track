"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const projects = [
  {
    id: "PRJ001",
    name: "City Metro Extension",
    department: "Transportation",
    budget: "$234M",
    progress: 45,
    status: "In Progress",
  },
  {
    id: "PRJ002",
    name: "Public Hospital Renovation",
    department: "Healthcare",
    budget: "$56M",
    progress: 72,
    status: "In Progress",
  },
  {
    id: "PRJ003",
    name: "Solar Power Plant",
    department: "Energy",
    budget: "$189M",
    progress: 12,
    status: "Planning",
  },
  {
    id: "PRJ004",
    name: "Highway Maintenance",
    department: "Transportation",
    budget: "$78M",
    progress: 93,
    status: "Near Completion",
  },
];

export function ProjectTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Project ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Department</TableHead>
          <TableHead>Budget</TableHead>
          <TableHead>Progress</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projects.map((project) => (
          <TableRow key={project.id}>
            <TableCell className="font-medium">{project.id}</TableCell>
            <TableCell>{project.name}</TableCell>
            <TableCell>{project.department}</TableCell>
            <TableCell>{project.budget}</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Progress value={project.progress} className="w-[60px]" />
                <span className="text-sm text-muted-foreground">
                  {project.progress}%
                </span>
              </div>
            </TableCell>
            <TableCell>
              <Badge variant={project.status === "Planning" ? "secondary" : "default"}>
                {project.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}