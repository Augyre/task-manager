
export default function MyTask() {
    return (
        <div className="vital-task">
            <div className='todos'>
                <h2 className="black">My tasks</h2>
                <hr className="orange" />
                <div className='todos__cards'>
                    <div className='todos__card'>
                        <div className='card-container'>
                            <img src="/img/todomain/red.png" alt="red" className='todos-color' />
                            <div className='card__info'>
                                <h4 className='black'>Attend Nischal’s Birthday Party</h4>
                                <div className='card__center'>
                                    <p className='grey card__info-center'>Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh Elements).....</p>
                                    <img src="/img/todomain/center.png" alt="center" className='card__center-img' />
                                </div>
                                <div className='card-working'>
                                    <p className='black status-text'>Priorty: Moderate</p>
                                    <p className='black status-text'>Status: Not started</p>
                                    <p className='grey-date'>Created On: 20/06/2023</p>
                                </div>
                            </div>
                        </div>
                        <img src="/img/todomain/MENU.svg" alt="menu" className='todos-menu' />
                    </div>
                </div>
            </div>
            <div className="desc">
                <div className="desc__title">
                    <div className="desc-img">
                        <img src="/img/vital-tasks/img.svg" alt="vital" className="vital-img" />
                    </div>
                    <div className="desc__text">
                        <h4 className="black">Submit Documents</h4>
                        <div className="desc__text-center">
                            <p>Priority: Extreme</p>
                            <p>Status: Not started</p>
                        </div>
                        <p className="grey-date">Created on: 20/06/2023</p>
                    </div>
                </div>
                <div className="desc__main">
                    <p><span className="bold">Task title</span>: Document Submission.</p>
                    <p><span className="bold">Objective</span>: To submit required documents for something important</p>
                    <p><span className="bold">Task Description</span>: Review the list of documents required for submission and ensure all necessary documents are ready. Organize the documents accordingly and scan them if physical copies need to be submitted digitally. Rename the scanned files appropriately for easy identification and verify the accepted file formats. Upload the documents securely to the designated platform, double-check for accuracy, and obtain confirmation of successful submission. Follow up if necessary to ensure proper processing.</p>
                    <p><span className="bold">Additional Notes</span>: Ensure that the documents are authentic and up-to-date.
                        Maintain confidentiality and security of sensitive information during the submission process.
                        If there are specific guidelines or deadlines for submission, adhere to them diligently.</p>
                    <p><span className="bold">Deadline for Submission</span>: End of Day</p>
                </div>
            </div>
        </div>
    )
}