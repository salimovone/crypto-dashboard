import React from 'react'
import { Main } from '../../Chats/style'
import ChatSidebar from '../../../../components/appElements/ChatSidebar'
import ChatNavbar from '../../../../components/appElements/ChatNavbar'
import Navbar from '../../../../components/Navbar'
import VoiceCalls from '../../../../components/appElements/Calls/VoiceCalls'

const Chats = () => {
    return (
        <Main>
            <Navbar />
            <p className="text-[#35446f] text-xl font-semibold ml-5 mt-5">Voice call</p>
            <div className="grid max-[1200px]:grid-cols-1 appGrid">
                <div className="mt-5 ml-5">
                    <ChatSidebar />
                </div>
                <div className="mt-5 mr-5">
                    <ChatNavbar />
                    <div>
                        <VoiceCalls />
                    </div>
                </div>
            </div>
        </Main>
    )
}

export default Chats