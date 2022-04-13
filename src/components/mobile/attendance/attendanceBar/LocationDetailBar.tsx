import { useNavigate, useLocation } from "react-router-dom";
import SelectItem from "./SelectItem";
import * as S from "./style";
import QueryString from "query-string";
import { useQuery } from "react-query";
import locationApi from "../../../../lib/api/mobile/location/locationApi";
import { useRecoilState } from "recoil";
import { LoactionId } from "../../../../modules/mobile/atom/location";
import { LocationType } from "../../../../lib/interface/mobile/location";

const LocationDetailBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryData = QueryString.parse(location.search);
  const floor: any = queryData.floor;

  const [selected, setSelected] = useRecoilState(LoactionId);

  const selectedHandlerColor = (item: LocationType) => {
    localStorage.setItem("locationId", String(item?.id));
    navigate(`/attendance?floor=${floor}&id=${item.id}`);
    setSelected(item.id);
  };

  const { data: placeValue } = useQuery(
    ["place_value", floor],
    () => locationApi.getLocationFloor(floor),
    {
      enabled: !!floor,
      cacheTime: Infinity,
      staleTime: Infinity,
      suspense: false,
    }
  );

  return (
    <S.SelectBarWrapper>
      {placeValue?.data?.map((item: LocationType) => (
        <SelectItem
          key={item.id}
          item={item}
          selected={selected}
          selectedHandlerColor={selectedHandlerColor}
        />
      ))}
    </S.SelectBarWrapper>
  );
};

export default LocationDetailBar;
