// // https://api.github.com/users/Hina fahim

// function getUser() {
//     const body = document.body;
//     let username = prompt("Write username here...");
//     if (!username) {
//       body.innerHTML = `User not found`;
//     }
//     fetch(`https://api.github.com/users/${username}`)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error`User not found`();
//         }
//         return response.json();
//       })
//       .then((user) => {
//         body.innerHTML = `
//             <div style="text-align: center; font-family: Arial, sans-serif;">
//               <img src="${
//                 user.avatar_url
//               }" alt="Avatar" style="border-radius: 50%; width: 150px; height: 150px;"/>
//               <h2>${user.name || "No Name"}</h2>
//               <p>${user.bio || "No bio available"}</p>
//               <p><strong>Public Repositories:</strong> ${user.public_repos}</p>
//               <p><strong>Followers:</strong> ${user.followers}</p>
//             </div>
//           `;
//       })
//       .catch((error) => {
//         body.innerHTML = `Error ${error.message}`;
//       });
//   }
//   getUser();



//=====================================================================================/
// function getUser() {
//     const body = document.body;
//     let username = prompt("Write username here...");
//     if (!username) {
//       body.innerHTML = `User not found`;
//     }
//     fetch(`https://api.github.com/users/${username}`)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("User not found"); // Corrected error handling
//         }
//         return response.json();
//       })
//       .then((user) => {
//         body.innerHTML = `
//             <div style="text-align: center; font-family: Arial, sans-serif;">
//               <img src="${
//                 user.avatar_url
//               }" alt="Avatar" style="border-radius: 50%; width: 150px; height: 150px;"/>
//               <h2>${user.name || "No Name"}</h2>
//               <p>${user.bio || "No bio available"}</p>
//               <p><strong>Public Repositories:</strong> ${user.public_repos}</p>
//               <p><strong>Followers:</strong> ${user.followers}</p>
//             </div>
//           `;
//       })
//       .catch((error) => {
//         body.innerHTML = `Error: ${error.message}`;
//       });
//   }
// getUser();


//=============================Type Script==================//

 

function getJoke() {
    const jokeElement = document.getElementById('jokeText');
    fetch('https://v2.jokeapi.dev/joke/Programming')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Joke not found');
        }
        return response.json();
      })
      .then((data) => {
    
        if (data.type === 'single') {
          jokeElement.innerHTML = data.joke;
        } else {
          jokeElement.innerHTML = `${data.setup} <br><br> ${data.delivery}`;
        }
      })
      .catch((error) => {
        jokeElement.innerHTML = `Error: ${error.message}`;
      });
  }
  
  getJoke();
  