

import Header from "@/components/Header";
import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Providers } from "@/redux/provider";

 

 
 export const metadata = {
    title:"demo-app",
    description:"practice app for next",
 }

 const Rootlayout = ({children}) =>{
    return(
    <html lang="en">
        <body>
        <Providers>
            <Header/>
        <main >{children}
    
           </main></Providers>
            <script src="https://kit.fontawesome.com/bca23afe5b.js" crossOrigin="anonymous"></script>      
        </body>
    </html>
    )
 }

 export default Rootlayout;