import React from "react"

export default function Card(props){
    let badgeText
    if (props.openSpots === 0){
        badgeText = "SOLD OUT"
    }else if(props.location === "Online"){
        badgeText = "ONLINE"
    }
    return(
        <div className="card">
        {badgeText && <div className="card--badge">{badgeText}</div>} 
            <img alt="Katie Zafers" src = {`../src/assets/${props.coverImg}`} className="card--img"/>
            <div className="card--stats">
                <img alt="Rating Star" src="../src/assets/star.jpeg" className="card--star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount})  •  </span>
                <span className="gray"> {props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
        
    )
}

/*
    line7: if condition to check if the slots are open or not
*/

/*
<img alt="Katie Zafers" src="../src/assets/Katie_Zaferes.jpeg" className="card--img"/>
            <div className="card--stats">
                <img alt="Rating Star" src="../src/assets/star.jpeg" className="card--star" />
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
            */