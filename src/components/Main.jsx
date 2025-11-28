import Button from "./Button";

export default function Main({ languages }) {
  return (
    <main>
      <div className="container">
    
        <div className="flex">
          {languages.map((language) => (
            <Button key={language.id} language={language} />
          ))}
        </div>
      </div>
    </main>
  );
}