
export default function Button({language, onClick}) {

    return (
        <div className="gap">
            <button className="btn" onClick={onClick}>
                {language.title}
            </button>
        </div>
    );
}