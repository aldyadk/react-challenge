export const userSubmit = (user) => {
  return {
    type: 'SUBMIT_USER',
    payload: user,
  };
}

export const userEdit = (user) => {
  return {
    type: 'UBAH_USER',
    payload: user,
  };
}

export const dataLoad = (data) => {
  return {
    type: 'LOAD_DATA',
    payload: data,
  };
}