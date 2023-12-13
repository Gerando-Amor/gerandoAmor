import { useState , } from "react";
import bmenos from "../../img/FAQbuttonMenos.png";
import bmais from "../../img/FAQbuttonMais.png";

export default function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDetails = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <div>
            <details>
                <summary style={isOpen ? { color: "#FC4911" }: { color: ""}} onClick={toggleDetails}>
                    {question}
                    <img src={isOpen ? bmenos : bmais} alt="" />
                </summary>
                <p>{answer}</p>
            </details>
        </div>
    );
};