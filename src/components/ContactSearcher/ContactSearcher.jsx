import PropTypes from 'prop-types';

export default function ContactSearcher (props){
    const {filter, onChange} = props;
    return(
        <>
            <label htmlFor="filter">Find contaacts by name</label>
            <div>
                <input 
                type="text" 
                name='filter' 
                value={filter} 
                onChange={onChange} 
                placeholder='Enter name of contact to start search' />
            </div>
        </>
    )
}

ContactSearcher.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };