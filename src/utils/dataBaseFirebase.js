import firebaseApp from './firebaseApp';

const { firebase } = firebaseApp();

const dataBaseFirebase = (user, id, movieOrSeries) => {
  let moviesList;
  let tvShowsList;

  firebase
    .firestore()
    .collection('users')
    .get()
    .then((snapshot) => {
      const filter = snapshot.docs.filter((doc) => doc.id === user.uid);
      moviesList = filter[0].data().watchlist.movies;
      tvShowsList = filter[0].data().watchlist.tvShows;
    })
    .then(() => {
      if (id != null && movieOrSeries != null) {
        if (movieOrSeries === 'movie') {
          moviesList.push(id);
        } else if (movieOrSeries === 'tvshow') {
          tvShowsList.push(id);
        }
      }
    })
    .then(() => {
      if (id != null && movieOrSeries != null) {
        firebase
          .firestore()
          .collection('users')
          .doc(user.uid)
          .set({
            info: {
              email: user.email,
              name: user.displayName,
              photo: user.photoURL,
            },
            watchlist: {
              movies: moviesList,
              tvShows: tvShowsList,
            },
          });
      }
    })
    .catch((error) => {
      console.log('Error getting document:', error);
    });
};

export default dataBaseFirebase;
