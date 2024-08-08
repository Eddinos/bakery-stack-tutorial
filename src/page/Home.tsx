import ProfileFinder from "../components/ProfileFinder"
import profiles from "../data/profiles"

export default function Home () {
    return (
        <div className="Home">
            <h1>Welcome to the home page</h1>
            <ProfileFinder profiles={profiles} />
        </div>
    )
}