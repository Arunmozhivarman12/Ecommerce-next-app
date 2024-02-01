

import Header from "@/components/Header";
import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Providers } from "@/redux/provider";
import Script from "next/script";




export const metadata = {
    title: "demo-app",
    description: "practice app for next",
}

const Rootlayout = ({ children }) => {
    return (
        <html lang="en">
            <head>
            </head>
            <body>
                <Providers>
                    <Header />
                    <main >{children}

                    </main></Providers>
                <script  src="https://kit.fontawesome.com/bca23afe5b.js" crossOrigin="anonymous" async></script>

            </body>
        </html>
    )
}

export default Rootlayout;