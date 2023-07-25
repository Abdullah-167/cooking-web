import React from 'react'

const NewRecipe = () => {
    return (
        <div className='newrecipe-bg py-24'>
            <div className='container'>
                <h2 className='text-[50px] font-secondary text-center pb-5'>New Recipes Every Wednesday </h2>
                <p className='text-center text-lg text-gray-500 max-w-[700px] mx-auto pb-12'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqut enim ad minim veniamquis nostrud exercitation</p>
                <div className='flex gap-7 justify-between'>
                    <iframe src="https://www.youtube.com/embed/_tmq1PT_88c" className='w-full h-[320px]' frameborder="0"></iframe>
                    <iframe src="https://www.youtube.com/embed/_tmq1PT_88c" className='w-full h-[320px]' frameborder="0"></iframe>
                </div>
            </div>
        </div>
    )
}

export default NewRecipe