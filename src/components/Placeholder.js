export const Placeholder = ({ name, hobby }) => {
    return (
        <div className="placeholder">
            <div className="placeholder_content">
                <div className="placeholder_name">Имя: {name}</div>
                <div>Хобби: {hobby}</div>
            </div>
        </div>
    )
}