// const searchLeader = async () => {
//   const search = document.querySelector(".search").value.toLowerCase();
//   try {
//     const res = await fetch("http://localhost:8000/leaders", {
//       method: "GET",
//     });
//     const data = await res.json();
//     console.log(data);
//     data.filter((el) => el.name.toLowerCase() === search);
//   } catch (err) {
//     res.status(404).json({ message: message.err });
//   }
// };
// searchLeader();

// console.log(searchVal());
