
const Profile = (props) => {
    console.log(props);
    const { title, thumbnailUrl, url } = props
    return (
        <article className="profile-card">
            <img src={thumbnailUrl} alt="something" />
            <h2 className="title">{title}</h2>
            <a href={url} className="button">details</a>
        </article>
    )
};

export default Profile;