import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "normalize.css";
import "./css/reset.css";
import "./css/responsive.css";

createRoot(document.getElementById('root')).render(<App />)
