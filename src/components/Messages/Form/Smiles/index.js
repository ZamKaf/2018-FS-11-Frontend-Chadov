import React from 'react';
import SmileButton from "./SmileButton";

export const smilesData = {
    "icon-angry-face-with-horns": ":)",
    "icon-angry-face": ":+1:",
    "icon-anguished-face": ":angry:"
}

const Smiles = (props) => {

        return (
            <div>
                {
                    Object.keys(smilesData).map((value, id) =>
                        <SmileButton name={value} onClick={props.onSmileClick} key={id}></SmileButton>)
                }
            </div>
        );
}
export default Smiles;
