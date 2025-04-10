import './Background.scss'

export default function Background({src}){
    return(
        <div className='backgroud'>
            <img src={src} alt="" />
        </div>
    )
}