import "./Aside.scss"

export default function Aside() {
    return (
        <>
            <aside className="aside">
                <div className="aside__info">
                    <img src="/img/aside/test.jpg" alt="avatar" className="aside__info-avatar" />
                    <p className="aside__info-name">amanuel</p>
                    <p className="aside__info-email">amanuel@mail.ru</p>
                </div>
                <div className="aside__cards">
                    <button className="aside__card">
                        <img src="/img/aside/dashboard.svg" alt="dashboard" />
                        <h3>Dashboard</h3>
                    </button>
                    <button className="aside__card">
                        <img src="/img/aside/vital-task.svg" alt="vital" />
                        <h3>Vital Task</h3>
                    </button>
                    <button className="aside__card">
                        <img src="/img/aside/my-tasks.svg" alt="tasks" />
                        <h3>My Task</h3>
                    </button>
                    <button className="aside__card">
                        <img src="/img/aside/task-categories.svg" alt="categories" />
                        <h3>Task Categories</h3>
                    </button>
                    <button className="aside__card">
                        <img src="/img/aside/settings.svg" alt="settings" />
                        <h3>Settings</h3>
                    </button>
                    <button className="aside__card">
                        <img src="/img/aside/help.svg" alt="help" />
                        <h3>Help</h3>
                    </button>

                    <button className="aside__card">
                        <img src="/img/aside/logout.svg" alt="logout" />
                        <h3>Logout</h3>
                    </button>
                </div>
            </aside>
        </>
    )
}