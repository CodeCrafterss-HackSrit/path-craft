"use client";
import { db } from "@/integrations/db";
import { CourseList } from "@/integrations/schema";
import { useUser } from "@clerk/nextjs";
import { and, eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import CourseBasicInfo from "../_components/CourseBasicInfo";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function FinishScreen({ params }) {
  const [courseId, setCourseId] = useState(null);  
  const { user } = useUser();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
 
  useEffect(() => {
    async function fetchParams() {
      const resolvedParams = await params; 
      setCourseId(resolvedParams?.courseId || null); // Set courseId safely
    }
    fetchParams();
  }, [params]);
 
  useEffect(() => {
    if (courseId && user) {
      GetCourse();
    }
  }, [courseId, user]);

  const GetCourse = async () => {
    if (!user || !courseId) return;

    try {
      const result = await db
        .select()
        .from(CourseList)
        .where(
          and(
            eq(CourseList.courseId, courseId),
            eq(CourseList.createdBy, user?.primaryEmailAddress?.emailAddress)
          )
        );

      if (!result.length) {
        toast({
          variant: "destructive",
          duration: 3000,
          title: "Course not found!",
          description: "The course ID might be incorrect.",
        });
        setLoading(false);
        return;
      }

      setCourse(result[0]);
    } catch (error) {
      toast({
        variant: "destructive",
        duration: 3000,
        title: "Error fetching course",
        description: error.message || "Something went wrong!",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && !course ? (
        <div className="px-10 md:px-20 lg:px-44 my-7">
          <Skeleton height={30} width={200} className="mx-auto my-3" />
          <Skeleton height={20} width="100%" />
          <Skeleton height={40} width={150} className="mx-auto my-3" />
        </div>
      ) : course ? (
        <div className="px-10 md:px-20 lg:px-44 my-7">
          <h2 className="text-center font-bold text-2xl my-3 text-primary">
            🎉 Congrats! Your Course is Ready
          </h2>

          <CourseBasicInfo course={course} refreshData={() => GetCourse()} />

          <div className="flex justify-center">
            <Link href="/dashboard">
              <Button className="mt-5">Go to Dashboard</Button>
            </Link>
          </div>
          
          <h2 className="mt-3">Course URL:</h2>
          <h2 className="text-center flex items-center gap-5 justify-center text-gray-400 border p-2 rounded">
            {process.env.NEXT_PUBLIC_HOST_NAME}/course/{course?.courseId}
            <HiOutlineClipboardDocumentCheck
              className="h-5 w-5 cursor-pointer"
              onClick={() =>
                navigator.clipboard.writeText(
                  `${process.env.NEXT_PUBLIC_HOST_NAME}/course/${course?.courseId}`
                )
              }
            />
          </h2>
        </div>
      ) : (
        <div className="px-10 md:px-20 lg:px-44 my-7">
          <h2 className="text-center text-2xl text-primary my-3">
           Course not found...
          </h2>
        </div>
      )}
    </div>
  );
}

export default FinishScreen;
