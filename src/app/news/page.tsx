import { AllNewsPage } from "@/components/news";
import { Suspense } from "react";

export default function AllNews() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AllNewsPage />
    </Suspense>
  );
}
