import Profile from "../../assets/images/profile.png"
import { ProfileContainer } from "./styles"

function ProfileInfo() {
    return (
        <ProfileContainer>
            <div className="image">
                <img src={Profile} alt={Profile} />
            </div>
            <div className="name">
                <h2>nome:</h2>
                <p>Felipe</p>
            </div>
            <div className="email">
                <h2>email:</h2>
                <p>felipe@gmail.com</p>
            </div>
        </ProfileContainer>
    )
}

export default ProfileInfo