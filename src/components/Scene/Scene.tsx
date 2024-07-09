import './scene.modules.css'
import {
  useRef,
  useEffect,
  useState
} from 'preact/hooks'
import parse from 'html-react-parser'

import scenesData from '../../../public/data.json'

export const Scene = () => {
  const sceneRefs = useRef<(HTMLDivElement | null)[]>([])
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  const [isInit, setIsInit] = useState<boolean>(false)
  const [visibleSceneIndex, setVisibleSceneIndex] = useState<number>(0)
  const [ioIndex, setIoIndex] = useState<number>(0)

  const onScroll = () => {
    stepRefs.current.forEach((step, index) => {
      if (!step) return
      const boundingRect = step.getBoundingClientRect()
      if (boundingRect.top > window.innerHeight * 0.1 &&
          boundingRect.top < window.innerHeight * 0.8) {
        setVisibleSceneIndex(index)
      }
    })
  }

  useEffect(() => {
    const sceneElements = sceneRefs.current
    const stepElements = stepRefs.current

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIoIndex(parseInt(entry.target.getAttribute('data-index') || '0', 10))
        }
      })
    })

    stepElements.forEach((element, index) => {
      if (element) {
        io.observe(element)
        element.setAttribute('data-index', index.toString())
      }
      if (sceneElements[index]) {
        sceneElements[index]!.setAttribute('data-index', index.toString())
      }
    })

    setIsInit(true)

    console.log(ioIndex)

    return () => {
      io.disconnect()
    }
  }, [])

  useEffect(() => {
    window.addEventListener('load', () => setTimeout(() => scrollTo(0, 0), 100))

    if (isInit) {
      window.addEventListener('scroll', onScroll)
      return () => {
        window.removeEventListener('scroll', onScroll)
      }
    }
  }, [isInit])

  return (
    <div className="scroll-content">
      <div className="scenes">
        {scenesData.map(({ image, title }, index) => (
          <div 
            key={index} 
            className={`scene ${visibleSceneIndex === index ? 'visible' : ''}`} 
            ref={el => sceneRefs.current[index] = el}
          >
            <img src={`assets/${image}.png`} className="scene-image" alt={title} />
          </div>
        ))}
      </div>

      <div className="scroll-text width">
        {scenesData.map(({ text }, index) => (
          <div className="step" key={index} ref={el => stepRefs.current[index] = el}>
            <p>{parse(text)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Scene
