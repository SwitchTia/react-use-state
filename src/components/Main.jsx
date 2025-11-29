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
        <div className="box">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias vel adipisci, quidem porro, eum, consequatur cumque maxime necessitatibus libero dolor nihil provident ad nobis nulla nam nostrum quis error molestiae?</p>

        </div>
      </div>
    </main>
  );
}