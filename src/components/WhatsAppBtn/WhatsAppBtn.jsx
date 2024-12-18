import React from "react";
import "./WhatsAppBtn.scss";

const WhatsAppButton = () => {
    const handleClick = () => {
        window.open("https://wa.me/542983610977", "_blank");
    };

    return (
        <div className="whatsapp-button" onClick={handleClick}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="whatsapp-icon"
            />
        </div>
    );
};

export default WhatsAppButton;
