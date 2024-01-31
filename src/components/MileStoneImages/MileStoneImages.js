// Style, images and component imports
import educationImage from '../../assets/images/education-icon.png';
import './MileStoneImages.scss';

function MileStoneImages() {
    return(
        <div className='milestoneimg'>
            <img
                className='milestoneimg__icon' 
                src={educationImage}
                alt=""
            />
            <div className='milestoneimg__line'></div>
            <img
                className='milestoneimg__icon' 
                src={educationImage}
                alt=""
            />
        </div>
    )
};

export default MileStoneImages;