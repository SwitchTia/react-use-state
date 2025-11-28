
export default function Button({language}) {

    return (
        <div>
            <button className="btn">{language.title}</button>
        </div>
    );
}