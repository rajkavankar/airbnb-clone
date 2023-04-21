import Navbar from "@/components/navbar/Navbar"
import "./globals.css"
import { Nunito } from "next/font/google"
import ClientOnly from "@/components/ClientOnly"

export const metadata = {
  title: "Airbnb",
  description: "full stack booking app",
}

const nunito = Nunito({
  weight: ["400"],
  subsets: ["latin"],
})

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={nunito.className}>
        <ClientOnly>
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
