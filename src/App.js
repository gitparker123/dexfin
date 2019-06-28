import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Header from './Components/Sections/Header';
import CardSection from './Components/Sections/CardSection';
import Buttons from './Components/Sections/Buttons';
import ImageSection from './Components/Image/ImageSection';
import ImageSection2 from './Components/Image/ImageSection2';
import AdvanceTool from './Components/Tools/AdvanceTool';
import Digital from './Components/Digital/Digital';
import DigitalCard from './Components/DigitalCard/DigitalCard';
import DigitalSecond from './Components/DigitalCard/DigitalSecond';
import Services from './Components/DigitalCard/Services';
import ServiceSection from './Components/DigitalCard/ServiceSection';
import Trading from './Components/Tools/Trading';
import Support from './Components/Support/Support';
import TableHeading from './Components/Table/TableHeading';
import CustomTable from './Components/Table/CustomTable';
import AboutUs from './Components/Sections/AboutUs';
import Setup from './Components/Account/Setup';
import Footer from './Components/Footer/Footer';
import Copyright from './Components/Copyright/Copyright';
import './App.scss';

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <CardSection />
      <Buttons/>
      <ImageSection />
      <AdvanceTool />
      <Digital />
      <DigitalCard />
      <DigitalSecond />
      <ImageSection2 />
      <Trading />
      <Services />
      <ServiceSection />
      <Support />
      {/* <TableHeading />
      <CustomTable /> */}
      <AboutUs/>
      <Setup />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
