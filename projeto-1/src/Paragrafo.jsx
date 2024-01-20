
function Paragrafo({nome,paragrafo,url,cor}){

    return (
        <div>
            <h1 style={{color:cor}}>Oi, eu sou o {nome}</h1>
            {paragrafo? <p>Existe</p> : <p>Não existe</p>}
            <img width={250} src={url}/>
        </div>
    )
}
export default Paragrafo