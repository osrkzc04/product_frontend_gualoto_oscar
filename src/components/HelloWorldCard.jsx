import ButtonComponent from "./ButtonComponent";

export default function HelloWorldCard() {
  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
      <h1 className="text-3xl font-bold text-blue-600 mb-3">
        Hola Mundo
      </h1>

      <p className="text-gray-600 mb-4">
        Este es un componente simple usando Tailwind CSS
      </p>

        <ButtonComponent 
            type="primary"
            text="Click Me"
            onClick={() => alert('Button Clicked!')}
            disabled={false}
        /> 
        <ButtonComponent 
            type="secondary"
            text="Click Me"
            onClick={() => alert('Button Clicked!')}
            disabled={false}
        /> 
      
    </div>
  );
}
