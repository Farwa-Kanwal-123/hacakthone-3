import { foodmenu, menuItems } from '@/constant/aboutPage/FoodMenu'

const Foodmenu = () => {
  return (
    <div className='max-w-[1320px] mx-auto'>
      <div className=" wrapper">
        <div className="text-center mb-10">
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-gray-800">
            Our Food Menu
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque
            massa congue.
          </p>
        </div>
        <div className="flex justify-center mb-12">
          <ul className="flex flex-wrap justify-center gap-4 text-gray-600 text-sm sm:text-base">
            {foodmenu.map((item, index) => (
              <li key={index} className="cursor-pointer  hover:underline font-semibold  hover:text-[#FF9F0D] transition-colors duration-300">{item}</li>
            )
            )}
          </ul>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {menuItems.map((item, index) => (
            <div key={index} className="flex justify-between  items-center border-b pb-4 hover:bg-gray-100 transition-all duration-300 px-4 sm:px-6">
              <div>
                <h3 className={`text-lg sm:text-xl font-bold ${item.highlighted ? 'text-[#FF9F0D]' : 'text-gray-800'}`}>{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
                <p className="text-sm sm:text-base text-gray-600">{item.calories}</p>
              </div>
              <span className="text-lg sm:text-xl font-bold text-[#FF9F0D]">{item.price}</span>
            </div>
          ))}
        </div>

        <div className='py-8 mb-10 flex justify-center'>
          <button className='border-2 border-orange-200 py-2 px-10 text-orange-300'>View menu</button>
        </div>
      </div>
    </div>
  );
};

export default Foodmenu;