import { useState } from "react"


export default (props) => {


    return <p>
        <label>{props.label}</label>
        <input
            type="number"
            required
            value={props.value}
            onChange={(event) => props.onChange(props.field, event.target.value)}
        />
    </p>
}