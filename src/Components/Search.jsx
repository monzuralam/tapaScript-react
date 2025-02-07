import PropTypes from "prop-types";

const Search = ({ search, onSetSearch }) => {
  return (
    <div className="w-1/3">
      <input
        type="search"
        value={search}
        onChange={(event) => {
          onSetSearch(event.target.value);
        }}
        className="w-full border rounded px-4 py-2"
        placeholder="Search car..."
      />
    </div>
  );
};

Search.propTypes = {
  search: PropTypes.string.isRequired,
  onSetSearch: PropTypes.func.isRequired,
};

export default Search;
