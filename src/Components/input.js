import React from 'react';

export default function Input({ handleData, handleFilter }) {
    return <section className="input">
        <form className="submit">
            <input type="text" className="input-data" />
            <button className="btn btn-submit" onClick={handleData}>
                <i className="fa fa-check"></i>
            </button>
        </form>
        <form className="filter">
            <select name="filter" className="filter-select" onChange={(e) => {
                    handleFilter(e.target.value)
                }}>
                <option value="all">All</option>
                <option value="compleated">Compleated</option>
                <option value="incompleat">InCompleate</option>
            </select>
        </form>
    </section>
}