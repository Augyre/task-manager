import Header from "./header/Hader.jsx";
import Aside from "./aside/Aside.jsx"
import TodoContainer from "./sections/dashboard/todoContainer/TodoContainer.jsx";
import "./Main.scss"

export default function Main() {
    return (
        <>
            <Header />
            <div className="main-layout">
                <Aside />
                <TodoContainer />
            </div>
        </>
    )
}