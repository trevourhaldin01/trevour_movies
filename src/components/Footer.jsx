import React from "react"
import '../styles/general.css'
export default function Footer() {
    return (
        <footer id="sticky-footer" class="flex-shrink-0 py-4  text-white-50">
            <div class="container text-center">
                <small className="main-color">Made with &hearts;&hearts; Love &hearts;&hearts; by Trevour Haldin Walubi!</small><br></br>
                <i class="bi bi-envelope-fill main-color"></i>
                <small className="main-color"> trevour.waibzo@gmail.com</small><br></br>
                <i class="bi bi-whatsapp main-color"></i>
                <small className="main-color"> +256-780228565</small>
            </div>
        </footer>
    )
}