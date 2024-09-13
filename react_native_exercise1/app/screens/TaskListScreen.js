import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import colors from "../config/colors";
import FilterButton from "../components/FilterButton";
import CardLists from "../components/CardLists";

function TaskListScreen() {
  const [selectedFilter, setFilter] = useState("All");
  const [tasks, setTasks] = useState([
    {
      id: "DH2024-1001-P",
      title: "Design Homepage",
      status: "Pending",
      dueDate: "2024-10-01",
      description: "Create initial design drafts for the homepage layout.",
    },
    {
      id: "WB2024-0925-P",
      title: "Write Blog Post",
      status: "Pending",
      dueDate: "2024-09-25",
      description:
        "Draft and finalize the blog post about new product features.",
    },
    {
      id: "UD2024-0910-C",
      title: "Update Database",
      status: "Completed",
      dueDate: "2024-09-10",
      description:
        "Implement database updates as per the latest schema changes.",
    },
    {
      id: "STM2024-0920-P",
      title: "Schedule Team Meeting",
      status: "Pending",
      dueDate: "2024-09-20",
      description: "Organize and schedule a meeting with the development team.",
    },
    {
      id: "TNF2024-1005-P",
      title: "Test New Features",
      status: "Pending",
      dueDate: "2024-10-05",
      description:
        "Perform thorough testing on the newly implemented features.",
    },
  ]);
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    if (selectedFilter === "All") {
      const completedTasks = tasks.filter((e) => e.status === "Completed");
      const pendingTasks = tasks.filter((e) => e.status === "Pending");

      setFilteredTasks([...pendingTasks, ...completedTasks]);
    } else {
      setFilteredTasks(tasks.filter((task) => task.status === selectedFilter));
    }
  }, [selectedFilter, tasks]);
  return (
    <>
      <View style={styles.container}>
        <FilterButton selectedFilter={selectedFilter} setFilter={setFilter} />
        <CardLists tasks={filteredTasks} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
});

export default TaskListScreen;
