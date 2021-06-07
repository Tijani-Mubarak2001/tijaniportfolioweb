import React from 'react'

function MenuItems({menuItem}){
    return(
        <div className="portfolis">
            {
                menuItem.map((item)=>{
                    return <div className="portfolio" key={item.id}>
                        <div className="image-data">
                            <img src={item.image} alt=""/>
                            <ul className="hover-items">
                                <li>
                                    <a href={item.link1} target="_blank" rel="noreferrer">{item.icon1}</a>
                                </li>

                            </ul>

                        </div>
                        <a href={item.link1} target="_blank" rel="noreferrer">
                            <h5>
                                {item.title}
                            </h5>
                        </a>
                        <p>{item.placeholder}</p>

                    </div>
                })
            }

        </div>
    )
}
export default MenuItems;