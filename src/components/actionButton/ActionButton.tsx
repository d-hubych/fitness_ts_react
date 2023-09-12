import { FC, ReactNode, Dispatch, SetStateAction } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedPage } from '@/types';

type Props = {
  children: ReactNode;
  setSelectedPage: Dispatch<SetStateAction<SelectedPage>>;
}

const ActionButton: FC<Props> = ({ children, setSelectedPage }) => {
  return (
    <AnchorLink
      className="
        rounded-md
        bg-secondary-500
        px-10
        py-2
        hover:bg-primary-500
        hover:text-white"
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}

    >
      { children }
    </AnchorLink>
  )
} 

export default ActionButton
