import axios from "axios";
const API_ENDPOINT: string = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

export const fetchMovie = async (movieName) =>
  await axios.get(`${API_ENDPOINT}&s=${movieName}`);

export const fetchMovieDetail = async (movieId) =>
  await axios.get(`${API_ENDPOINT}&i=${movieId}`);

// export const regiterUser = async (userDetail) => {
//   try {
//     const user = await auth
//       .createUserWithEmailAndPassword(userDetail.email, userDetail.password)
//       .then((res: any) => {
//         console.log("res", res);
//         return res;
//       });
//     console.log("user", user);
//     //  const name = yield call(getUserName);
//     //  yield put({ type: "UPDATE_NAME_SUCCESS", payload:name });
//   } catch (e) {
//     console.log("error", e);
//   }
// };
