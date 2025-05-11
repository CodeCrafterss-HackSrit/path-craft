"use client";
import { UserCourseListContext } from "@/app/_context/UserCourseListContext";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import React, { useContext } from "react";

function AddCourse() {
  const { user } = useUser();
  const { userCourseList } = useContext(UserCourseListContext); // Get the user course list from contextapi

  if (!userCourseList) {
    return <p>Loading courses...</p>;  
  }

  return (
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-3xl">
          Hello, <span className="font-bold">{user?.fullName || "User"}</span>
        </h2>
        <p className="text-sm text-gray-500">
          Create new course path with AI, Share among peers.
        </p>
      </div>
      <Link
        href={
          userCourseList?.length >= 5 ? "/dashboard/upgrade" : "/create-course-path"
        }
      >
        <Button>+ Create AI based Course path</Button>
      </Link>
    </div>
  );
}

export default AddCourse;
