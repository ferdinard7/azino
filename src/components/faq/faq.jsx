import data from '../../../data';
import './faq.css';


const Faq = () => {
    return (
        <div className='faq-container'>
            <h1 id='faq'>FAQ</h1>

            {data.map((oneData, index) => (
        <div key={index} className="faq-div">
        <h2>
        <span className="emoji">✔</span> {oneData.question}
        </h2>
        <em>
        <span className="ans">Ans: </span> {oneData.ans}
        </em>
        </div>
    ))}
            <div className='faq-div'>
                <h2><span className='emoji'> ✔ </span> After my registration of N15,000 what next?</h2>
                <em> <span className='ans'> Ans: </span>Registration is FREE, you only make a Contribution of N15,000 to start your AZINO BOARD.</em>
            </div>
        </div>
    )
}

export default Faq;