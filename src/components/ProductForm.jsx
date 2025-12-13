import ButtonComponent from './ButtonComponent'
import InputComponent from './InputComponent';

export default function ProductForm({
    onSubmit,
    onCancel,
}){

    async function handleOnSubmit(e){
        e.preventDefault();
        console.log("Hola!!!!!!!!!!");
        onSubmit()
    }

    return(
        <>
            <form className="max-w-sm bg-white rouded-lg shadow-md mx-auto p-5" onSubmit={handleOnSubmit}>
                
                <InputComponent
                    label="Nombre"
                    name="name"
                />

                <InputComponent
                    label="Precio"
                    name="price"
                />

                <ButtonComponent
                    type="primary"
                    text="Guardar"
                    disabled={false}
                    buttonType='submit'
                />
                <ButtonComponent
                    type="danger"
                    text="Cancelar"
                    onClick={onCancel}
                    disabled={false}
                    buttonType='button'
                />
            </form>
        </>
    )
}