import './skills.css'
import { ReactComponent as YourSvg } from '../../skill_icons/css3.svg';


export default function Skils(){

    function importAll(r) {
        let images = {};
         r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
        return images
       }
       const images = importAll(require.context('../../skill_icons', false, /\.(png|jpe?g|svg)$/))
       console.log(images)
    return(
        <div>
            <YourSvg className='skill-icon' stroke='black' fill='white'/>
            {Object.entries(images).map(image => {
                return <img src={image[1]} alt={image[0]} className="skill-icon"></img>
            })}
        </div>
    )
}