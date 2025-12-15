import { createRoot } from 'react-dom/client'
import './main.css'
import App from './AppComponent/App.jsx'
import { BrowserRouter } from 'react-router'
import UsersContextComponent from './UsersContextComment/UsersContextComment.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <UsersContextComponent>
            <App />
        </UsersContextComponent>
    </BrowserRouter>
)







// git add . 
// git commit -m "contextApi-357"
// git push