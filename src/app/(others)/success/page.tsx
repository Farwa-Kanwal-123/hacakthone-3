
import SuccessPageContent from "./SuccessPageContent"
import { Loader } from "@/components/Loader";
import { Suspense } from "react";


const SuccessPage = () => {
  return (
    <Suspense fallback={<div><Loader/></div>}>
      <SuccessPageContent />
    </Suspense>
  );
};

export default SuccessPage;
