import { createRoot } from 'react-dom/client'
import './main.css'
import App from './AppComponent/App.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)







// git add . 
// git commit -m "nestedRouting-351"
// git push