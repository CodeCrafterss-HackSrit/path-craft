"use client";
import { UserInputContext } from "@/app/_context/UserInputContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React, { useContext, useState } from "react";

function SelectCategory() {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);
  const [inputCategory, setInputCategory] = useState("");

  const handleCategoryChange = (category, active) => {
    setUserCourseInput((prev) => ({
      ...prev,
      category: category,
      activeInput: active,
    }));
  };

  return (
    <div className="px-10 md:px-20">
      <h2 className="my-5">Select the Course Path Category</h2>

      {/* Input Field for Category */}
      <div className="flex gap-2 p-5 border items-center justify-between rounded-xl bg-green-50 hover:border-primary hover:bg-green-50">
        <Input
          placeholder="Enter the category"
          className="h-14 md:h-10 text-xl"
          onChange={(e) => setInputCategory(e.target.value)}
        />
        <Button
          disabled={inputCategory.length <= 0}
          onClick={() => {
            handleCategoryChange(inputCategory, true);
          }}
        >
          <h2>Save</h2>
        </Button>
      </div>

      {/* Display Selected Category */}
      {userCourseInput?.activeInput && (
        <div className="flex flex-col p-5 border items-center border-primary bg-green-50 justify-center rounded-xl">
          <Image src="/other.png" alt="Category Icon" width={50} height={50} />
          <h2>{userCourseInput?.category}</h2>
        </div>
      )}
    </div>
  );
}

export default SelectCategory;
