function TaskList(props) {
    // console.log(props)

    return (

        <div className="task-list">
            <h3 className="task-list-header">Task List</h3>
            {props.task.map((taskName, index) => {
                return (
                    <div className="task-list-item" key={index} >
                        <input type="checkbox" onClick={() => props.complete(index)} />

                        {/*  Javascript */}
                        {/* compare id == index */}
                        {props.edit === index ?
                            <div className="newinput">
                                <input type="text" defaultValue={taskName} onChange={props.newInput} />
                                <img className="edit-img" src="/assets/check.png" onClick={() => props.tick(index)} />
                            </div>
                            :
                            <div className="tasklist">
                                <p className="task-name">{taskName}</p>
                                <img className="edit-img" src="/assets/pencil (1).png" onClick={() => props.editTask(index)} />
                            </div>
                        }
                        <img className="edit-img" src="/assets/delete.png" onClick={() => props.callback(index, "tasklisti")} />

                    </div>
                )
            })
            }
        </div >

    );
}
export default TaskList;
