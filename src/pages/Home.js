import React from 'react';
import Navigations from '../componants/Navigations';
import Header from '../componants/Header';
import Logo from '../componants/Logo';
import SocialNetworks from '../componants/SocialNetworks';

const Home = () => {
  return (
    <main>
      {/*page principale */}
      <div className="home">
        {/*composants : logo, navigation, réseaux sociaux*/}
        <Navigations />
        <Header />
        <Logo />
        <SocialNetworks />
        {/*Image de fond */}
        <div className="bg-image"></div>
        {/*Contenu de la page */}
        <div className="home-main">
          <div className="main-content">
            
          </div>
          
        </div>
      </div>
    </main>
  );
};

export default Home;
