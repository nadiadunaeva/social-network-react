import React from "react";
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemProps = {
    name: string
    id: string;
}
type MessageItemProps = {
    message: string;
}

const DialogItem = (props: DialogItemProps) => {
    let path = "/messages/" + props.id
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const MessageItem = (props: MessageItemProps) => {

    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <DialogItem name="Dimych" id="1"></DialogItem>
                <DialogItem name="Andrey" id="2"></DialogItem>
                <DialogItem name="Sveta" id="3"></DialogItem>
                <DialogItem name="Sasha" id="4"></DialogItem>
                <DialogItem name="Victor" id="5"></DialogItem>
                <DialogItem name="Valera" id="6"></DialogItem>

                {/*<div className={classes.dialog +' '+ classes.active}>*/}
                {/*  <NavLink to="/messages/1">Dimych</NavLink>*/}
                {/*</div>*/}
                {/*<div className={classes.dialog}>*/}
                {/*    <NavLink to="/messages/2">Andrey</NavLink>*/}
                {/*</div>*/}
                {/*<div className={classes.dialog}>*/}
                {/*    <NavLink to="/messages/3">Sveta</NavLink>*/}
                {/*</div>*/}
                {/*<div className={classes.dialog}>*/}
                {/*    <NavLink to="/messages/4">Sasha</NavLink>*/}
                {/*</div>*/}
                {/*<div className={classes.dialog}>*/}
                {/*    <NavLink to="/messages/5">Victor</NavLink>*/}
                {/*</div>*/}
                {/*<div className={classes.dialog}>*/}
                {/*    <NavLink to="/messages/6">Valera</NavLink>*/}
                {/*</div>*/}
            </div>
            <div className={classes.messages}>
                <MessageItem message="Hi"/>
                <MessageItem message="Yo"/>
                <MessageItem message="Hi"/>
            </div>
        </div>

    )
}

export default Dialogs