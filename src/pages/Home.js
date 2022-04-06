import React from 'react';
import Navigations from '../componants/Navigations';
import Header from '../componants/Header';
import Logo from '../componants/Logo';
import SocialNetworks from '../componants/SocialNetworks';
import Carte from '../componants/Carte';

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
            <Carte carteNumber={0} />
            <Carte carteNumber={1} />
            <Carte carteNumber={2} />
            <Carte carteNumber={3} />
            <Carte carteNumber={4} />
            <Carte carteNumber={5} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
