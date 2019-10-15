export default  (props)=>(
    <div id="clase-container">
        <h2>Clase de {props.nombre}</h2>
        {props.clase.map(item=>{
            return(
                <div className="clase-list">
                    <img src ={item.foto}alt=""/>
                    <p>{item.first_name} {item.last_name}</p>
                </div>
            )
        })}
        <style jsx>{
            `
            #clase-container{
                perspective:500px;
            }
            .clase-list{
                display:flex;
            }
            .clase-list img{
                padding:3px;
                border:1px solid #ccc;
            }
            .clase-list p{
                font-size: 13px;
                font-wight:bold;
                font-style: italic;
                margin-left:12px;

            }
            .clase-list:hover{
                transform:translateY(10px)scale(1);
            }
            `
            }
        </style>
    </div>
  )