const template = document.createElement("template");

template.innerHTML = `
<style>



  .choose-button1 {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    z-index: 70;
    padding: 15px 30px;
    border: 2px solid var(--button-color1);
    margin: 4rem auto;

    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 2px;
    color: #fff;
    -webkit-box-reflect: below 0px linear-gradient(transparent, #0002);
    transition: 0.5s;
    text-decoration: none;

    transform: rotate(35deg) skew(-24deg)
  }

  .choose-button1:hover {
    color: black;
    box-shadow: 0 0 10px var(--button-color1), 0 0 20px var(--button-color1), 0 0 40px var(--button-color1),
      0 0 80px var(--button-color1), 0 0 160px var(--button-color1);
    transition-delay: 1.3s;
  }
  .choose-button1 span {
    position: relative;
    z-index: 100;
  }
  // a:nth-child(2) {
  //   filter: hue-rotate(240deg);
  // }
  .choose-button1:before {
    content: "";
    position: absolute;
    left: -20px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 2px;
    background: var(--button-color1);
    box-shadow: 5px -8px 0 var(--button-color1), 5px 8px 0 var(--button-color1);
    transition: width 0.5s, left 0.5s, height 0.5s, box-shadow 0.5s;
    transition-delay: 0.3s, 0.3s, 0s, 0s;
  }
  .choose-button1:hover::before {
    width: 60%;
    height: 100%;
    left: -2px;
    box-shadow: 5px 0 0 var(--button-color1), 5px 0 0 var(--button-color1);
    transition-delay: 0s, 0.3s, 1s, 0.5s;
  }

  .choose-button1:after {
    content: "";
    position: absolute;
    right: -20px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 2px;
    background: var(--button-color1);
    box-shadow: -5px -8px 0 var(--button-color1), -5px 8px 0 var(--button-color1);
    transition: width 0.5s, left 0.5s, height 0.5s, box-shadow 0.5s;
    transition-delay: 0.3s, 0.3s, 0s, 0s;
  }
  .choose-button1:hover::after {
    width: 60%;
    height: 100%;
    right: -2px;
    box-shadow: -5px 0 0 var(--button-color1), -5px 0 0 var(--button-color1);
    transition-delay: 0s, 0.3s, 1s, 0.5s;
  }






   .choose-button {
    position: absolute;
    left: 1rem;
    bottom: 1rem;
    z-index: 70;

    padding: 15px 30px;
    border: 2px solid var(--button-color);
    margin: 4rem auto;

    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 2px;
    color: #fff;
    -webkit-box-reflect: below 0px linear-gradient(transparent, #0002);
    transition: 0.5s;
    text-decoration: none;

    transform: rotate(-35deg) skew(24deg)
  }

  .choose-button:hover {
    color: black;
    box-shadow: 0 0 10px var(--button-color), 0 0 20px var(--button-color), 0 0 40px var(--button-color),
      0 0 80px var(--button-color), 0 0 160px var(--button-color);
    transition-delay: 1.3s;
  }
  .choose-button span {
    position: relative;
    z-index: 100;
  }
  // a:nth-child(2) {
  //   filter: hue-rotate(240deg);
  // }
  .choose-button:before {
    content: "";
    position: absolute;
    left: -20px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 2px;
    background: var(--button-color);
    box-shadow: 5px -8px 0 var(--button-color), 5px 8px 0 var(--button-color);
    transition: width 0.5s, left 0.5s, height 0.5s, box-shadow 0.5s;
    transition-delay: 0.3s, 0.3s, 0s, 0s;
  }
  .choose-button:hover::before {
    width: 60%;
    height: 100%;
    left: -2px;
    box-shadow: 5px 0 0 var(--button-color), 5px 0 0 var(--button-color);
    transition-delay: 0s, 0.3s, 1s, 0.5s;
  }

  .choose-button:after {
    content: "";
    position: absolute;
    right: -20px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 2px;
    background: var(--button-color);
    box-shadow: -5px -8px 0 var(--button-color), -5px 8px 0 var(--button-color);
    transition: width 0.5s, left 0.5s, height 0.5s, box-shadow 0.5s;
    transition-delay: 0.3s, 0.3s, 0s, 0s;
  }
  .choose-button:hover::after {
    width: 60%;
    height: 100%;
    right: -2px;
    box-shadow: -5px 0 0 var(--button-color), -5px 0 0 var(--button-color);
    transition-delay: 0s, 0.3s, 1s, 0.5s;
  }
</style>

  <a href="#"><span><slot /></span></a>
`;

class UserCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    const attribute = this.getAttribute("name");
    this.shadowRoot.querySelector("a").classList.add(attribute);
  }

  toggleInfo() {
    console.log("clicked");
  }

  connectedCallback() {
    this.shadowRoot.addEventListener("click", () => this.toggleInfo());
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector("#toggle-info").removeEventListener();
  }
}

window.customElements.define("user-card", UserCard);
