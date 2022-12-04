function CompletedTask(props) {
    // console.log(props.comptask)
    return (
        <div className="completed-task">
            <h3 className="task-list-header">Completed Tasks</h3>
            {props.comptask.map((compTaskName, index) => {
                return <div className="task-list-item" key={index}>
                    <img src="/assets/arrow-u-left-bottom.png" onClick={() => props.undo(index)} />
                    <p className="task-name">{compTaskName}</p>
                    <img src="/assets/delete.png" onClick={() => props.callback(index, "completedtask")} />
                </div>
            })
            }
        </div>
    );
}
export default CompletedTask;