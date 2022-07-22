import burger from '../../data/assets/burger.jpeg'
import coke from '../../data/assets/coke.jpeg'
import fries from '../../data/assets/fries.jpeg' 
import pepsi from '../../data/assets/pepsi.jpeg'

export default function FoodMenu(){
    const data = [
        {
            "name": "Hamburger",
            "price": "200",
            "image": burger
        },
        {
            "name": "Fries",
            "price": "100",
            "image": fries
        },
        {
            "name": "Coke",
            "price": "50",
            "image": coke
        },
        {
            "name": "Pepsi",
            "price": "50",
            "image": pepsi
        }
    ]
    return(
        <div>
            <div>
                {data.map((item)=>{
                    return(
                        <div>{item.name}
                        <img src= {item.image} width='250px' />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}