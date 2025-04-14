import { useState } from 'react';
import React from 'react';
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WelcomeSection from '../components/WelcomeSection'
function Shop() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
    }
    return (
        <>
            <Header />
            <WelcomeSection />
            <Navbar />
            <div className="form">
                <form onSubmit={handleSubmit} className='justify-items-center'>
                    <label className='block text-[24px]  '>訂購人姓名<br></br>
                        <input
                            type="text"
                            name="username"
                            className='border border-black hover:border-[#ce342c] hover:border-2 duration-300'
                            value={inputs.username || ""}
                            onChange={handleChange}
                        />
                    </label>
                    <label className=' block text-[24px]'>連絡電話<br></br>
                        <input
                            type="number"
                            name="phone"
                            className='border border-black hover:border-[#ce342c] hover:border-2 duration-300'
                            value={inputs.age || ""}
                            onChange={handleChange}
                        />
                    </label>
                    <label className=' block text-[24px]'>信箱<br></br>
                        <input
                            type="text"
                            name="email"
                            className='border border-black hover:border-[#ce342c] hover:border-2 duration-300'
                            value={inputs.age || ""}
                            onChange={handleChange}
                        />
                    </label>
                    <label className=' block text-[24px]'>送件地址<br></br>
                        <input
                            type="text"
                            name="address"
                            className='border border-black hover:border-[#ce342c] hover:border-2 duration-300'
                            value={inputs.age || ""}
                            onChange={handleChange}
                        />
                    </label>
                    <p className="text-[20px] pt-4 pb-4 text-[#ce342c]">按下送出後，我們即會有專人和您聯繫！</p>
                    <button type="submit" className='shadow-md pl-2 pr-2 pt-1 pb-1 block text-[24px] bg-[#ce342c] text-[#FFFBF3] hover:brightness-75 duration-300'>確認送出</button>
                    {/* <input type="submit" className=' block text-[24px]' /> */}
                </form>
            </div>
            <Footer />
        </>
    )
}

export default Shop;