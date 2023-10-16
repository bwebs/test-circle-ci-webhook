import React, { useLayoutEffect } from "react";
import { useInbox } from '@trycourier/react-inbox';
import { createPortal } from "react-dom";

const ReplaceNotifications = ({el}) => {
    const inbox = useInbox();
    
    const openInbox = (e) => {
        e.stopPropagation();
        e.preventDefault();
        inbox.toggleInbox(true);
    }


    useLayoutEffect(()=>{
        if (el) {
            el.addEventListener('click', openInbox)
            // const svg = el.getElementsByTagName('svg')
            // console.log(svg)
            // if (svg.length) {
            //     svg[0].style.display = 'none';
            // }
        }
        return () => el.removeEventListener('click', openInbox)
    },[el])

    return <></>
}

export default ReplaceNotifications;