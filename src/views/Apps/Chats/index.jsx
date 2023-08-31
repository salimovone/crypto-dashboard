import React from 'react'
import { Main } from './style'
import Navbar from '../../../components/Navbar'
import ChatSidebar from '../../../components/appElements/ChatSidebar'
import ChatNavbar from '../../../components/appElements/ChatNavbar'
import Messages from '../../../components/appElements/Chats'

const Chats = () => {
  return (
    <Main>
        <Navbar />
        <p className="text-[#35446f] text-xl font-semibold ml-5 mt-5">Chat</p>
        <div className="grid max-[1200px]:grid-cols-1 appGrid">
        <div className="mt-5 ml-5">
          <ChatSidebar />
        </div>
        <div className="mt-5 mr-5">
          <ChatNavbar />
          <div>
            <Messages />
          </div>
        </div>
      </div>
    </Main>
  )
}

export default Chats