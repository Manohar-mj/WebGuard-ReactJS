import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { NavBar, MainSection, BackgroundSection, AdditionalSection, Features, AdditionalSection2, CombinedSection, AdditionalSection3, WebGuardComponent, WebGuardComponent2, CustomComponent, AdditionalSection4,ReviewCardComponent, IconSectionComponent, FooterComponent, NewComponent } from './App';
ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <MainSection />
    <BackgroundSection/>
    <AdditionalSection/>
    <Features/>
    <AdditionalSection2/>
    <CombinedSection/>
    <AdditionalSection3/>
    <WebGuardComponent/>
    <WebGuardComponent2/>
    <CustomComponent/>
    <AdditionalSection4/>
    <ReviewCardComponent/>
    <IconSectionComponent/>
    <NewComponent/>
    <FooterComponent/>
  </React.StrictMode>,
  document.getElementById('root')
);