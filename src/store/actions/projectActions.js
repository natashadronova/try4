export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {

    //make async call to database
    const firestore = getFirestore();
    firestore.collection('orders').add({
      ...project,
      authorFirstName: 'Nat',
      authorLastName: 'Dronova',
      authorID: 1234,
      submitted: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT', project: project });
    }).catch((err) => {
      dispatch({ type: 'CREATE_PROJECT_ERROR', err });
    })
  }
}