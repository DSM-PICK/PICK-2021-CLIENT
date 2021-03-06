import { selector, selectorFamily } from "recoil";
import { LocationType } from "../../../../lib/interface/mobile/location";
import location from "../../../../lib/api/mobile/location/locationApi";

export const locationListSelector = selector<LocationType[]>({
  key: "locationListSelector/get",
  get: async () => {
    try {
      const res = await location.getLocationList();
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
});

export const locationFloorSelector = selectorFamily<LocationType[], number>({
  key: "locationFloorSelector/get",
  get: (floor) => async () => {
    try {
      const res = await location.getLocationFloor(floor);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
});
