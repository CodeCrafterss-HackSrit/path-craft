"use client";
import Skeleton from "react-loading-skeleton"; 
import "react-loading-skeleton/dist/skeleton.css"; 
import { HiChevronDoubleLeft } from "react-icons/hi";
import ChapterListCard from "./_components/ChapterListCard";
import ChapterContent from "./_components/ChapterContent";
import React, { useState, useEffect } from "react";
import { db } from "@/integrations/db";
import { Chapters, CourseList } from "@/integrations/schema";
import { and, eq } from "drizzle-orm";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"; // Import shadcn button

function CourseStart({ params }) {
  const router = useRouter();
  const Params = React.use(params);
  const [course, setCourse] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [selectedChapterContent, setSelectedChapterContent] = useState(null);
  const [handleSidebar, setHandleSidebar] = useState(false);
  const [courseLoading, setCourseLoading] = useState(true);
  const [contentLoading, setContentLoading] = useState(true);
  const { toast } = useToast();

  const handleSideBarFunction = () => {
    setHandleSidebar(!handleSidebar);
  };

  useEffect(() => {
    if (Params) GetCourse();
  }, [Params]);

  useEffect(() => {
    if (course && course?.courseOutput?.Chapters?.length > 0) {
      const firstChapter = course?.courseOutput?.Chapters[0];
      setSelectedChapter(firstChapter);
      GetSelectedChapterContent(0);
    }
  }, [course]);

  useEffect(() => {
    setHandleSidebar(false);
  }, [selectedChapter]);

  const GetCourse = async () => {
    setCourseLoading(true);
    try {
      const result = await db
        .select()
        .from(CourseList)
        .where(eq(CourseList.courseId, Params?.courseId));

      if (result.length > 0) {
        const fetchedCourse = result[0];
        setCourse(fetchedCourse);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        duration: 3000,
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    } finally {
      setCourseLoading(false);
    }
  };

  const GetSelectedChapterContent = async (chapterId) => {
    setContentLoading(true);
    try {
      const result = await db
        .select()
        .from(Chapters)
        .where(
          and(
            eq(Chapters.courseId, course?.courseId),
            eq(Chapters.chapterId, chapterId)
          )
        );

      if (result.length > 0) {
        setSelectedChapterContent(result[0]);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    } finally {
      setContentLoading(false);
    }
  };

  return (
    <div>
      {/* Sidebar */}
      <div
        className={`fixed md:w-72 overflow-scroll bg-white ${
          handleSidebar ? "block w-80 z-50" : "hidden"
        } md:block h-screen border-r shadow-sm`}
      >
        <div className="flex bg-primary text-white justify-between p-4 items-center">
          <h2 className="font-medium text-lg">
            {courseLoading ? (
              <Skeleton width={150} />
            ) : (
              course?.courseOutput?.CourseName
            )}
          </h2>
          <HiChevronDoubleLeft
            size={25}
            className="cursor-pointer md:hidden hover:text-black pt-1"
            onClick={() => setHandleSidebar(false)}
          />
        </div>

        {/* Dashboard Button */}
        <div className="p-4 flex justify-end">
          <Button onClick={() => router.push("/dashboard")} variant="secondary">
            Go to Dashboard
          </Button>
        </div>

        {/* Chapter List */}
        <div>
          {courseLoading
            ? Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="p-4">
                  <Skeleton height={40} />
                </div>
              ))
            : course?.courseOutput?.Chapters.map((chapter, index) => (
                <div
                  key={index}
                  className={`cursor-pointer hover:bg-primary/30 ${
                    selectedChapter?.ChapterName === chapter?.ChapterName &&
                    "bg-primary/30"
                  }`}
                  onClick={() => {
                    setSelectedChapter(chapter);
                    GetSelectedChapterContent(index);
                  }}
                >
                  <ChapterListCard chapter={chapter} index={index} />
                </div>
              ))}
        </div>
      </div>

      {/* Content Div (Right Side) */}
      <div className="md:ml-72 p-10">
        {contentLoading ? (
          <div>
            <Skeleton height={30} width={200} />
            <Skeleton height={200} className="my-5" />
            <Skeleton height={150} count={3} className="my-3" />
          </div>
        ) : (
          <ChapterContent
            chapter={selectedChapter}
            content={selectedChapterContent}
            handleSideBarFunction={() => handleSideBarFunction()}
          />
        )}
      </div>
    </div>
  );
}

export default CourseStart;
