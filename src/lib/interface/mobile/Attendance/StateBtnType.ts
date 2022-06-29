export interface StateBtnType {
  id: number;
  name: string;
  floor?: number;
  major?: {
    id: number;
    name: string;
  };
}

export const StateBtnList: StateBtnType[] = [
  {
    id: 1,
    name: "외출",
  },
  {
    id: 2,
    name: "현체",
  },
  {
    id: 3,
    name: "귀가",
  },
  {
    id: 4,
    name: "이동",
  },
  {
    id: 5,
    name: "취업",
  },
];

export const ClassButtonList: StateBtnType[] = [
  {
    id: 1,
    name: "전체",
  },
  {
    id: 2,
    floor: 2,
    name: "2층",
  },
  {
    id: 3,
    floor: 3,
    name: "3층",
  },
  {
    id: 4,
    floor: 4,
    name: "4층",
  },
  {
    id: 5,
    floor: 5,
    name: "5층",
  },
  {
    id: 6,
    floor: 6,
    name: "특별실",
  },
];

export const FloorBtnList: StateBtnType[] = [
  {
    id: 2,
    floor: 2,
    name: "2층",
  },
  {
    id: 3,
    floor: 3,
    name: "3층",
  },
  {
    id: 4,
    floor: 4,
    name: "4층",
  },
  {
    id: 5,
    floor: 5,
    name: "5층",
  },
];
