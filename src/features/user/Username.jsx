import { useSelector } from "react-redux"

function Username() {
    const username = useSelector((state) => state.user.Username)

    if (!username) return null

    return (
        <div className="text-sm font-semibold sm:hidden md:block">
            {username}
        </div>
    )
}

export default Username
