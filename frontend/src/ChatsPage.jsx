import {PrettyChatWindow} from 'react-chat-engine-pretty'
/* import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced' */

/* const ChatsPage = () => {
    const chatProps = useMultiChatLogic('03834875-c234-48b2-b4fb-91d489d5829c', props.user.username, props.user.secret); //input Project ID
    return <div style ={{ height: '100vh' }}>chat messages...
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
    </div>
} */

const ChatsPage = (props) => {
    return <div style ={{ height: '100vh' }}>chat messages...
        <PrettyChatWindow>
             projectId="03834875-c234-48b2-b4fb-91d489d5829c"
             username="props.user.username"
            secret="props.user.secret"
            style={{ height: '100%' }}
        </PrettyChatWindow>
    </div>
}

export default ChatsPage

