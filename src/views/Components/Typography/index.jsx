import React from 'react'
import { BulletLists, Headings } from './data'
import Navbar from '../../../components/Navbar'

export default () => {
    return (
        <div>
            <Navbar />
            <div className='w-full p-[20px]'>
                <div>
                    <div>
                        <p className='text-[20px] font-bold text-[#35446F]'>Typography</p>
                    </div>

                    <div className='payment_card mt-5'>
                        <div>
                            <p className='text-[18px] font-semibold'>Headings</p>
                        </div>

                        <div className='mt-2'>
                            {
                                Headings.map((item) => (
                                    <div key={item.id}>
                                        <p style={{ fontSize: item.size }}>{item.title}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className='mt-5 payment_card'>
                        <div>
                            <p className='text-[18px] font-semibold'>Blockquotes</p>
                        </div>

                        <div className='mt-5'>
                            <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</i>
                        </div>

                        <div className='mt-3'>
                            <i className='text-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</i>
                        </div>
                    </div>

                    <div className='payment_card'>
                        <p className='font-medium text-[18px]'>Text Elements</p>
                        <div className='pt-4'>
                            <p>You can use the mark tag to highlight text.</p>
                        </div>
                        <div className='pt-4'>
                            <s>This line of text is meant to be treated as deleted text.</s>
                        </div>
                        <div className='pt-4'>
                            <s>This line of text is meant to be treated as no longer accurate.</s>
                        </div>
                        <div className='pt-4'>
                            <u>This line of text will render as underlined</u>
                        </div>
                        <div className='text-[14px] pt-4'>
                            <p>This line of text is meant to be treated as fine print.</p>
                        </div>
                        <div className='pt-4'>
                            <b>This line rendered as bold text.</b>
                        </div>
                        <div className='pt-4'>
                            <i>This line rendered as italicized text.</i>
                        </div>
                    </div>

                    <div className='grid md:grid-cols-3 gap-5'>
                        {
                            BulletLists.map((item) => (
                                <div key={item.id} className='payment_card pb-5'>
                                    <div>
                                        <p className='font-bold text-[18px]'>{item.title}</p>
                                    </div>

                                    <div className='pt-3 pr-[50px]'>
                                        {item.text}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
