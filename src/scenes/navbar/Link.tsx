import { FC, Dispatch, SetStateAction } from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";
// import cn from 'classnames';
import { SelectedPage } from '@/types';

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelctedPage: Dispatch<SetStateAction<SelectedPage>>;
}

const Link: FC<Props> = ({
  page,
  selectedPage,
  setSelctedPage,
}) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage
        ? 'text-primary-500'
        : 'transition duration-500 hover:text-primary-300' }`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelctedPage(lowerCasePage)}
    >
      { page }
    </AnchorLink>
  )
}

export default Link
