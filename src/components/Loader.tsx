import { CgSpinner } from "react-icons/cg"

export function Loader() {
  return (
    <div className="flex justify-center items-center h-screen">
      <CgSpinner className="animate-spin text-6xl text-orange-500" />
    </div>
  )
}

