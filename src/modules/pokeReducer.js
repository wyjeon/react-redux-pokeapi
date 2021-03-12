import axios from 'axios';

const POKE_SUCCESS = 'POKE_SUCCESS';
const POKE_FAIL = 'POKE_FAIL';

export const fetchPokeData = pokeName => async dispatch => {
  try {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokeName}`
    );
    const data = res.data;
    dispatch({
      type: POKE_SUCCESS,
      payload: data,
    });
  } catch (Err) {
    dispatch({
      type: POKE_FAIL,
    });
  }
};

const initialState = {
  success: false,
};

function pokeReducer(state = initialState, action) {
  switch (action.type) {
    case POKE_SUCCESS:
      const {
        name,
        order,
        sprites,
        height,
        weight,
        stats,
        abilities,
        types,
      } = action.payload;
      return {
        ...state,
        success: true,
        pokemon: {
          name,
          order,
          sprites,
          height,
          weight,
          stats,
          abilities,
          types,
        },
      };
    case POKE_FAIL:
      return {
        ...state,
        success: false,
      };
    default:
      return state;
  }
}

export default pokeReducer;
