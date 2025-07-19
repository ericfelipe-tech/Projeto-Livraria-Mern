import { GiHamburgerMenu } from "react-icons/gi";
function Header({ toggleSidebar }) {
    return (

            <div class="Up-bar">

                <input type="text" />
                <div class="perfil">
                    <div class="Text">
                        <img class="perfilImage" src="./imagens/morgan.jpg" alt="" />
                    </div>
                    <div class="perfilText">
                        <h3>Morgan Ocklay</h3>
                    </div>
                </div>

                <div class="Text">
                    <p className="header-btn" onClick={toggleSidebar}>
                    <GiHamburgerMenu />
                    </p>
                    <div class="image">
                        <img class="perfilImage" src="./imagens/morgan.jpg" alt="" />
                    </div>
                    <div class="perfilText">
                        <h3>Hi there</h3>
                        <h2>Morgan Ocklay @Ocklay</h2>
                    </div>
                </div>
                <div class="button">
                    <button>New</button>
                    <button>Upload</button>
                    <button>Share</button>
                </div>
            </div>
    
    );
}
export default Header;