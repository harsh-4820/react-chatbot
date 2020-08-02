class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }

    greet() {
      const greetingMessage = this.createChatBotMessage("Hello, Friend!!");
      this.updateChatBotState(greetingMessage);
    }

    handleJavascriptList = () => {
      const msg = this.createChatBotMessage("Here are the resources on JS : ",
      {widget : "javascriptLinks"}
      )
      this.updateChatBotState(msg);
    }

    updateChatBotState(message) {
      this.setState(prevState => ({
        ...prevState, messages : [...prevState.messages,message]
      }));
    }
  }
  
  export default ActionProvider;