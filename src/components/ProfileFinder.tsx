import { TProfile } from "../data/profiles"

export default function ProfileFinder ({profiles}: {profiles: TProfile[]}) {
    return (
        <>
            <div class="ProfileFinder">
                <h2>Select a profile</h2>
                <label>profile ID : </label>
                <select name="profileID" hx-get="/card" hx-target="#profiles" hx-trigger="revealed, change">
                    {profiles.map((p, i) => <option value={i}>{i}</option>)}
                </select>
            </div>

            <div id="profiles"></div>
        </>
    )
}