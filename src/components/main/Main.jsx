import Header from "./header/Hader.jsx";
import Aside from "./aside/Aside.jsx"
import MyTask from "./sections/my-task/MyTask.jsx";
import VitalTask from "./sections/vital-task/VitalTask.jsx"
import "./Main.scss"

export default function Main() {
    return (
        <>
            <Header />
            <div className="main-layout">
                <Aside />
                <MyTask/>
            </div>
        </>
    )
}