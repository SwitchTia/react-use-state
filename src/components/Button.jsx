
export default function Button({language}) {

    return (
        <div className="gap">
            <button className="btn" >{language.title}</button>
        </div>
    );
}