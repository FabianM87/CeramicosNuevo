import icon from '../../img/cartceramico.png'

function IconWidget(){
    return(
        <>
        <div className='flex'>
        <img src={icon} alt="CartIcon" className='iconCart' />
        <p className='mx-1'>0</p>
        </div>
        </>
    )
}
export default IconWidget