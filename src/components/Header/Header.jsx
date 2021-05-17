import React from 'react'
import "./Header.css"

const Header = () => {
    return(
        <div className="Header">
            <div className="Header-template">
                <div className="Header-main">
                    D'store
                </div>
                <div className="Header-items">
                    <div className="Header-items-option">
                        <div className="Header-items-option-userInfo">
                            userInfo
                        </div>
                        <div className="Header-items-option-a">
                            aaaaaaa
                        </div>
                        <div className="Header-items-option-b">
                            bbbbbbb
                        </div>
                    </div>
                    <div className="Header-items-log">
                        logs
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;