import * as React from "react";
import { Home, Info } from "@mui/icons-material";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SearchIcon from '@mui/icons-material/Search';
import MenuItem from "./MenuItem";
import { Translation } from "react-i18next";

export const AppMainMenu = (
  <Translation>
    {(t, { i18n }) => (
      <>
        <MenuItem label={t("mHome")} link="/" icon={<Home />} />
        <MenuItem label={t("mMyBooks")} matchSubPaths link="/myBooks" icon={<LibraryBooksIcon />} />
        <MenuItem label={t("mSearch")} link="/search" icon={<SearchIcon />} />
      </>
    )}
  </Translation>
);
