interface Props {
  setStateSelect: any;
  setState: any;
  stateSelect: boolean;
  item: string;
  modalOff: any;
}

const StateListItem = (props: Props) => {
  return (
    <li
      onClick={(e) => {
        props.setState(props.item);
        props.setStateSelect(!props.stateSelect);
        props.modalOff(e);
      }}
    >
      {props.item}
    </li>
  );
};

export default StateListItem;
