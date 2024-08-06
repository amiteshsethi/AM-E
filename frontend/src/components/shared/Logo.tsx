import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div 
    style={{
        display:"flex" , marginRight :"auto",
        alignItems:"center" , gap:"8px"
    }}
    >
        <Link to={"/"}>
            <img 
                src='vite.svg'
                alt='am-e gpt'
                width={"30px"}
                height={"30px"}
                className='image-inverted'
            />
        </Link>

    </div>
  )
}

export default Logo