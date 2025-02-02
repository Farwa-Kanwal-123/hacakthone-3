import Image from "next/image"
import { FaStar } from "react-icons/fa6"
import { CiStar } from "react-icons/ci"

export function LatestProducts() {
  return (
    <>
      <h2 className="font-helvetica text-[20px] font-bold mt-2 mb-2">Latest Products</h2>
      <div className="w-[252px] mb-2 space-y-2">
        <div className="flex items-center gap-4">
          <div className="object-cover w-[72px] h-16 relative">
            <Image src="/images/me4.png" alt="Fresh Breakfast" width={100} height={100} className="w-[72px] h-[65px]" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#333333]">Fresh Breakfast</h3>
            <div className="flex w-[63px] gap-1 mb-1 h-[9px]">
              <FaStar size={10} className="text-[#FF9F0D]" />
              <FaStar size={10} className="text-[#FF9F0D]" />
              <CiStar size={10} />
              <CiStar size={10} />
              <CiStar size={10} />
            </div>
            <div className="text-orange-500">14.5$</div>
          </div>
        </div>
      </div>
    </>
  )
}

