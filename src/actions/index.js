export const findNotes = typeText => ({
  type: 'FIND_NOTES',
  typeText
})

export function itemsHasErrored(bool) {
  return {
      type: 'ITEMS_HAS_ERRORED',
      hasErrored: bool
  };
}

export function itemsIsLoading(bool) {
  return {
      type: 'ITEMS_IS_LOADING',
      isLoading: bool
  };
}

export function itemsGetNotesSuccess(items) {
  return {
      type: 'ITEMS_GET_NOTES_SUCCESS',
      items
  };
}

export function itemsDeleteNote(id) {
  return {
      type: 'ITEMS_DELETE_NOTE',
      id
  };
}

export function itemsAddNote(item) {
  return {
      type: 'ITEMS_ADD_NOTE',
      item
  };
}

export function itemsUpdateNote(item) {
  return {
      type: 'ITEMS_UPDATE_NOTE',
      item
  };
}

export function itemsGetNotes(url) {
  return (dispatch) => {
      dispatch(itemsIsLoading(true));

      fetch(url)
          .then((response) => {
              if (!response.ok) {
                  throw Error(response.statusText);
              }

              dispatch(itemsIsLoading(false));

              return response;
          })
          .then((response) => response.json())
          .then((items) => dispatch(itemsGetNotesSuccess(items)))
          .catch(() => dispatch(itemsHasErrored(true)));
  };
}

export function updateNote(url, item) {
  
  return (dispatch) => {
 
    fetch(url, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify({
        id: item.id,
        title: item.title, 
        text: item.text, 
        isShown: true, 
        isCompleted: item.isCompleted,
        isArchived: item.isArchived
      })
    })
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }

            return response;
        })
        .then((response) => response.json())
        .then(() => dispatch(itemsUpdateNote(item)))
        .catch(() => dispatch(itemsHasErrored(true)));
  };
}

export function addNote(url, title, text) {
  return (dispatch) => {

    fetch(url, 
      {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify({
          title: title, 
          text: text, 
          isShown: true, 
          isCompleted: false,
          isArchived: false
        })
      })
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }

            return response;
        })
        .then((response) => response.json())
        .then((item) => dispatch(itemsAddNote(item)))
        .catch(() => dispatch(itemsHasErrored(true)));
  };
}

export function deleteNote(url, id) {
  return (dispatch) => {

    fetch(url,
      {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
      })
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        })

        .then((response) => response.json())
        .then(() => dispatch(itemsDeleteNote(id)))
        .catch(() => dispatch(itemsHasErrored(true)));
  };
}