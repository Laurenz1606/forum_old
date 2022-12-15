export default function useCopy() {
  return (content: string) => {
    //create a textarea for copy workaround
    const textArea = document.createElement("textarea");

    //set value of textarea
    textArea.value = content;

    //add textarea to body
    document.body.appendChild(textArea);

    //focus and select textarea
    textArea.focus();
    textArea.select();

    //try and copy selected text
    try {
      //copy content
      document.execCommand("copy");
    } catch (err) {
      //log error
      console.error("Unable to copy to clipboard", err);
    }
    //remove textarea
    document.body.removeChild(textArea);
  };
}
