import {Counter} from "./Components/Counter";
import "./index.scss";

export const App = () => {
    return (
       <div className={'app'}>
           Точка входа в app
           <Counter />
       </div>
    )
}