import initialState from './initialState';

export function itemsHasErrored(state = false, action) {
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            return action.hasErrored;
        default:
            return state;
    }
}

export function itemsIsLoading(state = false, action) {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return action.isLoading;
        default:
        return state;
    }
}

export function items(state = initialState.notes, action) {
    switch(action.type) {

      case 'ITEMS_GET_NOTES_SUCCESS':
       return action.items

      case 'ITEMS_ADD_NOTE':
        return [
          ...state, action.item
        ]

      case 'ITEMS_UPDATE_NOTE':
        const newState = Object.assign([], state);
        const indexOfItemToUpdate = state.findIndex(item => { return item.id === action.item.id});
        newState[indexOfItemToUpdate] = action.item;
        return newState


      case 'ITEMS_DELETE_NOTE': {
        const newState = Object.assign([], state);
        const indexOfItemToDelete = state.findIndex(item => { return item.id === action.id});
        newState.splice(indexOfItemToDelete, 1);
        return newState;
      }

      case 'TOGGLE_CARD':
      return state.map(item =>
        (item.id === action.id)
          ? {...item, completed: !item.completed}
          : item
      )
      case 'FIND_NOTES':
      return state.map(item =>
        (action.typeText === '') ? {...item, isShown : true} :
           (!(item.title && item.title.includes(action.typeText)) && !(item.text && item.text.includes(action.typeText))) ?
              {...item, isShown: false}: {...item, isShown : true}
      )

      default: 
        return state;
    }
  }