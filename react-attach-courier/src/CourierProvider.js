import { CourierProvider, useCourier } from '@trycourier/react-provider';
import { Inbox } from '@trycourier/react-inbox'
import { Toast, useToast } from '@trycourier/react-toast';
import React, { useEffect } from 'react';
import ReplaceNotifications from './ReplaceNotifications';
import { createPortal } from 'react-dom';
import { getNotificationElement } from './utils';

const TEST = () => <>hi</>
const ExampleComponent = () => {
    // const test = useCourier()
    const el = getNotificationElement();
    return (<CourierProvider
            userId='test'
            clientKey={window.courier_client_key}
    >
        <Toast
            defaultIcon={TEST}
            transition="bounce"
        />
            {/* <ToastOpener /> */}
            {el ? <div
                style={{bottom: 0, left: 236, position: "fixed"}}
            ><Inbox placement="right-end" /></div> : <></>}
            {el ? <ReplaceNotifications el={el} /> : <></>}
        </CourierProvider>)
}

const ToastOpener = () => {
    const [toast] = useToast()
    const sendToast = () => {
        toast({title: 'title', preview: 'preview'})
    }
    return  <button onClick={sendToast}>toast</button>
}
export default ExampleComponent;