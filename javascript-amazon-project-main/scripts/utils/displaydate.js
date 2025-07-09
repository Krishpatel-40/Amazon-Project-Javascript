// export function correctDate (time){
//     const date = new Date(time);
//     console.log(`${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`);
//     return `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`   
// }


export function correctDate (time){
    console.log(`correctDate called with time: ${time}`);
let date = new Date(time);
console.log(`Parsed date: ${date}`);
let formatted = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  timeZone: 'UTC' // Optional: ensures consistent result
}).format(date);

return formatted; 
}