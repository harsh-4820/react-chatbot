class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
      if(lowerCaseMessage.includes("hi") || lowerCaseMessage.includes("hello"))
        this.actionProvider.greet();
      if(lowerCaseMessage.includes("javascript") || lowerCaseMessage.includes("js"))
        this.actionProvider.handleJavascriptList();
    }
  }
  
  export default MessageParser;