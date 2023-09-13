import { FC } from 'react';
import useMediaQuery from '@/hooks/useMediaQuery';
import { SelectedPage } from '@/types';
import ActionButton from '@/actionButton/ActionButton';

import HomePageText from '@/assets/HomePageText.png';
import HomePageGraphic from '@/assets/HomePageGraphic.png';
import SponsorRedBull from '@/assets/SponsorRedBull.png';
import SponsorForbes from '@/assets/SponsorForbes.png';
import SponsorFortune from '@/assets/SponsorFortune.png';

type Props = {
  setSelectedPage: Dispatch<SetStateAction<SelectedPage>>;
}

const Home: FC<Props> = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section 
      id='home'
      className="gap-16 bg-gray-20 py-10 mb:h-full md:pb-0"
    >

    </section>
  )
}

export default Home
