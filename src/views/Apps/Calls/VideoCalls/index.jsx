import React from 'react'
import Navbar from '../../../../components/Navbar'
import ChatSidebar from '../../../../components/appElements/ChatSidebar'
import ChatNavbar from '../../../../components/appElements/ChatNavbar'
import VideoCalls from '../../../../components/appElements/Calls/VideoCalls'

export default () => {
    return (
        <div className='w-full'>
            <Navbar />
            <p className="text-[#35446f] text-xl font-bold ml-5 mt-5">Video call</p>

            <div className='w-full p-5'>
                <div className='w-full flex gap-5 flex-wrap'>
                    <div className='xl:w-[33.3%] w-full'>
                        <ChatSidebar />
                    </div>

                    <div className='xl:w-[64.3%] w-full'>
                        <div>
                            <ChatNavbar />
                        </div>

                        <div className='mt-5'>
                            <VideoCalls />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
