const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: true };
    case "SET_PEOPLE":
      return {
        ...state,
        loading: false,
        people: action.payload,
      };
    case "SET_SEARCH_QUERY":
      return { ...state, searchQuery: action.payload };
    case "SET_FILTERED":
      return { ...state, filteredPeople: action.payload };
    case "SET_CURRENT":
      return { ...state, currentPage: action.payload };
    case "END_LOADING":
      return { ...state, loading: false };
    case "SET_EDIT_MODE":
      return { ...state, editMode: true };
    case "SET_VIEW_MODE":
      return { ...state, editMode: false };
    case "UPDATE_PERSON":
      return {
        ...state,
        filteredPeople: state.filteredPeople.map((person, index) =>
          index === action.payload.index ? action.payload.updatedPerson : person
        ),
      };
    default:
      return state;
  }
};

export const initialState = {
  loading: true,
  people: [],
  searchQuery: "",
  filteredPeople: [],
  currentPage: 1,
  itemsPerPage: 10,
  editMode: false,
};

export default userReducer;
