import Image from 'next/image'
import {chef} from '@/constant/aboutPage/TeamMembers'


const TeamMember = () => {
    return (
      <div className="relative">
        <div className="max-w-[1320px] mx-auto w-full mt-[50px] h-[460px] bg-[#FF9F0DD9]   z-10 flex flex-col items-center justify-center">
        <div className="w-[418px] mb-8 h-auto text-center">
          <h2 className="font-helvetica font-bold text-[#ffffff] text-[48px]">Team Member</h2>
          <p className="font-inter text-[#ffffff] text-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
              pharetra dictum neque massa congue
          </p>
        </div>
        </div>
        <div className=" wrapper pt-[-50px] z-20 py-12 bg-gray-50">
        <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
          {chef.map((item) => (
            <div key={item.id} className="bg-white shadow-md w-full relative md:mt-[-150px] mt-5 hover:shadow-lg transition-shadow duration-300 ">
        <Image src={item.image} alt="chef" width={312} height={398} className="w-full h-auto"/>
        <div className="mt-4">
          <h2 className="md:text-lg sm:text-sm text-lg font-bold text-center text-gray-700 px-4">{item.name}</h2>
          <p className="text-sm text-center text-gray-600  px-4">{item.chef}
  </p>
        </div>
      </div>
            ))}
          </div>
        </div>
       
      </div>
    );
  };
  
  export default TeamMember;