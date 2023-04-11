import Navbar from '@/components/navbar';
import { useState, useEffect } from 'react';
import { SelectedPage } from '@/shared/types';
import Home from '@/components/home';
import Benefits from '@/components/benefits';
import OurClasses from '@/components/ourClasses';
import ContactUs from '@/components/contactUs';
import Footer from '@/components/footer';

export default function App() {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0){
        setSelectedPage(SelectedPage.Home);
        setIsTopOfPage(true);
      }
      else{
        setIsTopOfPage(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  return (
    <div className='app bg-gray-20'>
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage}/>
      <ContactUs setSelectedPage={setSelectedPage}/>
      <Footer/>
    </div>
  );
}
