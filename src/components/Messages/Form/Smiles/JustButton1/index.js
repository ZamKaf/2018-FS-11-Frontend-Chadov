import React, { useState } from 'react';

const JustButton1 = (props) => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Вы кликнули {count} раз(а)</p>
            <button onClick={() => setCount(count + 1)}>
                Нажми на меня
            </button>
        </div>
    );
}

export default JustButton1;
