import './card.css';


const Card = () => {

    const redirectToWhatsApp = () => {
        window.location.href = "https://wa.me/+2348035317931"; 
      };

    const redirectToWhatsAppGroup = () => {
        window.location.href = "https://chat.whatsapp.com/Hxuiw2licx615PbaBqKdKY"; 
      };

    return (
     <div className='card'>

        <div className='first-card'>
            <hr />
            <p>click the <span className='different'>red button below to Submit your payment proof to me</span> directly. </p>
            <button className='pay-btn' onClick={redirectToWhatsApp}>Pay Now </button>
        </div>
        
        <div className='second-card'>
        <hr />
            <p>click the <span className='different'>Yellow button to join our general WhatsApp group</span> if you want more Information.. </p>
            <button className='what-btn'  onClick={redirectToWhatsAppGroup}>Whatsapp </button>
        </div>
        
        <div className='third-card'>
            <hr />
            <p>click the <span className='differentt'>Green button </span>connect with <span className='differentt'>verified Azinonet contributors</span> in your state </p>
            <button className='what-btn' onClick={redirectToWhatsApp}>contributors </button> 
            <hr />
        </div>
     </div>
    )
}


export default Card;
