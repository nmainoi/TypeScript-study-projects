import { FC, useState } from 'react'

interface ListProps {
    data: string
}

export const TaskItem: FC<ListProps> = ({ data }) => {
    const [isVisible, updateIsVisible] = useState(true)

    return (<>
        {isVisible ?
            <li><input type="checkbox" /> {data} <button onClick={() => updateIsVisible(false)}>Del</button></li>
            : <div></div>}
    </>)
}

