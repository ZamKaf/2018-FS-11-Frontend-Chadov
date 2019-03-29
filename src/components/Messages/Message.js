import React, { Component } from 'react';
import {GetReadableSize} from "./sizes";
import SmileButton from "./Form/Smiles/SmileButton";
import {smilesData} from "./Form/Smiles";

const imagePattern = /^image\.*/;

function FileSize (props) {
    if (props.size) {
        return <span>{props.size}</span>
    }
    return null;
}

function Content (props) {
    const file = props.file;
    if (props.text) {
        let result = [];

        // В лоб перебираем по симвлам,
        let data = props.text;
        let len = data.length;
        for (let i = 0; i < len; i++)
        {
            let char = data.charAt(i);
            // когда находим двоеточие,
            if (char === ":")
            {
                let found = false;
                // проверяем: идёт ли после него один из символов смайла. Если да - добавляем этот смайл,
                // если не нашёлось подходящего - пишем двоеточие.
                for (let key in smilesData)
                {
                    let smileText = smilesData[key];

                    if (data.startsWith(smilesData[key], i))
                    {
                        console.debug(smileText);
                        result.push(<SmileButton name={key} disable></SmileButton>);
                        i += smileText.length - 1;
                        debugger;
                        found = true;
                        break;
                    }
                }
                if (!found)
                {
                    result.push(char);
                }
            }
            else
            {
                result.push(char);
            }
        }
        return result;
    } else if (file) {
        if (file.image) {
            return <img src={file.image} onLoad={() => URL.revokeObjectURL(file.image)} alt={file.name} />
        } else if (file.name) {
            return <a href={file.href}>{file.name}</a>
        }
    }
    return null;
}

export default class Message extends Component{
    constructor(props){
        super(props);
        Message.defaultProps = { text: '', my: false };
        let time = new Date();
        this.time = time.toLocaleTimeString();
        this.value = props.text;
        this.my = props.my ? 'my' : '';

        const attach = props.attach;
        let state = {};
        if (attach) {
            let fileUrl = URL.createObjectURL(attach);
            let file = {
                size: GetReadableSize(attach.size),
                name: attach.name
            };
            if (attach.type.match(imagePattern)) {
                file.image = fileUrl;
            } else {
                file.href = fileUrl;
            }
            state.file = file;
        } else if (props.text) {
            state.text = props.text;
        }
        this.state = state;
    }

    render()
    {
        return (
            <div className={'message '+ this.my}>
                <section>
                    <Content text={this.state.text} file={this.state.file} />
                </section>

                <FileSize {...this.state.file}/>
                <time>{this.time}</time>
            </div>
        );
    }
}
