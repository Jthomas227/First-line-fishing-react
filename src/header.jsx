import "./styles/header.css"

export function Header(){
    return (
        <div className="head">
            <h3 className="header">First Line Fishing</h3>
            <input className="Seachbox" type="text" placeholder="Search"/>
        </div>
    )
}