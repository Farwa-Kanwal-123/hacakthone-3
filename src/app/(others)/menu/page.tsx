import Experience from '@/components/Experience'
import Dessert from '@/components/menuPage/Dessert'
import Drinks from '@/components/menuPage/Drinks'
import MainCourse from '@/components/menuPage/MianCourse'
import PartnerClients from '@/components/menuPage/PartnerClients'
import StarterMenu from '@/components/menuPage/StarterMenu'
import OthersHero from '@/components/OthersHero'
import React from 'react'

const Menu = () => {
  return (
    <div>
        <OthersHero heading="Menu"/>
        <StarterMenu/>
        <MainCourse/>
        <Experience/>
        <Dessert/>
        <Drinks/>
        <PartnerClients/>

    </div>
  )
}

export default Menu