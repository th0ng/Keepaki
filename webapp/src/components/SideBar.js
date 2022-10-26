

const SideBar = ({groups, handleGroupShow}) => {
    const SideBarButton = ({element}) => {
        return (
            <button onClick={() => {handleGroupShow()}} className="viewoptions">${element}</button>
        )
    }
    return (
        <div className="sidebar">
            {groups.map((view) => <SideBarButton element={view} />)}
        </div>
    )
}

export default SideBar;