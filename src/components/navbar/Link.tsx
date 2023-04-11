import { SelectedPage } from '@/shared/types';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    page: string,
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void
}

const Link = ({page, selectedPage, setSelectedPage}: Props) => {
  const ref = page.toLocaleLowerCase().replace(/ /g, '') as SelectedPage;
  return (
    <AnchorLink
      className={`${selectedPage === ref ? 'text-primary-500' : ''}
      transition duration-500 hover:text-primary-300`}
      href={`#${ref}`}
      onClick={() => setSelectedPage(ref)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
