import "./Menu.scss"

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#">About me</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#">Skills</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#">Projects</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </div>
    )
}