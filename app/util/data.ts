import { FC, SVGProps } from "react";
import Dash from "../component/icons/Dash";
import Report from "../component/icons/Report";
import Geo from "../component/icons/Geo";
import Conversation from "../component/icons/Conversation";
import Deals from "../component/icons/Deals";
import Export from "../component/icons/Export";
import { Cust1, Cust2 } from "../component/icons/Cust";
import { Logout, Setting } from "../component/icons/User";

export interface items {
  svg: FC<SVGProps<SVGSVGElement>>;
  name: string;
}

export interface items_type_two extends items {
  svg2: FC<SVGProps<SVGSVGElement>>;
}

export const sidebarData: Array<items> = [
  {
    svg: Dash,
    name: "Dashboard",
  },
  {
    svg: Report,
    name: "All reports",
  },
  {
    svg: Geo,
    name: "Geography",
  },
  {
    svg: Conversation,
    name: "Conversations",
  },
  {
    svg: Deals,
    name: "Deals",
  },
  {
    svg: Export,
    name: "Export",
  },
  {
    svg: Setting,
    name: "Settings",
  },
];

export interface items2 {
  id: number;
  img: string;
  name: string;
  title: string;
}

export const SectionTwoData: Array<items2> = [
  {
    id: 1,
    img: "/Image/Rectangle 2.png",
    name: "Chris Friedkly",
    title: "Supermarket Villanova",
  },
  {
    id: 2,
    img: "/Image/Rectangle 3.png",
    name: "Maggie Johnson",
    title: "Oasis Organic Inc.",
  },
  {
    id: 3,
    img: "/Image/Rectangle 4.png",
    name: "Gael Harry",
    title: "New York Finest Fruits",
  },
  {
    id: 4,
    img: "/Image/Rectangle 5.png",
    name: "Jenna Sullivan",
    title: "Walmart",
  },
];

export interface Chats {
  id: number;
  img: string;
}

export const ChatsArray: Array<Chats> = [
  {
    id: 1,
    img: "/Image/Rectangle 3.png",
  },
  {
    id: 2,
    img: "/Image/Rectangle 6.png",
  },
  {
    id: 3,
    img: "/Image/Rectangle 7.png",
  },
  {
    id: 4,
    img: "/Image/Rectangle 8.png",
  },
];

export interface States {
  id: number;
  left: string;
  right: string;
  width: number;
}

export const StateData: Array<States> = [
  {
    id: 1,
    left: "NY",
    right: "120k",
    width: 272,
  },
  {
    id: 2,
    left: "MA",
    right: "80k",
    width: 229,
  },
  {
    id: 3,
    left: "NH",
    right: "70k",
    width: 207,
  },
  {
    id: 4,
    left: "OR",
    right: "50k",
    width: 150,
  },
];

export const DivwithdropdownData: Array<items_type_two> = [
  {
    svg: Cust1,
    name: "Customers",
    svg2: Cust2,
  },
];

export interface Deals {
  id: number;
  title: string;
}

export const DealsData: Array<Deals> = [
  {
    id: 1,
    title: "Fruit2Go",
  },
  {
    id: 2,
    title: "Marshall's MKT",
  },
  {
    id: 3,
    title: "CCNT",
  },
  {
    id: 4,
    title: "Joana Mini-market",
  },
  {
    id: 5,
    title: "Little Brazil Vegan",
  },
  {
    id: 6,
    title: "Target",
  },
  {
    id: 7,
    title: "Organic Place",
  },
  {
    id: 8,
    title: "Morello's",
  },
];
