"use client";
import { db } from "@/integrations/db";
import { CourseList } from "@/integrations/schema";
import React, { useEffect, useState } from "react";
import CourseCard from "../_components/CourseCard";
import { desc, eq } from "drizzle-orm";
import { useToast } from "@/hooks/use-toast";

function Showcase() {
  const [courseList, setCourseList] = useState([]);
  const { toast } = useToast();

  useEffect(() => {
    GetAllCourses();
  }, []);
         
  const GetAllCourses = async () => {
    try {
      const result = await db
        .select()
        .from(CourseList)
        .where(eq(CourseList.publish, true))
        .orderBy(desc(CourseList.id));

      setCourseList(result);
    } catch (error) {
      toast({
        variant: "destructive",
        duration: 3000,
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    }
  };

  return (
    <div>
      <h2 className="font-bold text-3xl">Showcase More paths</h2>
      <p className="text-sm text-gray-500">
        Showcase more paths built with AI by other users.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {courseList.length > 0
          ? courseList.map((course, index) => (
              <CourseCard
                key={index}
                course={course}
                refreshData={GetAllCourses}
                displayUser={true}
              />
            ))
          : [1, 2, 3, 4, 5, 6].map((item, index) => (
              <div
                key={index}
                className="shadow-sm rounded-lg border p-2 mt-4 animate-pulse"
              >
                <div className="w-full h-[200px] bg-gray-300 rounded-lg"></div>
                <div className="p-2">
                  <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
                  <div className="flex items-center justify-between">
                    <div className="h-6 bg-gray-300 rounded w-1/3"></div>
                    <div className="h-6 bg-gray-300 rounded w-1/4"></div>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}

export default Showcase;
