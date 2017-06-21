export const tambahAction = () => {
  return {
    type: 'TAMBAH_UMUR',
  };
}

export const ubahNamaAction = (newName) => {
  return {
    type: 'UBAH_NAMA',
    payload: newName,
  };
}