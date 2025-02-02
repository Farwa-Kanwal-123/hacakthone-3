
import About from '@/components/aboutPage/About';
import FoodMenu from '@/components/aboutPage/FoodMenu';
import TeamMembers from '@/components/aboutPage/TeamMembers';
import Testimonial from '@/components/aboutPage/Testimonial';
import Hero from '@/components/OthersHero';

const AboutUs = () => {
  return (
    <div>
        <Hero heading='About Us'/>
        <About/>
        <TeamMembers/>
        <Testimonial/>
        <FoodMenu/>
    </div>
  )
}

export default AboutUs;