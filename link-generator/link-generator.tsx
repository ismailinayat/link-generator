import {MdArrowDropDownCircle} from 'react-icons/md';
import {useState} from 'react';

const LinkGenerator = function ({categories, projectsTags}) {

    const [categoryDropdown, setCategoryDropdown] = useState(false)
    const [subCategoryDropdown, setSubCategoryDropdown] = useState(false)
    const [categorySelected, setCategorySelected] = useState('')
    const [subCategoryList, setSubCategoryList] = useState([])
    console.log(categories)
    console.log(projectsTags)
    //console.log(categoryDropdown);
    console.log()

    const handleCategoryClick = () => {
        setCategoryDropdown(!categoryDropdown)
    }

    const handleSubClick = () => {
        setSubCategoryDropdown(!subCategoryDropdown)
    }

    const handleCatClick = (cat) => {
        setCategorySelected(cat.slug)
    }
    return (
        <div className='p-8 flex justify-around'>


            <div className='relative mb-4 w-32'>

                <div>

                    <h1 className='text-2xl'>
                        Categories
                    </h1>

                    <div onClick={handleCategoryClick} className='absolute top-2 -right-1' >
                            <MdArrowDropDownCircle className='w-5'/>
                    </div>

                </div>
                

                {/* {categories.map((cat) => {
                    return <p>{cat.slug}</p>
                })} */}

                <div className={`p-2 w-32 bg-gray-200 ${categoryDropdown ? 'block' : 'hidden'}`}>
                    
                    {categories.map((cat) => {
                        return <p key={cat.id} onClick={(cat) => handleCatClick(cat)}>{cat.slug}</p>
                    })}
                </div>

            </div>


            <div>
                <div className='relative w-44'>
                    <h1 className='text-2xl'>
                        Sub Categories
                    </h1>

                    <div onClick={handleSubClick} className='absolute top-2 -right-1' >
                            <MdArrowDropDownCircle className='w-5'/>
                        </div>
                </div>
                

                {/* {categories.map((cat) => {
                    return <p>{cat.slug}</p>
                })} */}

                <div className={`p-2 w-32 bg-gray-200 ${subCategoryDropdown ? 'block' : 'hidden'}`}>
                    
                    {projectsTags.map((proj) => {
                        return <p key={proj.id}>{proj.slug}</p>
                    })}
                </div>

            </div>



        </div>
    )

}

export default LinkGenerator