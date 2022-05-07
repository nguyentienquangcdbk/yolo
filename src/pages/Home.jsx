import React from 'react'
import { Link } from 'react-router-dom'

import Helmet from '../component/Helmet'
import HeroSlide from '../component/HeroSlide'
import Section, {SectionTitle ,SectionBody} from '../component/Section'
import PolicyCard from '../component/PolicyCard'
import Grid from '../component/Grid'

import heroSliderData from '../assets/fake-data/hero-slider'
import policy from '../assets/fake-data/policy'
const Home = () => {
  return (
    <Helmet title="trang chủ">
      
        {/**hero slide */}
          <HeroSlide
              data={heroSliderData}
              control={true}
              auto={true}
              timeOut={5000}
          />
        {/* end hero slide */}
        {/**section start */}
            <Section>
                <SectionBody>
                
                        {
                            policy.map((item, index) => 
                                <PolicyCard
                                    key={index}
                                    name={item.name}
                                    description={item.description}
                                    icon={item.icon}
                                />
                            )
                            // 1:50p
                        }
                    
                </SectionBody>
            </Section>
        {/**section end */}
    </Helmet>
  )
}

export default Home