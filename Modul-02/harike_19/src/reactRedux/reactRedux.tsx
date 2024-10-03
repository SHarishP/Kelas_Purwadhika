import { useSelector, useDispatch } from "react-redux"

import {
    ICount,
    increment,
    decrement,
    incrementByAmount,
} from "../redux/slice/counter"

function ReactRedux() {
    const count = useSelector((state: { counter: ICount }) => state.counter.value)
    const dispatch = useDispatch();
    return (
        <div>
            <div>
                <h2>{count}</h2>
                <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
            </div>
        </div>
    )
}

export default ReactRedux;

/* BELUM SELESAI */