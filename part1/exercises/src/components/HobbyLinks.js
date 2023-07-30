export default function HobbyLinks() {
let hobbyLinks = ["https://en.wikipedia.org/wiki/Scuba_diving","https://en.wikipedia.org/wiki/Cooking" ]

return(
    <>
     <a href = {hobbyLinks[0]}>Link to Scuba Diving.</a>
    <a href = {hobbyLinks[1]}>Link to Cooking.</a>
    </>
);
}