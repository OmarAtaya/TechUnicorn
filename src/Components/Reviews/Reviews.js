import React, {useState} from 'react';
import './Reviews.css';
import Right from '../../assets/Right.png';
import Left from '../../assets/Left.png';
import Rectangle from '../../assets/Rectangle.png';

function Reviews() {
    const reviews = [{
        title: "Good Seller!",
        description: `I am very happy with the services provided, it is very helpful, starting
                      from the insight that the company gave from the start that I did not
                      understand what it was so I got knowledge and made my website
                      look better`,
        image: Rectangle,
        username: "Anna Saraspova1",
        userTitle: "Your Beloved Buyer"
      },
      {
        title: "Good Seller!",
        description: `I am very happy with the services provided, it is very helpful, starting
                      from the insight that the company gave from the start that I did not
                      understand what it was so I got knowledge and made my website
                      look better`,
        image: Rectangle,
        username: "Anna Saraspova2",
        userTitle: "Your Beloved Buyer"
      },
      {
        title: "Good Seller!",
        description: `I am very happy with the services provided, it is very helpful, starting
                      from the insight that the company gave from the start that I did not
                      understand what it was so I got knowledge and made my website
                      look better`,
        image: Rectangle,
        username: "Anna Saraspova3",
        userTitle: "Your Beloved Buyer"
      },
      {
        title: "Good Seller!",
        description: `I am very happy with the services provided, it is very helpful, starting
                      from the insight that the company gave from the start that I did not
                      understand what it was so I got knowledge and made my website
                      look better`,
        image: Rectangle,
        username: "Anna Saraspova4",
        userTitle: "Your Beloved Buyer"
      }]
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
        console.log(currentIndex)
    };
    
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
    };
    return (
        <div className="reviews">
            <button className="carousel-button carousel-button-prev" onClick={prevSlide}>
            <img src={Left} alt='' width={"56px"} height={"56px"}/>
            </button>
            <div className="carousel-slide">
            {reviews.map((item, index) => (
                <div
                key={index}
                className={`carousel-slide-item ${index === currentIndex ? 'active' : ''}`}
                >
                <img src={item.image} alt='' className='review__image'/>
                <div className='slide__content'>
                    <h3 className='slide__title'>
                    {item.title}
                    </h3>
                    <p className='slide__description'>
                    {item.description}
                    </p>
                    <div className='slide__user'>
                    <h4 className='user__name'>{item.username}</h4>
                    <h5 className='user__title'>{item.userTitle}</h5>
                    </div>
                </div>
                </div>
            ))}
            </div>
            <button className="carousel-button carousel-button-next" onClick={nextSlide}>
            <img src={Right} alt='' width={"56px"} height={"56px"}/>
            </button>
        </div>
    )
}

export default Reviews