
export default function Content({data, removeData, setStatus, filterStatus}){
    let tasks = [...data]
    if(filterStatus === 'compleated'){
        tasks = tasks.filter((task) => task.isDone === true)
    }
    if(filterStatus === 'incompleat'){
        tasks = tasks.filter((task) => task.isDone === false)
    }
    return (
        <section className="content" >
            {tasks.map((task) => {
                if(task.isDone === false){
                    return (
                        <div className="display"  key={task.id}>
                            <h3>{task.text}</h3>
                            <div className="button">
                                <button className="btn-user btn-done" id={task.id} onClick = {(event) => {
                                    setStatus(event.target.id)
                                }}><i className="fa fa-check done" id={task.id}></i></button>
                                <button className="btn-user btn-cancel" id={task.id} onClick = {(event)=>{
                                    removeData(event.target.id);
                                }}><i className="fa fa-times cancel" id={task.id}></i></button>
                            </div>
                        </div>
                    )
                }
                else{
                    return (
                        <div className="display"  key={task.id}>
                            <h3 style={{textDecoration:"line-through",opacity:'0.5'}}>{task.text}</h3>
                            <div className="button">
                                <button className="btn-user btn-done" id={task.id} onClick={(event) =>{
                                    setStatus(event.target.id)
                                }}><i className="fa fa-check done" id={task.id}></i></button>
                                <button className="btn-user btn-cancel" id={task.id} onClick = {(event)=>{
                                    removeData(event.target.id);
                                }}><i className="fa fa-times cancel" id={task.id}></i></button>
                            </div>
                        </div>
                    )
                }
            })}
        </section>
    )
}