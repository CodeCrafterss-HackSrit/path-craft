import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import Image from "next/image";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

function LoadingDialog({ loading }) {
  return (
    <div>
      <AlertDialog open={loading}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              <VisuallyHidden>Loading Dialog</VisuallyHidden>
            </AlertDialogTitle>
            <AlertDialogDescription asChild>
              <div className="flex flex-col items-center py-10">
                <Image src={"/loader.gif"} alt="loader" width={100} height={100} />
                <h2>
                  Please hold on ... engine is curating the course path.
                </h2>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default LoadingDialog;