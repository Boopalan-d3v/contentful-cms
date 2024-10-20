import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className="hero">
        <div className="hero-center">
            <div className="hero-title">
                <h1>Contentful CMS</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum tempora fugit neque minus. Unde harum eligendi ea quis ab nisi amet, quae, laboriosam nemo error modi architecto repellat impedit illo.</p>
            </div>
            <div className="img-container">
                <img src={heroImg} alt='Women and the browser' className='img'></img>
            </div>
        </div>
    </section>
  )
}

export default Hero