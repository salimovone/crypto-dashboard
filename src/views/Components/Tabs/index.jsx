import React from 'react'
import Navbar from '../../../components/Navbar'
import BasicTabs from '../../../components/Components/TabsComponent/BasicTabs'
import BasicJustifiedTabs from '../../../components/Components/TabsComponent/BasicJustifiedTabs'
import TopLineTabs from '../../../components/Components/TabsComponent/TopLineTabs'
import TopLineJustified from '../../../components/Components/TabsComponent/TopLineJustified'
import BottomLineTabs from '../../../components/Components/TabsComponent/BottomLineTabs'
import BottomLineJustified from '../../../components/Components/TabsComponent/BottomLineJustified'
import SolidTabs from '../../../components/Components/TabsComponent/SolidTabs'
import SolidJustified from '../../../components/Components/TabsComponent/SolidJustified'

export default () => {
    return (
        <div>
            <Navbar />

            <div className='w-full p-[20px]'>
                <div>
                    <div>
                        <p className='text-[20px] font-bold text-[#35446F]'>Tabs</p>
                    </div>

                    <div className='grid grid-cols-2 gap-5 mt-10'>
                        <div>
                            <BasicTabs />
                        </div>
                        <div>
                            <BasicJustifiedTabs />
                        </div>
                        <div>
                            <TopLineTabs />
                        </div>
                        <div>
                            <TopLineJustified />
                        </div>
                        <div>
                            <BottomLineTabs />
                        </div>
                        <div>
                            <BottomLineJustified />
                        </div>
                        <div>
                            <SolidTabs />
                        </div>
                        <div>
                            <SolidJustified />
                        </div>
                        <div>
                            <SolidTabs radius={"25px"} backgroundColor={'#fff'}/>
                        </div>
                        <div>
                            <SolidJustified radius={"25px"} backgroundColor={'#fff'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
