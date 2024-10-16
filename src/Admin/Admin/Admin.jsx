import React, { useState } from 'react'
import './Admin.scss';

const Admin = () => {
    const [data, setData] = useState([]);

    const PatentSubmitHandler = (event) => {
        event.preventDefault();
        setData((saurabh) => {
            return [...saurabh, {
                fullName: event.target[0].value,
                address: event.target[1].value,
                category: event.target[2].value,
                disease: event.target[3].value,
                bedNo: event.target[4].value
            }]
        })
    }

    return (
        <> <br />
            <div className="Admin_hero_section">
                <img src="https://www.mankindpharma.com/assets/img/banner1.jpg" alt="Banner_home_admin" />
            </div>
            <div className="add_section">
                <div className="regestration_page">
                    <h3>Add Patents:list</h3><br /><br /><br />
                    <form method='POST' onSubmit={(e) => PatentSubmitHandler(e)}>
                        <label htmlFor="name">Full Name-
                            <input type="text" name="name" id="name" />
                        </label>
                        <label htmlFor="address">Address-
                            <input type="text" name="address" id="address" />
                        </label>
                        <label htmlFor="category">Category-
                            <input type="text" name="category" id="category" />
                        </label>
                        <label htmlFor="Disease">Disease-
                            <input type="text" name="disease" id="Disease" />
                        </label>
                        <label htmlFor="bedNo">Bed No-
                            <input type="text" name="bedNo" id="bedNo" />
                        </label>
                        <button type='submit'>SAVE</button>
                    </form>
                </div>
                <div className="list_section_pas">
                    <table>
                        <caption>Patents list</caption>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Category</th>
                            <th>Disease</th>
                            <th>Bed No.</th>
                        </tr>
                        {
                            data.map((patent, index, array) => {
                                return (
                                    <tr key={index}>
                                        <td>{patent?.fullName}</td>
                                        <td>{patent?.address}</td>
                                        <td>{patent?.category}</td>
                                        <td>{patent?.disease}</td>
                                        <td>{patent?.bedNo}</td>
                                    </tr>
                                )
                            })
                        }
                    </table>
                </div>
            </div>
        </>
    )
}

export default Admin;