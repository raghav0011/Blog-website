import React from 'react'
import MainLayout from '../../components/MainLayout';
import Hero from './container/Hero';
import Articles from './container/Articles';
import CTA from './container/CTA';
import Welcome from '../../components/aboutUs/Welcome';
import Testimonial from '../../components/home/Testimonial';
import ReasonChooseUs from '../../components/aboutUs/ReasonChooseUs';
import WhoWeHelp from '../../components/home/WhoWeHelp';

const HomePage = () => {
  return (
    <div>
      <MainLayout>
        <Hero />
        <Welcome/>
        {/* <Articles /> */}
        <WhoWeHelp/>
        <ReasonChooseUs/>
        <Testimonial />
        <CTA/>
      </MainLayout>
    </div>
  );
}

export default HomePage;
