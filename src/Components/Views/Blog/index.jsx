import React from 'react'
import Header from './Header'
import Directions from './Directions'
import Notes from './Notes'
import Form from './Form'
import HorCards from './HorCards'
import SideBar from './SideBar'
import DropDown from './DropDown'

const Blog = () => {
    return (
        <div className=' container flex gap-10'>
            <div className='max-w-[700px]'>
                <Header />
                <Directions />
                <Notes />
                <HorCards />
                <Form />
                {/* <DropDown /> */}
            </div>
            <div>
                <SideBar />
            </div>
        </div>
    )
}

export default Blog