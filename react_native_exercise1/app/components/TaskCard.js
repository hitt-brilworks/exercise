import React, { useState } from "react";
import { FlatList } from "react-native";

function TaskCard(props) {
  const [task, setTask] = useState([
    {
      title: "Design Homepage",
      status: "Pending",
      dueDate: "2024-10-01",
      description: "Create initial design drafts for the homepage layout.",
    },
    {
      title: "Write Blog Post",
      status: "Pending",
      dueDate: "2024-09-25",
      description:
        "Draft and finalize the blog post about new product features.",
    },
    {
      title: "Update Database",
      status: "Completed",
      dueDate: "2024-09-10",
      description:
        "Implement database updates as per the latest schema changes.",
    },
    {
      title: "Schedule Team Meeting",
      status: "Pending",
      dueDate: "2024-09-20",
      description: "Organize and schedule a meeting with the development team.",
    },
    {
      title: "Test New Features",
      status: "Pending",
      dueDate: "2024-10-05",
      description:
        "Perform thorough testing on the newly implemented features.",
    },
  ]);
  const [filteredTasks, setFilteredTasks] = useState(null);
  return (
    <>
      <FlatList data={filteredTasks} />
    </>
  );
}

export default ListItem;
