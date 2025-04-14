import { useState } from 'react';
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
        <div className="form">
            <form onSubmit={handleSubmit}  className='justify-items-center'>
                <label className=' block'>訂購人姓名<br></br>
                    <input
                        type="text"
                        name="username"
                        value={inputs.username || ""}
                        onChange={handleChange}
                    />
                </label>
                <label className=' block'>連絡電話<br></br>
                    <input
                        type="number"
                        name="phone"
                        value={inputs.age || ""}
                        onChange={handleChange}
                    />
                </label>
                <label className=' block'>信箱<br></br>
                    <input
                        type="text"
                        name="email"
                        value={inputs.age || ""}
                        onChange={handleChange}
                    />
                </label>
                <label className=' block'>送件地址<br></br>
                    <input
                        type="text"
                        name="address"
                        value={inputs.age || ""}
                        onChange={handleChange}
                    />
                </label>
                <h6>按下送出後，我們即會有專人和您聯繫！</h6>
                <input type="submit"  className=' block'/>
            </form>
        </div>
    )
}

export default Shop