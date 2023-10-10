import { useEffect, useState } from 'react';
import styles from './styles.module.css'

function Card({title = 'tidak ada judul', subtitle = 'tidak ada desc', link = 'https://google.com'}) {

  const [clickCount, setClickCount] = useState(0)

  useEffect(() => {
   
    console.log('helloooooo this clicked :', clickCount, 'times')

  }, [clickCount]) 

  //array diatas define when to do
  // array kosong, fungsi di kerjakan setelah komponen tersebut di render 

  
  const handleClick = () => {
    setClickCount((coco) => coco +1)
  }

  return(


  <div onClick={handleClick}>
  <h2>
    {title} <span>-&gt;</span>
  </h2>
  <p className={styles.asw}> {subtitle}  </p>
  <p>Clicked : {clickCount}</p>
  </div>

    //   <a
  //   href={link}
  //   className={styles.carde}
  //   target="_blank"
  //   rel="noopener noreferrer"
  // >
  //   <h2>
  //     {title} <span>-&gt;</span>
  //   </h2>
  //   <p className={styles.asw}> {subtitle}  </p>
  // </a>

  )
}

export default Card;