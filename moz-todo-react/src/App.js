import React from 'react';
import './App.css';

function App(props) {
  const subject= props.subject;
  return (
    <div className="App 42 API">
      <header className="App-header">
        <p>
          Keep on coding in 42 with {subject}!<br></br>
        </p>
        <a
          className="App-link"
          href="https://www.42madrid.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          42 Madrid
        </a>
      </header>
      <h1>Development Journal</h1>
      <form>
        <h4 className="label-wrapper">
          <label htmlFor="learning_experience" className="label__ls">
          At first I had no knoledge of what is backend or frontend. Never programmed in Javascript / NodeJS / HTML / CSS.
          Indeed I didn't know what a Frameworks was, how to make a web application or ever use an API.<br></br><br></br>
          <h5>
          At this point I decided to spend the time of this test as an entertained learning experience and I scheduled my time like this:<br></br><br></br>
          First 2 hours, documentation and getting in touch with concepts:<br></br><br></br>
          1. Start reading about frameworks and ReactJS.<br></br><br></br>
          Third Hour, practical approaching to simple concepts:<br></br><br></br>
          2.Need to install node.js to use the create-react-app.dev<br></br><br></br>
          -Cant't do it the suggested way so jumped to brew installer.<br></br>
          -brew install worked. Check versions installed (node -v, npm -v, npx -v)<br></br>
          -npx create-react-app moz-todo-react --use-npm<br></br>
          -and install create-react-app<br></br>
          -npm start<br></br>
          -basic concepts about html (I can change the title!)<br></br>
          -&lt;br&gt;&lt;/br&gt; Adds new lines!<br></br>
          <br></br>
          New concepts learned:<br></br><br></br>
          DOM<br></br>
          React<br></br>
          npm & npx<br></br>
          <br></br>
          Links and Documentation:<br></br>
          <br></br>
          https://hackr.io/blog/best-javascript-frameworks<br></br>
          https://developer.mozilla.org/es/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started<br></br>
          https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner<br></br>
          https://medium.com/@hayasnc/how-to-install-nodejs-and-npm-on-mac-using-homebrew-b33780287d8f<br></br>
          https://nodejs.org/en/knowledge/getting-started/npm/what-is-npm/<br></br>
          https://es.reactjs.org/docs/create-a-new-react-app.html<br></br>
          https://developer.mozilla.org/es/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started<br></br>
          https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning<br></br>
          https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Deployment<br></br>
          https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management<br></br>
          https://reactjs.org/docs/getting-started.html<br></br>
          https://reactjs.org/tutorial/tutorial.html<br></br>
          </h5>
          </label>
        </h4>
      </form>
    </div>
  );
}

export default App;
