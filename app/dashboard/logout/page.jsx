"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import Link from "next/link";
import { useState } from "react";
import { useClerk } from "@clerk/nextjs";

function Logout() {
  const [alertOpen, setAlertOpen] = useState(true);
  const { signOut } = useClerk();

  return (
    <div>
      <AlertDialog open={alertOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure bhai?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone.(pack aythadi) Press Sign Out to continue.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Link href="/dashboard">
              <AlertDialogCancel onClick={() => setAlertOpen(false)}>
                Cancel
              </AlertDialogCancel>
            </Link>
            <AlertDialogAction
              className="bg-red-500 hover:bg-red-600"
              onClick={() => {
                signOut({ redirectUrl: "/" });
                setAlertOpen(false);
              }}
            >
              Sign Out
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default Logout;
