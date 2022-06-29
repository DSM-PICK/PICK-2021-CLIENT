import { atom } from "recoil";

export const afterSchoolStatus = atom({
  key: "after_school",
  default: '',
});
export const afterSchoolDay = atom({
  key: 'afterschoolDay',
  default: {
    day: '',
    period: 0
  },
})
export const afterschoolClass = atom({
  key: 'afterschoolClass',
  default: -1,  
})