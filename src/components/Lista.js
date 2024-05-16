import React, { useState, useEffect } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1  );
    };

    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <input type="text" placeholder="Add a task"></input>
            <input type="button" value="I got this"></input>
            <table>
                <thead>
                    <tr>
                        <th>Coluna 1</th>
                        <th>Contador</th>
                        <th>Coluna 3</th>
                        <th>Coluna 4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>{count}</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <button onClick={increment}>Incrementar</button>
            <button onClick={decrement}>Decrementar</button>
        </div>
    )
};

export default Counter 