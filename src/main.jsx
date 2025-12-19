import { createRoot } from 'react-dom/client'
import './main.css'
import App from './AppComponent/App.jsx'
import UsersContextComponent from './UsersContextComment/UsersContextComment.jsx'

createRoot(document.getElementById('root')).render(
    <UsersContextComponent>
        <App />
    </UsersContextComponent>
)







// git add . 
// git commit -m "RenderProps-360"
// git push