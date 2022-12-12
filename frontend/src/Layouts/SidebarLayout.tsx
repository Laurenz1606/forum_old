import React, { ReactNode } from "react";

//the props for the sidebar layout
type SidebarLayoutProps = {
  children: ReactNode | ReactNode[];
  //add more props here
};

//the sidebar layout
export default function SidebarLayout({ children }: SidebarLayoutProps) {
  return <div>{children}</div>;
}
