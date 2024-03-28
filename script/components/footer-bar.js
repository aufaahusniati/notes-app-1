class footerBar extends HTMLElement {
    _shadowRoot = null;
    _style = null;

    constructor() {
        super();

        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._style = document.createElement('style');
    }

    _updateStyle() {
        this._style.textContent = `
            :host {
                display: block;
            }

            footer {
                margin-top: 30px;
                height: 50px;
                bottom: 0;
                padding: 15px;
                width: 100%;
                color: rgb(100 116 139);
                background-color: #0f172a;
                text-align: center;
                font-weight: 500;
                font-size: 0.9rem;
            }
            
            footer p .instagram {
                font-weight: 700;
                color: salmon;
                text-decoration: none;
            }
            
            footer p .html {
                font-weight: 500;
                color: orangered;
            }
            
            footer p .css {
                font-weight: 500;
                color: rgb(14 165 233);
            }
            
            footer p .js {
                font-weight: 500;
                color: #eab308;
            }
            
            @media screen and (max-width: 768px) {
                footer {
                    font-size: 0.7em;
                }
            }
            
            @media screen and (max-width: 576px) {
                footer {
                    font-size: 0.6em;
                }
            }
        `;
    }

    _emptyContent() {
        this._shadowRoot.innerHTML = '';
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this._emptyContent();
        this._updateStyle();

        this._shadowRoot.appendChild(this._style);
        this._shadowRoot.innerHTML += `
        <footer>
            <p> Made with ❤️ by
                <a href="https://www.instagram.com/aufaahsnt" target="_blank" class="instagram">Aufaa Husniati</a> using <span class="html">HTML5</span>, <span class="css">CSS3</span>, and <span class="js">javascript</span>
            </p>
        </footer>
    `;
    }
}

customElements.define('footer-bar', footerBar);