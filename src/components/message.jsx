const message = (props) =>{
    return(
        <div className={"message " + props.view}>
            <h1>Send me a message!</h1>
            <input type="text" name="name" id="name" placeholder="Name" />
            <input type="email" name="email" id="email" placeholder="Mail" />
            <input type="text" name="message" className="text" placeholder="Type your message here" />
        </div>
    )
}

export default message;