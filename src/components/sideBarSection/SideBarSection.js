const SideBarSection = ({ name, onHandleFilters }) => {
  return <li onClick={onHandleFilters}>{name}</li>;
};

export default SideBarSection;
