import { FC } from 'react';
import useMediaQuery from '@/hooks/useMediaQuery';
import { SelectedPage } from '@/types';
import ActionButton from '../actionButton/ActionButton';

import HomePageText from '@/assets/HomePageText.png';
import HomePageGraphic from '@/assets/HomePageGraphic.png';
import SponsorRedBull from '@/assets/SponsorRedBull.png';
import SponsorForbes from '@/assets/SponsorForbes.png';
import SponsorFortune from '@/assets/SponsorFortune.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
  setSelectedPage: Dispatch<SetStateAction<SelectedPage>>;
}

const Home: FC<Props> = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section 
      id='home'
      className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
    >
      {/* IMAGE AND MAIN HEADER */}
      <div 
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
      >

        {/* MAIN HEADER */}
        <div 
          className="z-10 mt-32 md:basis-3/5"
        >

          {/* HEADINGS */}
          <div className="md:-mt-20">
            <div className='relative'>
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>

            <p className="mt-8 text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class Studios to get the Body Shapes That you Dream of.. Get Your Dream Body Now.
            </p>
          </div>

          {/* ACTIONS */}
          <div className='mt-8 flex items-center gap-8'>
            <ActionButton
              buttonName="Join Now"
              setSelectedPage={setSelectedPage}
            />
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>
                Learn More
              </p>
            </AnchorLink>
          </div>
        </div>

        {/* IMAGE */}
        <div className='flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end'>
          <img src={HomePageGraphic} alt="home-page-graphic" />
        </div>
      </div>

        {/* SPONSORS */}
        {isAboveMediumScreens && (
          <div className='h-[150px] w-full bg-primary-100 py-10'>
            <div className='mx-auto w-5/6'>
              <div className='flex w-3/5 items-center justify-between gap-8'>
                <img src={SponsorRedBull} alt="Sponso-RedBull" />
                <img src={SponsorForbes} alt="Sponso-Forbes" />
                <img src={SponsorFortune} alt="Sponso-Fortune" />
              </div>
            </div>
          </div>
        )}
    </section>
  )
}

export default Home
