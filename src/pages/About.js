import React, { useEffect } from 'react'
import aboutBanner from '../media/shortBanner.jpg'
import '../styles/about.css'
import { Link } from 'react-router-dom'

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="about-container">
      <div
        className="about-banner"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.7)), url(${aboutBanner})`,
        }}
      >
        <h2>About Us</h2>
      </div>
      <div className="about-content-container">
        <div className="about-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            sapiente, quam veritatis unde quo exercitationem, reprehenderit id
            doloribus dicta recusandae deleniti molestias a voluptate nisi iusto
            voluptatibus minima eos fuga quibusdam consectetur eius impedit odit
            alias.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            dolore illo, molestias eveniet quam culpa odio incidunt quaerat
            repellendus libero soluta, suscipit nisi. Eius soluta incidunt sunt
            doloremque sint cupiditate cumque animi ipsum aliquam voluptatem
            odio molestias, quos doloribus culpa!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
            eveniet cum quam perspiciatis labore rem inventore voluptatum quas
            odit cupiditate dolore asperiores, sapiente culpa tenetur quo porro
            aspernatur animi delectus eius, debitis fuga accusantium? Harum
            possimus repudiandae consectetur et blanditiis dolor corrupti vitae
            dignissimos quos maiores quisquam impedit, earum explicabo quis
            autem excepturi porro. Odio distinctio quis ab vero tempore nisi
            reprehenderit beatae, at deleniti voluptatem ipsum quaerat a
            deserunt rem qui voluptas tenetur ut voluptates in nesciunt saepe?
            Delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laboriosam impedit dolor sint minus vel dicta, facere dolorem
            cupiditate reiciendis aliquid voluptate ullam, tenetur repellat aut
            dolorum minima deleniti magnam incidunt est, ex magni accusamus.
            Fugiat aperiam laudantium officia, laboriosam iste nostrum neque
            consequatur dolorem veritatis placeat tempora, nulla deserunt rerum!
            Quas sint hic, voluptate unde dolorem ut corrupti sunt adipisci
            tempore vero quidem earum quisquam excepturi ipsa vitae neque illum
            eaque, velit incidunt nemo eius facere autem? Voluptatem fugiat
            quos, et velit aut, nisi hic optio vel assumenda at harum
            necessitatibus non voluptas quidem aliquid, ad facere vitae. Quos
            error qui itaque saepe quibusdam beatae sit nihil quas! Corrupti
            eveniet delectus saepe distinctio deserunt nostrum, placeat minima
            corporis molestiae, magni soluta aliquid velit. Eius velit numquam
            nisi optio! Illum aliquid corrupti alias. Vel, veniam? Sunt quas
            voluptatibus accusamus a distinctio debitis eligendi id sed?
            Nostrum, dolorem temporibus nam distinctio saepe libero quas
            deserunt omnis fuga nisi qui quibusdam voluptates facere consectetur
            tempore at non officia. Totam modi alias dignissimos provident sunt
            obcaecati eos quo cum quia distinctio. Repellendus alias
            perspiciatis ipsa explicabo eligendi velit! Quae, perferendis quia
            alias ducimus sit non dolores, quos velit nulla esse quam cumque
            ipsam illo!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            aliquid neque provident deserunt atque vitae magnam veritatis? Quo
            id excepturi labore repellendus quisquam, iste impedit?
            Perspiciatis, voluptas hic! Corrupti fugiat molestias, sapiente
            reprehenderit eligendi deserunt veritatis molestiae omnis alias a
            doloremque sit laborum nesciunt nostrum. Error fugit harum quam
            deleniti, officia similique esse porro hic! Non voluptatibus id,
            ipsum voluptate distinctio iure numquam, delectus esse labore vel
            velit, neque fugiat!
          </p>
          <div className="order-btn-container">
            <Link to="/menu" className="order-btn">
              Order Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
