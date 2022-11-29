function FormEquipas() {
    return (
        <form>
            <div>
                <input type="text" placeholder="Insira o nome da sua equipa" /> 
            </div>
            <div>
                <input type="date" placeholder="Insira o ano de fundação da equpa" /> 
            </div>
            <div>
                <input type="text" placeholder="Insira o nome da zona da equipa" /> 
            </div>
            <div>
                <input type="submit" value="Criar Equipa" /> 
            </div>
        </form>
    )
}

export default FormEquipas