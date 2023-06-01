import { H2, Input } from './Filter.styled';
import { setFilterName } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter);
  return (
    <>
      <H2>Find by Name</H2>
      <Input
        onChange={e => dispatch(setFilterName(e.currentTarget.value))}
        value={filterValue.filter}
        type="text"
        name="filter"
      />
    </>
  );
};
