import "./hero.css"

const Hero = () => {
    return (
        <div className='site-hero'>
            <form className='site-hero-form'>

                  <input className='form-input' type="search" placeholder='Search for a country…' />


                <select className='form-select'>
                    <option className='form-select-option' selected value="1">Filter by Region</option>
                    <option className='form-select-option' value="2">Africa</option>
                    <option className='form-select-option' value="3">America</option>
                    <option className='form-select-option' value="4">Asia</option>
                    <option className='form-select-option' value="5">Europe</option>
                    <option className='form-select-option' value="6">Oceania</option>
                </select>
            </form>
        </div>
    )
}

export default Hero;