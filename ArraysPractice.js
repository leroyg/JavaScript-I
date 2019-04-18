/// Arrays Practice
/*
  The Array truly is a beatiful thing.
  For this mini assignment we're going to have you go through some of the commonly used array methods.
  There are methods built onto the Array prototype 
  so here is a refernce of where you can learn more about them.
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
  Array Methods you should use to complete these assignemnts:
  .pop(), .push(), .splice(), .slice(), .shift(), .unshift(), .map() .filter(),
*/



/* 
  Problem 1: Justice League
  Remove the side kick 'Robin' from the front of this List.
  Add a super hero `Green Lantern` to the end of this List.
  Add a super hero `Superman` to the front of this List.
  Your final array should look like this:
  [ 'Superman', 'Batman', 'Wonder Woman', 'Flash', 'Aquaman', 'Green Lantern' ]
*/


const justiceLeague = ['Robin', 'Batman', 'Wonder Woman', 'Flash', 'Aquaman'];
console.log(justiceLeague);
let justiceLeagueTwo = justiceLeague.shift();
console.log(justiceLeagueTwo);
console.log(justiceLeague);
let justiceLeagueThree = justiceLeague.push(`Green Lantern`);
console.log(justiceLeague);
let jLeagueFour = justiceLeague.unshift(`Superman`);
console.log(justiceLeague);

/* 
  Problem 2: Middle Earth
  In our list of Characters from Middle Earth remove sauraman. He's a traitor.
*/

const middleEarth = ['Frodo', 'Samwise', 'Gandalf', 'Sauraman', 'Treebeard'];
console.log(middleEarth);   
let checkPos = middleEarth.indexOf('Sauraman');
console.log(checkPos);
let traitor = middleEarth.splice(checkPos,3);
console.log(middleEarth);

/* 
  Problem 3: Numbers
  map over this array, and return a new array of the numbers in it, multiplied by 10
*/

const numbers = [2, 3, 4, 5, 6];

const numbersTimesTen = numbers.map((value,index,array) => {
    return value * 10;
});

console.log(numbers);
console.log(numbersTimesTen);



/* 
  Problem 4: Filter Friends
  Here you're going to create two new arrays. 
  One called femaleFriends (a list of all friends filtered where gender === 'F')
  One called maleFriends (a list of all friends filtered where gender === 'M')
*/

const friends = [
  { name: 'Monica', gender: 'F' },
  { name: 'Chandler', gender: 'M' },
  { name: 'Ross', gender: 'M' },
  { name: 'Phoebe', gender: 'F' },
  { name: 'Joey', gender: 'M' },
  { name: 'Rachel', gender: 'M' }
];

const womenFriends = friends.filter(friend => {
    return friend.gender.toLowerCase() === "f";
  });

  console.log(womenFriends);

  const menFriends = friends.filter(friend => {
    return friend.gender.toLowerCase() === "m";
  });

  console.log(menFriends);

// https://gist.github.com/JoaoCnh/26319f5632adfa062924bec596b536f5
// const spotifySongs = [
//     { id: 1, name: "Curl of the Burl", artist: "Mastodon", duration: 204 },
//     { id: 2, name: "Oblivion", artist: "Mastodon", duration: 306 },
//     { id: 3, name: "Flying Whales", artist: "Gojira", duration: 444 },
//     { id: 4, name: "L'Enfant Sauvage", artist: "Gojira", duration: 246 }
//   ];
  
//   const lastFmSongs = [
//     { id: 5, name: "Chop Suey", artist: "System of a Down", duration: 192 },
//     { id: 6, name: "Throne", artist: "Bring me the Horizon", duration: 186 },
//     { id: 7, name: "Destrier", artist: "Agent Fresco", duration: 132 },
//     { id: 8, name: "Out of the Black", artist: "Royal Blood", duration: 240 }
//   ];
  
//   const allSongs = [spotifySongs, lastFmSongs];

//   const songs = [
//     {
//       id: 1,
//       name: "Curl of the Burl",
//       artist: "Mastodon",
//     },
//     {
//       id: 2,
//       name: "Oblivion",
//       artist: "Mastodon",
//     },
//     {
//       id: 3,
//       name: "Flying Whales",
//       artist: "Gojira",
//     },
//     {
//       id: 4,
//       name: "L'Enfant Sauvage",
//       artist: "Gojira",
//     },
//   ];
// // using the songs array from previous examples

//   // ES6
//   const mastodonSongs = songs.filter(song => {
//     return song.artist.toLowerCase() === "mastodon";
//   });
  
//   console.log(mastodonSongs);
  
//   // [{
//   //    id: 1,
//   //    name: "Curl of the Burl",
//   //    artist: "Mastodon",
//   //  },
//   //  {
//   //    id: 2,
//   //    name: "Oblivion",
//   //    artist: "Mastodon",
//   //  }]