import FooterButton from "./FooterButton"
import './Footer.css'

const Footer = () => {
    return (
        <footer class="text-center padding-bottom footer">
            <hr />
            <p><i>Check out my Github or Linkedin profiles down below</i></p>
            <div className="button-container">
                <FooterButton link="https://github.com/gaugust2" text="Github" />
                <FooterButton link="https://www.linkedin.com/in/gerald-augustinepillai-8b3832260" text="Linkedin" />
            </div>

        </footer>
    )
}

export default Footer