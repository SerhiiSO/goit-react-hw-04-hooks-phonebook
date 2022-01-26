import PropTypes from 'prop-types';
import { SearcherStyled,SearcherLableStyled, InputStyled } from './ContactSearcher.styled';
export default function ContactSearcher(props) {
  const { filter, onChange } = props;
  return (
    <SearcherStyled>
      <SearcherLableStyled htmlFor="filter">Find contacts by name</SearcherLableStyled>
      
        <InputStyled
          type="text"
          name="filter"
          value={filter}
          onChange={onChange}
          placeholder="Enter name for search"
        />
      
    </SearcherStyled>
  );
}

ContactSearcher.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
