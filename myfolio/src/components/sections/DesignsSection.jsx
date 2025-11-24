import Tag from '../Tag'
import { designShowcase } from '../../data/portfolio'
import styled from 'styled-components'
import { useEffect, useState } from 'react'

function DesignsSection() {
  const {
    tag,
    headline,
    description,
    cards,
  } = designShowcase

  const cardItems = Array.isArray(cards) ? cards : []
  const [isInitialHover, setIsInitialHover] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsInitialHover(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="designs" className="mb-24">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          {tag ? <Tag>{tag}</Tag> : null}
          <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">{headline}</h2>
          <p className="mt-3 max-w-2xl text-base text-slate-300">{description}</p>
        </div>
      </div>
      <div className="mt-8 w-full">
        <StyledWrapper>
          <div className={`cards${isInitialHover ? ' cards--initial' : ''}`}>
            {cardItems.map((item) => (
              <div className="card" key={item.title}>
                <span className="card__title">{item.title}</span>
                <p className="card__content">{item.content}</p>
                {item.href ? (
                  <a
                    className="card__button"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.buttonLabel || 'Open'}
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        </StyledWrapper>
      </div>
    </section>
  )
}

export default DesignsSection

const StyledWrapper = styled.div`
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 24px;
    width: 100%;
  }

  .cards--initial .card {
    animation: cardInitialHover 1.1s ease;
  }

  .card {
    width: min(320px, 100%);
    padding: 24px;
    background: #fff;
    border: 6px solid #000;
    box-shadow: 12px 12px 0 #000;
    transition: transform 0.3s, box-shadow 0.3s;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .card:hover {
    transform: translate(-5px, -5px);
    box-shadow: 17px 17px 0 #000;
  }

  .card__title {
    font-size: 32px;
    font-weight: 900;
    color: #000;
    text-transform: uppercase;
    margin-bottom: 15px;
    display: block;
    position: relative;
    overflow: hidden;
  }

  .card__title::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 90%;
    height: 3px;
    background-color: #000;
    transform: translateX(-100%);
    transition: transform 0.3s;
  }

  .card:hover .card__title::after {
    transform: translateX(0);
  }

  .card__content {
    font-size: 16px;
    line-height: 1.4;
    color: #000;
    margin-bottom: 20px;
    flex-grow: 1;
  }

  .card__button {
    border: 3px solid #000;
    background: #000;
    color: #fff;
    padding: 10px;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s;
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    margin-top: auto;
  }

  .card__button::before {
    content: "Click Me!";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 105%;
    background-color: #5ad641;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(100%);
    transition: transform 0.3s;
  }

  .card__button:hover::before {
    transform: translateY(0);
  }

  .card__button:active {
    transform: scale(0.95);
  }

  @keyframes cardInitialHover {
    0% {
      transform: translate(0, 0);
      box-shadow: 12px 12px 0 #000;
    }
    45% {
      transform: translate(-5px, -5px);
      box-shadow: 17px 17px 0 #000;
    }
    100% {
      transform: translate(0, 0);
      box-shadow: 12px 12px 0 #000;
    }
  }
`
