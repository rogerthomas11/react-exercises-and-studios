export default function HobbyLinks() {
    let hobbyLinks = ["https://www.nhl.com/", "https://www.botanicalinterests.com/", "https://www.comc.com/"]

    return (
        <div>
            <h3>My Hobbies</h3>
            <a href = {hobbyLinks[0]}>Hockey</a>
            <br></br>
            <a href = {hobbyLinks[1]}>Gardening</a>
            <br></br>
            <a href = {hobbyLinks[2]}>Hockey Card Collecting</a>
        </div>
        );
}