import { FC } from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";
// import cn from 'classnames';

type Props = {
  page: string;
  selectedPage: string;
  setSelctedPage: (vlue: string) => void;
}

const Link: FC<Props> = ({
  page,
  selectedPage,
  setSelctedPage,
}) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "");

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
