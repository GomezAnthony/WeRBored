export default function Button({label, handleClick, handleSubmit, name}) {
    return (
        <>
        <button onClick={handleClick}>{label}</button>
        <form onSubmit={handleSubmit}>
            
        </form>
        </>
    )
}