import { FC, Dispatch, SetStateAction, useState } from 'react';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from '@/assets/Logo.png';
import Link from './Link';
import { SelectedPage } from '@/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '../actionButton/ActionButton';


type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: Dispatch<SetStateAction<SelectedPage>>;
}

const Navbar: FC<Props> = ({ selectedPage, setSelectedPage }) => {
  const flexBetween = 'flex items-center justify-between';
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

  return (
    <nav>
      <div
        className={`${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img src={Logo} alt="logo" />
            {/*LEFT SIDE /\ */}
            {/*RIGHT SIDE \/ */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-sm`}>
                <Link
                  page='Home'
                  selectedPage={ selectedPage }
                  setSelectedPage={ setSelectedPage }
                />
                <Link
                  page='Benefits'
                  selectedPage={ selectedPage }
                  setSelectedPage={ setSelectedPage }
                />
                <Link
                  page='Our Classes'
                  selectedPage={ selectedPage }
                  setSelectedPage={ setSelectedPage }
                />
                <Link
                  page='Contact Us'
                  selectedPage={ selectedPage }
                  setSelectedPage={ setSelectedPage }
                />
              </div>
              <div className={`${flexBetween} gap-8`}>
                <p>Sign In</p>
                <ActionButton children="Become a Member" setSelectedPage={ setSelectedPage } />
              </div>
              </div>
            ) : (
              <button 
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

