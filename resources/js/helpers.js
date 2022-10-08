// import Cookies from 'js-cookie';

/** 
 * check device type for page Absent
 * @return "tablet"|"mobile"|"desktop"
 */
export const getDeviceType = () => {
  const ua = navigator.userAgent;

  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  } else if (
    /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)
  ) {
    return "mobile";
  } else {
    return "desktop";
  }
}

// export const checkAuth = async () => {
//   const token = Cookies.get("absentSession")

//   const { results } = (
//     await axios.get(`/api/get_user`, {
//       headers: {
//         'Authorization': `Bearer ${token}`
//       }
//     })
//   ).data ?? {}

//   if (
//       results.message === "Token is Invalid"
//       || results.message === "Token is Expired"
//       || results.message === "Authorization Token not found"
//   ) {
//       // if (this.$route.name !== "login") {
//       //     await Cookies.remove("absentSession")
//       //     return this.$router.push({
//       //         name: "login",
//       //         query: {
//       //             msg: results.message
//       //         }
//       //     });
//       // }

//       return false;
//   }

//   return true;
// }